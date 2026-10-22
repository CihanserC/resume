import React from 'react';
import { copy as t } from './content';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Cihanser Çalışkan. {t.footer}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
