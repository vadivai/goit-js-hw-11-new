import axios from 'axios';
import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages, perPage } from './search';
import { createMarkup } from './createMarkup';
import './css/styles.css';

const selectors = {
  searchForm: document.querySelector('.search-form'),
  userInput: document.querySelector('input'),
  btnSearch: document.querySelector('.search-button'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
};

selectors.searchForm.addEventListener('submit', onFormSubmit);
selectors.gallery.addEventListener('click', onImageClick);
selectors.btnLoadMore.addEventListener('click', onLoadMore);
//После первого запроса кнопка появляется в интерфейсе под галереей.
// При повторном сабмите формы кнопка сначала прячется, а после запроса опять отображается.
// В ответе бэкенд возвращает свойство totalHits - общее количество изображений которые подошли под критерий поиска(для бесплатного аккаунта).Если пользователь дошел до конца коллекции, пряч кнопку и выводи уведомление с текстом "We're sorry, but you've reached the end of search results.".

// При поиске по новому ключевому слову значение page надо вернуть в исходное, так как будет пагинация по новой коллекции изображений.

let page;
let inputValue  = '';

function onFormSubmit(event) {
  event.preventDefault();
  page = 1;
  selectors.gallery.innerHTML = '';
  // console.log(selectors.userInput.value);
  const inputValue = selectors.userInput.value.trim();
  fetchImages(inputValue, page)
    .then(data => {
      console.log(data);
      if (data.hits.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      } else {
        selectors.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        let maxPages = data.totalHits / perPage;
      if (page < maxPages) {
        selectors.btnLoadMore.hidden = false; // кнопка появляется после рендеринга, если поиск успешный
        }
      }
      
    })
    .catch(err => Notiflix.Notify.failure('Ошибка в параметрах'));
  
 
};

function onLoadMore() {
  page += 1;
    fetchImages(inputValue, page)
        .then(data => {
          selectors.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
          let maxPages = data.totalHits / perPage;
          console.log(maxPages);
          if (page >= maxPages) {
            selectors.btnLoadMore.hidden = true;
            Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
            }
        })
  console.log('page', page);
}


  // selectors.gallery.innerHTML = fetchImages(response.data.hits);
  // selectors.gallery.insertAdjacentHTML('beforeend', fetchImages(response.data.hits));


function onImageClick(event) { 
  event.preventDefault();
}
  


// function serviceMovie(page = 1) {
//     const BASE_URL = 'https://api.themoviedb.org/3';
//     const END_POINT = '/trending/movie/week';
//     const API_KEY = "345007f9ab440e5b86cef51be6397df1";
//     return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }

//             return resp.json();
//         })
// }


// serviceMovie(498)
//     .then(data => {
//         console.log(data);
//         selectors.container.insertAdjacentHTML('beforeend', createMarkup(data.results))
//         if (data.page < data.total_pages) {
//             selectors.load.hidden = false;
//         }
//     })
//     .catch(err => console.log(err))

// Добавить отображение большой версии изображения с библиотекой SimpleLightbox для полноценной галереи.
// В разметке необходимо будет обернуть каждую карточку изображения в ссылку, как указано в документации.
// У библиотеки есть метод refresh() который обязательно нужно вызывать каждый раз после добавления новой группы карточек изображений.