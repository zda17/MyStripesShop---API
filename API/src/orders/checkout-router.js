const express = require('express');
const checkoutRouter = express.Router();
const bodyParser = express.json();
const stripe = require('stripe')('sk_test_51HELKHG3yT4fkVPvD1aAjrBGKkb0uvwSWyUYUB7cxSdsty7J6bqPpDi2lccBIYYCp6liw6BvjxuktAbe7F8qT5Zn00caVHKMQo')

checkoutRouter
    .route('/')
    .post(bodyParser, async (req, res, next) => {
        console.log(req.body);
        const { id, amount } = req.body;

        try {
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: 'USD',
                description: '',
                payment_method: id,
                confirm: true
            })

            console.log(payment);

            return res.status(200).json({
                confirm: 'abc123'
                //conf code/give user a reference to payment
            });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.message
            })
        }
    })


module.exports = checkoutRouter;