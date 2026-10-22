import React, { useEffect, useMemo, useRef, useState } from 'react';
import { copy as t } from '../content';
import { createGA, createProblem, createRandom, makespan, operations } from '../ga';
import './GaDemo.css';

const JOBS = 15;
const MACHINES = 5;
const GENERATIONS = 40;
const TICK_MS = 150;

const randomOrder = (random) => {
  const order = Array.from({ length: JOBS }, (_, j) => j);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

const GaDemo = () => {
  const [seed, setSeed] = useState(7);
  const problem = useMemo(() => {
    const random = createRandom(seed);
    const times = createProblem(random, JOBS, MACHINES);
    const start = randomOrder(random);
    return { random, times, start, startCost: makespan(start, times) };
  }, [seed]);

  const [run, setRun] = useState(null); // { generation, order, cost, rate, history }
  const [running, setRunning] = useState(false);
  const gaRef = useRef(null);

  // Reset to the random starting order whenever the problem changes.
  useEffect(() => {
    setRunning(false);
    setRun(null);
  }, [problem]);

  useEffect(() => {
    if (!running) return undefined;
    const timer = setInterval(() => {
      const current = gaRef.current;
      current.ga.step();
      current.generation += 1;
      const { generation, ga } = current;
      const best = ga.best();
      const rate = ga.meanRate();
      setRun((previous) => ({
        generation,
        order: best.order,
        cost: best.cost,
        rate,
        history: [...previous.history, best.cost],
      }));
      if (generation >= GENERATIONS) setRunning(false);
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [running]);

  const start = () => {
    const ga = createGA(problem.times, problem.random, { size: 12, elite: 1 });
    gaRef.current = { ga, generation: 0 };
    setRun({
      generation: 0,
      order: problem.start,
      cost: problem.startCost,
      rate: ga.meanRate(),
      history: [problem.startCost],
    });
    setRunning(true);
  };

  const order = run?.order ?? problem.start;
  const cost = run?.cost ?? problem.startCost;
  const ops = operations(order, problem.times);
  const scale = problem.startCost; // Fixed axis, so improvements visibly shrink the schedule.
  const history = run?.history ?? [problem.startCost];
  const low = Math.min(...history);
  const gain = Math.round(((problem.startCost - cost) / problem.startCost) * 100);

  const points = history
    .map((value, i) => {
      const x = (i / GENERATIONS) * 100;
      const y = problem.startCost === low ? 2 : 2 + ((problem.startCost - value) / (problem.startCost - low)) * 36;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');

  const runLabel = running ? t.demo.running : run ? t.demo.again : t.demo.run;

  return (
    <div className="ga-demo">
      <p className="subhead">{t.demo.title}</p>
      <p className="ga-intro">{t.demo.intro}</p>

      <div className="ga-panel">
        <div className="ga-gantt" role="img" aria-label={t.demo.ganttLabel.replace('{cost}', cost)}>
          {Array.from({ length: MACHINES }, (_, m) => (
            <div className="ga-row" key={m}>
              <span className="ga-machine">M{m + 1}</span>
              <div className="ga-track">
                {ops
                  .filter((op) => op.machine === m)
                  .map((op) => (
                    <span
                      key={op.job}
                      className="ga-op"
                      style={{
                        left: `${(op.start / scale) * 100}%`,
                        width: `${((op.end - op.start) / scale) * 100}%`,
                        '--hue': (op.job * 360) / JOBS + 210,
                      }}
                    />
                  ))}
              </div>
            </div>
          ))}
          <span className="ga-makespan" style={{ '--at': cost / scale }}>
            <span className="ga-makespan-label">{cost}</span>
          </span>
        </div>

        <div className="ga-footer">
          <dl className="ga-stats">
            <div>
              <dt>{t.demo.generation}</dt>
              <dd>{run?.generation ?? 0} / {GENERATIONS}</dd>
            </div>
            <div>
              <dt>{t.demo.makespan}</dt>
              <dd>
                {cost}
                {gain > 0 && <span className="ga-gain"> −{gain}%</span>}
              </dd>
            </div>
            <div>
              <dt>{t.demo.rate}</dt>
              <dd>{run ? run.rate.toFixed(2) : '–'}</dd>
            </div>
          </dl>
          <svg className="ga-curve" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
            <polyline points={points} />
          </svg>
        </div>

        <div className="ga-actions">
          <button type="button" className="button button--solid" onClick={start} disabled={running}>
            {runLabel}
          </button>
          <button type="button" className="button" onClick={() => setSeed((s) => s + 1)} disabled={running}>
            {t.demo.newProblem}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GaDemo;
