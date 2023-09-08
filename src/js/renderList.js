import { obj } from "./objRefs";
export const renderListOption = (data) => {
  const renderElem = data
    .map(({ id, name }) => {
      return `<option value='${id}'>${name}</option>`;
    })
    .join("");
  obj.select.insertAdjacentHTML("beforeend", renderElem);
};
