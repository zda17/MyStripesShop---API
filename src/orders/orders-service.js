const ordersService = {
  getAllOrders(db) {
    return db('orders')
      .where({isFulfilled: '0'})
      .select('*');
  },
  getAllFulfilledOrders(db) {
    return db('orders')
      .select('*')
      .where({isFulfilled: '1'});
  },
  insertOrder(db, data) {
    return db
      .insert([data], ['*']) // Second argument implies to return all values inserted
      .into('orders');
  }
};

module.exports = ordersService;