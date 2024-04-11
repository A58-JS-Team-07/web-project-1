import { API_MASTER } from '../common/api.js';



// https://api.giphy.com/v1/gifs/trending?api_key=u5hAg5LLnVxq1EyKBHVCHDRkivGmhlLO&limit=25&offset=0&rating=g&bundle=messaging_non_clips


export const loadTrendingGIFs = async (limit = '25') => {
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
        title: gif.title,
        id: gif.id,
        image: {
          url: gif.images.original.url,
          height: gif.images.original.height,
          width: gif.images.original.width,
        },
      };
      resultArray.push(gifObject);
    });
    return resultArray;
  } catch (e) {
    throw new Error(`Error in loadTrendingGIFs async function: ${e.message}`);
  }
};

export const loadSingleGIFbyID = async (id) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_MASTER}&rating=g`);

    if (!response.ok) {
      throw new Error(`Failed to fetch gif by ID: ${response.message}`);
    }

    const singleGIFBody = await response.json();
    const singleGIFObject = singleGIFBody.data;

    const gifObject = {
      title: singleGIFObject.title,
      id: singleGIFObject.id,
      source: singleGIFObject.source,
      image: {
        url: singleGIFObject.images.original.url,
        height: singleGIFObject.images.original.height,
        width: singleGIFObject.images.original.width,
      },
      user: {
        name: singleGIFObject.user.display_name,
        username: singleGIFObject.user.username,
        description: singleGIFObject.user.description,
      },
    };

    return gifObject;
  } catch (e) {
    throw new Error(`Error in loadSingleGIFbyID async function: ${e.message}`);
  }
};


export const loadMultipleGIFsByID = async (arrayWithGIFsID) => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${API_MASTER}&ids=${arrayWithGIFsID.join(',')}&rating=g`);

    if (!response.ok) {
      throw new Error(`Failed to fetch gifs by IDs: ${response.message}`);
    }

    const multipleGIFsBody = await response.json();
    const multipleGIFsArray = multipleGIFsBody.data;

    const resultArray = [];

    multipleGIFsArray.map((gif) => {
      const gifObject = {
        title: gif.title,
        id: gif.id,
        image: {
          url: gif.images.original.url,
          height: gif.images.original.height,
          width: gif.images.original.width,
        },
      };
      resultArray.push(gifObject);
    });
    return resultArray;
  } catch (e) {
    throw new Error(`Error in loadMultipleGIFsByID async function: ${e.message}`);
  }
};

export const loadGIFsBySearchTerm = async (query, limit = '25') => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_MASTER}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);

    if (!response.ok) {
      throw new Error(`Failed to fetch searched gifs: ${response.message}`);
    }

    const searchGIFsBody = await response.json();
    const searchGIFsArray = searchGIFsBody.data;

    const resultArray = [];

    searchGIFsArray.map((gif) => {
      const gifObject = {
        title: gif.title,
        id: gif.id,
        image: {
          url: gif.images.original.url,
          height: gif.images.original.height,
          width: gif.images.original.width,
        },
      };
      resultArray.push(gifObject);
    });
    return resultArray;
  } catch (e) {
    throw new Error(`Error in loadGIFsBySearchTerm async function: ${e.message}`);
  }
};

export const uploadGIF = (file, arrayTags, source) => {
  // `https://upload.giphy.com/v1/gifs/api_key=${API_MASTER}&file=${file}&tags=${arrayTags}&source_post_url=${source}`
  // must be implemented
};

export const loadRandomGIFs = () => {
  // must be implemented
};


// FOR TESTING PURPOSES
// (async () => {
//   try {
//     const result = await loadGIFsBySearchTerm('cats', '5');
//     console.log('Async operation completed:', result);
//   } catch (error) {
//     console.error('An error occurred during async operation:', error);
//   }
// })();
