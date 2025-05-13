// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions from authController
const {
  signup,
  verifyEmailOtp,
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
  // You might add more later, like logout, getLoggedInUser, updatePassword, etc.
} = require("../controllers/authController");

// --- Define Authentication Routes ---

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/verify-email
router.post("/verify-email", verifyEmailOtp);

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
