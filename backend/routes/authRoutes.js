// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

const {
  signup,
  verifyOtp, // This is the function for OTP verification
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
} = require("../controllers/authController");

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/verify-otp
// This endpoint handles OTP verification.
router.post("/verify-otp", verifyOtp); // <--- ENSURE THIS LINE IS PRESENT AND CORRECT

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
