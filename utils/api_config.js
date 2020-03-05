export const CORS_AVOID = 'https://cors-anywhere.herokuapp.com/' 
export const BASIC_URL = `https://api.themoviedb.org/3/`
export const API_KEY = 'api_key=47e345218071181a1ca1d4eb072cc0cf'
export const LANGUAGE = (lang) => `&language=${lang}`
export const GET_IMAGE = (link, width) => `https://image.tmdb.org/t/p/w${width}/${link}`
//https://api.themoviedb.org/3/movie/76341?api_key=47e345218071181a1ca1d4eb072cc0cf&language=ru-RU