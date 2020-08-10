import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';


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

export default Index;