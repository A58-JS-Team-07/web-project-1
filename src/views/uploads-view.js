import { toGIFSnippet } from './gif-snippet-view.js';

/**
 * Generates HTML markup for displaying uploaded GIFs.
 * @param {Object[]} uploads - An array of objects representing uploaded GIFs.
 * @returns {string} - The HTML markup for displaying the uploaded GIFs.
 */
export const toUploadsView = (uploads) => {
  return `<h1 id="page-title">My Uploads</h1>
    <div class="gifs-listing">
        ${uploads.map(toGIFSnippet).join('\n') || `<p>Upload some gifs to see them here.</p>`}
    </div>`;
};

