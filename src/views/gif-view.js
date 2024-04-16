import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toGIFSnippet = (GIF) => `
<div class="gif-snippet" >
  ${renderFavoriteStatus(GIF.id)}
  <img class="gif-image" data-gif-id="${GIF.id}" 
  src="${GIF.image.url}" 
  alt="${GIF.title}" width=100% height=auto>
</div>
`;
