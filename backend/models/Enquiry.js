// models/Enquiry.js
const mongoose = require("mongoose");

// Define the schema for an enquiry
const enquirySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email address is required."],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address."],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    trim: true,
    // You might want to add more specific phone number validation
  },
  course: {
    type: String,
    required: [true, "Course selection is required."],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required."],
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now, // Automatically set the submission timestamp
  },
});

// Create the Enquiry model from the schema
const Enquiry = mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry;
