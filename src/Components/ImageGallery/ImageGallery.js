import React, { Component } from 'react';
import s from './ImageGalery.module.css';
// import ImageGaleryItem from '../ImageGalleryItem/ImageGalleryItem'

class ImageGalery extends Component {
    state = {
        API_key: '21973303-2099b25a108053c1f3c237a34',
        apiQuery: 'dog',
        page: 1,
        images: [],
    };

    // uniqId = uuidv4();

    async componentDidMount() {
        fetch(
            `https://pixabay.com/api/?q=${this.state.apiQuery}&page=${this.state.page}&key=${this.state.API_key}&image_type=photo&orientation=horizontal&per_page=12`,
        )
            .then(r => r.json())
            .then(({ hits }) => console.log(hits));
    }

    // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

    render() {
        return (
            <ul className="ImageGallery">
                {/* <!-- Набор <li> с изображениями --> */}
            </ul>
        );
    }
}

export default ImageGalery;
