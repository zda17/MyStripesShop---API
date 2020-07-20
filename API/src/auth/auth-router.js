const express = require('express');
const AuthService = require('./auth-service');
const { requireAuth } = require('../middleware/jwt-auth');

const authRouter = express.Router();
const jsonBodyParser = express.json();

// Route for authenticating a user login request
authRouter
  .route('/token')
  .post(jsonBodyParser, async (req, res, next) => {
    // Required values are email and password
    const { email, password } = req.body;
    const loginUser = { email, password };

    // Check if any value is missing
    for (const [key, value] of Object.entries(loginUser))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        });

    try {
      // Check if user with email exists
      const dbUser = await AuthService.getUserWithEmail(
        req.app.get('db'),
        loginUser.email
      );

      // If no user exists, return 400
      if (!dbUser)
        return res.status(400).json({
          error: 'Incorrect username or password',
        });

      // Check if passwords match
      const compareMatch = await AuthService.comparePasswords(
        loginUser.password,
        dbUser.encrypted_password
      );

      // If passwords don't match return 400
      if (!compareMatch)
        return res.status(400).json({
          error: 'Incorrect username or password',
        });

      // Create JWT sub and payload
      const sub = dbUser.email;
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
