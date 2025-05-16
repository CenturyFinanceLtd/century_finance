const mongoose = require("mongoose");

const pendingCourseBookingSchema = new mongoose.Schema(
  {
    courseName: { type: String, required: true },
    planName: { type: String, required: true },
    planPrice: { type: Number, required: true }, // Total price of the plan
    amountToPay: { type: Number, required: true }, // Actual amount for this transaction
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhoneNumber: { type: String, required: true },
    userUniversityOrCollege: { type: String, required: true },
    selectedPaymentGateway: { type: String, required: true },
    paymentGatewayOrderId: { type: String },
    paymentGatewayTransactionId: { type: String },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
      required: true,
    },
    bookingDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "PendingCourseBooking",
  pendingCourseBookingSchema
);
