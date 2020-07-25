const express = require('express');
const ProductService = require('./product-service');

const productRouter = express.Router();

productRouter
	.route('/all')
	.get(async (req, res, next) => {
		const allProducts = await ProductService.getAllProducts(req.app.get('db'))
		res.send({allProducts});
	});

productRouter
	.route('/mens')
	.get(async (req, res, next) => {
		const mensProducts = await ProductService.getAllMens(req.app.get('db'));
		res.send({mensProducts});
	});

productRouter
	.route('/womens')
	.get(async (req, res, next) => {
		const womensProducts = await ProductService.getAllWomens(req.app.get('db'));
		res.send({womensProducts});
	});

productRouter
	.route('/unisex')
	.get(async (req, res, next) => {
		const unisexProducts = await ProductService.getAllUnisex(req.app.get('db'));
		res.send({unisexProducts});
	});

module.exports = productRouter