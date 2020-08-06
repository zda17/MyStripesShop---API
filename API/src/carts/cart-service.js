const cartService = {
  createCart(db, UUID) {
    return db
      .insert({id: UUID})
      .into('carts')
      .returning('*');
  },
  getCart(db, UUID) {
    return db('carts')
      .where({id: UUID});
  }
};

module.exports = cartService;