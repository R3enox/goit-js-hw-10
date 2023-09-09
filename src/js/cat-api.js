import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const END_POINT = 'breeds';

axios.defaults.headers.common['x-api-key'] =
  'live_mlIgmWg4TVZBfi9Gtrj1sdv5250e9IGGoiYh5g8b3DcvRrHcRS7BffaE1dalL4li';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}${END_POINT}`).then(resp => {
    return resp.data;
  });
}

export function fetchCatByBreed() {
  return axios.get(`${BASE_URL}${END_POINT}`).then(resp => {
    return resp.data;
  });
}
