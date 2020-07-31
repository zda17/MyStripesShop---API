import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';

// Axios
import axios from '../utils/axios';

const Product = (props) => {
    const {base_sku} = props.match.params;
    const [product, setProduct] = useState([{price_cents: 0}]); // price_cents is there to avoid an error that occurs because rendering depends on this property being there

    useEffect(() => {
        axios.get(`/products/${base_sku}`)
            .then(res => {
                const product = res.data;
                setProduct(product);
            });
    }, [])

    return(
        <div className="content-wrap">
                <ProductDescription products={product}/>
        </div>
    );
};

export default Product;