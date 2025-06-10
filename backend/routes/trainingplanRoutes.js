const express = require("express");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const registrationController = require("../controllers/registrationController");

const router = express.Router();

// --- Configure Cloudinary ---
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

// --- Initialize Multer with File Size Limit ---
// THIS IS THE FIX: We are adding a 'limits' object to multer's configuration.
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20, // 20 MB file size limit
  },
});

// --- Define The Route ---
router.post(
  "/",
  upload.single("transactionScreenshot"),
  registrationController.registerForCourse
);

module.exports = router;
