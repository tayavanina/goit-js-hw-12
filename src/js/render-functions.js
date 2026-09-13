// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції
// для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї,
// додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
export const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.load-more-btn');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export async function createGallery(images) {
  gallery.insertAdjacentHTML(
    'beforeend',
    images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
      <img class = "gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="image-info">
  <div>
    <p class="info-title">Likes</p>
    <p class="info-value">${likes}</p>
  </div>

  <div>
    <p class="info-title">Views</p>
    <p class="info-value">${views}</p>
  </div>

  <div>
    <p class="info-title">Comments</p>
    <p class="info-value">${comments}</p>
  </div>

  <div>
    <p class="info-title">Downloads</p>
    <p class="info-value">${downloads}</p>
  </div>
</div>
    </li>`
      )
      .join('')
  );
  lightbox.refresh();
}

export async function clearGallery() {
  gallery.innerHTML = '';
}

export async function showLoader() {
  loader.classList.add('is-visible');
}
export async function hideLoader() {
  loader.classList.remove('is-visible');
}

export async function showLoadMoreButton() {
  loadMoreBtn.classList.add('is-visible');
}
export async function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('is-visible');
}
