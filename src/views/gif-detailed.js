import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toGIFDetailed = (GIF) => `
<div class="gif-detailed">
  <h1>${GIF.title}</h1>
  <div class="image">
    <img src="${GIF.image.url}">
  </div>
  <div class="gif-info">
    <p>${GIF.user.name}</p>
    <p>${GIF.user.username}</p>
    <p>${GIF.user.description}</p>
  </div>
  <div class="favs">
    <p> Add to favorite ${renderFavoriteStatus(GIF.id)}</p> 
  </div>
  <div class="source">
    <p id="source">Source: ${GIF.source}</p>
  </div>
</div>
`;
