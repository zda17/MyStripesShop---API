import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ to, imgDivClass, imgClass, src, alt }) => {
    // const { to, imgDivClass, imgClass, src, alt } = props.product;
    return (
        <div className={imgDivClass}>
            <Link to={to}>
                <img className={imgClass} src={src} alt={alt} />
            </Link>
        </div>
    );
};

export default Image;