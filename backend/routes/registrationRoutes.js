// /backend/routes/registrationRoutes.js

const express = require("express");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid"); // For generating unique txnid for PayU
const Registration = require("../models/registrationModel"); // Verify this path is correct
const Razorpay = require("razorpay");

const router = express.Router();

// --- Razorpay Configuration ---
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// --- PayU Configuration ---
const PAYU_KEY = process.env.PAYU_MERCHANT_KEY;
const PAYU_SALT = process.env.PAYU_MERCHANT_SALT;

// Helper function to calculate PayU hash (remains the same)
const calculatePayUHash = (params, salt) => {
  let hashString = "";
  const hashSequence = [
    "key",
    "txnid",
    "amount",
    "productinfo",
    "firstname",
    "email",
    "udf1",
    "udf2",
    "udf3",
    "udf4",
    "udf5",
    "udf6",
    "udf7",
    "udf8",
    "udf9",
    "udf10",
  ];
  hashSequence.forEach((key) => {
    hashString += (params[key] || "") + "|";
  });
  hashString += salt;
  return crypto.createHash("sha512").update(hashString).digest("hex");
};

// Helper function to verify PayU response hash (remains the same)
const verifyPayUHash = (params, salt) => {
  let newHashString = salt + "|" + (params.status || "");
  for (let i = 0; i < 10; i++) {
    newHashString +=
      "|" + (params["additionalCharges"] || params[`udf${10 - i}`] || "");
  }
  newHashString += "|" + (params.udf5 || "");
  newHashString += "|" + (params.udf4 || "");
  newHashString += "|" + (params.udf3 || "");
  newHashString += "|" + (params.udf2 || "");
  newHashString += "|" + (params.udf1 || "");
  newHashString += "|" + (params.email || "");
  newHashString += "|" + (params.firstname || "");
  newHashString += "|" + (params.productinfo || "");
  newHashString += "|" + (params.amount || "");
  newHashString += "|" + (params.txnid || "");
  newHashString += "|" + (params.key || "");
  return crypto.createHash("sha512").update(newHashString).digest("hex");
};

// --- Razorpay Routes ---

