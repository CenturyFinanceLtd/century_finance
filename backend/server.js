// backend/server.js (Minimal for Testing Connections)
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
// const Razorpay = require('razorpay'); // Razorpay import commented out

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000; // Using port 4000 as previously set

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "🔴 MongoDB URI not found. Please set MONGODB_URI in your .env file."
  );
  // process.exit(1); // We'll let it run to check other things
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("✅ Successfully connected to MongoDB Atlas!"))
    .catch((err) => {
      console.error("🔴 MongoDB connection error:", err.message);
      // process.exit(1);
    });
}

// Attempt to Initialize Razorpay instance - ENTIRE BLOCK COMMENTED OUT
/*
try {
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
        const razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        console.log("✅ Razorpay instance initialized (or attempted to initialize).");
        if (!process.env.RAZORPAY_KEY_ID.startsWith('rzp_test_') && !process.env.RAZORPAY_KEY_ID.startsWith('rzp_live_')) {
            console.warn("⚠️  Warning: RAZORPAY_KEY_ID does not look like a valid Razorpay test or live key.");
        }
    } else {
        console.warn("⚠️  Razorpay KEY_ID or KEY_SECRET not found in .env file. Razorpay functionality will be disabled.");
    }
} catch (error) {
    console.error("🔴 Error initializing Razorpay:", error.message);
}
*/
console.log("ℹ️ Razorpay initialization is currently commented out.");

// Basic Route for testing server
app.get("/", (req, res) => {
  res.send("Century Finance Backend Server (Minimal Test Version) is Running!");
});

// Global error handler (optional, but good practice)
app.use((err, req, res, next) => {
  console.error("🔴 Unhandled error:", err.stack);
  res.status(500).send("Something broke on the server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `✅ Backend server (Minimal Test Version) is listening on port ${PORT}`
  );
  console.log(`🔗 Access it at http://localhost:${PORT}`);
});
