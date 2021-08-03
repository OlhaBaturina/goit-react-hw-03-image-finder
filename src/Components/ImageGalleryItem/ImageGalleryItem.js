import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGaleryItem = (alt, src) => (
    <li className="ImageGalleryItem">
        <img src={src} alt={alt} className={s.ImageGalleryItem_image} />
    </li>
);

export default ImageGaleryItem;
