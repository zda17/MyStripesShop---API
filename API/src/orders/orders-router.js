const express = require('express');
const ordersService = require('./orders-service');

const ordersRouter = express.Router();
const bodyParser = express.json();

// Change product quantity from string to integer
// !!! USE THIS ON EVERY RESPONSE FROM ORDERS TABLE
const quantityStrToInt = (ordersArr) => {
  return ordersArr.map(order => {
    order.product_skus_and_quantity = order.product_skus_and_quantity.map(product => {
      // Quantity is string at this point: [ "ATC-OK-Beanie-S-GREEN", "1" ]
      product[1] = parseInt(product[1]);
      return product;
    });
    return order;
  });
};

ordersRouter
  .route('/')
  .get(bodyParser, async (req, res, next) => {
    const orders = await ordersService.getAllOrders(req.app.get('db'));
    // Change product quantity from string to integer and send it
    res.send(quantityStrToInt(orders));
  })
  .post(bodyParser, async (req, res, next) => {
    const { orderData } = req.body;
    /** Data should contain all of these properties:
		 * {
				"email" : "user@test.com",
				"address" : "123 Address Lane",
				"state" : "OK",
				"product_skus_and_quantity" : "{{ATC-OK-Beanie-S-GREEN,1},{ATC-OK-Beanie-M-DKBL,3},{ATC-OK-DadHat-XS,5}}",
				"amount_cents" : 7900,
				"uuid" : "a6b14dc5-8102-4d14-8d43-73bf16asd8eec"
			} */
    const dbResponse = await ordersService.insertOrder(req.app.get('db'), orderData);
    res.send(dbResponse.id);
  });

module.exports = ordersRouter;