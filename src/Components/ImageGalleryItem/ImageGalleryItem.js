import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGaleryItem extends Component {
    // static propTypes = {
    //     submitMethod: PropTypes.func.isRequired,
    // };
    state = { name: '', number: '', id: '' };

    // uniqId = uuidv4();

    handleSubmit = event => {
        event.preventDefault();
        console.log('hello, baby');
    };

    render() {
        return <div></div>;
    }
}

export default ImageGaleryItem;
