import { toGIFSnippet } from './gif-view.js';

export const toJamesBondView = (bondGIFS) => `
<div id="bond-gifs">
  <h2>The Name's Bond... James Bond</h2>
  <div class="gifs-listing">
    ${bondGIFS.map(toGIFSnippet).join('\n')}
  </div>
</div>
`;