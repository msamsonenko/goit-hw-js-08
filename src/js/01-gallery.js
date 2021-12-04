import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { addSrcAttrToImg, addLaziLoadingScript } from './01-gallery-featre-detection';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//get access to gallery container tag
const galleryContainer = document.querySelector('.gallery');
//create initial picture gallery murkup
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.classList.add('gallery__item');
  galleryLinkEl.href = original;

  const galleryImgEl = document.createElement('img');
  galleryImgEl.classList.add('gallery__image');
  galleryImgEl.loading = 'lazy';
  galleryImgEl.alt = description;
  galleryImgEl.dataset.src = preview;
  galleryImgEl.title = description;

  galleryLinkEl.appendChild(galleryImgEl);

  return galleryLinkEl;
});
//append gallery items murkup to gallery container and shuffles images on every page load
galleryContainer.append(...galleryMarkup.sort(() => Math.random() - 0.5));
//creates simpleLightBox slider for original image sizes preview
let gallerySlider = new SimpleLightbox('.gallery a');
gallerySlider.on('show.simplelightbox');
//browser feature detection for lazy images load
if ('loading' in HTMLImageElement.prototype) {
  addSrcAttrToImg();
} else {
  addLaziLoadingScript();
}

console.log(galleryItems);
