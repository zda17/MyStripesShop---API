import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import UserInfoForm from '../components/UserInfoForm';
import '../stylesheets/Checkout.scss';
import { CartItem } from '../components/Cart';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CartContext } from '../utils/CartContext';


const CheckoutForm = () => {
    const stripe = useStripe();
    return (
        <form>
            <CardElement />
            <button type='submit' disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

const stripePromise = loadStripe("pk_test_51HELKHG3yT4fkVPvmTSvWinnxraM8XWMvM34GcLQd0v4S5i4nXNxwW0U1MmvKV6S1raTKk2zt1zvZwbGYKj7k4C100La8TJxQN")

const Index = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}


const Costs = () => {
    const { cart } = useContext(CartContext);

    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);

    const calculateSubtotal = () => {
        if (cart[0]) {
            setSubtotal(cart.map(product => product.price).reduce((prev, next) => prev + next));
            console.log(subtotal);
        }
    };

    const calculateShipping = () => {
        console.log(shipping);
    }

    const calculateTaxes = () => {
        setTaxes((subtotal + shipping) * 0.08);
    }

    function calculateTotal() {
        setTotal(subtotal + shipping + taxes);
    };


    useEffect(() => {
        if (cart) {
            calculateSubtotal();
        };
    }, [cart]);

    useEffect(() => {
        if (subtotal) {
            calculateTaxes();
        };
    }, [subtotal]);

    useEffect(() => {
        if (subtotal && taxes) {
            calculateTotal();
        };
    }, [subtotal, taxes]);

    return (
        <>
            <section className='checkout-prices-wrapper'>
                <ul className='checkout-price-titles'>
                    <li>Subtotal</li>
                    <li>Shipping</li>
                    <li>Taxes</li>
                </ul>
                <ul className='checkout-price-amounts'>
                    <li>${subtotal}</li>
                    <li>{shipping ? shipping : 'Calculated at next step'}</li>
                    <li>${taxes} (estimated)</li>
                </ul>
            </section>
            <section className='checkout-total-wrapper'>
                <h3 className='checkout-total-title'>Total</h3>
                <h2 className='checkout-total-amount'><span className='usd'>USD </span>${total}</h2>
            </section>
        </>
    )
}


const Checkout = () => {
    const { register, handleSubmit } = useForm();

    const { cart } = useContext(CartContext);

    const applyCoupon = () => {
        console.log('Apply discount code');
        console.log(cart);
        // function to apply discount coupon to total
        // - Will need discount_codes table in DB
        // - Check provided discount code against discount_codes in DB
    }

    return (
        <div className="checkout-container">
            <section className='user-checkout-info'>
                <UserInfoForm />
            </section>
            <section className='cart-display'>
                <h1>Order Summary</h1>
                <CartItem />
                <form className='discount-form' onSubmit={handleSubmit(applyCoupon)}>
                    <input type='text' name='Discount' className='discount-input' ref={register} placeholder='Discount code' />
                    <button type='submit' className='apply-btn'>Apply</button>
                </form>
                <Costs />
                <Index />
            </section>
        </div>
    );
};

export default Checkout;
