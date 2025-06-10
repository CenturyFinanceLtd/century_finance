const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load environment variables from .env file
dotenv.config();

// --- Import all necessary routes ---
const authRoutes = require("./routes/authRoutes");
const queryRoutes = require("./routes/queryRoutes");
const courseBookingRoutes = require("./routes/courseBookingRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const trainingplanRoutes = require("./routes/trainingplanRoutes");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// --- Middleware setup ---
const corsOptions = {
  origin: "https://www.centuryfinancelimited.com",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// --- MongoDB Connection ---
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("🔴 CRITICAL: MongoDB URI not found in your .env file.");
  process.exit(1);
}
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Successfully connected to MongoDB Atlas!"))
  .catch((err) => {
    console.error("🔴 CRITICAL: MongoDB connection error:", err.message);
    process.exit(1);
  });

// --- API Routes ---
app.get("/", (req, res) => {
  res.send("Century Finance Backend Server is Live and Running!");
});
app.use("/api/auth", authRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/course-bookings", courseBookingRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/register", registrationRoutes);
app.use("/api/trainingregister", trainingplanRoutes);

// --- Global Error Handler ---
app.use((err, req, res, next) => {
  console.error("🔴 UNHANDLED ERROR:", err.stack);
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message || "Something went very wrong on the server!",
  });
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`✅ Backend server is listening on port ${PORT}`);
  console.log(`🔗 Live on: https://api.centuryfinancelimited.com`);
});
