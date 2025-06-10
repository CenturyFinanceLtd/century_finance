const express = require("express");
const multer = require("multer");
const path = require("path");
// Updated require path for the model
const TrainingRegistration = require("../models/trainingRegistration");

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure 'uploads/' directory exists
  },
  filename: function (req, file, cb) {
    // Create a unique filename to prevent overwriting
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Define the registration route
// The name 'transactionScreenshot' must match the name attribute in your form's file input
router.post("/", upload.single("transactionScreenshot"), async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Transaction screenshot is required." });
    }

    // Create a new registration document with data from the request
    const newRegistration = new TrainingRegistration({
      ...req.body,
      transactionScreenshot: req.file.path, // Save the path of the uploaded file
    });

    // Save the new registration to the database
    await newRegistration.save();

    res
      .status(201)
      .json({
        message:
          "Registration Successful! We will get in touch with you shortly.",
      });
  } catch (error) {
    // Handle potential errors, like a duplicate email or transactionId
    if (error.code === 11000) {
      return res
        .status(409)
        .json({
          message: `An entry with this ${
            Object.keys(error.keyValue)[0]
          } already exists.`,
        });
    }
    console.error("Registration Error:", error);
    res
      .status(500)
      .json({
        message: "Server error during registration. Please try again later.",
      });
  }
});

module.exports = router;
