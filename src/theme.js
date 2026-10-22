import { useEffect, useState } from 'react';

// Namespaced: every project under cihanserc.github.io shares one localStorage.
const STORAGE_KEY = 'resume:theme';
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const initialTheme = () => {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return darkQuery.matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);

  // Follow system changes until the visitor picks a theme themselves.
  useEffect(() => {
    const onChange = (event) => {
      if (!document.documentElement.dataset.theme) setTheme(event.matches ? 'dark' : 'light');
    };
    darkQuery.addEventListener('change', onChange);
    return () => darkQuery.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
};
