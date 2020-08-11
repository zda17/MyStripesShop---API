import React, { useState, createContext } from 'react';

export const CartContext = createContext('');

export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
    // Cart uses UUID to pull correct Cart from database
    const [cartUUID, setCartUUID] = useState('');

    //states for cart pane
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    return (
        <CartContext.Provider value={{ cart, setCart, cartUUID, setCartUUID, isPaneOpen, setIsPaneOpen }}>
            {props.children}
        </CartContext.Provider>
    )
}