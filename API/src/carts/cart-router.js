const express = require('express');
const CartService = require('./cart-service');

const cartRouter = express.Router();
const bodyParser = express.json();

cartRouter
  .route('/')
  // Get Cart and it's line_items from DB
  .get(bodyParser, async (req, res, next) => {
    const {UUID} = req.body;
    // Get line_items that make up users cart using UUID
    const cartFromDB = await CartService.getCartProduct(req.app.get('db'), UUID);

    // Send cart with product
    res.send(cartFromDB);
  })
  // Insert Cart into DB
  .post(bodyParser, async (req, res, next) => {
    const {UUID} = req.body;

    // Make new cart in DB using UUID as identifier
    const newCartFromDB = await CartService.createCart(req.app.get('db'), UUID);
    
    // Return newly created cart
    res.send(newCartFromDB);
  });

module.exports = cartRouter;