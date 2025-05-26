// /backend/routes/registrationRoutes.js

const express = require("express");
const axios = require("axios");
const crypto = require("crypto");
const Registration = require("../models/registrationModel"); // Verify this path is correct
const Razorpay = require("razorpay"); // Import Razorpay SDK

const router = express.Router();

// --- Cashfree Configuration ---
const CASHFREE_CLIENT_ID = process.env.CASHFREE_CLIENT_ID;
const CASHFREE_CLIENT_SECRET = process.env.CASHFREE_CLIENT_SECRET;
const CASHFREE_API_URL = "https://api.cashfree.com/pg/orders";

// --- Razorpay Configuration ---
// Ensure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are in your .env file
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ROUTE 1: Create a Cashfree payment order
router.post("/create-order", async (req, res) => {
  try {
    const registrationData = req.body;
    const orderId = `ORDER_CASHFREE_${Date.now()}`; // Added prefix for clarity
    const amount = 500;

    // Save the initial registration data with paymentGateway
    const newRegistration = new Registration({
      ...registrationData,
      orderId: orderId,
      paymentGateway: "cashfree", // Specify Cashfree
    });
    await newRegistration.save();

    const response = await axios.post(
      CASHFREE_API_URL,
      {
        customer_details: {
          customer_id: `CUST_${Date.now()}`,
          customer_email: registrationData.email,
          customer_phone: registrationData.mobileNumber,
          customer_name: registrationData.fullName,
        },
        order_meta: {
          return_url: `https://www.centuryfinancelimited.com/payment-status?order_id=${orderId}`, // Pass the actual orderId
        },
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        order_note: "Online Course Registration Fee (Cashfree)",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2022-09-01",
          "x-client-id": CASHFREE_CLIENT_ID,
          "x-client-secret": CASHFREE_CLIENT_SECRET,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error creating Cashfree order:",
      error.response ? error.response.data : error.message
    );
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "This email address has already been registered." });
    }
    res
      .status(500)
      .json({ message: "Failed to create Cashfree payment order" });
  }
});

// ROUTE 2: Create a Razorpay payment order
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
      ...registrationData,
      orderId: order.id, // Use Razorpay's order.id
      paymentGateway: "razorpay", // Specify Razorpay
    });
    await newRegistration.save();

    // Send back key details to frontend
    res.status(200).json({
      key_id: process.env.RAZORPAY_KEY_ID, // Send public key_id to frontend
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

// ROUTE 3: Verify Razorpay Payment Signature
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
        { orderId: razorpay_order_id, paymentGateway: "razorpay" }, // Ensure we update the correct Razorpay order
        {
          paymentStatus: "successful",
          paymentId: razorpay_payment_id, // Store Razorpay's payment ID
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
          paymentId: razorpay_payment_id, // Store Razorpay's payment ID even on failure for reference
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

// ROUTE 4: Handle Cashfree Webhook (remains as is)
router.post("/webhook", async (req, res) => {
  try {
    const signature = req.headers["x-webhook-signature"];
    const timestamp = req.headers["x-webhook-timestamp"];
    const payload = JSON.stringify(req.body);
    const secret = CASHFREE_CLIENT_SECRET;
    const stringToSign = timestamp + payload;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    if (signature !== expectedSignature) {
      return res.status(401).send("Invalid signature");
    }

    const { data } = req.body;
    const orderId = data.order.order_id;
    const orderStatus = data.order.order_status;
    const paymentId = data.payment.cf_payment_id;

    let finalStatus = "pending";
    if (orderStatus === "PAID") {
      finalStatus = "successful";
    } else if (["PAYMENT_FAILED", "EXPIRED"].includes(orderStatus)) {
      finalStatus = "failed";
    }

    await Registration.findOneAndUpdate(
      { orderId: orderId, paymentGateway: "cashfree" }, // Ensure we update the correct Cashfree order
      { paymentStatus: finalStatus, paymentId: paymentId || null },
      { new: true }
    );

    res.status(200).send("Webhook received successfully");
  } catch (error) {
    console.error("Error handling Cashfree webhook:", error);
    res.status(500).send("Error processing Cashfree webhook");
  }
});

module.exports = router;
