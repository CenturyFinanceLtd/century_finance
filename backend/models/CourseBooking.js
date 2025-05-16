const mongoose = require("mongoose");

const courseBookingSchema = new mongoose.Schema(
  {
    courseName: { type: String, required: true },
    planName: { type: String, required: true },
    planPrice: { type: Number, required: true },
    amountPaid: { type: Number, required: true }, // Actual amount paid
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
    paymentGatewayOrderId: { type: String, required: true },
    paymentGatewayTransactionId: { type: String, required: true, unique: true },
    paymentStatus: {
      type: String,
      enum: ["paid", "completed", "refunded"], // Statuses for confirmed bookings
      default: "paid",
      required: true,
    },
    bookingDate: { type: Date, required: true }, // Date when initial booking was made
    enrollmentDate: { type: Date, default: Date.now }, // Date when payment was confirmed
  },
  { timestamps: true }
);

module.exports = mongoose.model("CourseBooking", courseBookingSchema);
