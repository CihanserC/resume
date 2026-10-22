import React from 'react';
import { schedule } from '../content';
import { formatRange, useLang } from '../i18n';
import './Entries.css';

const JOBS = ['vbt', 'veripark', 'doruk', 'monovi'];

const Experience = () => {
  const { lang, t } = useLang();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">{t.experience.title}</h2>
        <ol className="section-body entries">
          {JOBS.map((id) => {
            const job = schedule.find((item) => item.id === id);
            return (
              <li key={id} id={id} className="entry">
                <p className="meta entry-date">{formatRange(job.start, job.end, lang, t.present)}</p>
                <div>
                  <h3 className="entry-title">{t.items[id].title}</h3>
                  <p className="meta">{t.items[id].org}</p>
                  <ul className="entry-points">
                    {t.experience.jobs[id].map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
