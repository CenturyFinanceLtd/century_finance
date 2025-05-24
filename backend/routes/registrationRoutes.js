const express = require("express");
const axios = require("axios");
const crypto = require("crypto");
const Registration = require("../models/registrationModel");

const router = express.Router();

const CASHFREE_CLIENT_ID = process.env.CASHFREE_CLIENT_ID;
const CASHFREE_CLIENT_SECRET = process.env.CASHFREE_CLIENT_SECRET;
const CASHFREE_API_URL = "https://sandbox.cashfree.com/pg/orders"; // Use 'https://api.cashfree.com/pg/orders' for production

// ROUTE 1: Create a payment order
router.post("/create-order", async (req, res) => {
  try {
    const registrationData = req.body;
    const orderId = `ORDER_${Date.now()}`;
    const amount = 500;

    // First, save the initial registration data with a 'pending' status
    const newRegistration = new Registration({ ...registrationData, orderId });
    await newRegistration.save();

    // Now, create the order with Cashfree
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
          return_url: `http://localhost:3000/payment-status?order_id={order_id}`, // Your frontend success/failure page
        },
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        order_note: "Online Course Registration Fee",
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
      "Error creating order:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to create payment order" });
  }
});

// ROUTE 2: Handle Cashfree Webhook for payment status
router.post("/webhook", async (req, res) => {
  try {
    const signature = req.headers["x-webhook-signature"];
    const timestamp = req.headers["x-webhook-timestamp"];
    const payload = JSON.stringify(req.body);

    // **IMPORTANT**: Verify the webhook signature for security
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

    // Update the registration document in MongoDB
    await Registration.findOneAndUpdate(
      { orderId: orderId },
      { paymentStatus: finalStatus, paymentId: paymentId || null },
      { new: true }
    );

    res.status(200).send("Webhook received successfully");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Error processing webhook");
  }
});

module.exports = router;
