import React, { Component } from 'react';
// import Form from './Components/Form/Form';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import s from './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem';
import Loader from './Components/Loader/Loader';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

class App extends Component {
    state = {};

    render() {
        return (
            <>
                <Searchbar

                // submitForm={onSubmit}
                />
                <ImageGallery />
                <ImageGalleryItem />
                <Loader />
                <Button />
                <Modal />
            </>
        );
    }
}

export default App;
