// backend/server.js (Now with Authentication and Training Registration Routes)
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // Added for serving static files

// Load environment variables from .env file
dotenv.config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const queryRoutes = require("./routes/queryRoutes");
const courseBookingRoutes = require("./routes/courseBookingRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const trainingRegisterRoutes = require("./routes/trainingRegister"); // *** NEW ***

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// --- START: CORRECTED MIDDLEWARE CONFIGURATION ---

// Middleware setup
const corsOptions = {
  origin: "https://www.centuryfinancelimited.com",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Set body parser limits for large file uploads
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// --- END: CORRECTED MIDDLEWARE CONFIGURATION ---

// *** NEW *** Make the 'uploads' directory accessible
// This will allow your frontend to display the uploaded screenshots
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "🔴 MongoDB URI not found. Please set MONGODB_URI in your .env file."
  );
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Successfully connected to MongoDB Atlas!"))
  .catch((err) => {
    console.error("🔴 MongoDB connection error:", err.message);
    process.exit(1);
  });

console.log("ℹ️ Razorpay initialization is currently commented out.");

// --- API Routes ---
app.get("/", (req, res) => {
  res.send("Century Finance Backend Server is Live and Running!");
});

// Authentication routes
app.use("/api/auth", authRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/course-bookings", courseBookingRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/register", registrationRoutes);

// *** NEW *** Add the training registration route
app.use("/api/training-register", trainingRegisterRoutes);

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error("🔴 UNHANDLED ERROR:", err.stack);
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
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message || "Something went very wrong on the server!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend server is listening on port ${PORT}`);
  console.log(`🔗 API base URL: http://localhost:${PORT}`);
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
