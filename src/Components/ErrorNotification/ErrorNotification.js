import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorNotification = ({ text }) => {
    return toast.error({ text });
};

ErrorNotification.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ErrorNotification;
