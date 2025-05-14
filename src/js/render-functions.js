import SimpleLightbox from 'simplelightbox';
let lightbox;

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader'); 

export const createGallery = (images) => {
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>Likes <span>${image.likes}</span></p>
        <p>Views <span>${image.views}</span></p>
        <p>Comments <span>${image.comments}</span></p>
        <p>Downloads <span>${image.downloads}</span></p>
      </div>
    </li>`).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
};

export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

export const showLoader = () => {
    loader.classList.remove('hidden');
  };
  
  export const hideLoader = () => {
    loader.classList.add('hidden');
  };