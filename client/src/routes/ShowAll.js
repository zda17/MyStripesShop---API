import React, { useState, useEffect } from 'react';
import '../stylesheets/ShowAll.scss';

// Axios
import axios from '../utils/axios';

import { BannerSlim } from '../components/Banner';
import Image from '../components/Image';

function ShowAll() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('/products/all')
            .then(res => {
                setProduct(res.data);
            });
    }, []);

    return (
        <div className="ShowAll" >
            <BannerSlim />
            <section className="featured-collections">
                <header>
                    <h3 className="sub-heading">ALL PRODUCTS</h3>
                </header>
                <section className='products'>
                    <>
                        {product.map((product, index) => (
                            <article key={index}>
                                <Image
                                    to={`/Products/${product.base_sku}`}
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
                </section>
            </section>
        </div>
    );
}

export default ShowAll;