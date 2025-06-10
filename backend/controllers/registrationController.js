const Registration = require("../models/trainingprogramregistrationmodel");

exports.registerForCourse = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "fail",
        message:
          "Transaction screenshot file is missing. The upload may have failed.",
      });
    }

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

    res.status(201).json({
      status: "success",
      message: "Registration successful! We will be in touch shortly.",
      data: newRegistration,
    });
  } catch (error) {
    console.error("🔴 REGISTRATION ERROR:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "This email address has already been registered.",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        status: "fail",
        message: `Invalid data: ${messages.join(" ")}`,
      });
    }

    res.status(500).json({
      status: "error",
      message: "Server error: Could not process your registration.",
    });
  }
};
