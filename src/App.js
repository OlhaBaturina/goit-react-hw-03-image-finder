import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Loader from './Components/Loader/Loader';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import fetchImgAPI from './services/fetchImgAPI';

class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQuery: '',
        showModal: false,
        isLoading: false,
        error: null,
        modalImage: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImg();
        }
    }

    onChangeQuery = query => {
        this.setState({
            searchQuery: query.trim(),
            currentPage: 1,
            images: [],
            error: null,
        });
    };

    fetchImg = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { searchQuery, currentPage };

        if (!searchQuery) {
            return;
        }

        this.setState({ isLoading: true });

        fetchImgAPI
            .fetchImg(options)
            .then(hits => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...hits],
                    currentPage: prevState.currentPage + 1,
                }));

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error => this.setState({ error }))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };

    openModal = largeImageURL => {
        this.setState({
            showModal: true,
            modalImage: largeImageURL,
        });
    };

    toggleModal = () => {
        this.setState({
            showModal: false,
            modalImage: '',
        });
    };

    render() {
        const { showModal, images, isLoading, modalImage, error } = this.state;
        const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

        return (
            <>
                {/* {error && toast.error(`Ooops... something went wrong: ${error}`)} */}
                <Searchbar onSubmit={this.onChangeQuery} />
                <>
                    <ImageGallery images={images} onImgClick={this.openModal} />
                    {shouldRenderLoadMoreButton && (
                        <Button
                            text={'Load more'}
                            onLoadClick={this.fetchImg}
                        />
                    )}
                    {isLoading && <Loader />}
                    {showModal && (
                        <Modal onClose={this.toggleModal}>
                            <img src={modalImage} alt="" />
                        </Modal>
                    )}
                </>
            </>
        );
    }
}

export default App;

// class App extends Component {
//     state = {
//         imageName: '',
//         imagesArray: [],
//     };

//     onSubmit = searchQuery => {
//         console.log(searchQuery);
//         this.setState({ imageName: this.searchQuery });
//     };

//     imagesOnState = image =>{
//         this.setState({imagesArray: [...image]})
//     }

//     render() {
//         return (
//             <>
//                 <Searchbar
//                     submitForm={this.onSubmit} />
//                 <ImageGallery

//                     // children={this.state.imagesArray
//                     // .map(image => <ImageGalery
//                     // src={image.webformatURL} alt={image.tags.split('')}/>)}
//                 />
//               <ImageGalleryItem
//                     searchQuery={this.state.imageName}
//                     imagesArray={this.imagesOnState}
//               />
//                 <Loader />
//                 <Button />
//                 <Modal />
//                 <ToastContainer
//                     autoClose={2000} />
//             </>
//         );
//     }
// }

// export default App;
