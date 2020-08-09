const cartService = {
  createCart(db, uuid) {
    return db
      .insert({uuid}, ['*']) // Second argument implies to return all values inserted
      .into('carts');
  },
  getCartProduct(db, uuid) {
    return db('line_items')
      .join('products', 'line_items.product_sku', '=', 'products.sku')
      .select('*')
      .where({cart_id: uuid})
  }
};

module.exports = cartService;