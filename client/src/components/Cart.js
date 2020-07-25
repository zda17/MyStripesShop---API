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

    const [cart, setCart] = useContext(CartContext);
  
  const increment = () => {
    setCart(prevState => [...prevState, ++cart.quantity]);
  }
  
  const decrement = () => {
    setCart(prevState => [...prevState, --cart.quantity]);
  }

  const remove = (e) => {
    var array = [...cart]; // make a separate copy of the array
    var index = array.indexOf(e.target.value)
    if (index !== -1) {
        array.splice(index, 1);
        setCart({array});
    }
  }


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
                            <h2><strong>{product.name}</strong></h2>
                                <span><p>{product.size} ~ {product.color}</p></span>
                            <span>${product.price}</span>
                            <div className="cart-options">
                                <div className="quantity-input">
                                    <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                                    &mdash;
                                    </button>
                                    <input className="quantity-input__screen" type="text" value={product.quantity} readonly />
                                    <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                                    &#xff0b;
                                    </button>  
                                </div>  
                                <input className="cart-remove" type="button" value="Remove" onClick={remove}/>
                            </div>
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