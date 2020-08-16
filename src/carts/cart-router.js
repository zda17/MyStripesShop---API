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

cartRouter
  .route('/lineitem')
  // Creates a new line item in DB for a cart
  .post(bodyParser, async (req, res, next) => {
    const { line_item } = req.body;

    // Insert line item into DB
    const newLineItem = await CartService.addLineItem(req.app.get('db'), line_item);

    // Return the newly created line item
    res.send(newLineItem);
  })
  // Update quantity of line_item in DB for given cart
  .patch(bodyParser, async (req, res, next) => {
    const { UUID, product_sku, quantity } = req.body;

    console.log('UUID:', UUID, 'product_sku:', product_sku, 'quantity:', quantity);

    // Update quantity of line item
    const lineItem = await CartService.incrementQuantity(req.app.get('db'), UUID, product_sku, quantity);

    // Return updated line item
    res.send(lineItem);
  })
  .delete(bodyParser, async (req, res, next) => {
    const { UUID, product_sku } = req.body;

    await CartService.deleteLineItem(req.app.get('db'), UUID, product_sku);

    res.send(204);
  });

module.exports = cartRouter;