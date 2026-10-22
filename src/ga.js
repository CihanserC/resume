// A small self-adaptive genetic algorithm for the permutation flow shop
// scheduling problem: find the job order that minimises makespan.
// Each individual carries its own mutation rate, which evolves with it.

// Seeded PRNG (mulberry32) so a problem can be reproduced from its seed.
export const createRandom = (seed) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// times[machine][job], each between 1 and 9.
export const createProblem = (random, jobs, machines) =>
  Array.from({ length: machines }, () => Array.from({ length: jobs }, () => 1 + Math.floor(random() * 9)));

export const makespan = (order, times) => {
  const finish = new Array(times.length).fill(0);
  for (const job of order) {
    let previous = 0;
    for (let m = 0; m < times.length; m++) {
      previous = Math.max(finish[m], previous) + times[m][job];
      finish[m] = previous;
    }
  }
  return finish[times.length - 1];
};

// Start and end of every operation, for drawing the Gantt chart.
export const operations = (order, times) => {
  const finish = new Array(times.length).fill(0);
  const ops = [];
  for (const job of order) {
    let previous = 0;
    for (let m = 0; m < times.length; m++) {
      const start = Math.max(finish[m], previous);
      previous = start + times[m][job];
      finish[m] = previous;
      ops.push({ job, machine: m, start, end: previous });
    }
  }
  return ops;
};

const shuffle = (items, random) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Order crossover (OX): keep a slice of one parent, fill the rest in the other's order.
const orderCrossover = (a, b, random) => {
  const n = a.length;
  const i = Math.floor(random() * n);
  const j = i + Math.floor(random() * (n - i));
  const slice = a.slice(i, j + 1);
  const rest = b.filter((job) => !slice.includes(job));
  return [...rest.slice(0, i), ...slice, ...rest.slice(i)];
};

const gaussian = (random) => Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());

export const createGA = (times, random, { size = 30, elite = 2 } = {}) => {
  const jobs = times[0].map((_, j) => j);
  const evaluate = (order, rate) => ({ order, rate, cost: makespan(order, times) });

  let population = Array.from({ length: size }, () => evaluate(shuffle(jobs, random), 0.1 + random() * 0.5));
  population.sort((x, y) => x.cost - y.cost);

  const tournament = () => {
    let best = population[Math.floor(random() * size)];
    for (let k = 0; k < 2; k++) {
      const rival = population[Math.floor(random() * size)];
      if (rival.cost < best.cost) best = rival;
    }
    return best;
  };

  const step = () => {
    const next = population.slice(0, elite);
    while (next.length < size) {
      const a = tournament();
      const b = tournament();
      const order = orderCrossover(a.order, b.order, random);
      // Self-adaptation: the child's mutation rate is a perturbed copy of its parents'.
      const rate = Math.min(0.9, Math.max(0.02, ((a.rate + b.rate) / 2) * Math.exp(0.3 * gaussian(random))));
      if (random() < rate) {
        const i = Math.floor(random() * order.length);
        const j = Math.floor(random() * order.length);
        [order[i], order[j]] = [order[j], order[i]];
      }
      next.push(evaluate(order, rate));
    }
    population = next.sort((x, y) => x.cost - y.cost);
  };

  return {
    step,
    best: () => population[0],
    meanRate: () => population.reduce((sum, p) => sum + p.rate, 0) / size,
  };
};
