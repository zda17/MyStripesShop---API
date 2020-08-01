import React, { Component, useState, useContext } from 'react';
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import { useHistory } from 'react-router-dom';

//assets
import { CartContext } from '../utils/CartContext';

//routes


//components
import Image from "../components/Image";

//stlye
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../stylesheets/Cart.scss";

//cart item component to insert into cart pane
export const CartItem = (props) => {

  const [cart, setCart] = useContext(CartContext);
  let [quantity, setQuantity] = useState(1);

  const { product } = props;

  //adds 1 to quantity
  const increment = () => {
    console.log({ cart });
    setQuantity(++quantity);
  }

  //minus 1 from quanitity
  const decrement = () => {
    console.log("Minus 1");
    if (quantity > 1) {
      setQuantity(--quantity);
    } else {
      {/*remove cart item*/ }
    }
  }

  //removes cart item based on sku.
  const remove = (e) => {
    const nameAttr = e.target.getAttribute("name")
    setCart(cart.filter(lineItem => lineItem.sku !== nameAttr));
  };

  //converts size abbr to word
  const getSize = (size) => {
    if (size === "XS") {
      return "X-SMALL";
    } else if (size === "S") {
      return "SMALL";
    } else if (size === "M") {
      return "MEDIUM";
    } else if (size === "L") {
      return "LARGE";
    } else if (size === "XL") {
      return "X-LARGE";
    } else if (size === "XXL") {
      return "XX-Large";
    } else if (size === "XXXL") {
      return "XXX-LARGE";
    }
  }


  return (
    <>
      {/*lists all items in cart*/}
      {cart.map(product => (
        <div className="cart-item">
          <div className="cart-image">
            <Image
              to='/Product'
              imgDivClass='img-div-cart-page'
              imgClass='product-img'
              product={product}
            />
          </div>
          <div className="cart-info">
            <h2><strong>{product.name}</strong></h2>
            <span><p>{getSize(product.size)} ~ {product.color.toUpperCase()}</p></span>
            <span>${product.price}</span><span className="cart-remove" name={product.sku} onClick={remove}>Remove</span>
            <div className="cart-options">
              <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                  &mdash;
                </button>
                <input className="quantity-input__screen" type="text" value={quantity} readOnly />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                  &#xff0b;
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </>
  );
}


export const Cart = () => {

  //used to pass cart array
  const [cart, setCart, state, setState] = useContext(CartContext);

  //gets total price
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  // useHistory for changing routes
  const history = useHistory();

  // onClick function that goes to checkout and closes cart pane
  const goToCheckout = () => {
    history.push('/Checkout');
    setState(false);
  }

  return (
    <>
      <div className="cart-wrapper">
        {/*cart button*/}
        <i className="fa fa-shopping-cart cart" aria-hidden="true" onClick={() => setState({ isPaneOpen: true })}></i>
      </div>

      {/*pane and its contents*/}
      <SlidingPane
        className="cart-pane"
        overlayClassName="cart-overlay"
        isOpen={state.isPaneOpen}
        title="CART"
        width="360px"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        {/*test data*/}
        <CartItem />
        <input type="submit" value={"CHECKOUT ~ " + totalPrice} onClick={goToCheckout} />
      </SlidingPane>
    </>
  );
};
