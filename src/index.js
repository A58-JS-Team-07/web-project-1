import { TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { q, setLoader } from './events/helpers.js';
import { renderGIFDetails } from './events/navigation-events.js';
import { executeUploadItem } from './events/upload-form-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { renderBondItems } from './events/bond-gifs-events.js';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-fav-gif-id'));
    }

    if (event.target.classList.contains('gif-image')) {
      renderGIFDetails(event.target.getAttribute('data-gif-id'));
    }

    if (event.target.classList.contains('bond-logo')) {
      renderBondItems();
    }

    if (event.target.classList.contains('upload-btn')) {
      const file = q('#file');

      // This for "Select file" design purposes
      file.addEventListener('change', async (e) => {
        const [file] = e.target.files;
        const { name: fileName, size } = file;
        const fileSize = (size / 1000).toFixed(2);
        const fileNameAndSize = `${fileName} - ${fileSize}KB`;
        document.querySelector('.file-name').textContent = fileNameAndSize;
      });
    }
  });

  document.addEventListener('input', (event) => {
    if (event.target === q('input#search')) {
      renderSearchItems(event.target.value);
    }
  });

  // This is triggering the API
  document.addEventListener('submit', async (event) => {
    event.preventDefault(); // stops submitting the form to reload the page
    setLoader('start');
    const formData = new FormData(q('#upload-form'));
    try {
      await executeUploadItem(formData);
    } catch (error) {
      console.error('Error executing upload:', error);
    }
  });

  loadPage(TRENDING);
});
