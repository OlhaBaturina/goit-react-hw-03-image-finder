import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
    // static propTypes = {
    //     submitMethod: PropTypes.func.isRequired,
    // };
    state = { name: '', number: '', id: '' };

    // uniqId = uuidv4();

    render() {
        return (
            <div className="Overlay">
                <div className="Modal">
                    <img src="" alt="" />
                </div>
            </div>
        );
    }
}

export default Modal;
