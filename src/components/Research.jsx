import React from 'react';
import { links, schedule } from '../content';
import { formatRange, useLang } from '../i18n';
import GaDemo from './GaDemo';
import QuantumDemo from './QuantumDemo';
import './Entries.css';
import './Research.css';

const WORK = ['mojssp', 'thesis', 'pof'];
const EDUCATION = ['msc', 'bsc'];

const Research = () => {
  const { lang, t } = useLang();

  const renderEntry = (id, text) => {
    const item = schedule.find((job) => job.id === id);
    return (
      <li key={id} id={id} className="entry">
        <p className="meta entry-date">{formatRange(item.start, item.end, lang, t.present)}</p>
        <div>
          <h3 className="entry-title">{t.items[id].title}</h3>
          <p className="meta">{t.items[id].org}</p>
          <p className="entry-text">{text}</p>
        </div>
      </li>
    );
  };

  return (
    <section id="research" className="section" aria-labelledby="research-title">
      <div className="container">
        <h2 id="research-title" className="section-title">{t.research.title}</h2>
        <div className="section-body">
          <div className="publication">
            <p className="subhead">{t.research.publicationLabel}</p>
            <p className="citation">{t.research.citation}</p>
            <div className="link-row">
              <a href={links.doi} target="_blank" rel="noopener noreferrer">{t.research.doiLabel}</a>
              <span className="meta">doi: 10.1109/ICEEE59925.2023.00045</span>
            </div>
          </div>

          <GaDemo />

          <ol className="entries">{WORK.map((id) => renderEntry(id, t.research.work[id]))}</ol>

          <QuantumDemo />

          <p className="subhead research-subhead">{t.research.educationTitle}</p>
          <ol className="entries">{EDUCATION.map((id) => renderEntry(id, t.research.education[id]))}</ol>
        </div>
      </div>
    </section>
  );
};

export default Research;
