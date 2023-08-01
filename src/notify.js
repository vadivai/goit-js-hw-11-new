const notify = {
  success: Notiflix.Notify.success(`Hooray! We found the ${response.data.totalHits} images of ${refs.userInput.value}`);
  failure: Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  empty: Notiflix.Notify.info('The input of search are empty. Please, type your request!');
  error: Notiflix.Notify.failure(error);
  end: Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
};

