import React, { Component, useState } from 'react';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import cart from '../utils/images/cart.png';

//cart item component to insert into cart pane
const CartItem = () => {
    return(null);
}


const Cart = () => {

    //states for cart pane
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });


    return(
            <div>
                {/*cart button*/}
                <button onClick={() => setState({ isPaneOpen: true })}>
                <img className='cart' src={cart} alt='cart' />
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
                        <span>Items in cart: 0</span>
                        <br />
                        <span>Total price: 0</span>
                    </div>
                </SlidingPane>
            </div>
    );
};

export default Cart;