import { TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { q } from './events/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttributes('data-page'));
    }
  });
  loadPage(TRENDING);

  document.addEventListener('input', (event) => {
    if (event.target === q('input#search')) {
      renderSearchItems(event.target.value)
    }
  })

});