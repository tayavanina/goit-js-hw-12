// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query, page). Ця функція повинна приймати два параметри query (пошукове слово, яке є рядком)
// та page (номер сторінки, яка є числом), здійснювати HTTP-запит і повертати значення властивості
// data з отриманої відповіді.

import axios from 'axios';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const myApiKey = '57567938-a750dc86e3e74b59c9f6f987b';
const imagePerPage = 15;
export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: myApiKey,
      q: query,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: imagePerPage,
    },
  });
  return response.data;
}
