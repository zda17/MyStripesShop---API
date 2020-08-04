import React, { useState, useEffect } from 'react';
import '../stylesheets/ShowAll.scss';

// Axios
import axios from '../utils/axios';

import { BannerSlim } from '../components/Banner';
import Image from '../components/Image';
import ProductDescription from '../components/ProductDescription';

function ShowAll(props) {

    const [activeSection, setActiveSection] = useState('all');
    const [topsProduct, setTopsProduct] = useState([]);
    const [bottomsProduct, setBottomsProduct] = useState([]);
    const [miscProduct, setMiscProduct] = useState([]);
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        axios.get('/products/all')
            .then(res => {
                const product = res.data;
                setAllProduct(product.filter(item => item.gender === props.gender || item.gender === props.gender2 || item.gender === 'U'));
                setTopsProduct(product.filter(item => item.category === 'tops' && (item.gender === props.gender || item.gender === 'U')));
                setBottomsProduct(product.filter(item => item.category === 'bottoms' && (item.gender === props.gender || item.gender === 'U')));
                setMiscProduct(product.filter(item => item.category === 'accessories' && (item.gender === props.gender || item.gender === 'U')));
            });
    }, []);

    return (
        <div className="ShowAll" >
            <BannerSlim />
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">ALL PRODUCTS</h3>
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
                        : activeSection === 'accessories' ?
                        <>
                            {miscProduct.map((product, index) => (
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
                            {allProduct.map((product, index) => (
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

export default ShowAll;