import React, { Component, useState, useContext } from 'react';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import cartImg from '../utils/images/cart.png';
import { CartContext } from '../utils/CartContext';
import "../stylesheets/Cart.scss";

//cart item component to insert into cart pane
const CartItem = () => {
    return(null);
}


const Cart = () => {

    //used to pass cart array
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    //states for cart pane
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });


    return(
            <div className="cart-wrapper">
                {/*cart button*/}
                <input type="image" onClick={() => setState({ isPaneOpen: true })} className='cart' src={cartImg} alt='cart' />

                {/*pane and its contents*/}
                <SlidingPane
                    className="cart-pane"
                    overlayClassName="cart-overlay"
                    isOpen={state.isPaneOpen}
                    title="Cart"
                    onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen: false });
                    }}
                >
                    {/*test data*/}
                    <div>
                        <span>Items in cart: {cart.length}</span>
                        <br />
                        <span>Total price: {totalPrice}</span>
                        
                    </div>
                </SlidingPane>
            </div>
    );
};

export default Cart;