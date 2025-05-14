import axios from 'axios';

const API_KEY = '50252354-e48f782526adef10354766461';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
};