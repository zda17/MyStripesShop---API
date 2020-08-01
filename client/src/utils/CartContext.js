import React, { useState, createContext } from 'react';

export const CartContext = createContext('');

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
    // Cart uses UUID to pull correct Cart from database
    const [cartUUID, setCartUUID] = useState('');

    //states for cart pane
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });

    return(
        <CartContext.Provider value={[cart, setCart, state, setState, cartUUID, setCartUUID]}>
        {props.children}
        </CartContext.Provider>
    )
}