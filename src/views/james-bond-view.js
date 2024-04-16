import { toGIFSnippet } from "./trending-view.js";

/**
 * Generates HTML markup for displaying James Bond GIFs.
 * @param {Object[]} bondGIFS - An array of objects representing James Bond GIFs. 
 * @returns {string} - The HTML markup for displaying James Bond GIFs.
 */
export const toJamesBondView = (bondGIFS) => `
<div id="bond-gifs">
  <h2>The Name's Bond... James Bond</h2>
  <div class="gifs-listing">
    ${bondGIFS.map(toGIFSnippet).join('\n')}
  </div>
</div>
`;