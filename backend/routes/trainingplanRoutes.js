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

// --- Configure Multer Storage with Cloudinary ---
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "training-registrations",
    format: "png",
    public_id: (req, file) => `screenshot-${req.body.email}-${Date.now()}`,
  },
});

// --- Initialize Multer Upload Middleware ---
const upload = multer({ storage: storage });

// --- Define The Route ---
// The API endpoint the frontend calls will still be '/api/register'
router.post(
  "/",
  upload.single("transactionScreenshot"),
  registrationController.registerForCourse
);

module.exports = router;
