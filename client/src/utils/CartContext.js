import React, { useState, createContext } from 'react';

export const CartContext = createContext('');

export const CartProvider = (props) => {

    //array for line items

    // !!!!!!!! added dummy product as default state for easier development of checkout page
    // (make sure to remove before production)
    const [cart, setCart] = useState([]);


    // !!!!!!!! added dummy product as default state for easier development of checkout page -Shannon
    // (make sure to remove before production)
    // const [cart, setCart] = useState([{
    //     sku: 'MSCM-Hoodie-1-L-B', 
    //     base_sku: 'MSCM-Hoodie-1',
    //     name: 'My Stripes Hoodie', 
    //     category: 'tops', 
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    //     gender: 'U', 
    //     photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
    //     created_at: '2020-07-20 11:13:06', 
    //     updated_at: '2020-07-20 11:13:06', 
    //     price_cents: 100, 
    //     size: 'L',
    //     color: 'blue',
    //     quantity: 4
    // },
    // {
    //     sku: 'MSCM-Hoodie-1-L-B', 
    //     base_sku: 'MSCM-Hoodie-1',
    //     name: 'My Stripes Hoodie', 
    //     category: 'tops', 
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    //     gender: 'U', 
    //     photo_url: 'https://res.cloudinary.com/dswxhdeob/image/upload/v1581615690/MyStripesProducts/My%20Stripes%20Custom%20Merch/My_Stripes_Custom_Merch_Hoodie_gla8a9.png', 
    //     created_at: '2020-07-20 11:13:06', 
    //     updated_at: '2020-07-20 11:13:06', 
    //     price_cents: 100, 
    //     size: 'L',
    //     color: 'blue',
    //     quantity: 4
    // }]);

    return(
        <CartContext.Provider value={[cart, setCart]}>
        {props.children}
        </CartContext.Provider>
    )
}