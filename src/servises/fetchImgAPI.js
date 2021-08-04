import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '21973303-2099b25a108053c1f3c237a34';

const fetchImgAPI = ({ searchQuery, currentPage = 1, perPage = 12 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${apiKey}&page=${currentPage}`,
        )
        .then(res => res.data.hits);
};

export default { fetchImgAPI };
