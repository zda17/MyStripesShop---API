import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import '../stylesheets/Banner.scss';

const Banner = () => {
    return(
        <section id="Banner">
            <div className="banner-content">
                <h2 className="banner-header">NEW ARRIVALS</h2>
                <div className="button-container">
                    <Link to="/Products/mens" className="Button Button_Banner">SHOP MENS</Link>
                    <Link to="/Products/womens" className="Button Button_Banner">SHOP WOMENS</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;