const express = require('express');
const ProductService = require('./product-service');

const productRouter = express.Router();

productRouter
	.route('/all')
	.get(async (req, res, next) => {
		const allProducts = await ProductService.getAllProducts(req.app.get('db'))
		res.send({allProducts});
	})

module.exports = productRouter