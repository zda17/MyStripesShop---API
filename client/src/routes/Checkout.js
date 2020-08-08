import React from 'react';
import { useForm } from "react-hook-form";
import CheckoutForm from '../components/CheckoutForm';
import '../stylesheets/Checkout.scss';
import { CartItem } from '../components/Cart';

const Checkout = () => {
    const { register, handleSubmit } = useForm();

    const applyCoupon = () => {
        console.log('Apply discount code')
        // function to apply discount coupon to total
            // - Will need discount_codes table in DB
            // - Check provided discount code against discount_codes in DB
    }

    return (
        <div className="checkout-container">
            <section className='payment-shipping'>
                <CheckoutForm />
            </section>
            <section className='cart-display'>
                <h1>Order Summary</h1>
                <CartItem />
                <form className='discount-form' onSubmit={handleSubmit(applyCoupon)}>
                    <input type='text' name='Discount' className='discount-input'ref={register} placeholder='Discount code' />
                    <button type='button' className='apply-btn'>Apply</button>
                </form>
            </section>
        </div>
    );
};

export default Checkout;
