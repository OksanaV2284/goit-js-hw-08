// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(SimpleLightbox);

const onGallery = document.querySelector('.gallery');
onGallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li >
      <a class="gallery__item" href='${original}'>
        <img
          class="gallery__image"
          src="${preview}"
          data-source='${original}'
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join('')
);

onGallery.addEventListener(
  'click',
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  })
);

function onClickImg(e) {
  e.preventDefault();

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
