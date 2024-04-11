const API1 = 'u5hAg5LLnVxq1EyKBHVCHDRkivGmhlLO' // Ivelin

const API2 = 'i7SX3xHx69XyHHqMJ95BZXF8M2T8AWgy' // Bilyana

const API3 = 'BT77wCZrnoYKVFzyVTG4pcYZ3LOrldvN' // Atanas

export const API_MASTER = API1

export const API_KEY_TRENDING = `https://api.giphy.com/v1/gifs/trending?api_key=${API_MASTER}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`

export const API_KEY_BY_ID = `https://api.giphy.com/v1/gifs/${GIF_ID}?api_key=${API_MASTER}&rating=g`

export const API_KEY_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_MASTER}&q=${SEARCH_TERM}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

export const API_KEY_FAVORITE = `https://api.giphy.com/v1/gifs?api_key=${API_MASTER}&ids=${FAVORITE_ARRAY.join(',')}&rating=g`
