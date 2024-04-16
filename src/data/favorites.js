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
 * @returns {void}
 */
export const removeFavorite = (gifID) => {
  favorites = favorites.filter((id) => id !== gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves the IDs of all favorite GIFs.
 *
 * This function returns a new array containing the IDs of all GIFs that have been marked as favorites.
 * The IDs are stored in the `favorites` array. By using the spread operator, we ensure that
 * a new array is returned, preventing any modifications to the original `favorites` array.
 *
 * @returns {string[]} An array containing the IDs of all favorite GIFs.
 */
export const getFavorites = () => [...favorites];
