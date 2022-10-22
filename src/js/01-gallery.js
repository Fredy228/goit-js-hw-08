// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems
    .map(item => {
        return `<a class="gallery__item" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>`
    })
    .join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });