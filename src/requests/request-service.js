import { API_MASTER } from '../common/api.js';

// const API_KEY_BY_ID = `https://api.giphy.com/v1/gifs/${GIF_ID}?api_key=${API_MASTER}&rating=g`;

// const API_KEY_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_MASTER}&q=${SEARCH_TERM}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// const API_KEY_FAVORITE = `https://api.giphy.com/v1/gifs?api_key=${API_MASTER}&ids=${FAVORITE_ARRAY.join(',')}&rating=g`;

export const loadTrending = async (limit = '25') => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_MASTER}&limit=${limit}&offset=0&rating=g&bundle=messaging_non_clips`);

    if (!response.ok) {
      throw new Error(`Failed to fetch trending gifs: ${response.message}`);
    }

    const trendingGIFsBody = await response.json();
    const trendingGIFsArray = trendingGIFsBody.data;

    const resultArray = [];

    trendingGIFsArray.map((gif) => {
      const gifObject = {
        id: gif.id,
        image: {
          url: gif.images.original.url,
          height: gif.images.original.height,
          width: gif.images.original.width,
        },
        title: gif.title,
      };
      resultArray.push(gifObject);
    });
    return resultArray;
  } catch (e) {
    throw new Error(`Error in loadTrending async function: ${e.message}`);
  }
};

(async () => {
  try {
    // Perform asynchronous operations inside this block
    const result = await loadTrending('3');
    console.log('Async operation completed:', result);
  } catch (error) {
    console.error('An error occurred during async operation:', error);
  }
})();
