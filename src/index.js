import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './search';
import { createMarkup } from './createMarkup';
import { onLoadMore, clearGallery, noMorePhotos } from './functions';
import './css/styles.css';

const selectors = {
  searchForm: document.querySelector('.search-form'),
  userInput: document.querySelector('input'),
  btnSearch: document.querySelector('.search-button'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.load-more'),
};

selectors.searchForm.addEventListener('submit', onFormSubmit);
// selectors.btnLoadMore.addEventListener('click', onLoadMore);

function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = selectors.userInput.value.trim();
  selectors.gallery.innerHTML = '';

  // console.log(inputValue);
  // (!inputValue) - так можно?

  if (inputValue === '') {
    clearGallery();
    selectors.btnLoadMore.classList.add('is-hidden');
  };

  fetchImages(inputValue).then(
    data => selectors.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits))
  );
  }
  // const response = await axios.get(fetchImages('elefant'));
 
  // selectors.gallery.innerHTML = fetchImages(response.data.hits);
  // selectors.gallery.insertAdjacentHTML('beforeend', fetchImages(response.data.hits));


// async function onFormSubmit(event) {
//   event.preventDefault();
//   let inputValue = selectors.userInput.value.trim();
//   try {
//     // (!inputValue) - так можно?
//     if (inputValue === '') {
//       clearGallery();
//       selectors.btnLoadMore.classList.add('visually-hidden');
//       Notiflix.Notify.info('The input of search are empty. Please, type your request!');
//     } else {
//       const response = await axios.get(fetchUrl());

//       if (response.data.totalHits === 0) {
//         Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//         selectors.btnLoadMore.classList.add('visually-hidden');
//         clearGallery();
//       } else {
//         if (pageNum === 1 && event.submitter !== refs.loadMoreBtnEl) {
//           clearGallery();
//           refs.galleryEl.innerHTML = renderPhotoCard(response.data.hits);
//         } else {
//           refs.galleryEl.insertAdjacentHTML(
//             'beforeend',
//             renderPhotoCard(response.data.hits)
//           );
//         }

//         slb.refresh();

//         if (response.data.totalHits > photosPerPage) {
//           refs.loadMoreBtnEl.classList.remove('visually-hidden');
//         }

//         if (pageNum === 1) {
//           Notiflix.Notify.success(`Hooray! We found the ${response.data.totalHits} images of ${refs.inputEl.value}`);
//         }
//         slb.refresh();

//         noMorePhotos(response);
//       }
//     }
//   } catch (error) {Notiflix.Notify.failure(error);}
// }

