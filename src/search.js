import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32655416-b4a8f18676ee213d66752ceaa';
const params = 'image_type=photo&orientation=horizontal&safesearch=true'
let perPage = 40;
let page = 1;

// запрос через axios
export const fetchImages = async (searchQuery) => {
    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&per_page=${perPage}&page=${page}&${params}`);
    const data = await response.data;
    return data;
    // console.log(data.hits);
    // console.log(response); 
    // createMarkup(data.hits);   
}

// запрос через fetch
// export const fetchImages = async (searchQuery) => {
//     const response = await fetch(`${BASE_URL}?key=${KEY}&q=${searchQuery}&per_page=${perPage}&page=${page}&${params}`);
//     const data = await response.json();
//     return data;
// };



// тесты
// console.log(fetchImages('cat'));
    // .then(data => console.log(data))
    // .then(data => createMarkup(data))
    // .catch(error =>console.log(error));
    
//     try {
//       const responce = await axios.get(url);
//       return responce;
//     } catch {
//       error => console.error(error);
// }

    // const response = await fetch(`${BASE_URL}?key=${KEY}&q=${searchQuery}&per_page=${perPage}&page=${page}&${params}`);
    // if (!response.ok) {
    //     throw new Error(response.statusText)
    // }
    // const data = await response.json();

