import { toGIFSnippet } from './trending-view.js';

export const toSearchView = (searchTerm, GIFsArray) => {
  return `<h1 id="page-title">Search: ${searchTerm}</h1>
    <div class="gifs-listing">${GIFsArray.map(toGIFSnippet).join('\n')}</div>`;
};


