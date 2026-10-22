import React from 'react';
import { copy as t } from '../content';
import './Skills.css';

const Skills = () => {

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">{t.skills.title}</h2>
        <dl className="section-body skills">
          {t.skills.list.map(([term, value]) => (
            <div key={term} className="skill">
              <dt className="meta">{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
