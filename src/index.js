import { TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { q } from './events/helpers.js';
import { renderGIFDetails } from './events/navigation-events.js';
import { executeUploadItem } from './events/upload-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-fav-gif-id'))
    }

    if (event.target.classList.contains('gif-image')) {
      renderGIFDetails(event.target.getAttribute('data-gif-id'));
    }

  });
  
  document.addEventListener('input', (event) => {
    if (event.target === q('input#search')) {
      renderSearchItems(event.target.value);
    }
  });

  // possibly add a q('#upload-form')????
  document.addEventListener('submit', async (event) => {
    event.preventDefault(); // stops submitting the form to reload the page

    const formData = new FormData(q('#upload-form'));

    try {
      await executeUploadItem(formData);
    } catch (error) {
      console.error('Error executing upload:', error);
    }
  });

  loadPage(TRENDING);
});
