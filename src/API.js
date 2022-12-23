import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'aa48b7303a91a9c7df7e1a4ff8af3e68';

export const getTrending = async () => {
    const trend = await axios.get(`/trending/movie/day?api_key=${API_KEY}`)

    return trend.data;
};

export const searchMovie = async query => {
    const search = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)

    return search.data;
};

export const detalisMovie = async id => {
    const detalis = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)

    return detalis.data;
};

export const creditsMovie = async id => {
    const credits = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)

    return credits.data;
};

export const reviewsMovie = async id => {
    const reviews = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)

    return reviews.data;
};