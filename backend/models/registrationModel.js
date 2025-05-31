const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    // Fields from your sample document
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
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
      enum: ["razorpay", "payu"], // Kept 'payu' assuming you still want to support it
      required: true,
    },
    orderId: { type: String, required: true }, // Stores Razorpay order_id or PayU txnid
    paymentStatus: {
      type: String,
      enum: ["pending", "successful", "failed"], // Basic statuses
      default: "pending",
    },
    paymentId: { type: String }, // Stores Razorpay payment_id or PayU payuMoneyId

    // Timestamps and version key are standard Mongoose additions
    // __v: (Mongoose version key, added automatically)
    // _id: (MongoDB ObjectId, added automatically)
    // createdAt, updatedAt: (from timestamps: true)
  },
  { timestamps: true } // This adds createdAt and updatedAt fields
);

// Optional: Indexing for common query optimization if needed
registrationSchema.index({ email: 1 });
registrationSchema.index({ orderId: 1, paymentGateway: 1 });
registrationSchema.index({ paymentStatus: 1 });

const Registration = mongoose.model(
  "OnlineCourseRegistration",
  registrationSchema
);

module.exports = Registration;
