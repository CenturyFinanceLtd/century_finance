// backend/models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For hashing passwords
const crypto = require("crypto"); // For generating OTPs and tokens

const userSchema = new mongoose.Schema(
  {
    fullName: {
      // Changed from 'Name' in your screenshot to be more descriptive
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
      // Add a regex for basic phone number validation if needed, e.g., for Indian numbers:
      // match: [/^[6-9]\d{9}$/, 'Please fill a valid 10-digit phone number.']
    },
    fatherName: {
      type: String,
      required: [true, "Father's name is required."],
      trim: true,
    },
    universityOrCollege: {
      type: String,
      trim: true, // Optional field, so not required
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationOtp: {
      type: String,
    },
    emailVerificationOtpExpires: {
      type: Date,
    },
    passwordResetOtp: {
      type: String,
    },
    passwordResetOtpExpires: {
      type: Date,
    },
    // You might want to add roles later, e.g., 'user', 'admin'
    // role: {
    //     type: String,
    //     enum: ['user', 'admin'],
    //     default: 'user',
    // },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// --- Mongoose Middleware ---

// Hash password before saving the user model
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified (or is new)
  if (!this.isModified("password")) {
    return next();
  }
  // Hash the password with cost of 12
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // If it's a new user or email is being changed and not yet verified,
  // clear any OTP fields to ensure they are regenerated if needed.
  if (this.isNew || this.isModified("email")) {
    this.emailVerificationOtp = undefined;
    this.emailVerificationOtpExpires = undefined;
    this.isEmailVerified = false; // Reset verification status if email changes
  }
  next();
});

// --- Mongoose Instance Methods ---

// Method to compare entered password with the hashed password in the database
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate and hash an email verification OTP
userSchema.methods.generateEmailVerificationOtp = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

  // Store the plain OTP temporarily for sending, but it won't be saved plain in DB
  // (The hashed version could be saved if needed for direct comparison, but for simplicity,
  // we'll just store the plain one with an expiry for now. For higher security, hash it.)
  this.emailVerificationOtp = otp; // For sending via email
  this.emailVerificationOtpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

  // console.log(`Generated Email OTP for ${this.email}: ${otp}`); // For debugging
  return otp; // Return plain OTP to be sent via email
};

// Method to generate and hash a password reset OTP
userSchema.methods.generatePasswordResetOtp = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

  this.passwordResetOtp = otp;
  this.passwordResetOtpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

  // console.log(`Generated Password Reset OTP for ${this.email}: ${otp}`); // For debugging
  return otp; // Return plain OTP
};

const User = mongoose.model("User", userSchema);

module.exports = User;
