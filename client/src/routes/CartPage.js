import React, { useContext, useEffect } from 'react';
import { CartContext } from '../utils/CartContext';
import { CartItem, HandleQuantity } from '../components/Cart';
import Image from "../components/Image";
import '../stylesheets/CartPage.scss';
import '../stylesheets/Checkout.scss';

export default function CartPage() {
    const { cart } = useContext(CartContext);

    function getTotalPrice() {
        return cart.reduce((sum, { price }) => sum + price, 0);
    };

    let totalPrice = getTotalPrice();


    return (
        <>
            <section className='checkout-prices-wrapper'>
                <ul className='checkout-price-titles'>
                    <li>Product</li>
                    <CartItem
                        displayQuantity={false}
                    />
                </ul>
                <ul className='checkout-price-titles'>
                    <li>Quantity</li>
                    {cart.map(product =>
                        <li>
                            <HandleQuantity
                            product={product}
                        />
                        </li>
                    )}
                </ul>
                <ul className='checkout-price-titles'>
                    <li>Total</li>
                    {/* show total for each item (based on quantity) HERE */}
                </ul>
            </section>
            <section className='checkout-total-wrapper'>
                <h3 className='checkout-total-title'>Total</h3>
                <h2 className='checkout-total-amount'><span className='usd'>USD </span>${totalPrice}</h2>
            </section>

        </>
    )
}