import React from 'react';
import { links } from '../content';
import { useLang } from '../i18n';
import './Contact.css';

const Contact = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">{t.contact.title}</h2>
        <div className="section-body">
          <p className="contact-lead">{t.contact.lead}</p>
          <a className="contact-email" href={`mailto:${links.email}`}>{links.email}</a>
          <ul className="link-row contact-links">
            <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
          <p className="meta">{t.contact.location}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
