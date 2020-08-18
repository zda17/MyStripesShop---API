const express = require('express');
const checkoutRouter = express.Router();
const bodyParser = express.json();
const stripe = require('stripe')('sk_test_51HELKHG3yT4fkVPvD1aAjrBGKkb0uvwSWyUYUB7cxSdsty7J6bqPpDi2lccBIYYCp6liw6BvjxuktAbe7F8qT5Zn00caVHKMQo');

checkoutRouter
  .route('/')
  .post(bodyParser, async (req, res, next) => {
    const { id, amount, uuid } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        description: uuid,
        payment_method: id,
        confirm: true
      });

      return res.status(200).json({
        confirm: payment.id //give user id of stripe payment for reference;
      });

    } catch (error) {
      next(error);
    }
  });


module.exports = checkoutRouter;