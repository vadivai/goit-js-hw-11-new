import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32655416-b4a8f18676ee213d66752ceaa';
const params = 'image_type=photo&orientation=horizontal&safesearch=true'
let perPage = 40;

// запрос через axios
const fetchImages = async (query, page) => {
    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${query}&per_page=${perPage}&page=${page}&${params}`);
    return await response.data;
    // console.log(data.hits);
    // console.log(response);
}

export {perPage, fetchImages}

// запрос через fetch
// export const fetchImages = async (query) => {
//     const response = await fetch(`${BASE_URL}?key=${KEY}&q=${query}&per_page=${perPage}&page=${page}&${params}`);
//     return await response.json();
// };

// function serviceMovie(page = 1) {
//     return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }

//             return resp.json();
//         })
// }




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

