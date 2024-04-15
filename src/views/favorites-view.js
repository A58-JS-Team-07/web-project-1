import { toGIFSnippet } from './trending-view.js';

export const toFavoritesView = (favoriteGIFS) => `
<div id="fav-gifs">
  <h1>Favorite GIFs:</h1>
  <div class="gifs-listing">
    ${favoriteGIFS.map(toGIFSnippet).join('\n') || '<p>Add some GIFs to favorites to see them here.</p>'}
  </div>
</div>
`;
