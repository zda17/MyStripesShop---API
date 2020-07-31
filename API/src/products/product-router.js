const express = require('express');
const ProductService = require('./product-service');

const productRouter = express.Router();

productRouter
	.route('/all')
	.get(async (req, res, next) => {
		const allProducts = await ProductService.getAllProducts(req.app.get('db'))
		res.send(allProducts);
	});

/*
 * Gender based routes
 */
productRouter
	.route('/mens')
	.get(async (req, res, next) => {
		const mensProducts = await ProductService.getAllMens(req.app.get('db'));
		res.send(mensProducts);
	});

productRouter
	.route('/womens')
	.get(async (req, res, next) => {
		const womensProducts = await ProductService.getAllWomens(req.app.get('db'));
		res.send(womensProducts);
	});

productRouter
.route('/mens-womens')
.get(async (req, res, next) => {
	const mensAndWomensProducts = await ProductService.getMensAndWomens(req.app.get('db'));
	res.send(mensAndWomensProducts);
});

productRouter
	.route('/unisex')
	.get(async (req, res, next) => {
		const unisexProducts = await ProductService.getAllUnisex(req.app.get('db'));
		res.send(unisexProducts);
	});

/*
 * Category based routes
 */
productRouter
	.route('/tops')
	.get(async (req, res, next) => {
		const allTops = await ProductService.getAllTops(req.app.get('db'));
		res.send(allTops);
	});

productRouter
	.route('/bottoms')
	.get(async (req, res, next) => {
		const allBottoms = await ProductService.getAllBottoms(req.app.get('db'));
		res.send(allBottoms);
	});

productRouter
	.route('/accessories')
	.get(async (req, res, next) => {
		const allAccessories = await ProductService.getAllAccessories(req.app.get('db'));
		res.send(allAccessories);
	});

module.exports = productRouter