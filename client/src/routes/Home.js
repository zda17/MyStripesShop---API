import React, { useState } from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';


//components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from '../components/Image';

// importing product list from db
// import products from '';

// import images
import tshirt from '../utils/images/tshirt.png';
import pants from '../utils/images/pants.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: "mens"
        }
    }

    render() {
        return (
            <div className="content-wrap">
                <Banner />
                <section className="featured-collections">
                    <header>
                        <h3 className="sub-heading">NEW ARRIVALS</h3>
                        <div className="tab-button-container">
                            <button className={this.state.activeSection === 'mens' ? "tab-item is-active" : "tab-item"} onClick={() => this.setState({ activeSection: "mens" })}>MENS</button>
                            <button className={this.state.activeSection === 'womens' ? "tab-item is-active" : "tab-item"} onClick={() => this.setState({ activeSection: "womens" })}>WOMENS</button>
                        </div>
                    </header>
                    <section className='products'>

                        {/* Render product list from db and .map through to display images */}
                        {/* {products.map(product => (
                        <Image
                            product={product}
                        />
                    ))} */}

                        {/* Displaying hard-coded image components until we get a product list to .map through */}
                        {this.state.activeSection === 'mens' ?
                            <>
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={tshirt}
                                    alt='T-shirt'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={tshirt}
                                    alt='T-shirt'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={tshirt}
                                    alt='T-shirt'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={tshirt}
                                    alt='T-shirt'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={tshirt}
                                    alt='T-shirt'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={tshirt}
                                    alt='T-shirt'
                                />
                            </>
                            :
                            <>
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={pants}
                                    alt='Pants'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={pants}
                                    alt='Pants'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={pants}
                                    alt='Pants'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={pants}
                                    alt='Pants'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={pants}
                                    alt='Pants'
                                />
                                <Image
                                    to='/Product.js'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    src={pants}
                                    alt='Pants'
                                />
                            </>
                        }
                    </section>
                </section>
            </div>
        );
    }
}

export default Home;