const ordersService = {
  getAllOrders(db) {
    return db('orders')
      .select('*');
  },
  insertOrder(db, data) {
    return db
      .insert([data], ['*']) // Second argument implies to return all values inserted
      .into('orders');
  }
};

module.exports = ordersService;