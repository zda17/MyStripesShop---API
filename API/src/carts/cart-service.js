const cartService = {
  createCart(db, UUID) {
    return db
      .insert(UUID)
      .into('carts')
      .returning('*');
  },
  getCart(db, UUID) {
    return db('carts')
      .where({id: UUID});
  }
};

module.exports = cartService;