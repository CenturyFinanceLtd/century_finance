// backend/models/PendingUser.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const pendingUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required for pending user."],
    unique: true, // Ensure only one pending registration per email
    lowercase: true,
    trim: true,
    index: true,
  },
  otp: {
    // Stores the HASHED OTP
    type: String,
    required: [true, "OTP is required for pending user."],
  },
  otpExpires: {
    type: Date,
    required: [true, "OTP expiry is required for pending user."],
  },
  // Store all other details needed to create the user later
  fullName: { type: String, required: true, trim: true },
  // Store the PLAIN password temporarily. It will be hashed by the User model's pre-save hook
  // when the actual User document is created after OTP verification.
  // This is a trade-off for simplicity vs. hashing twice or more complex User model pre-save logic.
  // The TTL index on `createdAt` mitigates the risk of long-term storage of plain password.
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  universityOrCollege: { type: String, trim: true },
  createdAt: {
    type: Date,
    default: Date.now,
    // Automatically delete this temporary record after a set time (e.g., 30 minutes)
    expires: "30m",
  },
});

// Method to compare submitted plain OTP with the stored hashed OTP
pendingUserSchema.methods.compareOtp = async function (submittedOtp) {
  if (!this.otp || !submittedOtp) return false;
  return await bcrypt.compare(submittedOtp, this.otp);
};

const PendingUser = mongoose.model("PendingUser", pendingUserSchema);

module.exports = PendingUser;
