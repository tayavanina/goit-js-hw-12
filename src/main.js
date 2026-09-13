// У файлі main.js напиши всю логіку роботи додатка.
// Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
// Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  const inputWord = event.target.elements['search-text'].value.trim();

  if (inputWord === '') {
    return iziToast.error({
      position: 'topRight',
      message: 'Please enter the word to search!',
    });
  }
  showLoader();
  getImagesByQuery(inputWord)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      createGallery(data.hits);
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
