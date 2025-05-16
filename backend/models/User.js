// backend/models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For hashing passwords
// const crypto = require('crypto'); // Not strictly needed for OTP generation if using Math.random

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true, // Emails should be unique
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address.",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      minlength: [6, "Password must be at least 6 characters long."],
      select: false, // Do not send password back by default when querying users
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },
    fatherName: {
      type: String,
      required: [true, "Father's name is required."],
      trim: true,
    },
    universityOrCollege: {
      type: String,
      trim: true, // Optional field
    },
    isEmailVerified: {
      type: Boolean,
      default: false, // Default is false, controller will set to true upon verification
    },
    emailVerificationOtp: {
      // Stores the plain OTP sent to the user (for existing unverified users)
      type: String,
    },
    emailVerificationOtpExpires: {
      // Stores the expiry time of the OTP (for existing unverified users)
      type: Date,
    },
    passwordResetOtp: {
      type: String,
    },
    passwordResetOtpExpires: {
      type: Date,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// --- Mongoose Middleware ---

// Hash password before saving the user model
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified (or is new)
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  // If an *existing* user's email is changed, they should re-verify.
  // For new users, `isEmailVerified` is set by the controller after OTP.
  // The default for `isEmailVerified` in the schema is `false`.
  if (!this.isNew && this.isModified("email")) {
    this.isEmailVerified = false;
    this.emailVerificationOtp = undefined; // Clear old OTP if email changes
    this.emailVerificationOtpExpires = undefined;
  }
  next();
});

// --- Mongoose Instance Methods ---

// Method to compare entered password with the hashed password in the database
userSchema.methods.comparePassword = async function (enteredPassword) {
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate an email verification OTP (used for existing unverified users)
userSchema.methods.generateEmailVerificationOtp = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  this.emailVerificationOtp = otp;
  this.emailVerificationOtpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
  return otp;
};

// Method to generate a password reset OTP
userSchema.methods.generatePasswordResetOtp = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  this.passwordResetOtp = otp;
  this.passwordResetOtpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
  return otp;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
