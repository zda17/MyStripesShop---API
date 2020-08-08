const express = require('express');
const ordersService = require('./orders-service');

const ordersRouter = express.Router();
const bodyParser = express.json();

ordersRouter
	.route('/')
	.get(bodyParser, (req, res, next) => {
		console.log(req.params)
	})

module.exports = ordersRouter;