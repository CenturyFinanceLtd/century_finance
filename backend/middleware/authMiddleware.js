// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust path if your User model is elsewhere

/**
 * Protect routes by verifying JWT token.
 * If token is valid, attaches user to req object.
 */
exports.protect = async (req, res, next) => {
  let token;

  // Check if token is in Authorization header (Bearer token)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header (e.g., "Bearer eyJhbGciOiJIUzI1NiIsInR...")
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token (ID is in the payload) and attach to request object
      // Exclude password field from being attached
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res
          .status(401)
          .json({
            status: "fail",
            message: "User belonging to this token no longer exists.",
          });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error("Token verification error:", error.message);
      return res
        .status(401)
        .json({
          status: "fail",
          message: "Not authorized, token failed or expired.",
        });
    }
  }

  if (!token) {
    return res
      .status(401)
      .json({ status: "fail", message: "Not authorized, no token provided." });
  }
};
