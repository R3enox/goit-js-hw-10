// https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_mlIgmWg4TVZBfi9Gtrj1sdv5250e9IGGoiYh5g8b3DcvRrHcRS7BffaE1dalL4li

const BASE_URL = "https://api.thecatapi.com/v1/";
const END_POINT = "breeds";
const options = {
  headers: {
    "x-api-key":
      "live_mlIgmWg4TVZBfi9Gtrj1sdv5250e9IGGoiYh5g8b3DcvRrHcRS7BffaE1dalL4li",
  },
};
export function fetchBreeds() {
  return fetch(`${BASE_URL}${END_POINT}`, options).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export function fetchCatByBreed() {
  return fetch(`${BASE_URL}${END_POINT}`, options).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
