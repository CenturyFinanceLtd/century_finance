// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions from authController
// Ensure this path is correct and authController.js exports all these functions.
const {
  signup,
  verifyEmailOtp,
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
} = require("../controllers/authController");

// --- Define Authentication Routes ---

// POST /api/auth/signup
router.post("/signup", signup); // Associated with exports.signup in controller

// POST /api/auth/verify-email
router.post("/verify-email", verifyEmailOtp); // Associated with exports.verifyEmailOtp

// POST /api/auth/login
router.post("/login", login); // THIS IS LIKELY LINE 19 (or close to it)
// Error here means 'login' is undefined after import

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
