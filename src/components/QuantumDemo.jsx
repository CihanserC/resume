import React, { useEffect, useMemo, useRef, useState } from 'react';
import { copy as t } from '../content';
import { createRandom } from '../ga';
import { createQIEA } from '../qiea';
import './QuantumDemo.css';

const BITS = 16;
const GENERATIONS = 40;
const TICK_MS = 150;

const Dial = ({ theta }) => {
  // Right is |0⟩, up is |1⟩; the needle sits at angle θ between them.
  return (
    <svg className="qbit-dial" viewBox="0 0 36 36" aria-hidden="true">
      <path className="qbit-arc" d="M 32 32 A 28 28 0 0 0 4 4" />
      <line className="qbit-axis" x1="4" y1="32" x2="34" y2="32" />
      <line className="qbit-axis" x1="4" y1="32" x2="4" y2="2" />
      <g className="qbit-needle" style={{ transform: `rotate(${(-theta * 180) / Math.PI}deg)` }}>
        <line x1="4" y1="32" x2="32" y2="32" />
        <circle cx="32" cy="32" r="2.4" />
      </g>
    </svg>
  );
};

const QuantumDemo = () => {
  const [seed, setSeed] = useState(1);
  const [state, setState] = useState(null); // { generation, angles, observed, best }
  const [running, setRunning] = useState(false);
  const qieaRef = useRef(null);

  const target = useMemo(() => {
    const random = createRandom(seed * 7919);
    return { random, bits: Array.from({ length: BITS }, () => (random() < 0.5 ? 1 : 0)) };
  }, [seed]);

  useEffect(() => {
    setRunning(false);
    setState(null);
  }, [target]);

  useEffect(() => {
    if (!running) return undefined;
    const timer = setInterval(() => {
      const current = qieaRef.current;
      const observed = current.qiea.step();
      current.generation += 1;
      const { generation, qiea } = current;
      setState({ generation, angles: qiea.angles(), observed: observed.bits, best: qiea.best().score });
      if (generation >= GENERATIONS || qiea.best().score === BITS) setRunning(false);
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [running]);

  const start = () => {
    const qiea = createQIEA(target.bits, target.random);
    qieaRef.current = { qiea, generation: 0 };
    setState({ generation: 0, angles: qiea.angles(), observed: null, best: 0 });
    setRunning(true);
  };

  const angles = state?.angles ?? new Array(BITS).fill(Math.PI / 4);
  const observed = state?.observed;
  const label = running ? t.quantum.running : state ? t.quantum.again : t.quantum.run;

  return (
    <div className="quantum">
      <p className="subhead">{t.quantum.title}</p>
      <p className="ga-intro">{t.quantum.intro}</p>

      <div className="quantum-panel">
        <ol className="qbits" aria-label={t.quantum.registerLabel}>
          {angles.map((theta, i) => (
            <li key={i} className="qbit">
              <Dial theta={theta} />
              <span className="qbit-prob">{Math.round(Math.sin(theta) ** 2 * 100)}%</span>
              <span
                className={`qbit-bit${observed ? (observed[i] === target.bits[i] ? ' is-right' : ' is-wrong') : ''}`}
              >
                {observed ? observed[i] : '?'}
              </span>
            </li>
          ))}
        </ol>
        <p className="meta quantum-legend">{t.quantum.legend}</p>

        <div className="pareto-footer">
          <dl className="ga-stats">
            <div>
              <dt>{t.demo.generation}</dt>
              <dd>{state?.generation ?? 0} / {GENERATIONS}</dd>
            </div>
            <div>
              <dt>{t.quantum.best}</dt>
              <dd>{state?.best ?? 0} / {BITS}</dd>
            </div>
          </dl>
          <div className="ga-actions">
            <button type="button" className="button button--solid" onClick={start} disabled={running}>
              {label}
            </button>
            <button type="button" className="button" onClick={() => setSeed((s) => s + 1)} disabled={running}>
              {t.quantum.newTarget}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumDemo;
