import React, { useEffect, useMemo, useRef, useState } from 'react';
import { copy as t } from '../content';
import { createRandom } from '../ga';
import { createCities, createNSGA } from '../nsga';
import './ParetoDemo.css';

const CITIES = 12;
const GENERATIONS = 60;
const TICK_MS = 120;
const W = 320;
const H = 220;
const PAD = 24;

const snapshot = (nsga, generation) => ({
  generation,
  points: nsga.population().map(({ d, t, rank }) => ({ d, t, rank })),
  front: nsga.front().map(({ d, t, order }) => ({ d, t, order })),
});

const ParetoDemo = () => {
  const [seed, setSeed] = useState(3);
  const [state, setState] = useState(null);
  const [running, setRunning] = useState(false);
  const [selected, setSelected] = useState(0.5); // Position along the front, 0 = shortest.
  const nsgaRef = useRef(null);

  const problem = useMemo(() => {
    const random = createRandom(seed);
    return { random, ...createCities(random, CITIES) };
  }, [seed]);

  // A fresh random population whenever the problem changes.
  useEffect(() => {
    const nsga = createNSGA(problem, problem.random);
    nsgaRef.current = { nsga, generation: 0 };
    setState(snapshot(nsga, 0));
    setRunning(false);
  }, [problem]);

  useEffect(() => {
    if (!running) return undefined;
    const timer = setInterval(() => {
      const current = nsgaRef.current;
      current.nsga.step();
      current.generation += 1;
      setState(snapshot(current.nsga, current.generation));
      if (current.generation >= GENERATIONS) setRunning(false);
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [running]);

  const start = () => {
    if (nsgaRef.current.generation >= GENERATIONS) {
      const nsga = createNSGA(problem, problem.random);
      nsgaRef.current = { nsga, generation: 0 };
      setState(snapshot(nsga, 0));
    }
    setRunning(true);
  };

  if (!state) return null;

  // The axes follow the population, like a camera zooming in as it converges;
  // the dots glide between positions (see the CSS transition), and the end
  // labels show the shrinking values.
  const range = (values) => {
    const lo = Math.min(...values);
    const hi = Math.max(...values);
    const pad = Math.max(hi - lo, lo * 0.12) * 0.12;
    return [lo - pad, hi + pad];
  };
  const bounds = { d: range(state.points.map((p) => p.d)), t: range(state.points.map((p) => p.t)) };

  const scale = ([lo, hi], value) => (value - lo) / (hi - lo);
  const x = (d) => PAD + scale(bounds.d, d) * (W - PAD * 1.5);
  const y = (time) => H - PAD - scale(bounds.t, time) * (H - PAD * 1.5);

  const front = state.front;
  const index = Math.min(front.length - 1, Math.round(selected * (front.length - 1)));
  const chosen = front[index];
  const select = (i) => setSelected(front.length > 1 ? i / (front.length - 1) : 0.5);

  // Staircase through the front: the region it encloses is everything it dominates.
  const stairs = front
    .map((p, i) => (i === 0 ? `${x(p.d)},${y(p.t)}` : `${x(p.d)},${y(front[i - 1].t)} ${x(p.d)},${y(p.t)}`))
    .join(' ');

  const mapPoint = (city) => `${10 + city.x * 200},${10 + city.y * 200}`;
  const route = [...chosen.order, chosen.order[0]].map((c) => mapPoint(problem.cities[c])).join(' ');

  const label = running ? t.pareto.running : state.generation >= GENERATIONS ? t.pareto.again : t.pareto.run;

  return (
    <div className="pareto">
      <div className="pareto-panels">
        <figure className="pareto-plot">
          <svg viewBox={`0 0 ${W} ${H}`} role="group" aria-label={t.pareto.plotLabel}>
            <line className="axis" x1={PAD} y1={H - PAD} x2={W - 4} y2={H - PAD} />
            <line className="axis" x1={PAD} y1={H - PAD} x2={PAD} y2={4} />
            <text className="axis-label" x={W - 4} y={H - 8} textAnchor="end">{t.pareto.distance}</text>
            <text className="axis-label" x={PAD + 6} y={12}>{t.pareto.time}</text>
            <text className="axis-value" x={PAD} y={H - 8} textAnchor="middle">{bounds.d[0].toFixed(1)}</text>
            <text className="axis-value" x={W - 4} y={H - PAD - 6} textAnchor="end">{bounds.d[1].toFixed(1)}</text>
            <text className="axis-value" x={PAD - 4} y={H - PAD} textAnchor="end">{bounds.t[0].toFixed(1)}</text>
            <text className="axis-value" x={PAD - 4} y={PAD} textAnchor="end">{bounds.t[1].toFixed(1)}</text>

            {state.points
              .filter((p) => p.rank > 0)
              .map((p, i) => (
                <circle key={i} className="dot dot--dominated" cx={x(p.d)} cy={y(p.t)} r="2.6" />
              ))}
            <polyline className="stairs" points={stairs} />
            {front.map((p, i) => (
              <circle
                key={`${p.d}-${p.t}`}
                className={`dot dot--front${i === index ? ' is-selected' : ''}`}
                cx={x(p.d)}
                cy={y(p.t)}
                r={i === index ? 6 : 4.2}
                tabIndex={0}
                role="button"
                aria-label={t.pareto.pointLabel.replace('{d}', p.d.toFixed(2)).replace('{t}', p.t.toFixed(2))}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                onClick={() => select(i)}
              />
            ))}
          </svg>
          <figcaption className="meta">{t.pareto.plotCaption}</figcaption>
        </figure>

        <figure className="pareto-map">
          <svg viewBox="0 0 220 220" aria-hidden="true">
            <polyline className="route" points={route} />
            {problem.cities.map((city, i) => {
              const [cx, cy] = mapPoint(city).split(',');
              return <circle key={i} className="city" cx={cx} cy={cy} r="3.6" />;
            })}
          </svg>
          <figcaption className="meta">
            {t.pareto.selected}: {chosen.d.toFixed(2)} / {chosen.t.toFixed(2)}
          </figcaption>
        </figure>
      </div>

      <div className="pareto-footer">
        <dl className="ga-stats">
          <div>
            <dt>{t.demo.generation}</dt>
            <dd>{state.generation} / {GENERATIONS}</dd>
          </div>
          <div>
            <dt>{t.pareto.frontSize}</dt>
            <dd>{front.length}</dd>
          </div>
        </dl>
        <div className="ga-actions">
          <button type="button" className="button button--solid" onClick={start} disabled={running}>
            {label}
          </button>
          <button type="button" className="button" onClick={() => setSeed((s) => s + 1)} disabled={running}>
            {t.pareto.newMap}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParetoDemo;
