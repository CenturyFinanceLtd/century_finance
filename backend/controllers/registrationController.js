// 👇 IMPORTANT: Update this require statement to use the new model filename
const Registration = require("../models/trainingprogramregistrationmodel.js");

// This is the main function to handle the registration logic
exports.registerForCourse = async (req, res, next) => {
  try {
    // Check if the file was uploaded by multer/cloudinary middleware
    if (!req.file) {
      return res.status(400).json({
        status: "fail",
        message: "Transaction screenshot is required. Please upload the image.",
      });
    }

    // Create a new registration document
    const newRegistration = await Registration.create({
      ...req.body,
      transactionScreenshotUrl: req.file.path,
      transactionScreenshotId: req.file.filename,
    });

    // Send a success response
    res.status(201).json({
      status: "success",
      message: "Registration successful! We will be in touch shortly.",
      data: newRegistration,
    });
  } catch (error) {
    // Handle specific errors, like a duplicate email
    if (error.code === 11000) {
      return res.status(409).json({
        // 409 Conflict
        status: "fail",
        message: "This email address has already been registered.",
      });
    }

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        status: "fail",
        message: messages.join(" "),
      });
    }

    // For any other errors, send a generic server error response
    console.error("REGISTRATION_CONTROLLER_ERROR", error);
    res.status(500).json({
      status: "error",
      message: "Server error: Could not process your registration.",
    });
  }
};
