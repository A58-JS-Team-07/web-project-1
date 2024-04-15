let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifID) => {
  if (favorites.find(id => id === gifID)) {
    return;
  }

  favorites.push(gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (gifID) => {
  favorites = favorites.filter(id => id !== gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];