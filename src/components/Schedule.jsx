import React, { useState } from 'react';
import { NOW, schedule, copy as t } from '../content';
import { formatRange } from '../format';
import './Schedule.css';

const DOMAIN_START = 2016;
const DOMAIN_END = 2027;
const ROWS = ['work', 'research', 'study'];
const YEARS = Array.from({ length: DOMAIN_END - DOMAIN_START }, (_, i) => DOMAIN_START + i);

const toYear = (value) => {
  const [year, month] = value.split('-').map(Number);
  return year + (month - 1) / 12;
};

const toPercent = (value) => ((toYear(value) - DOMAIN_START) / (DOMAIN_END - DOMAIN_START)) * 100;

// Bars draw in the order the jobs started, like a schedule being executed.
const drawOrder = [...schedule].sort((a, b) => toYear(a.start) - toYear(b.start)).map((job) => job.id);

const Schedule = () => {
  const [activeId, setActiveId] = useState('vbt');
  const active = schedule.find((job) => job.id === activeId);
  const activeText = t.items[activeId];

  return (
    <figure className="schedule">
      <figcaption className="schedule-caption">
        <span className="schedule-title">{t.schedule.title}</span> {t.schedule.caption}
      </figcaption>

      <div className="schedule-chart">
        {ROWS.map((row) => (
          <div className="schedule-row" key={row}>
            <span className="schedule-row-label">{t.schedule.rows[row]}</span>
            <div className="schedule-track">
              {schedule
                .filter((job) => job.row === row)
                .map((job) => {
                  const left = toPercent(job.start);
                  const width = toPercent(job.end ?? NOW) - left;
                  return (
                    <button
                      key={job.id}
                      type="button"
                      className={`bar bar--${row}${job.end ? '' : ' bar--ongoing'}`}
                      style={{ left: `${left}%`, width: `${width}%`, '--order': drawOrder.indexOf(job.id) }}
                      aria-pressed={job.id === activeId}
                      aria-controls="schedule-detail"
                      onClick={() => setActiveId(job.id)}
                      onMouseEnter={() => setActiveId(job.id)}
                      onFocus={() => setActiveId(job.id)}
                    >
                      <span className="bar-label">{t.items[job.id].short}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}

        <div className="schedule-row schedule-axis" aria-hidden="true">
          <span />
          <div className="schedule-track">
            {YEARS.map((year) => (
              <span key={year} className="tick" style={{ left: `${toPercent(`${year}-01`)}%` }}>
                {year}
              </span>
            ))}
            <span className="today" style={{ left: `${toPercent(NOW)}%` }}>
              <span className="today-label">{t.schedule.today}</span>
            </span>
          </div>
        </div>
      </div>

      <div id="schedule-detail" className="schedule-detail" aria-live="polite">
        <span className={`swatch swatch--${active.row}`} aria-hidden="true" />
        <div>
          <p className="detail-title">{activeText.title}</p>
          <p className="meta detail-meta">
            <span>{activeText.org}</span>
            <span>{formatRange(active.start, active.end, t.present)}</span>
          </p>
        </div>
        <a className="detail-link" href={`#${activeId}`}>{t.schedule.open}</a>
      </div>
    </figure>
  );
};

export default Schedule;
