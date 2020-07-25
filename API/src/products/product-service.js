const ProductService = {
	getAllProducts(db) {
		return db('products')
			.select('*');
	},
	getAllMens(db) {
		return db('products')
			.where({gender: 'M'});
	}
};

module.exports = ProductService;