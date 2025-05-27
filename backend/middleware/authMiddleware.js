const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust path if your User model is elsewhere

/**
 * Protect routes by verifying JWT token.
 * If token is valid, attaches user to req object.
 * If token is invalid or not present, sends a 401 error.
 */
exports.protect = async (req, res, next) => {
  let token;

  // Check if token is in Authorization header (Bearer token)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({
          status: "fail",
          message: "User belonging to this token no longer exists.",
        });
      }
      next();
    } catch (error) {
      console.error(
        "Token verification error in protect middleware:",
        error.message
      );
      return res.status(401).json({
        status: "fail",
        message: "Not authorized, token failed or expired.",
      });
    }
  }

  // This check is moved here to ensure it runs if the Authorization header isn't present or correct
  if (!token) {
    return res
      .status(401)
      .json({ status: "fail", message: "Not authorized, no token provided." });
  }
};

/**
 * Optionally verify JWT token.
 * If token is valid, attaches user to req object.
 * If token is invalid or not present, sets req.user to null and proceeds.
 * This middleware DOES NOT send an error response if the user is not authenticated.
 */
exports.verifyTokenOptional = async (req, res, next) => {
  let token;

  // Check for token in Authorization header (Bearer token) or cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    // Example: check for token in cookies
    token = req.cookies.token;
  }

  if (!token) {
    req.user = null; // No token, so no user
    return next(); // Proceed to the next middleware or route handler
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from the token and attach to request object
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      // User with this token ID no longer exists
      req.user = null;
    }
    next(); // Proceed
  } catch (error) {
    // Token is invalid (e.g., expired, malformed)
    console.warn("Optional token verification failed:", error.message); // Log as warning, not critical error
    req.user = null; // Set user to null
    next(); // Proceed
  }
};
