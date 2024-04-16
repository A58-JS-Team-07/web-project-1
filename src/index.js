import { ENTER_KEYCODE, TRENDING } from './common/constants.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { q, setLoader } from './events/helpers.js';
import { renderGIFDetails } from './events/navigation-events.js';
import { executeUploadItem } from './events/upload-form-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { renderBondItems } from './events/bond-gifs-events.js';


/**
 * Event listener function that listens for the 'DOMContentLoaded' event and handles clicks on various elements.
 * @param {Event} event - The DOMContentLoaded event.
 */
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

    if (event.target.matches('#search-btn, #search-btn svg')) {
      renderSearchItems(q('input#search').value);
    }

    // if (event.target.matches('clear-search')) {
    //   loadPage(q('a.nav-link[data-page="trending"]'));
    // }
  });

    q('input#search').addEventListener('keypress', (event) => {
      if (event.key === 'Enter' || event.keyCode === ENTER_KEYCODE) {
        
        renderSearchItems(q('input#search').value);
      }
  });

  //When we delete input from search bar the Trending page is loaded
  //   document.addEventListener('input', (event) => {
  //     const inputValue = q('input#search').value.trim();
  //   if (inputValue === '') {
  //     loadPage(q('a.nav-link[data-page="trending"]'));
  //   }
  // });

  //Search bar is triggered on input value
  // document.addEventListener('input', (event) => {
  //   if (event.target === q('input#search')) {
  //     renderSearchItems(event.target.value);
  //   }
  // });

  // This is triggering the API
  /** 
   * Event listener function that listens for the 'submit' event on the upload form, prevents the default form submission behavior, and executes the upload item asynchronously.
   * @param {Event} event - The submit event.
   */
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
