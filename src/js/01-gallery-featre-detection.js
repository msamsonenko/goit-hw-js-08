//sets img element src attribute if feature is supported by browser
export function addSrcAttrToImg() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(image => {
    image.src = image.dataset.src;
  });
}
//appends script to the bottom of the page if feature is not supported by browser
export function addLaziLoadingScript() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  galleryContainer.appendChild(script);
}
