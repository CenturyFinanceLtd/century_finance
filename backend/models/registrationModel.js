const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    fatherName: { type: String, required: true },
    collegeName: { type: String, required: true },
    semester: { type: String, required: true },
    degree: { type: String, required: true },
    fieldSpecialization: { type: String, required: true },
    orderId: { type: String, required: true }, // From Cashfree
    paymentStatus: {
      type: String,
      enum: ["pending", "successful", "failed"],
      default: "pending",
    },
    paymentId: { type: String }, // From Cashfree on success
  },
  { timestamps: true }
);

const Registration = mongoose.model(
  "OnlineCourseRegistration",
  registrationSchema
);

module.exports = Registration;
