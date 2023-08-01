// function onLoadMore(event) {
//   pageNum += 1;
//   onFormSubmit(event);
// }

function clearGallery() {
  selectors.gallery.innerHTML = '';
}

// function noMorePhotos(response) {
//   if (response.data.totalHits / (pageNum * photosPerPage) < 1 && pageNum > 1) {
//     refs.loadMoreBtnEl.classList.add('visually-hidden');
//     Notiflix.Notify.info(
//       "We're sorry, but you've reached the end of search results."
//     );
//   }
// }

export {onLoadMore, clearGallery, noMorePhotos}