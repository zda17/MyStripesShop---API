const express = require('express');
const CartService = require('./cart-service');

const cartRouter = express.Router();
const bodyParser = express.json();

cartRouter
  .route('/')
  .get()
  .post(bodyParser, async (req, res, next) => {
    const {UUID} = req.body;
    const newCart = await CartService.createCart(req.app.get('db'), UUID);
    res.send(newCart);
  });

module.exports = cartRouter;