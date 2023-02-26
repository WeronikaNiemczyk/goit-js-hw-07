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

gallery.addEventListener(`click`, clickOnItem);

function clickOnItem(event) {
  event.preventDefault();

  if (event.target.classList.contains(`gallery__item`)) return;
  const source = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
  <img src="${source}" width="800" height="600">`,

    {
      onShow: () => {
        gallery.addEventListener(`keydown`, onEsc);
      },
      onClose: () => {
        gallery.removeEventListener(`keydown`, onEsc);
      },
    }
  );

  const onEsc = (event) => {
    if (event.key === `Escape`) {
      instance.close();
    }
  };
  instance.show();
}
