const express = require('express');
const ordersService = require('./orders-service');

const orderRouter = express.Router();
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

orderRouter
  .route('/fulfilled')
  .get(bodyParser, async (req, res, next) => {
    const orders = await ordersService.getAllFulfilledOrders(req.app.get('db'));
    // Change product quantity from string to integer and send it
    res.send(quantityStrToInt(orders));
  })
  //update order to isFulfilled = true
  //need to make updateOrder() in orders-service.js
  .post(bodyParser, async (req, res) => {
    const { id } = req.body;
    const updateData = {
      isFulfilled: true,
      id
    }
    try {
      const dbResponse = await ordersService.updateOrder(req.app.get('db'), updateData);
      res.send(dbResponse);
    } catch (err) {
      throw err;
    }
  })

orderRouter
  .route('/')
  .get(bodyParser, async (req, res, next) => {
    const orders = await ordersService.getAllOrders(req.app.get('db'));
    // Change product quantity from string to integer and send it
    res.send(quantityStrToInt(orders));
  })
  .post(bodyParser, async (req, res) => {
    const { cart, userInfo, confCode, cartUUID } = req.body;
    const productSkuArray = cart.map(item => new Array(item.sku, item.quantity));
    const totalPrice = cart.map(product => product.totalProductPrice).reduce((prev, next) => prev + next);
    const orderData = {
      email: userInfo.email,
      address: `${userInfo.address}, ${userInfo.apartment && '#' + userInfo.apartment + ', '}${userInfo.city}, ${userInfo.state}, ${userInfo.zipCode}, ${userInfo.country}`,
      product_skus_and_quantity: productSkuArray,
      amount_cents: totalPrice * 100,
      uuid: cartUUID,
      confcode: confCode,
      isfulfilled: false
    }
    try {
      const dbResponse = await ordersService.insertOrder(req.app.get('db'), orderData);
      res.send(dbResponse);
    } catch (err) {
      throw err;
    }
  });

module.exports = orderRouter;