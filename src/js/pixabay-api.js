import axios from 'axios';

export default function fetchImages(searchText) {
  const options = {
    params: {
      key: '49142387-370a201ec94f73d63c9116370',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}
