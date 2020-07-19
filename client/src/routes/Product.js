import React from 'react';

import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';

const Product = () => {
    return(
        <div className="content-wrap">
                <Header 
                    title="COMMUNITY CONSCIOUS CLOTHING" 
                    headerClass="Title-Header"
                    divClass="Container-Header"
                    hClass="Text-Header"
                /> {/*header with custom title*/}
                <ProductDescription />
        </div>
    );
};

export default Product;