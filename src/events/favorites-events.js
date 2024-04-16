import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorite status of a GIF.
 * If the GIF is already a favorite, it removes it from favorites. Otherwise, it adds it to favorites.
 * @param {string} gifID - The ID of the GIF to toggle favorite status.
 * @returns {void}
 */
export const toggleFavoriteStatus = (gifID) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-fav-gif-id="${gifID}"]`);

  if (favorites.includes(gifID)) {
    removeFavorite(gifID);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifID);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 * Renders the favorite status of a GIF as a HTML string representing a heart icon.
 * @param {string} gifID - The ID of the GIF to render favorite status on.
 * @returns {string} - The HTML string representing the heart icon with the appropriate favorite status.
 */
export const renderFavoriteStatus = (gifID) => {
  const favorites = getFavorites();

  return favorites.includes(gifID) ?
    `<span class="favorite active" data-fav-gif-id="${gifID}">${FULL_HEART}</span>` :
    `<span class="favorite" data-fav-gif-id="${gifID}">${EMPTY_HEART}</span>`;
};


