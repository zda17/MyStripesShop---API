import React, { useState, useEffect, Profiler } from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';

// Axios
import axios from '../utils/axios';

//components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from '../components/Image';

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
                            {mensProduct.map((product, index) => (
                                <article key={index}>
                                    <Image
                                        to={`/Product/${product.base_sku}`}
                                        imgDivClass='img-div-home'
                                        imgClass='product-img-home'
                                        product={product}
                                    />
                                    <section className='name-and-price'>
                                        <h3>{product.name}</h3>
                                        <h4>${(product.price_cents / 100).toFixed(2)}</h4>
                                    </section>
                                </article>
                            ))}
                        </>
                        :
                        <>
                            {womensProduct.map((product, index) => (
                                <article key={index}>
                                    <Image
                                        to={`/Product/${product.base_sku}`}
                                        imgDivClass='img-div-home'
                                        imgClass='product-img-home'
                                        product={product}
                                    />
                                    <section className='name-and-price'>
                                        <h3>{product.name}</h3>
                                        <h4>${(product.price_cents / 100).toFixed(2)}</h4>
                                    </section>
                                </article>
                            ))}
                        </>
                    }
                </section>
            </section>
        </div>
    );
}

export default Home;