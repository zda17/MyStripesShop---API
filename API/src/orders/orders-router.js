const express = require('express');
const ordersService = require('./orders-service');

const ordersRouter = express.Router();
const bodyParser = express.json();

// Change product quantity from string to integer
const quantityStrToInt = (ordersArr) => {
	return ordersArr.map(order => {
		order.product_skus_and_quantity = order.product_skus_and_quantity.map(product => {
			// Quantity is string at this point: [ "ATC-OK-Beanie-S-GREEN", "1" ]
			product[1] = parseInt(product[1]);
			return product;
		});
		return order;
	});
}

ordersRouter
	.route('/')
	.get(bodyParser, async (req, res, next) => {
		const orders = await ordersService.getAllOrders(req.app.get('db'));
		// Change product quantity from string to integer and send it
		res.send(quantityStrToInt(orders));
	})

module.exports = ordersRouter;