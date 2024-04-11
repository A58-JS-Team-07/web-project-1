export const toTrendingView = (pageTitle, pageDescription, GIFsArray) => `
<h1 id="page-title">${pageTitle}</h1>
<p id="">${pageDescription}</p>
<div class="">${GIFsArray.map().join('\n')}</div>
`;

export const toMovieSimple = (GIF) => `
<div class="gif-snippet">
  <!-- ${renderFavoriteStatus(GIF.id)} THIS MUST BE corrected !!!!!!!!!!!!!! -->
  <img class="gif-image" src="${GIF.image.url}" alt="${GIF.title}" width=100% height=auto>
  <h2 class="gif-title">${GIF.title}</h2>
</div>
`;