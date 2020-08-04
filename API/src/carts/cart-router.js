const express = require('express');
const CartService = require('./cart-service');

const cartRouter = express.Router();

cartRouter
	.route('/')