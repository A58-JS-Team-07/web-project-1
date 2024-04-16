import { toGIFSnippet } from './gif-snippet-view.js';

export const toUploadsView = (uploads) => {
  return `<h1 id="page-title">My Uploads</h1>
    <div class="gifs-listing">
        ${uploads.map(toGIFSnippet).join('\n') || `<p>Upload some gifs to see them here.</p>`}
    </div>`;
};

