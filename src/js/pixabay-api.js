// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

import axios from 'axios';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const myApiKey = '57567938-a750dc86e3e74b59c9f6f987b';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        title: `${error}`,
        message: `${error.message}`,
      });
      throw error;
    });
}
