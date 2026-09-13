// У файлі main.js напиши всю логіку роботи додатка.
// Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
// Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreBtn,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
let page = 1;
let totalPages = 0;
let currentQuery = '';
const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  hideLoadMoreButton();
  clearGallery();
  const inputWord = event.target.elements['search-text'].value.trim();

  if (inputWord === '') {
    return iziToast.error({
      position: 'topRight',
      message: 'Please enter the word to search!',
    });
  }

  if (inputWord !== currentQuery) {
    page = 1;
    currentQuery = inputWord;
    clearGallery();
  }

  showLoader();
  getImagesByQuery(inputWord, page)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      createGallery(data.hits);
      totalPages = Math.ceil(data.totalHits / 15);

      if (page < totalPages) {
        showLoadMoreButton();
      }
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        title: `${error}`,
        message: `${error.message}`,
      });
    })
    .finally(() => {
      hideLoader();
    });
}

loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleLoadMore(event) {
  try {
    page++;

    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.show({
        position: 'topRight',
        title: 'The end',
        message: `We're sorry, but you've reached the end of search results.
`,
      });
    }
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      title: `${error}`,
      message: `${error.message}`,
    });
  }
}
