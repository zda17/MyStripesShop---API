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
	getMensAndWomens(db) {
		return db('products')
			.where(function() {
				this.where({gender: 'F'}).orWhere({gender: 'M'})
			});
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