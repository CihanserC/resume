import React from 'react';
import { links } from '../content';
import { useLang } from '../i18n';
import Schedule from './Schedule';
import './Hero.css';

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="container">
        <h1 id="hero-name" className="hero-name">
          <span className="hero-line">Cihanser</span> <span className="hero-line">Çalışkan</span>
        </h1>
        <div className="hero-text">
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-intro">{t.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button--solid" href={`mailto:${links.email}`}>{t.hero.email}</a>
            <a className="button" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="button" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <Schedule />
      </div>
    </section>
  );
};

export default Hero;
