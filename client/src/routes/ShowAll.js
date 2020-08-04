<<<<<<< HEAD
import React, { useState, useEffect, Profiler } from 'react';
import '../stylesheets/Home.scss';
import '../stylesheets/Image.scss';
=======
import React, { useState, useEffect } from 'react';
import '../stylesheets/ShowAll.scss';
>>>>>>> c01eac5d175bca5f3f28c5a6d3299e7ca7a8eeac

// Axios
import axios from '../utils/axios';

<<<<<<< HEAD
//components
import Image from '../components/Image';

const ShowAllProducts = () => {
=======
import { BannerSlim } from '../components/Banner';
import Image from '../components/Image';

function ShowAll() {
>>>>>>> c01eac5d175bca5f3f28c5a6d3299e7ca7a8eeac

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
<<<<<<< HEAD
        <div className="content-wrap" >
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">ALL CLOTHING ARTICLES</h3>
=======
        <div className="ShowAll" >
            <BannerSlim />
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">ALL PRODUCTS</h3>
>>>>>>> c01eac5d175bca5f3f28c5a6d3299e7ca7a8eeac
                    <div className="tab-button-container">
                        <button className={activeSection === 'all' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("all")}>ALL</button>
                        <button className={activeSection === 'tops' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("tops")}>TOPS</button>
                        <button className={activeSection === 'bottoms' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("bottoms")}>BOTTOMS</button>
                        <button className={activeSection === 'accessories' ? "tab-item is-active" : "tab-item"} onClick={() => setActiveSection("accessories")}>MISC</button>
                    </div>
                </header>
                <section className='products'>
<<<<<<< HEAD
                    {activeSection === 'tops' ?
=======
                {activeSection === 'tops' ?
>>>>>>> c01eac5d175bca5f3f28c5a6d3299e7ca7a8eeac
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
<<<<<<< HEAD
};
=======
}
>>>>>>> c01eac5d175bca5f3f28c5a6d3299e7ca7a8eeac

export default ShowAllProducts;