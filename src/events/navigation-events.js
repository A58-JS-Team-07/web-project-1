import { TRENDING, FAVORITES, UPLOAD, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGIFs, loadSingleGIFbyID, loadMultipleGIFsByID, loadGIFsBySearchTerm, uploadGIF, loadRandomGIFs } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';

export const loadPage = (page = '') => {
  try {
    switch (page) {
      case TRENDING: {
        setActiveNav(TRENDING);
        return renderTrending();
      }

      // case FAVORITES: {
      //   setActiveNav(FAVORITES);
      //   const favoritesPage = await renderFavorites();
      //   return favoritesPage;
      // }

      case UPLOAD: {
        setActiveNav(UPLOAD);
        return renderUpload();
      }

      default:
        /* If the app supports error logging, use default to log mapping errors */
        return null;
    }
  } catch (e) {
    throw new Error(`loadPage error: ${e.message}`);
  }
};


const renderTrending = async () => {
  const trendingArray = await loadTrendingGIFs('10');
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingArray);
};

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};
