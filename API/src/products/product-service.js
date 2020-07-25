const ProductService = {
	getAllProducts(db) {
		return db('products')
			.select('*');
	}
};

module.exports = ProductService;