// ROUTE 1: Create a Razorpay payment order
router.post("/create-razorpay-order", async (req, res) => {
  try {
    const registrationData = req.body;
    const amount = 500; // Amount in INR

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_REG_${Date.now()}`,
      notes: {
        registrationEmail: registrationData.email,
        course: "Online Course Registration (Razorpay)",
      },
    };

    const order = await razorpayInstance.orders.create(options);

    if (!order) {
      return res.status(500).json({ message: "Error creating Razorpay order" });
    }

    // MODIFICATION: Always create a new registration document
    const newRegistration = new Registration({
      ...registrationData, // This should include all form fields
      orderId: order.id,
      paymentGateway: "razorpay",
      amount: amount, // Store course amount
      paymentStatus: "pending", // Initial status
    });
    await newRegistration.save(); // Save the new document

    res.status(200).json({
      key_id: process.env.RAZORPAY_KEY_ID,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      name: "Century Finance Limited",
      description: "Online Course Registration Fee",
      prefill_name: registrationData.fullName,
      prefill_email: registrationData.email,
      prefill_contact: registrationData.mobileNumber,
    });
  } catch (error) {
    console.error(
      "Error creating Razorpay order:",
      error.response ? error.response.data : error.message || error
    );
    // Handle specific MongoDB duplicate key errors if you have other unique indexes
    if (error.code === 11000) {
      // Example: If orderId + paymentGateway should be unique for pending orders
      return res
        .status(409)
        .json({
          message:
            "A registration with this order ID might already exist or another unique constraint was violated.",
        });
    }
    res
      .status(500)
      .json({
        message:
          "Failed to create Razorpay payment order. " + (error.message || ""),
      });
  }
});

// ROUTE 2: Verify Razorpay Payment Signature (remains largely the same, ensures it finds the correct pending order)
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

    const updateFields = {
      paymentId: razorpay_payment_id,
      paymentSignature: razorpay_signature,
    };

    // Find the specific pending registration to update
    // It's important that orderId is unique for pending transactions for a gateway
    const registrationToUpdate = await Registration.findOne({
      orderId: razorpay_order_id,
      paymentGateway: "razorpay",
      paymentStatus: "pending", // Ensure we are updating a pending one
    });

    if (!registrationToUpdate) {
      console.log(
        `No pending registration found for Razorpay orderId: ${razorpay_order_id} to verify.`
      );
      // This could happen if the payment is verified twice, or if the initial record wasn't saved.
      // Or if a successful/failed payment is being re-verified. Check existing status.
      const existingRegistration = await Registration.findOne({
        orderId: razorpay_order_id,
        paymentGateway: "razorpay",
      });
      if (
        existingRegistration &&
        existingRegistration.paymentStatus === "successful"
      ) {
        return res
          .status(200)
          .json({ message: "Payment already verified successfully." });
      }
      return res
        .status(404)
        .json({ message: "No matching pending registration found to verify." });
    }

    if (isAuthentic) {
      updateFields.paymentStatus = "successful";
      await Registration.findByIdAndUpdate(
        registrationToUpdate._id,
        updateFields,
        { new: true }
      );
      res.status(200).json({ message: "Payment verified successfully." });
    } else {
      updateFields.paymentStatus = "failed";
      await Registration.findByIdAndUpdate(
        registrationToUpdate._id,
        updateFields,
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

// --- PayU Routes ---

// ROUTE 3: Create PayU Order Details (Generate Hash)
router.post("/create-payu-order", async (req, res) => {
  try {
    const registrationData = req.body;
    const amount = parseFloat(registrationData.amount || "500.00").toFixed(2);
    const productinfo =
      registrationData.productinfo || "Online Course Registration (PayU)";
    const firstname = registrationData.fullName
      ? registrationData.fullName.split(" ")[0]
      : "Guest";
    const email = registrationData.email;
    const phone = registrationData.mobileNumber;

    const txnid = uuidv4();

    // MODIFICATION: Always create a new registration document
    const newRegistration = new Registration({
      ...registrationData,
      orderId: txnid, // Using txnid as orderId for PayU
      paymentGateway: "payu",
      amount: parseFloat(amount),
      paymentStatus: "pending",
      productinfo: productinfo,
      firstname: firstname,
      phone: phone,
    });
    await newRegistration.save(); // Save the new document

    const payUParams = {
      key: PAYU_KEY,
      txnid: txnid,
      amount: amount.toString(),
      productinfo: productinfo,
      firstname: firstname,
      email: email,
      phone: phone,
      surl: process.env.PAYU_SURL,
      furl: process.env.PAYU_FURL,
      udf1: "",
      udf2: "",
      udf3: "",
      udf4: "",
      udf5: "",
    };

    const hash = calculatePayUHash(payUParams, PAYU_SALT);

    res.status(200).json({
      txnid: txnid,
      amount: amount.toString(),
      productinfo: productinfo,
      hash: hash,
    });
  } catch (error) {
    console.error("Error creating PayU order details:", error);
    // Handle specific MongoDB duplicate key errors if you have other unique indexes
    if (error.code === 11000) {
      return res
        .status(409)
        .json({
          message:
            "A registration with this transaction ID might already exist or another unique constraint was violated.",
        });
    }
    res
      .status(500)
      .json({
        message:
          "Failed to create PayU order details. " + (error.message || ""),
      });
  }
});

// ROUTE 4: PayU Success Callback (surl) (Ensure it finds the correct pending order)
router.post("/payu-success", async (req, res) => {
  try {
    const payuResponse = req.body;
    console.log("PayU Success Callback Received:", payuResponse);

    const key = PAYU_KEY;
    const salt = PAYU_SALT;

    const paramsForHash = { ...payuResponse, key: key };
    const calculatedHash = verifyPayUHash(paramsForHash, salt);

    let redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=verification_failed`;

    // Find the specific pending registration to update
    const registrationToUpdate = await Registration.findOne({
      orderId: payuResponse.txnid, // txnid is stored as orderId for PayU
      paymentGateway: "payu",
      paymentStatus: "pending",
    });

    if (!registrationToUpdate) {
      console.log(
        `No pending registration found for PayU txnid: ${payuResponse.txnid} to verify.`
      );
      const existingRegistration = await Registration.findOne({
        orderId: payuResponse.txnid,
        paymentGateway: "payu",
      });
      if (
        existingRegistration &&
        existingRegistration.paymentStatus === "successful"
      ) {
        return res.redirect(
          `${process.env.FRONTEND_URL}/payment-success?txnid=${payuResponse.txnid}&paymentId=${existingRegistration.paymentId}&status=already_verified`
        );
      }
      return res.redirect(
        `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=no_pending_registration_found`
      );
    }

    if (calculatedHash === payuResponse.hash) {
      if (payuResponse.status === "success") {
        await Registration.findByIdAndUpdate(
          registrationToUpdate._id,
          {
            paymentStatus: "successful",
            paymentId: payuResponse.payuMoneyId,
            mode: payuResponse.mode,
            bankcode: payuResponse.bankcode,
            pg_TYPE: payuResponse.PG_TYPE,
            bank_ref_num: payuResponse.bank_ref_num,
            rawResponse: JSON.stringify(payuResponse),
          },
          { new: true }
        );
        console.log(`Payment successful for txnid: ${payuResponse.txnid}`);
        redirectUrl = `${process.env.FRONTEND_URL}/payment-success?txnid=${payuResponse.txnid}&paymentId=${payuResponse.payuMoneyId}`;
      } else {
        await Registration.findByIdAndUpdate(
          registrationToUpdate._id,
          {
            paymentStatus: payuResponse.status || "failed",
            paymentId: payuResponse.payuMoneyId,
            rawResponse: JSON.stringify(payuResponse),
          },
          { new: true }
        );
        console.log(
          `Payment status '${payuResponse.status}' for txnid: ${payuResponse.txnid}`
        );
        redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&status=${payuResponse.status}`;
      }
    } else {
      console.error("PayU Hash Mismatch for txnid:", payuResponse.txnid);
      await Registration.findByIdAndUpdate(
        registrationToUpdate._id,
        {
          paymentStatus: "tampered",
          rawResponse: JSON.stringify(payuResponse),
        },
        { new: true }
      );
      redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=hash_mismatch`;
    }
    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in PayU success callback:", error);
    const txnid = req.body.txnid || "unknown";
    res.redirect(
      `${process.env.FRONTEND_URL}/payment-failure?txnid=${txnid}&error=server_error`
    );
  }
});

// ROUTE 5: PayU Failure Callback (furl) (Ensure it finds the correct pending order)
router.post("/payu-failure", async (req, res) => {
  try {
    const payuResponse = req.body;
    console.log("PayU Failure Callback Received:", payuResponse);

    const key = PAYU_KEY;
    const salt = PAYU_SALT;

    const paramsForHash = { ...payuResponse, key: key };
    const calculatedHash = verifyPayUHash(paramsForHash, salt);

    let redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=unknown_failure`;

    const registrationToUpdate = await Registration.findOne({
      orderId: payuResponse.txnid,
      paymentGateway: "payu",
      paymentStatus: "pending", // Or handle if it's already failed/tampered
    });

    if (!registrationToUpdate) {
      console.log(
        `No pending registration found for PayU txnid: ${payuResponse.txnid} on failure callback.`
      );
      const existingRegistration = await Registration.findOne({
        orderId: payuResponse.txnid,
        paymentGateway: "payu",
      });
      if (
        existingRegistration &&
        (existingRegistration.paymentStatus === "failed" ||
          existingRegistration.paymentStatus === "tampered_failure")
      ) {
        return res.redirect(
          `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&status=${existingRegistration.paymentStatus}&info=already_processed_as_failure`
        );
      }
      return res.redirect(
        `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=no_matching_registration_on_failure`
      );
    }

    if (calculatedHash === payuResponse.hash) {
      await Registration.findByIdAndUpdate(
        registrationToUpdate._id,
        {
          paymentStatus: payuResponse.status || "failed",
          paymentId: payuResponse.payuMoneyId,
          rawResponse: JSON.stringify(payuResponse),
        },
        { new: true }
      );
      console.log(
        `Payment failed/cancelled for txnid: ${payuResponse.txnid}, status: ${payuResponse.status}`
      );
      redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&status=${payuResponse.status}`;
    } else {
      console.error(
        "PayU Hash Mismatch on failure for txnid:",
        payuResponse.txnid
      );
      await Registration.findByIdAndUpdate(
        registrationToUpdate._id,
        {
          paymentStatus: "tampered_failure",
          rawResponse: JSON.stringify(payuResponse),
        },
        { new: true }
      );
      redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=verification_failed_on_failure`;
    }
    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in PayU failure callback:", error);
    const txnid = req.body.txnid || "unknown";
    res.redirect(
      `${process.env.FRONTEND_URL}/payment-failure?txnid=${txnid}&error=server_error_on_failure`
    );
  }
});

module.exports = router;
