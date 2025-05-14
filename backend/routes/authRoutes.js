// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

const {
  signup,
  verifyOtpAndCompleteRegistration, // Renamed/new function
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
} = require("../controllers/authController");

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/verify-otp (This endpoint now handles final registration for new users, or verification for existing unverified)
router.post("/verify-otp", verifyOtpAndCompleteRegistration);

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
