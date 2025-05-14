import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Enter a search query!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.info({ title: 'Oops', message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong. Try again later.' });
  } finally {
    hideLoader();
  }
});