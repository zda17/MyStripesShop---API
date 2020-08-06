const cartService = {
  createCart(db, uuid) {
    return db
      .insert({uuid})
      .into('carts')
      .returning('*');
  },
  getCart(db, uuid) {
    return db('carts')
      .where({uuid});
  }
};

module.exports = cartService;