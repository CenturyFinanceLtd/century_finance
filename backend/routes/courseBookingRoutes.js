// routes/courseBookingRoutes.js
const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const paypal = require("@paypal/checkout-server-sdk");
const crypto = require("crypto");

// Adjust path to your models directory
const PendingCourseBooking = require("../models/PendingCourseBooking");
const CourseBooking = require("../models/CourseBooking");

// Correctly import the 'protect' middleware function
const { protect } = require("../middleware/authMiddleware");

// --- PayPal Configuration ---
function payPalClient() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const environment =
    process.env.PAYPAL_MODE === "live"
      ? new paypal.core.LiveEnvironment(clientId, clientSecret)
      : new paypal.core.SandboxEnvironment(clientId, clientSecret);
  return new paypal.core.PayPalHttpClient(environment);
}

// --- Razorpay Configuration ---
let razorpayInstance = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  try {
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    console.log("Razorpay instance created successfully.");
  } catch (error) {
    console.error(
      "Failed to create Razorpay instance even with keys present:",
      error.message
    );
  }
} else {
  console.warn(
    "Razorpay KEY_ID or KEY_SECRET not found in .env file. Razorpay functionality will be disabled."
  );
}

/**
 * @route   POST /api/course-bookings/initiate
 * @desc    Initiate a course booking, save to pending, and create a payment gateway order
 * @access  Private (User must be logged in)
 */
router.post("/initiate", protect, async (req, res) => {
  // Use 'protect' middleware
  const {
    courseName,
    planName,
    planPrice,
    amountToPay,
    userName,
    userEmail,
    userPhoneNumber,
    userUniversityOrCollege,
    selectedPaymentGateway,
  } = req.body;

  if (
    !courseName ||
    !planName ||
    !planPrice ||
    !amountToPay ||
    !userName ||
    !userEmail ||
    !userPhoneNumber ||
    !userUniversityOrCollege ||
    !selectedPaymentGateway
  ) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing required booking details." });
  }

  // req.user should be populated by the 'protect' middleware
  if (!req.user || !req.user.id) {
    console.error(
      "User ID not found in req.user after auth middleware. Check JWT payload and middleware logic."
    );
    return res
      .status(401)
      .json({
        status: "error",
        message: "Authentication error: User ID missing.",
      });
  }
  const userId = req.user.id;
  let gatewayOrderId;
  let gatewayResponseData = {};

  try {
    const paymentGatewayLower = selectedPaymentGateway.toLowerCase();

    if (paymentGatewayLower === "paypal") {
      const request = new paypal.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "INR", value: amountToPay.toString() },
            description: `${planName} - ${courseName}`,
          },
        ],
      });
      const payPalOrder = await payPalClient().execute(request);
      gatewayOrderId = payPalOrder.result.id;
      gatewayResponseData = { gateway: "paypal", gatewayOrderId };
    } else if (paymentGatewayLower === "razorpay") {
      if (!razorpayInstance) {
        console.warn(
          "Razorpay selected, but instance is not available (keys likely missing or invalid)."
        );
        return res.status(501).json({
          status: "error",
          message:
            "Razorpay payment gateway is not configured or currently unavailable. Please select another payment method.",
          data: { gateway: "razorpay" },
        });
      }
      console.warn(
        "Razorpay payment gateway selected but is logically disabled in the code."
      );
      return res.status(501).json({
        status: "info",
        message:
          "Razorpay payment gateway is currently disabled by choice. Please select another payment method.",
        data: { gateway: "razorpay" },
      });
    } else if (paymentGatewayLower === "phonepe") {
      console.warn("PhonePe payment gateway selected but not implemented yet.");
      return res
        .status(501)
        .json({
          status: "info",
          message: "PhonePe payment gateway is not implemented yet.",
          data: { gateway: "phonepe" },
        });
    } else {
      return res
        .status(400)
        .json({
          status: "error",
          message: "Selected payment gateway is not supported.",
        });
    }

    const newPendingBooking = new PendingCourseBooking({
      courseName,
      planName,
      planPrice,
      amountToPay,
      userId,
      userName,
      userEmail,
      userPhoneNumber,
      userUniversityOrCollege,
      selectedPaymentGateway: paymentGatewayLower,
      paymentGatewayOrderId: gatewayOrderId,
      paymentStatus: "pending",
      bookingDate: new Date(),
    });
    const savedPendingBooking = await newPendingBooking.save();

    res.status(201).json({
      status: "success",
      message: `Booking initiated with ${selectedPaymentGateway}. Order created.`,
      data: {
        bookingId: savedPendingBooking._id,
        ...gatewayResponseData,
        userName,
        userEmail,
        userPhoneNumber,
      },
    });
  } catch (error) {
    console.error(
      `Error initiating booking with ${selectedPaymentGateway}:`,
      error.message
    );
    if (selectedPaymentGateway.toLowerCase() === "paypal" && error.message) {
      try {
        const paypalError = JSON.parse(error.message);
        if (
          paypalError &&
          paypalError.details &&
          paypalError.details.length > 0
        ) {
          return res
            .status(500)
            .json({
              status: "error",
              message: `PayPal Error: ${paypalError.details[0].issue} - ${paypalError.details[0].description}`,
            });
        } else if (paypalError.message) {
          return res
            .status(500)
            .json({
              status: "error",
              message: `PayPal Error: ${paypalError.message}`,
            });
        }
      } catch (parseErr) {
        /* Fall through */
      }
    }
    res
      .status(500)
      .json({
        status: "error",
        message: "Server error while initiating booking.",
      });
  }
});

