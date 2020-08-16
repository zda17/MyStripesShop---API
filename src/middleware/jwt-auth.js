const { JsonWebTokenError } = require('jsonwebtoken');
const AuthService = require('../auth/auth-service');

// Middleware to verify a Auth Token
async function requireAuth(req, res, next) {
  // Get the auth token from request header
  const authToken = req.get('Authorization') || '';

  let bearerToken;
  // Check if token is a Bearer token
  if (!authToken.toLowerCase().startsWith('bearer ')) {
    // If not return 401
    return res.status(401).json({ error: 'Missing bearer token' });
  } else {
    // Otherwise slice out the bearer token from auth token
    bearerToken = authToken.slice(7, authToken.length);
  }

  try {
    // Extract payload from bearer token
    const payload = AuthService.verifyJwt(bearerToken);

    // Get the user from the database
    const user = await AuthService.getUserWithEmail(
      req.app.get('db'),
      payload.sub,
    );

    // If user doesn't exist return 401
    if (!user)
      return res.status(401).json({ error: 'Unauthorized request' });

    // Set user in request
    req.user = user;
    next();
  } catch (error) {
    // If any error occurs return 401
    if (error instanceof JsonWebTokenError)
      return res.status(401).json({ error: 'Unauthorized request' });

    // Then send error to error-handler middleware
    next(error);
  }
}

module.exports = {
  requireAuth,
};
