import React from 'react';

//stylesheets
import '../stylesheets/ProductDescription.scss';

//component
import Header from '../components/Header';

const ProductDescription = () => {
    return(
    <div className="ProductDesc">
        <Header 
            title="MY STRIPES TEE" 
            description="$22"
            headerClass="Main-Header"
            divClass="Container-Header"
            hClass="Product-Header"
            subHClass="Sub-Header"
        /> {/*header with custom title and sub header*/}
    </div>
    );
};

export default ProductDescription;