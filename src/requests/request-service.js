import { API_MASTER } from '../common/api.js';

/**
 * Loads trending GIFs from the Giphy API.
 * @async
 * @param {string} [limit='25'] - The maximum number of GIFs to load.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects representing the loaded GIFs.
 * @throws {Error} - Throws an error if the fetching or parsing of GIFs fails.
 */
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

/**
 * Loads a single GIF by its ID from the Giphy API.
 * @async
 * @param {string} id - The ID of the GIF to load.
 * @returns {Promise<Object>} - A promise that resolves to an object representing the loaded GIF.
 * @throws {Error} - Throws an error if the fetching or parsing of the GIF fails.
 */
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
      source: singleGIFObject.source || 'No source media provided',
      image: {
        url: singleGIFObject.images.original.url,
        height: singleGIFObject.images.original.height,
        width: singleGIFObject.images.original.width,
      },
      user: {
        avatar: singleGIFObject.user?.avatar_url ?? '../../images/empty-avatar.webp',
        name: singleGIFObject.user?.display_name ?? '',
        username: singleGIFObject.user?.username ?? '',
        description: singleGIFObject.user?.description ?? '',
      },
    };

    return gifObject;
  } catch (e) {
    throw new Error(`Error in loadSingleGIFbyID async function: ${e.message}`);
  }
};


/**
 * Loads multiple GIFs by their IDs from the Giphy API.
 * @async
 * @param {string[]} arrayWithGIFsID - An array containing IDs of GIFs to load.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects representing the loaded GIFs.
 * @throws {Error} - Throws an error if the fetching or parsing of GIFs fails.
 */
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

/**
 * Loads GIFs based on the provided search term from the Giphy API.
 * @async
 * @param {string} query - The search term used to retrieve GIFs.
 * @param {string} [limit='25'] - The maximum number of GIFs to load.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects representing the loaded GIFs.
 * @throws {Error} - Throws an error if the fetching or parsing of GIFs fails.
 */
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


/**
 * Uploads a GIF to Giphy.
 *
 * This function takes a string of tags, a File object or a URL to a file, and a source post URL.
 * It creates a FormData object and appends the API key, tags, and either the file or the file URL to it.
 * It then sends a POST request to the Giphy upload endpoint with the FormData object.
 * If the upload is successful, it returns the ID of the uploaded GIF.
 *
 * @param {string} stringTags - A string of tags for the GIF.
 * @param {File|null} file - A File object representing the GIF to be uploaded.
 * @param {string} fileURL - A URL to the GIF to be uploaded.
 * @param {string} sourcePostURL - A URL to the source post of the GIF.
 * @returns {Promise<string>} A promise that resolves to the ID of the uploaded GIF.
 * @throws {Error} Throws an error if neither a File object nor a valid file URL is provided, or if the upload fails.
 */
export const uploadGIF = async (stringTags, file = null, fileURL = '', sourcePostURL = '') => {
  const formData = new FormData();
  formData.append('api_key', API_MASTER); // Add your actual GIPHY API key here
  formData.append('tags', stringTags);

  if (file instanceof File) {
    formData.append('file', file);
  } else if (typeof fileURL === 'string' && fileURL.trim() !== '') {
    formData.append('source_image_url', fileURL);
  } else {
    throw new Error('Invalid parameters: Either provide a File object or a valid file URL');
  }

  try {
    const response = await fetch(`https://upload.giphy.com/v1/gifs`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Failed to upload gif: ${errorResponse.message}`);
    }

    const uploadGIFBody = await response.json();
    const newGIFId = uploadGIFBody.data.id;

    return newGIFId;
  } catch (error) {
    throw new Error(`Error in uploadGIF async function: ${error.message}`);
  }
};

/**
 * Loads James Bond GIFs from the Giphy API.
 * @async
 * @param {string} [limit='25'] - The maximum number of GIFs to load.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects representing the loaded GIFs.
 * @throws {Error} - Throws an error if the fetching or parsing of GIFs fails.
 */
export const loadBondGIFs = async (limit = '25') => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_MASTER}&q=james bond&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);

    if (!response.ok) {
      throw new Error(`Failed to fetch Bond GIFs: ${response.message}`);
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
    throw new Error(`Error in loadBondGIFs function: ${e.message}`);
  }
};

//  LOAD RANDOM GIF
/**
 * Loads a random GIF from the Giphy API.
 * @async
 * @returns {Promise<Object>} - A promise that resolves to an object representing the loaded GIF.
 * @throws {Error} - Throws an error if the fetching or parsing of the GIF fails.
 */
export const loadRandomGIF = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_MASTER}&rating=g`);

    if (!response.ok) {
      throw new Error(`No response: ${response.message}`);
    }

    const randomGIFbody = await response.json();
    const randomGIFasObject = randomGIFbody.data;

    const randomGIFObject = {
      title: randomGIFasObject.title,
      id: randomGIFasObject.id,
      image: {
        url: randomGIFasObject?.images.original.url ?? '',
        height: randomGIFasObject?.images.original.height ?? '',
        width: randomGIFasObject?.images.original.width ?? '',
      },
    };

    return randomGIFObject;
  } catch (error) {
    throw new Error(`Cannot load a random GIF: ${error.message}`);
  }
};


// FOR TESTING PURPOSES

// STANDARD GET
// (async () => {
//   try {
//     const result = await loadGIFsBySearchTerm('cats', '5');
//     console.log('Async operation completed:', result);
//   } catch (error) {
//     console.error('An error occurred during async operation:', error);
//   }
// })();

// UPLOAD POST
// (async () => {
//   try {
//     const tags = 'cats,dogs';
//     const fileURL = 'https://bs.uenicdn.com/blog/wp-content/uploads/2018/04/giphy.gif';
//     const file = null;
//     const sourcePostURL = '';

//     const result = await uploadGIF(tags, file, fileURL, sourcePostURL);
//     console.log('Async operation completed:', result);
//   } catch (error) {
//     console.error('An error occurred during async operation:', error);
//   }
// })();
