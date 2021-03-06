require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

// Route imports
const authRouter = require('./auth/auth-router');
const productRouter = require('./products/product-router');
const contactFormRouter = require('./contact-form/contact-form');
const cartRouter = require('./carts/cart-router');
const orderRouter = require('./orders/orders-router');
const checkoutRouter = require('./orders/checkout-router');
const confirmationRouter = require('./orders/confirmation-router');
const waitingListRouter = require('./waiting-list/waiting-list-router');

// Create express app
const app = express();

// Setup morgan option based on environment
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

// Enable static serving of built client if in production environment
if (NODE_ENV === "production") {
  console.log("--- Serving Static Build ---")
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// cors middleware for allowing cross origin
app.use(cors());
// morgan middleware for logging information
app.use(morgan(morganOption));
// helmet middleware for hiding our server type
app.use(helmet());

// Set Response Headers
app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2 https://js.stripe.com/v3; img-src 'self' https://i.imgur.com https://res.cloudinary.com");
  return next();
});


// Routes
// User Authorization
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);

app.use('/api/forma', contactFormRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/confirm', confirmationRouter);
app.use('/api/waiting-list', waitingListRouter);

if (NODE_ENV === "production") {
  app.use('/*', express.static(path.join(__dirname, '../client/build/index.html')));
}


// Error handler
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  } else {
    // eslint-disable-next-line no-console
    console.log(error);
    response = {message: error.message, error};
  }
  res.status(500).json(response);
});

module.exports = app;