const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const registrationController = require("../controllers/registrationController");

const router = express.Router();

// --- Configure Cloudinary ---
// Ensure your .env file has these variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- Configure Multer Storage ---
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "training-registrations",
    format: "png",
    public_id: (req, file) => `screenshot-${Date.now()}`,
  },
});

const upload = multer({ storage: storage });

// --- Define The Route with Logging ---
router.post(
  "/",
  (req, res, next) => {
    // This is a new logging middleware. If you see this message in your
    // terminal, it means the request has successfully reached the backend.
    console.log(
      `[${new Date().toISOString()}] Received POST request on /api/trainingregister`
    );
    next(); // Move to the next middleware (the file upload)
  },
  upload.single("transactionScreenshot"),
  registrationController.registerForCourse
);

module.exports = router;
