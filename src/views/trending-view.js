import { toGIFSnippet } from "./gif-view.js";

export const toTrendingView = ( GIFsArray) => {
  return `<h1 id="page-title">Today's Trending GIFs</h1>
  <p id="">Discover the latest and most popular GIFs from around the 
  web on our dynamic platform powered by the Giphy API.</p>
  <div class="gifs-listing">${GIFsArray.map(toGIFSnippet).join('\n')}</div>`;
};

