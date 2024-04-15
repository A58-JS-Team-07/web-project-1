import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toGIFDetailed = (GIF) => `
<div class="gif-detailed">
  <h1>${GIF.title}</h1>
  <div id="gif-detailed-inner">
    <div class="col-right">
      <img src="${GIF.image.url}" class="detailed-image" width="100%" height="100%">
    </div>
    <div class="col-left">
      <div class="gif-info">
        <div class="user-profile">
          <img src="${GIF.user.avatar}">
          <div class="user-name-username">
            <p>${GIF.user.name}</p>
            <p>@${GIF.user.username}</p>
            </div>
        </div>
        <p id="user-description">${GIF.user.description}</p>
      </div>
      <div class="favs-source">
        <p class="favs">Add to favorite ${renderFavoriteStatus(GIF.id)}</p> 
        <p id="source">Source: ${GIF.source}</p>
      </div>
    </div>
  </div>
</div>
`;
