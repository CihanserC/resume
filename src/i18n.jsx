import React, { createContext, useContext, useEffect, useState } from 'react';
import { copy } from './content';

// Namespaced: every project under cihanserc.github.io shares one localStorage.
const STORAGE_KEY = 'resume:lang';
const LangContext = createContext(null);

const initialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'tr') return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
  }, [lang, t]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

// 'YYYY-MM' -> 'Mar 2026' / 'Mar 2026' in the active language.
export const formatMonth = (value, lang) => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    month: 'short',
    year: 'numeric',
  });
};

export const formatRange = (start, end, lang, presentLabel) =>
  `${formatMonth(start, lang)} – ${end ? formatMonth(end, lang) : presentLabel}`;
