// /backend/routes/registrationRoutes.js

const express = require("express");
const axios = require("axios"); // Kept for potential future use, but not for Razorpay order creation
const crypto = require("crypto");
const Registration = require("../models/registrationModel"); // Verify this path is correct
const Razorpay = require("razorpay"); // Import Razorpay SDK

const router = express.Router();

// --- Razorpay Configuration ---
// Ensure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are in your .env file
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ROUTE 1: Create a Razorpay payment order
router.post("/create-razorpay-order", async (req, res) => {
  try {
    const registrationData = req.body;
    const amount = 500; // Amount in INR

    // Options for Razorpay order creation
    const options = {
      amount: amount * 100, // Amount in the smallest currency unit (paise)
      currency: "INR",
      receipt: `receipt_REG_${Date.now()}`, // Unique receipt ID
      notes: {
        registrationEmail: registrationData.email,
        course: "Online Course Registration (Razorpay)",
      },
    };

    const order = await razorpayInstance.orders.create(options);

    if (!order) {
      return res.status(500).json({ message: "Error creating Razorpay order" });
    }

    // Save the initial registration data with paymentGateway and Razorpay order_id
    const newRegistration = new Registration({
      ...registrationData, // This should include all form fields
      orderId: order.id, // Use Razorpay's order.id
      paymentGateway: "razorpay", // Specify Razorpay
    });
    await newRegistration.save();

    // Send back key details to frontend
    res.status(200).json({
      key_id: process.env.RAZORPAY_KEY_ID,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      name: "Century Finance Limited", // Your company name
      description: "Online Course Registration Fee",
      prefill_name: registrationData.fullName,
      prefill_email: registrationData.email,
      prefill_contact: registrationData.mobileNumber,
    });
  } catch (error) {
    console.error(
      "Error creating Razorpay order:",
      error.response ? error.response.data : error.message
    );
    if (error.code === 11000) {
      // MongoDB duplicate key error
      return res
        .status(409)
        .json({ message: "This email address has already been registered." });
    }
    res
      .status(500)
      .json({ message: "Failed to create Razorpay payment order" });
  }
});

// ROUTE 2: Verify Razorpay Payment Signature
router.post("/verify-razorpay-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res
        .status(400)
        .json({ message: "Missing payment details for verification." });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is authentic, update database
      await Registration.findOneAndUpdate(
        { orderId: razorpay_order_id, paymentGateway: "razorpay" },
        {
          paymentStatus: "successful",
          paymentId: razorpay_payment_id,
        },
        { new: true }
      );
      res.status(200).json({ message: "Payment verified successfully." });
    } else {
      // Payment verification failed
      await Registration.findOneAndUpdate(
        { orderId: razorpay_order_id, paymentGateway: "razorpay" },
        {
          paymentStatus: "failed",
          paymentId: razorpay_payment_id,
        },
        { new: true }
      );
      res
        .status(400)
        .json({ message: "Payment verification failed. Invalid signature." });
    }
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    res.status(500).json({ message: "Error verifying Razorpay payment." });
  }
});

module.exports = router;
