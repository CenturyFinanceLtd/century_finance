const Registration = require("../models/trainingprogramregistrationmodel");

exports.registerForCourse = async (req, res, next) => {
  console.log("--> Entered registerForCourse controller function.");

  // Log the text fields received from the form
  console.log("Form Data (req.body):", req.body);

  try {
    // Log file information if it exists.
    if (req.file) {
      console.log("File Upload Data (req.file):", {
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        path: req.file.path,
        size: req.file.size,
      });
    } else {
      // This is a critical error if no file is found after the upload middleware.
      console.error(
        "🔴 ERROR: No file was found in req.file. The upload may have failed silently."
      );
      return res.status(400).json({
        status: "fail",
        message: "Transaction screenshot file is missing. Upload failed.",
      });
    }

    console.log("Attempting to create new registration in database...");
    const newRegistration = await Registration.create({
      name: req.body.name,
      universityName: req.body.universityName,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      degree: req.body.degree,
      year: req.body.year,
      branch: req.body.branch,
      address: req.body.address,
      planName: req.body.planName,
      transactionId: req.body.transactionId,
      transactionScreenshotUrl: req.file.path,
      transactionScreenshotId: req.file.filename,
    });

    console.log(
      "✅ Successfully saved registration to database. ID:",
      newRegistration._id
    );
    res.status(201).json({
      status: "success",
      message: "Registration successful! We will be in touch shortly.",
      data: newRegistration,
    });
  } catch (error) {
    // This will catch any database errors (validation, duplicate keys, etc.)
    console.error(
      "� CATCH BLOCK: An error occurred during registration creation."
    );
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Full Error Object:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: `Duplicate field error: ${
          Object.keys(error.keyValue)[0]
        } is already registered.`,
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        status: "fail",
        message: `Validation Error: ${messages.join(" ")}`,
      });
    }

    res.status(500).json({
      status: "error",
      message: "Server error: Could not process your registration.",
    });
  }
};
