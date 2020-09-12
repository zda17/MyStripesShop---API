const ProductService = {
	getAllProducts(db) {
		return db('products')
			.distinctOn('base_sku');
	},
	getProductByBaseSku(db, base_sku) {
		return db('products')
			.where({base_sku});
	},
	// Gender based product queries
	getAllMens(db) {
		return db('products')
			.whereNot({gender: 'F'})
			.distinctOn('base_sku');
	},
	getAllWomens(db) {
		return db('products')
			.whereNot({gender: 'M'})
			.distinctOn('base_sku');
	},
	getAllUnisex(db) {
		return db('products')
			.where({gender: 'U'})
			.distinctOn('base_sku');
	},
	// Category based product queries
	getAllTops(db) {
		return db('products')
			.where({category: 'tops'})
			.distinctOn('base_sku');
	},
	getAllBottoms(db) {
		return db('products')
			.where({category: 'bottoms'})
			.distinctOn('base_sku');
	},
	getAllAccessories(db) {
		return db('products')
			.where({category: 'accessories'})
			.distinctOn('base_sku');
	},
};

module.exports = ProductService;