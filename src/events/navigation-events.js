import { TRENDING, FAVORITES, UPLOAD, CONTAINER_SELECTOR } from '../common/constants.js';
import { loadTrendingGIFs, loadSingleGIFbyID, loadMultipleGIFsByID, loadGIFsBySearchTerm, uploadGIF, loadRandomGIFs } from '../requests/request-service.js';
import { toTrendingView } from '../views/trending-view.js';
import { q, setActiveNav } from './helpers.js';

export const loadPage = (page = '') => {
  try {
    switch (page) {
      case TRENDING: {
        setActiveNav(TRENDING);
        const trendingPage = renderTrending();
        return trendingPage;
      }

      // case FAVORITES: {
      //   setActiveNav(FAVORITES);
      //   const favoritesPage = await renderFavorites();
      //   return favoritesPage;
      // }

      // case UPLOAD: {
      //   setActiveNav(UPLOAD);
      //   const uploadPage = await renderUpload();
      //   return uploadPage;
      // }

      default:
        /* If the app supports error logging, use default to log mapping errors */
        return null;
    }
  } catch (e) {
    throw new Error(`loadPage error: ${e.message}`);
  }
};
const renderTrending = async () => {
  const pageTitle = 'Today\'s Trending GIFs';
  const pageDescription = 'Discover the latest and most popular GIFs from around the web on our dynamic platform powered by the Giphy API.';
  const trendingArray = await loadTrendingGIFs('10');

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(pageTitle, pageDescription, trendingArray);
};
