import React, { useState, useEffect, Profiler } from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';

// Axios
import axios from '../utils/axios';

//components
import Image from '../components/Image';

const ShowAllProducts = () => {

    const [activeSection, setActiveSection] = useState('all');
    const [topsProduct, setTopsProduct] = useState([]);
    const [bottomsProduct, setBottomsProduct] = useState([]);
    const [miscProduct, setMiscProduct] = useState([]);
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        axios.get('/products/all')
            .then(res => {
                const product = res.data;
                setAllProduct(product);
                setTopsProduct(product.filter(item => item.category === 'tops'));
                setBottomsProduct(product.filter(item => item.category === 'bottoms'));
                setMiscProduct(product.filter(item => item.category === 'accessories'));
            });
    }, []);

    return (
        <div className="content-wrap" >
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">ALL CLOTHING ARTICLES</h3>
                    <div className="tab-button-container">
                        <button className={activeSection === 'all' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("all")}>ALL</button>
                        <button className={activeSection === 'tops' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("tops")}>TOPS</button>
                        <button className={activeSection === 'bottoms' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("bottoms")}>BOTTOMS</button>
                        <button className={activeSection === 'accessories' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("accessories")}>MISC</button>
                    </div>
                </header>
                <section className='products'>
                    {activeSection === 'tops' ?
                        <>
                            {topsProduct.map((product, index) => (
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
                        : activeSection === 'bottoms' ?
                        <>
                            {bottomsProduct.map((product, index) => (
                                <article key={index}>
                                    <Image
                                        to='/Product'
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
                        : activeSection === 'accessories' ?
                        <>
                            {miscProduct.map((product, index) => (
                                <article key={index}>
                                    <Image
                                        to='/Product'
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
                            {allProduct.map((product, index) => (
                                <article key={index}>
                                    <Image
                                        to='/Product'
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
};

export default ShowAllProducts;