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
  },
  getProduct(db, uuid) {
    return db('line_items')
      .column('quantity', 'product_sku')
      .where({cart_id: uuid})
  }
};

module.exports = cartService;