// NSGA-II for a bi-objective travelling salesman problem: every tour has a
// total distance and a total travel time, and the two pull against each other
// because some short roads are slow.

const shuffle = (items, random) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const createCities = (random, count) => {
  const cities = Array.from({ length: count }, () => ({ x: 0.06 + random() * 0.88, y: 0.06 + random() * 0.88 }));
  const distance = cities.map((a) => cities.map((b) => Math.hypot(a.x - b.x, a.y - b.y)));
  // Symmetric congestion factor per road: travel time = distance × factor.
  const factor = cities.map(() => new Array(count).fill(1));
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      factor[i][j] = factor[j][i] = 0.4 + random() * 2.2;
    }
  }
  const time = distance.map((row, i) => row.map((d, j) => d * factor[i][j]));
  return { cities, distance, time };
};

const tourCost = (order, matrix) => {
  let sum = 0;
  for (let i = 0; i < order.length; i++) sum += matrix[order[i]][order[(i + 1) % order.length]];
  return sum;
};

const dominates = (a, b) => a.d <= b.d && a.t <= b.t && (a.d < b.d || a.t < b.t);

// Fast non-dominated sort; sets `rank` on each individual and returns the fronts.
const sortFronts = (population) => {
  const fronts = [[]];
  const dominated = population.map(() => []);
  const count = population.map(() => 0);
  population.forEach((p, i) => {
    population.forEach((q, j) => {
      if (dominates(p, q)) dominated[i].push(j);
      else if (dominates(q, p)) count[i] += 1;
    });
    if (count[i] === 0) {
      p.rank = 0;
      fronts[0].push(i);
    }
  });
  for (let f = 0; fronts[f].length; f++) {
    const next = [];
    for (const i of fronts[f]) {
      for (const j of dominated[i]) {
        count[j] -= 1;
        if (count[j] === 0) {
          population[j].rank = f + 1;
          next.push(j);
        }
      }
    }
    fronts.push(next);
  }
  return fronts.filter((front) => front.length).map((front) => front.map((i) => population[i]));
};

const assignCrowding = (front) => {
  front.forEach((p) => (p.crowd = 0));
  for (const key of ['d', 't']) {
    front.sort((a, b) => a[key] - b[key]);
    const span = front[front.length - 1][key] - front[0][key] || 1;
    front[0].crowd = front[front.length - 1].crowd = Infinity;
    for (let i = 1; i < front.length - 1; i++) front[i].crowd += (front[i + 1][key] - front[i - 1][key]) / span;
  }
};

const orderCrossover = (a, b, random) => {
  const n = a.length;
  const i = Math.floor(random() * n);
  const j = i + Math.floor(random() * (n - i));
  const slice = a.slice(i, j + 1);
  const rest = b.filter((city) => !slice.includes(city));
  return [...rest.slice(0, i), ...slice, ...rest.slice(i)];
};

// Reverse a random segment (2-opt style move).
const invert = (order, random) => {
  const i = Math.floor(random() * order.length);
  const j = Math.floor(random() * order.length);
  const [lo, hi] = i < j ? [i, j] : [j, i];
  return [...order.slice(0, lo), ...order.slice(lo, hi + 1).reverse(), ...order.slice(hi + 1)];
};

export const createNSGA = ({ distance, time }, random, size = 40) => {
  const ids = distance.map((_, i) => i);
  const evaluate = (order) => ({ order, d: tourCost(order, distance), t: tourCost(order, time) });

  let population = Array.from({ length: size }, () => evaluate(shuffle(ids, random)));
  sortFronts(population).forEach(assignCrowding);

  const better = (a, b) => (a.rank !== b.rank ? a.rank < b.rank : a.crowd > b.crowd);
  const pick = () => {
    const a = population[Math.floor(random() * size)];
    const b = population[Math.floor(random() * size)];
    return better(a, b) ? a : b;
  };

  const step = () => {
    const children = [];
    while (children.length < size) {
      let order = orderCrossover(pick().order, pick().order, random);
      if (random() < 0.6) order = invert(order, random);
      children.push(evaluate(order));
    }
    // Elitist (μ + λ) survival: fill by front, break the last front by crowding.
    const next = [];
    for (const front of sortFronts([...population, ...children])) {
      assignCrowding(front);
      if (next.length + front.length <= size) next.push(...front);
      else {
        next.push(...front.sort((a, b) => b.crowd - a.crowd).slice(0, size - next.length));
        break;
      }
    }
    population = next;
    sortFronts(population).forEach(assignCrowding);
  };

  return {
    step,
    population: () => population,
    front: () =>
      population
        .filter((p) => p.rank === 0)
        .sort((a, b) => a.d - b.d)
        // Drop duplicates (same objective values) so the front reads cleanly.
        .filter((p, i, list) => i === 0 || p.d !== list[i - 1].d || p.t !== list[i - 1].t),
  };
};
