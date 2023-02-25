import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(`.gallery`);

const markup = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image" src="${galleryItem.preview}" 
    data-source="${galleryItem.original}" 
    alt="${galleryItem.description}"/>
</a></div>`
  )
  .join("");

gallery.innerHTML = markup;

const clickOnItem = (event) => {
  event.preventDefault();

  if (event.target.classList.contains(`gallery__item`)) return;
  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${source}" width="800" height="600">
`);

  instance.show();
};

gallery.addEventListener(`click`, clickOnItem);
// window.addEventListener("keydown", function (event) {
//   if (event.keydown === "Escape") {
//     instance.style.display = "none";
//   }
// });
