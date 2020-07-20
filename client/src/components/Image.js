import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ to, imgDivClass, imgClass, src, alt }) => {
    return (
        <div class={imgDivClass}>
            <Link to={to}>
                <img class={imgClass} src={src} alt={alt} />
            </Link>
        </div>
    );
};

export default Image;