import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

class Form extends Component {
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
        return (
            <div className={s.thumb}>
                <p>Hello, baby!</p>
                <button className={s.button} onClick={this.handleSubmit}>
                    Hi
                </button>
            </div>
        );
    }
}

export default Form;
