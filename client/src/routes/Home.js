import React, { useState, useEffect, Profiler } from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';

// Axios
import axios from '../utils/axios';

//components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from '../components/Image';

// import dummy images
import tshirt from '../utils/images/tshirt.png';
import pants from '../utils/images/pants.png';

function Home() {

    const [activeSection, setActiveSection] = useState('mens');
    const [mensProduct, setMensProduct] = useState([]);
    const [womensProduct, setWomensProduct] = useState([]);

    useEffect(() => {
        axios.get('/products/all')
            .then(res => {
                const product = res.data;
                setMensProduct(product.filter(item => item.gender === 'M' || item.gender === 'U'));
                setWomensProduct(product.filter(item => item.gender === 'F' || item.gender === 'U'));
            });
    }, []);

    const dummyShirts = [
        {
            name: 'T-shirt',
            photo_url: tshirt,
            price: 22.00
        },
        {
            name: 'T-shirt',
            photo_url: tshirt,
            price: 22.00
        },
        {
            name: 'T-shirt',
            photo_url: tshirt,
            price: 22.00
        },
        {
            name: 'T-shirt',
            photo_url: tshirt,
            price: 22.00
        },
        {
            name: 'T-shirt',
            photo_url: tshirt,
            price: 22.00
        },
        {
            name: 'T-shirt',
            photo_url: tshirt,
            price: 22.00
        }
    ]

    const dummyPants = [
        {
            name: 'Pants',
            photo_url: pants,
            price: 28.00
        },
        {
            name: 'Pants',
            photo_url: pants,
            price: 28.00
        },
        {
            name: 'Pants',
            photo_url: pants,
            price: 28.00
        },
        {
            name: 'Pants',
            photo_url: pants,
            price: 28.00
        },
        {
            name: 'Pants',
            photo_url: pants,
            price: 28.00
        },
        {
            name: 'Pants',
            photo_url: pants,
            price: 28.00
        }
    ]

    return (
        <div className="content-wrap" >
            <Banner />
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">NEW ARRIVALS</h3>
                    <div className="tab-button-container">
                        <button className={activeSection === 'mens' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("mens")}>MENS</button>
                        <button className={activeSection === 'womens' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("womens")}>WOMENS</button>
                    </div>
                </header>
                <section className='products'>
                    {activeSection === 'mens' ?
                        <>
                            {mensProduct.map(product => (
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
                            {womensProduct.map(product => (
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

export default Home;