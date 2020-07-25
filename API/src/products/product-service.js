const ProductService = {
	getAllProducts(db) {
		return db('products')
			.select('*');
	},
	// Gender based product queries
	getAllMens(db) {
		return db('products')
			.where({gender: 'M'});
	},
	getAllWomens(db) {
		return db('products')
			.where({gender: 'F'});
	},
	getAllUnisex(db) {
		return db('products')
			.where({gender: 'U'});
	},
};

module.exports = ProductService;