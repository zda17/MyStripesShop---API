import React from 'react';
import { Link } from 'react-router-dom';

const Image = (props) => {
    const { photo_url, name } = props.product;
    const { to, imgDivClass, imgClass } = props;
    return (
        <div className={imgDivClass}>
            <Link to={to}>
                <img className={imgClass} src={photo_url} alt={name} />
            </Link>
        </div>
    );
};

export default Image;