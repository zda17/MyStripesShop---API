const ordersService = {
  getAllOrders(db) {
    return db('orders')
      .select('*')
      .where({isFulfilled: false});
  },
  getAllFulfilledOrders(db) {
    return db('orders')
      .select('*')
      .where({isFulfilled: true});
  },
  insertOrder(db, data) {
    return db
      .insert([data], ['*']) // Second argument implies to return all values inserted
      .into('orders');
  },
  updateOrder(db, data) {
    return db('orders')
      .where({ id: data.id })
      .update({ isFulfilled: data.isFulfilled });
  }
};

module.exports = ordersService;