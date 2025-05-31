const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    // User and Course Details
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true }, // Schema allows multiple entries per email; application logic handles "successful" uniqueness.
    address: { type: String, required: true },
    pinCode: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    fatherName: { type: String, required: true },
    collegeName: { type: String, required: true },
    semester: { type: String, required: true },
    degree: { type: String, required: true },
    fieldSpecialization: { type: String, required: true },

    // Payment Gateway Specific Details
    paymentGateway: {
      type: String,
      enum: ["razorpay", "payu"], // Added 'payu'
      required: true,
    },
    orderId: { type: String, required: true }, // Stores Razorpay order_id or PayU txnid
    paymentId: { type: String }, // Stores Razorpay payment_id or PayU payuMoneyId
    paymentStatus: {
      type: String,
      enum: ["pending", "successful", "failed", "tampered", "tampered_failure"], // Added PayU specific statuses
      default: "pending",
    },
    amount: { type: Number }, // Transaction amount
    productinfo: { type: String }, // Product description, mainly for PayU
    firstname: { type: String }, // First name used in PayU transaction
    phone: { type: String }, // Phone number used in PayU transaction (if different from mobileNumber or for record)

    // Gateway Specific Response Details
    mode: { type: String }, // Payment mode (e.g., CC, NB, UPI - from PayU)
    bankcode: { type: String }, // Bank code (from PayU)
    pg_TYPE: { type: String }, // Payment Gateway Type (from PayU)
    bank_ref_num: { type: String }, // Bank reference number (from PayU)
    paymentSignature: { type: String }, // For Razorpay signature verification

    rawResponse: { type: String }, // To store the stringified full JSON response from gateway callbacks for debugging
  },
  { timestamps: true }
);

// Indexing for common query optimization
registrationSchema.index({ email: 1 });
registrationSchema.index({ orderId: 1, paymentGateway: 1 });
registrationSchema.index({ paymentStatus: 1, paymentGateway: 1 });

const Registration = mongoose.model(
  "OnlineCourseRegistration",
  registrationSchema
);

module.exports = Registration;
