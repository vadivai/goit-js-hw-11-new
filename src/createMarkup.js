export function createMarkup(items) {   
    
    return items.map(item => `
        <div class="photo-card">
            <div class="wrapper">
                <a href="${item.largeImageURL}"> 
                    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" width="300"/> 
                </a>
            </div>
        <div class="info">
            <p class="info-item">
                <b>Likes</b>
                <span>${item.likes}</span>
            </p>
            <p class="info-item">
                <b>Views</b>
                <span>${item.views}</span>
            </p>
            <p class="info-item">
                <b>Comments</b>
                <span>${item.comments}</span>
            </p>
            <p class="info-item">
                <b>Downloads</b>
                <span>${item.downloads}</span>
            </p>
        </div>
        </div>`).join('');
}