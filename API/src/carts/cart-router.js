const express = require('express');
const CartService = require('./cart-service');

const cartRouter = express.Router();
const bodyParser = express.json();

cartRouter
  .route('/')
  // Get Cart from DB
  .get(bodyParser, async (req, res, next) => {
    const {UUID} = req.body;
    const cartArrayFromDB = await CartService.getCart(req.app.get('db'), UUID);
    const cartFromDB = cartArrayFromDB[0];
    cartFromDB.product = await CartService.getProduct(req.app.get('db'), UUID);

    res.send(cartFromDB);
  })
  // Insert Cart into DB
  .post(bodyParser, async (req, res, next) => {
    const {UUID} = req.body;
    const newCartFromDB = await CartService.createCart(req.app.get('db'), UUID);
    res.send(newCartFromDB);
  });

module.exports = cartRouter;