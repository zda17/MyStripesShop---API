const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const AuthService = {
  // Gets a user row with a given email
  getUserWithEmail(db, email) {
    return db('users')
      .where({ email })
      .first();
  },
  // Compare a given password to the hashed password in DB
  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },
  // Creates a JWT given a sub and payload
  createJwt(subject, payload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      expiresIn: config.JWT_EXPIRY,
      algorithm: 'HS256',
    });
  },
  // Verifies a JWT secret matches our secret
  verifyJwt(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ['HS256'],
    });
  }
};

module.exports = AuthService;
