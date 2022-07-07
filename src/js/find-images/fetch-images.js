import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27830209-3f5c1f8822da29de83683a02e';

export default async function fetchImages(value, page) {

  const filteredUrl = `?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${BASE_URL}${filteredUrl}`).then(response => response.data);
}





// export const fetchImages = async (value, page) => {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: value,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 40,
//     page: page,
//   });

//   return await axios.get(`${BASE_URL}?${searchParams}`).data;
// };