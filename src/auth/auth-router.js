const express = require('express');
const AuthService = require('./auth-service');
const { requireAuth } = require('../middleware/jwt-auth');

const authRouter = express.Router();
const jsonBodyParser = express.json();

// Route for authenticating a user login request
authRouter
  .route('/')
  .post(jsonBodyParser, async (req, res, next) => {
    // Required values are email and password
    const { email, password } = req.body;

    // Check if email or password are missing
    if (email == null || password == null)
      return res.status(400).json({
        error: `Missing '${email == null ? 'email' : 'password'}' in request body`
      });    

    try {
      // Check if user with email exists
      const dbUser = await AuthService.getUserWithEmail(
        req.app.get('db'),
        email
      );

      // If no user exists, return 400
      if (!dbUser)
        return res.status(400).json({
          error: 'Incorrect username or password',
        });

      // Check if passwords match
      const compareMatch = await AuthService.comparePasswords(
        password,
        dbUser[0].encrypted_password
      );

      // If passwords don't match return 400
      if (!compareMatch)
        return res.status(400).json({
          error: 'Incorrect username or password',
        });

      // Create JWT sub and payload
      const sub = dbUser[0].email;
      const payload = {
        id: dbUser.id
      };
      // Return created JWT
      res.send({
        authToken: AuthService.createJwt(sub, payload),
      });
    } catch (error) {
      next(error);
    }
  })

  // Route for refreshing a users token
  .put(requireAuth, (req, res) => {
    // Create JWT sub and payload
    const sub = req.user.email;
    const payload = {
      user_id: req.user.id
    };
    // Return created JWT
    res.send({
      authToken: AuthService.createJwt(sub, payload),
    });
  });

module.exports = authRouter;
