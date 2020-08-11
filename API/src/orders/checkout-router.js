const express = require('express');
const checkoutRouter = express.Router();
const bodyParser = express.json();
const ordersService = require('./orders-service');
const ordersRouter = require('./orders-router');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HELKHG3yT4fkVPvD1aAjrBGKkb0uvwSWyUYUB7cxSdsty7J6bqPpDi2lccBIYYCp6liw6BvjxuktAbe7F8qT5Zn00caVHKMQo')

checkoutRouter
    .route('/')
    .get((req, res) => {
        res.send("IT WORKS");
    });

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
            console.log(error)
        }

        // const orderData = req.body;
        // /** Data should contain all of these properties:
        //  * {
        // 		"email" : "user@test.com",
        // 		"address" : "123 Address Lane",
        // 		"state" : "OK",
        // 		"product_skus_and_quantity" : "{{ATC-OK-Beanie-S-GREEN,1},{ATC-OK-Beanie-M-DKBL,3},{ATC-OK-DadHat-XS,5}}",
        // 		"amount_cents" : 7900,
        // 		"uuid" : "a6b14dc5-8102-4d14-8d43-73bf16asd8eec"
        // 	} */
        // const dbResponse = await ordersService.insertOrder(req.app.get('db'), orderData);
        // res.send(ordersRouter.quantityStrToInt(dbResponse));
    })


module.exports = checkoutRouter;