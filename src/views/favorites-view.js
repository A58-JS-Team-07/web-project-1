import { toGIFSnippet } from './gif-snippet-view.js';

// export const toFavoritesView = (favoriteGIFS, randomObject) => `
// <div id="fav-gifs">
//   <h1>Favorite GIFs:</h1>
//   <div class="gifs-listing">
//     ${favoriteGIFS.map(toGIFSnippet).join('\n') || toGIFSnippet(randomObject)}
//   </div>
// </div>
// `;

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
  }
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
};

