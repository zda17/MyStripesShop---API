const ProductService = {
	getAllProducts(db) {
		return db('products')
			.select('*');
	},
	getProductByBaseSku(db, base_sku) {
		return db('products')
			.where({base_sku})
	},
	// Gender based product queries
	getAllMens(db) {
		return db('products')
			.whereNot({gender: 'F'});
	},
	getAllWomens(db) {
		return db('products')
			.whereNot({gender: 'M'});
	},
	getAllUnisex(db) {
		return db('products')
			.where({gender: 'U'});
	},
	// Category based product queries
	getAllTops(db) {
		return db('products')
			.where({category: 'tops'});
	},
	getAllBottoms(db) {
		return db('products')
			.where({category: 'bottoms'});
	},
	getAllAccessories(db) {
		return db('products')
			.where({category: 'accessories'});
	},
};

module.exports = ProductService;