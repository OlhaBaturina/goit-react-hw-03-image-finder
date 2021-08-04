import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import CustomLoader from './Components/Loader/Loader';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';
import fetchImgAPI from './servises/fetchImgAPI';

class App extends Component {
    state = {
        images: [],
        currentPage: 1,
        searchQuery: '',
        showModal: false,
        loading: false,
        error: null,
        modalImage: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImgAPI();
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

    fetchImgAPI = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { searchQuery, currentPage };

        if (!searchQuery) {
            return;
        }

        this.setState({ loading: true });

        fetchImgAPI
            .fetchImgAPI(options)
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
                this.setState({ loading: false });
            });
    };

    openModal = largeImageURL => {
        this.setState({
            showModal: true,
            modalImage: largeImageURL,
        });
    };

    closeModal = () => {
        this.setState({
            showModal: false,
            modalImage: '',
        });
    };

    render() {
        const { showModal, error, images, loading, modalImage } = this.state;

        return (
            <div className={s.App}>
                <ToastContainer />
                <Searchbar onSubmit={this.onChangeQuery} />
                {error ? (
                    toast.error(`Something went wrong error: ${error}`)
                ) : (
                    <ImageGallery images={images} onImgClick={this.openModal} />
                )}
                {loading && <CustomLoader />}
                {images.length > 0 && (
                    <Button
                        text={'Load more...'}
                        onLoadClick={this.fetchImgAPI}
                    />
                )}
                {showModal && (
                    <Modal closeModal={this.closeModal}>
                        <img src={modalImage} alt="img" />
                    </Modal>
                )}
            </div>
        );
    }
}

export default App;
