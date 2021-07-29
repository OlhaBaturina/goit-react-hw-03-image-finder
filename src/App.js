import React, { Component } from 'react';
import Form from './Components/Form/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import s from './App.css';

class App extends Component {
    state = {};

    render() {
        return (
            <>
                <Form />
                <ToastContainer />
            </>
        );
    }
}

export default App;
