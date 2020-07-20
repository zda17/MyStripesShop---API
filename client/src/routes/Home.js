import React, { useState } from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';


//components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from '../components/Image';

// importing product list from db
// import products from '';

// import dummy images
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

        const dummyShirts = [
            {
                name: 'T-shirt',
                photo_url: tshirt
            },
            {
                name: 'T-shirt',
                photo_url: tshirt
            },
            {
                name: 'T-shirt',
                photo_url: tshirt
            },
            {
                name: 'T-shirt',
                photo_url: tshirt
            },
            {
                name: 'T-shirt',
                photo_url: tshirt
            },
            {
                name: 'T-shirt',
                photo_url: tshirt
            }
        ]

        const dummyPants = [
            {
                name: 'Pants',
                photo_url: pants
            },
            {
                name: 'Pants',
                photo_url: pants
            },
            {
                name: 'Pants',
                photo_url: pants
            },
            {
                name: 'Pants',
                photo_url: pants
            },
            {
                name: 'Pants',
                photo_url: pants
            },
            {
                name: 'Pants',
                photo_url: pants
            }
        ]

        return (
            <div className="content-wrap" >
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
                        {this.state.activeSection === 'mens' ?
                            <>
                                {dummyShirts.map(product => (
                                    <Image
                                        to='/Product'
                                        imgDivClass='img-div-home'
                                        imgClass='product-img-home'
                                        product={product}
                                    />
                                ))}
                            </>
                            :
                            <>
                                {dummyPants.map(product => (
                                    <Image
                                        to='/Product'
                                        imgDivClass='img-div-home'
                                        imgClass='product-img-home'
                                        product={product}
                                    />
                                ))}
                            </>
                        }
                    </section>
                </section>
            </div>
        );
    }
}

export default Home;