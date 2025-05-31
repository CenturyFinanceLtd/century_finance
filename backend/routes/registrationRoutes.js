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
// Note: PAYU_SURL and PAYU_FURL from .env are used directly in frontend-facing data.
// The actual endpoints will be defined below.

// Helper function to calculate PayU hash
const calculatePayUHash = (params, salt) => {
  let hashString = "";
  const hashSequence = [
    // As per PayU documentation for request hash
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

// Helper function to verify PayU response hash
const verifyPayUHash = (params, salt) => {
  let hashString = salt + "|"; // Salt is prepended for response hash
  const hashSequence = [
    // As per PayU documentation for response hash
    "status",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "", // udf10 to udf6 are usually empty in response
    "udf5",
    "udf4",
    "udf3",
    "udf2",
    "udf1",
    "email",
    "firstname",
    "productinfo",
    "amount",
    "txnid",
    "key", // key is the last one
  ];
  // Important: For response hash, the parameters are in a specific order,
  // and it's often easier to build the string from the actual POSTed data
  // ensuring you pick them in the documented reverse order from 'status' down to 'key'.
  // The `params` object here should be the direct `req.body` from PayU.

  const availableParams = { ...params }; // Clone to avoid modifying original

  hashSequence.forEach((key) => {
    hashString += (availableParams[key] || "") + "|";
  });
  hashString = hashString.slice(0, -1); // Remove trailing '|'

  // Let's rebuild hashString strictly based on PayU's documented response order
  // salt|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
  // The empty pipes are for fields that might not be present or are fixed empty.
  // It's critical that all fields PayU includes in its POST for hash calculation are included here in the right order.
  let newHashString = salt + "|" + (params.status || "");
  for (let i = 0; i < 10; i++) {
    // For potential additionalparams, udf10 down to udf6
    newHashString +=
      "|" + (params["additionalCharges"] || params[`udf${10 - i}`] || ""); // This part is tricky; PayU docs say these are part of it. Usually additionalCharges might be used by PayU if applicable.
  }
  // The UDFs are generally from udf5 down to udf1
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

    // Check if already registered with this email FOR THIS GATEWAY (or overall if that's the policy)
    const existingRegistration = await Registration.findOne({
      email: registrationData.email,
      // paymentGateway: "razorpay", // Optional: scope uniqueness to gateway
      // paymentStatus: "successful" // Optional: only consider successful ones
    });
    if (
      existingRegistration &&
      existingRegistration.paymentStatus === "successful"
    ) {
      return res
        .status(409)
        .json({ message: "This email is already successfully registered." });
    }

    // If an order was previously created but not completed, you might want to update it or handle it.
    // For simplicity, we create a new one or update if found by email and status pending.
    const newRegistration = await Registration.findOneAndUpdate(
      {
        email: registrationData.email,
        paymentStatus: { $ne: "successful" },
        paymentGateway: "razorpay",
      },
      {
        ...registrationData,
        orderId: order.id,
        paymentGateway: "razorpay",
        amount: amount, // Store course amount
        paymentStatus: "pending", // Initial status
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

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
    // Removed the generic 11000 check as we are handling specific email duplication logic above.
    res
      .status(500)
      .json({
        message:
          "Failed to create Razorpay payment order. " + (error.message || ""),
      });
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

    const updateFields = {
      paymentId: razorpay_payment_id,
      paymentSignature: razorpay_signature, // Store signature
    };

    if (isAuthentic) {
      updateFields.paymentStatus = "successful";
      await Registration.findOneAndUpdate(
        { orderId: razorpay_order_id, paymentGateway: "razorpay" },
        updateFields,
        { new: true }
      );
      res.status(200).json({ message: "Payment verified successfully." });
    } else {
      updateFields.paymentStatus = "failed";
      await Registration.findOneAndUpdate(
        { orderId: razorpay_order_id, paymentGateway: "razorpay" },
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
    const registrationData = req.body; // { fullName, email, mobileNumber, amount (string "500.00"), productinfo ... }
    const amount = parseFloat(registrationData.amount || "500.00").toFixed(2); // Ensure it's string with 2 decimals
    const productinfo =
      registrationData.productinfo || "Online Course Registration (PayU)";
    const firstname = registrationData.fullName
      ? registrationData.fullName.split(" ")[0]
      : "Guest";
    const email = registrationData.email;
    const phone = registrationData.mobileNumber;

    const txnid = uuidv4(); // Generate a unique transaction ID

    // Check if already registered with this email
    const existingRegistration = await Registration.findOne({
      email: registrationData.email,
      // paymentGateway: "payu",
      // paymentStatus: "successful"
    });
    if (
      existingRegistration &&
      existingRegistration.paymentStatus === "successful"
    ) {
      return res
        .status(409)
        .json({ message: "This email is already successfully registered." });
    }

    // Save initial registration attempt for PayU
    await Registration.findOneAndUpdate(
      {
        email: registrationData.email,
        paymentStatus: { $ne: "successful" },
        paymentGateway: "payu",
      },
      {
        ...registrationData, // This should include all form fields
        orderId: txnid, // Using txnid as orderId for PayU
        paymentGateway: "payu",
        amount: parseFloat(amount),
        paymentStatus: "pending", // Initial status
        productinfo: productinfo,
        firstname: firstname,
        phone: phone,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const payUParams = {
      key: PAYU_KEY,
      txnid: txnid,
      amount: amount.toString(),
      productinfo: productinfo,
      firstname: firstname,
      email: email,
      phone: phone, // Make sure this is included if used in hash
      surl: process.env.PAYU_SURL, // From .env
      furl: process.env.PAYU_FURL, // From .env
      // You can add udf1 to udf5 if needed, remember to include them in hash calculation
      udf1: "", // Example User Defined Field
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
      // key: PAYU_KEY, // Frontend already has this from env
      // surl: process.env.PAYU_SURL, // Frontend has this
      // furl: process.env.PAYU_FURL, // Frontend has this
    });
  } catch (error) {
    console.error("Error creating PayU order details:", error);
    res
      .status(500)
      .json({
        message:
          "Failed to create PayU order details. " + (error.message || ""),
      });
  }
});

// ROUTE 4: PayU Success Callback (surl)
// IMPORTANT: PayU will POST data to this URL.
router.post("/payu-success", async (req, res) => {
  try {
    const payuResponse = req.body; // This contains all parameters POSTed by PayU
    // Parameters include: status, txnid, amount, productinfo, firstname, email, hash, payuMoneyId, etc.

    console.log("PayU Success Callback Received:", payuResponse);

    const key = PAYU_KEY; // Use your merchant key
    const salt = PAYU_SALT; // Use your merchant salt

    // Verify the hash returned by PayU
    // The hash string should be constructed using: salt|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
    const paramsForHash = { ...payuResponse, key: key }; // Add key to params if not already there from response for verification
    const calculatedHash = verifyPayUHash(paramsForHash, salt);

    let redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=verification_failed`;

    if (calculatedHash === payuResponse.hash) {
      if (payuResponse.status === "success") {
        // Payment successful and hash verified
        await Registration.findOneAndUpdate(
          { orderId: payuResponse.txnid, paymentGateway: "payu" },
          {
            paymentStatus: "successful",
            paymentId: payuResponse.payuMoneyId, // PayU's payment ID
            mode: payuResponse.mode, // Payment mode (e.g., CC, NB, UPI)
            bankcode: payuResponse.bankcode,
            pg_TYPE: payuResponse.PG_TYPE,
            bank_ref_num: payuResponse.bank_ref_num,
            // Store other relevant details from payuResponse as needed
            rawResponse: JSON.stringify(payuResponse), // Storing raw response can be useful for debugging
          },
          { new: true }
        );
        console.log(`Payment successful for txnid: ${payuResponse.txnid}`);
        redirectUrl = `${process.env.FRONTEND_URL}/payment-success?txnid=${payuResponse.txnid}&paymentId=${payuResponse.payuMoneyId}`;
      } else {
        // Payment status is not 'success' (e.g., 'pending' or 'failure' directly from PayU)
        await Registration.findOneAndUpdate(
          { orderId: payuResponse.txnid, paymentGateway: "payu" },
          {
            paymentStatus: payuResponse.status || "failed", // Use status from PayU
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
      // Hash mismatch - potential tampering
      console.error("PayU Hash Mismatch for txnid:", payuResponse.txnid);
      // Optionally update status to reflect hash mismatch
      await Registration.findOneAndUpdate(
        { orderId: payuResponse.txnid, paymentGateway: "payu" },
        {
          paymentStatus: "tampered", // Or another status indicating hash mismatch
          rawResponse: JSON.stringify(payuResponse),
        },
        { new: true }
      );
    }
    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in PayU success callback:", error);
    // Generic failure redirect if something goes very wrong
    const txnid = req.body.txnid || "unknown";
    res.redirect(
      `${process.env.FRONTEND_URL}/payment-failure?txnid=${txnid}&error=server_error`
    );
  }
});

// ROUTE 5: PayU Failure Callback (furl)
// IMPORTANT: PayU will POST data to this URL.
router.post("/payu-failure", async (req, res) => {
  try {
    const payuResponse = req.body;
    console.log("PayU Failure Callback Received:", payuResponse);

    const key = PAYU_KEY;
    const salt = PAYU_SALT;

    const paramsForHash = { ...payuResponse, key: key };
    const calculatedHash = verifyPayUHash(paramsForHash, salt);

    let redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&error=unknown_failure`;

    if (calculatedHash === payuResponse.hash) {
      // Hash is fine, payment genuinely failed or was cancelled by user
      await Registration.findOneAndUpdate(
        { orderId: payuResponse.txnid, paymentGateway: "payu" },
        {
          paymentStatus: payuResponse.status || "failed", // Use status from PayU, typically 'failure'
          paymentId: payuResponse.payuMoneyId, // May or may not be present
          rawResponse: JSON.stringify(payuResponse),
        },
        { new: true }
      );
      console.log(
        `Payment failed/cancelled for txnid: ${payuResponse.txnid}, status: ${payuResponse.status}`
      );
      redirectUrl = `${process.env.FRONTEND_URL}/payment-failure?txnid=${payuResponse.txnid}&status=${payuResponse.status}`;
    } else {
      // Hash mismatch on failure - less critical but good to log
      console.error(
        "PayU Hash Mismatch on failure for txnid:",
        payuResponse.txnid
      );
      await Registration.findOneAndUpdate(
        { orderId: payuResponse.txnid, paymentGateway: "payu" },
        {
          paymentStatus: "tampered_failure", // Or another status
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
