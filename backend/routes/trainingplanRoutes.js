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

const upload = multer({ storage: storage });

// --- Define The Route ---
router.post(
  "/",
  upload.single("transactionScreenshot"),
  registrationController.registerForCourse
);

module.exports = router;
