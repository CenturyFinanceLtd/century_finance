// backend/models/PendingUser.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const pendingUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    // We'll use this as the primary key for lookup during verification
  },
  otp: {
    // We will store the hashed OTP
    type: String,
    required: true,
  },
  otpExpires: {
    type: Date,
    required: true,
  },
  // Temporarily store all other signup data
  fullName: { type: String, required: true, trim: true },
  hashedPassword: { type: String, required: true }, // Store pre-hashed password
  phoneNumber: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  universityOrCollege: { type: String, trim: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "30m", // Automatically delete this temporary record after 30 minutes (adjust as needed)
  },
});

// Method to compare submitted OTP with the stored hashed OTP
pendingUserSchema.methods.compareOtp = async function (submittedOtp) {
  return await bcrypt.compare(submittedOtp, this.otp);
};

const PendingUser = mongoose.model("PendingUser", pendingUserSchema);

module.exports = PendingUser;
