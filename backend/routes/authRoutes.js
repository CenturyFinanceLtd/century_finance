// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

const {
  signup,
  verifyOtpAndCompleteRegistration, // Use this for the main OTP verification step
  login,
  forgotPassword,
  verifyPasswordResetOtp,
  resetPassword,
  // The old 'verifyEmailOtp' might be removed if its logic is fully in the new function,
  // or kept if you have a distinct flow for resending OTPs to already partially registered users.
  // For simplicity, we'll assume verifyOtpAndCompleteRegistration handles both new and existing unverified for now.
} = require("../controllers/authController");

// POST /api/auth/signup
// - Checks email. If new, stores data temporarily in PendingUser, sends OTP.
// - If existing but unverified in User table, updates User with new OTP and resends.
// - If verified, returns error.
router.post("/signup", signup);

// POST /api/auth/verify-otp (or /api/auth/complete-registration)
// - Verifies OTP against PendingUser (for new users) or User (for existing unverified).
// - If new user & OTP valid: Creates main User record, deletes PendingUser, logs in.
// - If existing unverified user & OTP valid: Verifies User, logs in.
router.post("/verify-otp", verifyOtpAndCompleteRegistration); // Changed endpoint name for clarity

// POST /api/auth/login
router.post("/login", login);

// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/verify-reset-otp
router.post("/verify-reset-otp", verifyPasswordResetOtp);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);

module.exports = router;
