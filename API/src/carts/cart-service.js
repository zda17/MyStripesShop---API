const cartService = {
  createCart(db, uuid) {
    return db
      .insert({uuid})
      .into('carts')
      .returning('*');
  },
  getCartProduct(db, uuid) {
    return db('line_items')
      .join('products', 'line_items.product_sku', '=', 'products.sku')
      .select('*')
      .where({cart_id: uuid})
  }
};

module.exports = cartService;