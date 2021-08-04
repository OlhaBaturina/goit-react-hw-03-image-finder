import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => {
    return <h2 className="Notification">{text}</h2>;
};

Notification.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Notification;
