import React from 'react';

//stylesheets
import '../stylesheets/ProductDescription.scss';
import '../stylesheets/Image.scss';

//component
import Header from '../components/Header';
import ProductForm from '../components/ProductForm';
import Image from '../components/Image';

const ProductDescription = (props) => {

    const { product } = props;

    //converts cents to dollar amount in string format
    const centsToUSD = (price) => {
        var dollars = price / 100;
        var cents = price % 100;

        return dollars + "." + cents;
    } 
    const price_USD = centsToUSD(product.price_cents);
    
    return (
        <div className="ProductDesc">
            <Header
                title={product.name}
                description={"$" + price_USD}
                headerClass="Other-Header sep"
                divClass="Container-Header"
                hClass="Product-Header"
                subHClass="Sub-Header"
            /> {/*header with custom title and sub header*/}
            <div className="product-img-wrapper">
                <Image
                    product={product}
                    imgDivClass='img-div-product-page'
                    imgClass='product-img'
                />
            </div>
            <ProductForm pink="none" />
        </div>
    );
};

export default ProductDescription;