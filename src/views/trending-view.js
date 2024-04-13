export const toTrendingView = (pageTitle, pageDescription, GIFsArray) => {
  return `<h1 id="page-title">${pageTitle}</h1>
  <p id="">${pageDescription}</p>
  <div class="gifs-listing">${GIFsArray.map(toGIFSnippet).join('\n')}</div>`;
};

export const toGIFSnippet = (GIF) => `
<div class="gif-snippet" >
  <img class="gif-image" data-gif-id="${GIF.id}" src="${GIF.image.url}" alt="${GIF.title}" width=100% height=auto>
</div>
`;


// <!-- ${renderFavoriteStatus(GIF.id)} THIS MUST BE corrected !!!!!!!!!!!!!! -->
