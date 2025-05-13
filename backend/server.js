// backend/server.js (Now with Authentication Routes)
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
// const Razorpay = require('razorpay'); // Still commented out as per your request

// Load environment variables from .env file
dotenv.config(); // This ensures .env variables are loaded

// Import routes
const authRoutes = require("./routes/authRoutes"); // For user authentication
// const bookingRoutes = require('./routes/bookingRoutes'); // We'll add this back later if needed

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "🔴 MongoDB URI not found. Please set MONGODB_URI in your .env file."
  );
  process.exit(1); // Critical: Exit if DB URI is not found
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Successfully connected to MongoDB Atlas!"))
  .catch((err) => {
    console.error("🔴 MongoDB connection error:", err.message);
    process.exit(1); // Critical: Exit if cannot connect to DB
  });

// Razorpay Initialization (still commented out)
/*
try {
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
        const razorpayInstance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        console.log("✅ Razorpay instance initialized (or attempted to initialize).");
    } else {
        console.warn("⚠️  Razorpay KEY_ID or KEY_SECRET not found. Razorpay functionality will be disabled.");
    }
} catch (error) {
    console.error("🔴 Error initializing Razorpay:", error.message);
}
*/
console.log("ℹ️ Razorpay initialization is currently commented out.");

// --- API Routes ---
app.get("/", (req, res) => {
  res.send("Century Finance Backend Server is Live and Running!");
});

// Authentication routes
app.use("/api/auth", authRoutes); // All auth routes will be prefixed with /api/auth

// Booking routes (to be added back later)
// app.use('/api/bookings', bookingRoutes);

// --- Global Error Handler ---
// This should be defined AFTER all other app.use() and routes calls
app.use((err, req, res, next) => {
  console.error("🔴 UNHANDLED ERROR:", err.stack);
  // Check for specific error types if needed
  if (err.name === "JsonWebTokenError") {
    return res
      .status(401)
      .json({ status: "fail", message: "Invalid token. Please log in again." });
  }
  if (err.name === "TokenExpiredError") {
    return res
      .status(401)
      .json({
        status: "fail",
        message: "Your token has expired. Please log in again.",
      });
  }
  // Default to 500 server error
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message || "Something went very wrong on the server!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend server is listening on port ${PORT}`);
  console.log(
    `🔗 API base URL: http://localhost:${PORT} (or your live domain)`
  );
  console.log(
    `🔑 JWT_SECRET loaded: ${
      process.env.JWT_SECRET ? "Yes" : "NO - CRITICAL! Set JWT_SECRET in .env"
    }`
  );
  console.log(
    `📧 Email User loaded: ${
      process.env.EMAIL_USER
        ? "Yes"
        : "NO - Email sending will fail. Set EMAIL_USER in .env"
    }`
  );
});
