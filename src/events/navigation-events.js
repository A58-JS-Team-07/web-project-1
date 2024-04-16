import { TRENDING, FAVORITES, UPLOAD, MY_UPLOAD, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGIFs, loadSingleGIFbyID } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toGIFDetailed } from '../views/gif-detailed.js';
import { toUploadView } from '../views/upload-form-view.js';
import { q, setActiveNav } from './helpers.js';
import { getUploadsIds, loadUploads } from '../data/uploads.js';
import { toUploadsView } from '../views/uploads-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { loadRandomGIF } from '../requests/request-service.js';
import { SNIPPETS_LIMITER } from '../common/constants.js';


/**
 *
 * @param {*} [page = ''] - The identifier of the page to load.
 * @returns {Promise<HTMLElement|null>} - A promise that resolves to the rendered page content or null if no page is found.
 * @throws {Error} - Throws an error if an exception occurs during page loading and rendering.
 */
export const loadPage = (page = '') => {
  try {
    switch (page) {
      case TRENDING: {
        setActiveNav(TRENDING);
        return renderTrending();
      }

      case FAVORITES: {
        setActiveNav(FAVORITES);
        const favoritesPage = renderFavorites();
        return favoritesPage;
      }

      case UPLOAD: {
        setActiveNav(UPLOAD);
        return renderUploadForm();
      }

      case MY_UPLOAD: {
        setActiveNav(MY_UPLOAD);
        return renderUploadItems();
      }

      default:
        /* If the app supports error logging, use default to log mapping errors */
        return null;
    }
  } catch (e) {
    throw new Error(`loadPage error: ${e.message}`);
  }
};


/**
 * Renders trending GIFs into the specified container.
 * @async
 * @returns {Promise<void>}
 */
const renderTrending = async () => {
  const trendingArray = await loadTrendingGIFs(SNIPPETS_LIMITER);
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingArray);
};

/**
 * Renders the upload form view into the specified container.
 * @returns {void}
 */
const renderUploadForm = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Renders uploaded items into the specified container.
 * @async
 * @returns {Promise<void>}
 */

/**
 * Renders uploaded items into the specified container.
 * @async
 * @returns {Promise<void>}
 */
const renderUploadItems = async () => {
  const uploadsIds = getUploadsIds();
  const uploads = await loadUploads(uploadsIds);

  q(CONTAINER_SELECTOR).innerHTML = toUploadsView(uploads);
};

/**
 * Renders detailed information about a GIF into the specified container.
 * If no GIF ID is provided, renders a default view.
 * @async
 * @param {*} id
 * @returns {Promise<void>}
 */
export const renderGIFDetails = async (id = null) => {
  const GIF = await loadSingleGIFbyID(id);

  q(CONTAINER_SELECTOR).innerHTML = toGIFDetailed(GIF);
};

/**
 * Renders the favorite GIFs into the specified container.
 * If there are no favorite GIFs, renders a random GIF.
 * @async
 * @returns {Promise<void>}
 */
const renderFavorites = async () => {
  const favorites = getFavorites().filter((element) => element !== null);

  if (favorites.length !== 0) {
    Promise.all(favorites.map((id) => loadSingleGIFbyID(id))).then((favGifsArray) => {
      q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favGifsArray);
    });
  } else {
    const randomObject = await loadRandomGIF();
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorites, randomObject);
  }
};

// if (favorites.length !== 0) {
//   try {
//     const favItems = await loadMultipleGIFsByID(favorites);
//     q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favItems);
//   } catch (e) {
//     throw new Error('Error in renderFavorites: ' + e.message);
//   }
// } else {
//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView([]);
// }
