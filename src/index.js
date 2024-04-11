import { TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttributes('data-page'));
    }
  });
  loadPage(TRENDING);
});
