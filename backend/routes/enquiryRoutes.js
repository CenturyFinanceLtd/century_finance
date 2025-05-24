// routes/enquiryRoutes.js
const express = require("express");
const Enquiry = require("../models/Enquiry"); // Adjust path if your models folder is elsewhere

const router = express.Router();

// POST /api/enquiries/submit (or just /submit if mounted under /api/enquiries)
// Changed from /api/submit-enquiry to fit a more RESTful pattern if you mount it under /api/enquiries
// If you prefer /api/submit-enquiry, you can mount this router directly under /api and name the route /submit-enquiry
router.post("/submit", async (req, res, next) => {
  console.log("Received enquiry data:", req.body);

  const { fullName, email, phone, course, message } = req.body;

  // Basic validation (Mongoose schema will also validate)
  if (!fullName || !email || !phone || !course || !message) {
    return res.status(400).json({
      status: "fail",
      message:
        "All fields (fullName, email, phone, course, message) are required.",
    });
  }

  try {
    const newEnquiry = new Enquiry({
      fullName,
      email,
      phone,
      course,
      message,
      // submittedAt will be set by default by the schema
    });

    const savedEnquiry = await newEnquiry.save();
    console.log("Enquiry saved with ID:", savedEnquiry._id);

    res.status(201).json({
      status: "success",
      message: "Enquiry submitted successfully!",
      data: {
        enquiryId: savedEnquiry._id,
      },
    });
  } catch (error) {
    console.error("Error saving enquiry to MongoDB:", error.message);
    // Pass to global error handler or handle specifically
    if (error.name === "ValidationError") {
      return res.status(400).json({
        status: "fail",
        message: "Validation Error: " + error.message,
        errors: error.errors, // Provides details about which fields failed validation
      });
    }
    // For other errors, you might want to use the global error handler
    // by calling next(error) or sending a generic message.
    // For now, sending a specific message:
    res.status(500).json({
      status: "error",
      message:
        "Failed to submit enquiry due to a server error. Please try again later.",
    });
    // Or use next(error) to let your global error handler manage it:
    // error.statusCode = 500; // Optionally set a status code for the global handler
    // next(error);
  }
});

module.exports = router;
