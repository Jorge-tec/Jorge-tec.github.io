import { en } from './en.js';
import { es } from './es.js';

const STORAGE_KEY = 'site-language';
const SUPPORTED_LOCALES = ['en', 'es'];
const DEFAULT_LOCALE = 'en';

const translations = { en, es };

let currentLocale = DEFAULT_LOCALE;
const listeners = new Set();

/**
 * Initializes the i18n layer by reading localStorage or falling back to default.
 */
export function initI18n() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LOCALES.includes(saved)) {
      currentLocale = saved;
    } else {
      currentLocale = DEFAULT_LOCALE;
    }
  } catch (e) {
    currentLocale = DEFAULT_LOCALE;
  }
  document.documentElement.lang = currentLocale;
  return currentLocale;
}

/**
 * Returns the currently active locale ('en' | 'es').
 */
export function getLocale() {
  return currentLocale;
}

/**
 * Returns the translation dictionary for the active locale.
 */
export function t() {
  return translations[currentLocale] || translations[DEFAULT_LOCALE];
}

/**
 * Switches the active locale, persists to localStorage, updates <html> tag and notifies listeners.
 */
export function setLocale(newLocale) {
  if (!SUPPORTED_LOCALES.includes(newLocale) || newLocale === currentLocale) {
    return;
  }
  currentLocale = newLocale;
  try {
    localStorage.setItem(STORAGE_KEY, newLocale);
  } catch (e) {
    // ignore quota/storage restrictions
  }
  document.documentElement.lang = currentLocale;
  listeners.forEach(fn => fn(currentLocale));
}

/**
 * Subscribes a listener to locale change events.
 */
export function onLocaleChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
