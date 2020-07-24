import React, { Component, useState, useContext } from 'react';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import cartImg from '../utils/images/cart.png';
import { CartContext } from '../utils/CartContext';

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
            <div>
                {/*cart button*/}
                <button onClick={() => setState({ isPaneOpen: true })}>
                <img className='cart' src={cartImg} alt='cart' />
                </button>

                {/*pane and its contents*/}
                <SlidingPane
                    className="some-custom-class"
                    overlayClassName="some-custom-overlay-class"
                    isOpen={state.isPaneOpen}
                    title="Cart"
                    onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                        setState({ isPaneOpen: false });
                    }}
                >
                    {/*test data*/}
                    <div>
                        <h2>Cart</h2>
                        <span>Items in cart: {cart.length}</span>
                        <br />
                        <span>Total price: {totalPrice}</span>
                    </div>
                </SlidingPane>
            </div>
    );
};

export default Cart;