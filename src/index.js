import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './search';
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
// selectors.btnLoadMore.addEventListener('click', onLoadMore);

function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = selectors.userInput.value.trim();
  selectors.gallery.innerHTML = '';

  fetchImages(inputValue).then(
    data => selectors.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits)));
      // if (data.hits.length === 0) {
      // Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
      // }
  
};
 
  // selectors.gallery.innerHTML = fetchImages(response.data.hits);
  // selectors.gallery.insertAdjacentHTML('beforeend', fetchImages(response.data.hits));