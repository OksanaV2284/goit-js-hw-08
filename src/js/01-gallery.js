// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const onGallery = document.querySelector('.gallery');
const onLisl = document.querySelector('.gallery__item');
onGallery.addEventListener('click', gallery);
onGallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div >
      <a class="gallery__item" href='${original}'>
        <img
          class="gallery__image"
          src="${preview}"
          data-source='${original}'
          alt="${description}"
        />
      </a>
    </div>`
    )
    .join('')
);
var gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
