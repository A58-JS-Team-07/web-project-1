let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
/**
 * Adds a GIF ID to the favorites list if it's not already present.
 * @param {string} gifID - The ID of the GIF to be added to favorites.
 * @returns {void}
 */
export const addFavorite = (gifID) => {
  if (favorites.find((id) => id === gifID)) {
    return;
  }

  favorites.push(gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a GIF from favorites list
 * @param {string} gifID - The ID of the GIF to be removed from favorites.
 */
export const removeFavorite = (gifID) => {
  favorites = favorites.filter((id) => id !== gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * 
 * @returns An array with all favorites's IDs
 */
export const getFavorites = () => [...favorites];
