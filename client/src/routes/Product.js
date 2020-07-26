import React from 'react';

import Header from '../components/Header';
import ProductDescription from '../components/ProductDescription';

const Product = () => {
    const dummyProducts = [
        {
            sku: 'MSCM-Hoodie-1-S-G', 
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'S',
            color: 'green',
            quantity: 4
        },
        {
            sku: 'MSCM-Hoodie-1-S-R', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'S',
            color: 'red',
            quantity: 4
        },
        {
            sku: 'MSCM-Hoodie-1-S-B', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'S',
            color: 'blue',
            quantity: 0
        },
        {
            sku: 'MSCM-Hoodie-1-M-G', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'M',
            color: 'green',
            quantity: 4
        },
        {
            sku: 'MSCM-Hoodie-1-M-R', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'M',
            color: 'red',
            quantity: 4
        },
        {
            sku: 'MSCM-Hoodie-1-M-B', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'M',
            color: 'blue',
            quantity: 0
        },
        {
            sku: 'MSCM-Hoodie-1-L-G', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'L',
            color: 'green',
            quantity: 4
        },
        {
            sku: 'MSCM-Hoodie-1-L-R', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'L',
            color: 'red',
            quantity: 0
        },
        {
            sku: 'MSCM-Hoodie-1-L-B', 
            base_sku: 'MSCM-Hoodie-1',
            name: 'My Stripes Hoodie', 
            category: 'tops', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            gender: 'U', 
            photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
            created_at: '2020-07-20 11:13:06', 
            updated_at: '2020-07-20 11:13:06', 
            price_cents: 3599, 
            size: 'L',
            color: 'blue',
            quantity: 4
        },
    ]

    return(
        <div className="content-wrap">
                <ProductDescription products={dummyProducts}/>
        </div>
    );
};

export default Product;