const ordersService = {
	getAllOrders(db) {
		return db('orders')
			.select('*');
	}
};

module.exports = ordersService;