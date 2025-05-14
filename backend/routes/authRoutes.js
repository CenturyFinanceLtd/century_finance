// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions from authController
// Make sure the path to authController.js is correct relative to this routes file.
// If authController.js is in /backend/controllers/ and this file is in /backend/routes/,
// then '../controllers/authController' is correct.
const {
  signup,
  verifyEmailOtp,
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
  // Add any other functions you export from authController here
} = require("../controllers/authController");

// --- Define Authentication Routes ---

// POST /api/auth/signup
// This route expects a POST request to handle user registration data.
router.post("/signup", signup);

// POST /api/auth/verify-email
// This route expects a POST request with email and OTP for verification.
router.post("/verify-email", verifyEmailOtp);

// POST /api/auth/login
// This route expects a POST request with email and password for login.
router.post("/login", login);

// POST /api/auth/forgot-password
// This route expects a POST request with the user's email to send a reset OTP.
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
// This route expects a POST request with email and the password reset OTP for verification.
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
// This route expects a POST request with email, OTP, and new password details.
router.post("/reset-password", resetPassword);

module.exports = router;
