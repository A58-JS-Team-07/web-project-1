import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Generates HTML markup for displaying a snippet of a GIF.
 * @param {Object} GIF - An object representing the GIF.
 * @returns {string} - The HTML markup for displaying the GIF snippet.
 */
export const toGIFSnippet = (GIF) => `
<div class="gif-snippet" >
  ${renderFavoriteStatus(GIF.id)}
  <img class="gif-image" data-gif-id="${GIF.id}" 
  src="${GIF.image.url}" 
  alt="${GIF.title}" width=100% height=auto>
</div>
`;
