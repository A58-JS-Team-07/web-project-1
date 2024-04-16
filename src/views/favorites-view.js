import { toGIFSnippet } from './trending-view.js';

// export const toFavoritesView = (favoriteGIFS, randomObject) => `
// <div id="fav-gifs">
//   <h1>Favorite GIFs:</h1>
//   <div class="gifs-listing">
//     ${favoriteGIFS.map(toGIFSnippet).join('\n') || toGIFSnippet(randomObject)}
//   </div>
// </div>
// `;

/**
 * Generates HTML markup for displaying favorite GIFs.
 * @param {Object[]} favoriteGIFS - An array of objects representing favorite GIFs. 
 * @param {Object} randomObject - An object representing a random GIF. 
 * @returns {string} - The HTML markup for displaying favorite GIFs.
 */
export const toFavoritesView = (favoriteGIFS, randomObject) => {
  if (favoriteGIFS.length !== 0) {
   return `
<div id="fav-gifs">
  <h1>Your favorite GIFs</h1>
  <div class="gifs-listing">
    ${favoriteGIFS.map(toGIFSnippet).join('\n')}
  </div>
</div>
`;
  } else {
   return `
<div id="fav-gifs">
  <h1>Your favorite GIFs</h1>
  <p>Currently, you don\'t have any GIF as favorite</p>
  <h2>Anyway, here\'s a random one: </h2>
  <div class="gifs-listing">
    ${toGIFSnippet(randomObject)}
  </div>
</div>
`;
  }
};
