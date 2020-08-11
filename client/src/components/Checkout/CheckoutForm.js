import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import '../../stylesheets/CheckoutForm.scss'


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if (!error) {
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post('/api/checkout', { id, amount: 1099 });
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='checkout-form'
        >
            <CardElement />
            <button type='submit' className='pay-btn' disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

const stripePromise = loadStripe("pk_test_51HELKHG3yT4fkVPvmTSvWinnxraM8XWMvM34GcLQd0v4S5i4nXNxwW0U1MmvKV6S1raTKk2zt1zvZwbGYKj7k4C100La8TJxQN")

const Payment = () => {
    return (
        <>
            <h1>Payment</h1>
            <h4>All transactions are secure and encrypted.</h4>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </>
    );
}

export default Payment;