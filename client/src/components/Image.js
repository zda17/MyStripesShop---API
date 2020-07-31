import React from 'react';
import { Link } from 'react-router-dom';

const Image = (props) => {
    console.log(props.product);
    const { photo_url, name } = props.product;
    const { to, imgDivClass, imgClass } = props;
    return (
        <article className={imgDivClass}>
            <Link to={to}>
                <img className={imgClass} src={photo_url} alt={name} />
            </Link>
        </article>
    );
};

export default Image;