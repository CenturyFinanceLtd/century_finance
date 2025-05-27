const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    // Remove unique: true from the email field
    email: { type: String, required: true }, // <<<< MODIFIED HERE
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    fatherName: { type: String, required: true },
    collegeName: { type: String, required: true },
    semester: { type: String, required: true },
    degree: { type: String, required: true },
    fieldSpecialization: { type: String, required: true },
    paymentGateway: {
      type: String,
      enum: ["cashfree", "razorpay"], // Keep this if you might add cashfree back
      // required: true, // You might make this optional if only one gateway now
    },
    orderId: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "successful", "failed"],
      default: "pending",
    },
    paymentId: { type: String },
  },
  { timestamps: true }
);

const Registration = mongoose.model(
  "OnlineCourseRegistration",
  registrationSchema
);

module.exports = Registration;