/**
 * @route   POST /api/course-bookings/confirm-payment
 * @desc    Confirm a payment after gateway processing & verify
 * @access  Private
 */
router.post("/confirm-payment", protect, async (req, res) => {
  // Use 'protect' middleware
  const {
    internalBookingId,
    gateway,
    paypalOrderID,
    paypalTransactionID,
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  } = req.body;

  if (!internalBookingId || !gateway) {
    return res
      .status(400)
      .json({
        status: "error",
        message: "Missing internal booking ID or gateway identifier.",
      });
  }

  // req.user should be populated by the 'protect' middleware
  if (!req.user || !req.user.id) {
    console.error(
      "User ID not found in req.user after auth middleware. Check JWT payload and middleware logic."
    );
    return res
      .status(401)
      .json({
        status: "error",
        message: "Authentication error: User ID missing.",
      });
  }

  try {
    const pendingBooking = await PendingCourseBooking.findById(
      internalBookingId
    );
    if (!pendingBooking)
      return res
        .status(404)
        .json({ status: "error", message: "Pending booking not found." });

    // Ensure the booking belongs to the logged-in user
    if (pendingBooking.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({
          status: "error",
          message: "User not authorized for this booking.",
        });
    }

    if (pendingBooking.paymentStatus === "paid")
      return res
        .status(200)
        .json({ status: "successs", message: "Payment already confirmed." });

    let paymentVerified = false;
    let finalTransactionId = null;
    const gatewayLower = gateway.toLowerCase();

    if (gatewayLower === "paypal") {
      if (!paypalOrderID || !paypalTransactionID)
        return res
          .status(400)
          .json({
            status: "error",
            message: "Missing PayPal IDs for confirmation.",
          });
      try {
        const orderDetailsRequest = new paypal.orders.OrdersGetRequest(
          paypalOrderID
        );
        const orderDetails = await payPalClient().execute(orderDetailsRequest);
        if (
          orderDetails.result.status === "COMPLETED" ||
          orderDetails.result.status === "APPROVED"
        ) {
          const capture =
            orderDetails.result.purchase_units[0]?.payments?.captures?.find(
              (c) => c.id === paypalTransactionID
            );
          if (capture || orderDetails.result.status === "COMPLETED") {
            paymentVerified = true;
            finalTransactionId = paypalTransactionID;
          } else {
            console.warn(
              `PayPal: Transaction ID ${paypalTransactionID} not found in captures for order ${paypalOrderID}, but order status is ${orderDetails.result.status}. Treating as unverified for now.`
            );
          }
        } else {
          console.error(
            `PayPal payment verification failed for order ${paypalOrderID}. Status: ${orderDetails.result.status}`
          );
        }
      } catch (err) {
        console.error(
          "PayPal API error during payment confirmation:",
          err.message
        );
        pendingBooking.paymentStatus = "failed";
        await pendingBooking.save();
        return res
          .status(500)
          .json({
            status: "error",
            message: "Error verifying PayPal payment.",
          });
      }
    } else if (gatewayLower === "razorpay") {
      console.warn(
        "Razorpay payment confirmation attempted but is currently disabled."
      );
      return res.status(501).json({
        status: "info",
        message: "Razorpay payment confirmation is currently unavailable.",
      });
    } else {
      return res
        .status(400)
        .json({
          status: "error",
          message: "Unsupported gateway for confirmation.",
        });
    }

    if (paymentVerified) {
      pendingBooking.paymentStatus = "paid";
      pendingBooking.paymentGatewayTransactionId = finalTransactionId;
      await pendingBooking.save();

      const newConfirmedBooking = new CourseBooking({
        courseName: pendingBooking.courseName,
        planName: pendingBooking.planName,
        planPrice: pendingBooking.planPrice,
        amountPaid: pendingBooking.amountToPay,
        userId: pendingBooking.userId,
        userName: pendingBooking.userName,
        userEmail: pendingBooking.userEmail,
        userPhoneNumber: pendingBooking.userPhoneNumber,
        userUniversityOrCollege: pendingBooking.userUniversityOrCollege,
        selectedPaymentGateway: pendingBooking.selectedPaymentGateway,
        paymentGatewayOrderId: pendingBooking.paymentGatewayOrderId,
        paymentGatewayTransactionId: finalTransactionId,
        paymentStatus: "paid",
        bookingDate: pendingBooking.bookingDate,
        enrollmentDate: new Date(),
      });
      await newConfirmedBooking.save();
      res
        .status(200)
        .json({
          status: "success",
          message: "Payment confirmed!",
          data: {
            bookingId: newConfirmedBooking._id,
            transactionId: finalTransactionId,
          },
        });
    } else {
      pendingBooking.paymentStatus = "failed";
      if (finalTransactionId)
        pendingBooking.paymentGatewayTransactionId = finalTransactionId;
      await pendingBooking.save();
      return res
        .status(400)
        .json({ status: "error", message: "Payment verification failed." });
    }
  } catch (error) {
    console.error("Error confirming payment:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Server error while confirming payment.",
      });
  }
});

module.exports = router;