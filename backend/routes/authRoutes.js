// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

const {
  signup,
  verifyOtp, // Renamed from verifyOtpAndCompleteRegistration for simplicity
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
} = require("../controllers/authController");

// POST /api/auth/signup
router.post("/signup", signup);

// POST /api/auth/verify-otp
// This endpoint handles OTP verification for both new pending users and existing unverified users.
router.post("/verify-otp", verifyOtp);

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
