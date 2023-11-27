import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40935264-b821e90bf1f17a588b8ffcbe3';

async function fetchImg(page = 1, info, perPage) {
  const params = new URLSearchParams({
    key: API_KEY,
    page: page,
    q: info,
    perPage: perPage,
    image_type: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`${BASE_URL}?${params}`).then(({ data }) => data);
}
export { fetchImg };