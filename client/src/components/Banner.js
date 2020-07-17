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
                    <Link to="/collections/mens" className="Button Button_Mens-Womens">SHOP MENS</Link>
                    <Button to="/collections/womens" classes="Button Button_Mens-Womens" text="SHOP WOMENS" />
                </div>
            </div>
        </section>
    );
};

export default Banner;