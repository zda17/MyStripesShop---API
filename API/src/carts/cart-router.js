const express = require('express');
const CartService = require('./cart-service');

const cartRouter = express.Router();
const bodyParser = express.json();

cartRouter
  .route('/')
  .get()
  .post(bodyParser, async (req, res, next) => {
    const {UUID} = req.body;
    console.log(UUID);
    res.send(UUID);
  });

module.exports = cartRouter;