import React, { Component, useState, useContext } from 'react';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";

//assets
import cartImg from '../utils/images/cart.png';
import { CartContext } from '../utils/CartContext';

//routes


//components
import Image from "../components/Image";

//stlye
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../stylesheets/Cart.scss";

//cart item component to insert into cart pane
const CartItem = (props) => {

    const { product } = props;

    const [cart, setCart] = useContext(CartContext);

    return(
        <div className="cart-item-wrapper">
                
                {/*lists all items in cart*/}
                {cart.map(product => (
                    <div className="cart-item">
                        <div className="cart-image">
                            <Image
                                    to='/Product'
                                    imgDivClass='img-div-home'
                                    imgClass='product-img-home'
                                    product={product}
                            />
                        </div>
                        <div className="cart-info">
                            <h2>{product.name}</h2>
                                <span><p>{product.size} ~ {product.color}</p></span>
                            <span>${product.price}</span>
                        </div>
                        <div className="cart-options">
                            <p>Remove buton goes here</p>
                        </div>
                    </div>
                ))}

        </div>
    );
}


const Cart = () => {

    //used to pass cart array
    const [cart, setCart] = useContext(CartContext);

    //gets total price
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
                    <div className="cart-item-list">
                        <CartItem />
                    </div>
                </SlidingPane>
            </div>
    );
};

export default Cart;