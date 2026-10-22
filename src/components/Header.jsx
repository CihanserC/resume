import React from 'react';
import { useLang } from '../i18n';
import { useTheme } from '../theme';
import './Header.css';

const SECTIONS = ['experience', 'research', 'projects', 'contact'];

const Header = () => {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#main" className="header-name">Cihanser Çalışkan</a>
        <nav aria-label="Primary" className="header-nav">
          <ul>
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.nav[id]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lang-switch" role="group" aria-label={t.langLabel}>
          {['en', 'tr'].map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
          title={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
