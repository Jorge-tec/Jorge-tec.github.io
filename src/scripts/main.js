import { renderApp } from '../components/App.js';
import { initI18n } from '../i18n/index.js';

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  renderApp();
});
