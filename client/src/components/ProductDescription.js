import React from 'react';

//stylesheets
import '../stylesheets/ProductDescription.scss';

//component
import Header from '../components/Header';
import ProductForm from '../components/ProductForm';

const ProductDescription = () => {
    return(
    <div className="ProductDesc">
        <Header 
            title="MY STRIPES TEE" 
            description="$22"
            headerClass="Other-Header sep"
            divClass="Container-Header"
            hClass="Product-Header"
            subHClass="Sub-Header"
        /> {/*header with custom title and sub header*/}
        <ProductForm/>
    </div>
    );
};

export default ProductDescription;