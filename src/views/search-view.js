import { toGIFSnippet } from './gif-snippet-view.js';

/**
 * Generates HTML markup for displaying search results.
 * @param {string} searchTerm - The search term used for the query.
 * @param {Object[]} GIFsArray - An array of objects representing the search results (GIFs).
 * @returns {string} - The HTML markup for displaying the search results.
 */
export const toSearchView = (searchTerm, GIFsArray) => {
  return `<h1 id="page-title">Search: ${searchTerm}</h1>
    <div class="gifs-listing">${GIFsArray.map(toGIFSnippet).join('\n')}</div>`;
};


