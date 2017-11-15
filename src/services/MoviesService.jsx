import axios from 'axios';

import API, { API_KEY } from './APIService';

export const GetMovies = () => {
  const url = `${API}/discover/movie?api_key=${API_KEY}`;
  return axios.get(url);
};

export const GetMovieById = (id) => {
  const url = `${API}/movie/${id}?api_key=${API_KEY}`;
  return axios.get(url);
};
