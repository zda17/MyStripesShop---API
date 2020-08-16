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
      .where({cart_id: uuid});
  },
  addLineItem(db, item) {
    return db
      .insert(item, ['*'])
      .into('line_items');
  },
  deleteLineItem(db, cart_id, product_sku) {
    return db('line_items')
      .where({ cart_id, product_sku })
      .del();
  },
  incrementQuantity(db, cart_id, product_sku, amount) {
    return db('line_items')
      .where({ cart_id, product_sku })
      .update({ quantity: amount })
      .returning('*');
  }
};

module.exports = cartService;