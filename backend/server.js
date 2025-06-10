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
const queryRoutes = require("./routes/queryRoutes"); // Import query routes
const courseBookingRoutes = require("./routes/courseBookingRoutes"); // Adjust path as needed
const enquiryRoutes = require("./routes/enquiryRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

// 👇 CHANGE THIS LINE: from registrationRoutes to trainingplanRoutes
const trainingplanRoutes = require("./routes/trainingplanRoutes"); // Use the new filename


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;



// Middleware setup


// *** Updated CORS Configuration ***
// This should come BEFORE your API routes are defined
const corsOptions = {
  origin: "https://www.centuryfinancelimited.com", // Allow requests from your frontend domain
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// 👇 THE FIX IS HERE: Increase the request body size limit to 50MB
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


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

console.log("ℹ️ Razorpay initialization is currently commented out.");

// --- API Routes ---
app.get("/", (req, res) => {
  res.send("Century Finance Backend Server is Live and Running!");
});

// Authentication routes
app.use("/api/auth", authRoutes); // All auth routes will be prefixed with /api/auth
app.use("/api/queries", queryRoutes); // Use query routes, prefixed with /api/queries
app.use("/api/course-bookings", courseBookingRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use('/api/register', registrationRoutes);
app.use("/api/trainingregister", trainingplanRoutes);

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
    return res.status(401).json({
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
// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend server is listening on port ${PORT}`);
  console.log(
    `🔗 API base URL: http://localhost:${PORT} (or your live domain, e.g., https://api.centuryfinancelimited.com)`
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
