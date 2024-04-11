export const toTrendingView = (pageTitle, pageDescription, GIFsArray) => {
  return `<h1 id="page-title">${pageTitle}</h1>
  <p id="">${pageDescription}</p>
  <div class="gifs-listing">${GIFsArray.map(toMovieSimple).join('\n')}</div>`;
};

export const toMovieSimple = (GIF) => `
<div class="gif-snippet">
  <img class="gif-image" src="${GIF.image.url}" alt="${GIF.title}" width=100% height=auto>
  <h2 class="gif-title">${GIF.title}</h2>
</div>
`;


// <!-- ${renderFavoriteStatus(GIF.id)} THIS MUST BE corrected !!!!!!!!!!!!!! -->
