import { obj } from "./objRefs.js";
import { renderListOption } from "./renderList.js";
import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";
import { filterBreeds } from "./filterBreeds";
import { Notify } from "notiflix/build/notiflix-notify-aio";

function refresh() {
  obj.loadError.classList.add("is-hidden");
  obj.select.classList.add("is-hidden");
  fetchBreeds()
    .then((data) => {
      obj.load.classList.add("is-hidden");
      obj.select.classList.remove("is-hidden");
      renderListOption(data);
    })
    .catch(() => {
      obj.load.classList.add("is-hidden");
      Notify.failure("Oops! Something went wrong! Try reloading the page!");
    });
}

refresh();

obj.select.addEventListener("change", onChange);

function onChange(evt) {
  obj.load.classList.remove("is-hidden");
  obj.catInfo.classList.add("is-hidden");
  const { value } = evt.currentTarget;
  fetchCatByBreed()
    .then((arr) => {
      obj.load.classList.add("is-hidden");
      obj.catInfo.classList.remove("is-hidden");
      const {
        name,
        description,
        temperament,
        image: { url },
      } = filterBreeds(arr, value)[0];
      const creatMarkup = `<img class='img-cat'src="${url}" alt="${name}" width=400><div class='left-side'><h1>${name}</h1><p>${description}</p><p>${temperament}</p></div>`;
      obj.catInfo.innerHTML = creatMarkup;
    })
    .catch(() => {
      Notify.failure("Oops! Something went wrong! Try reloading the page!");
    });
}
