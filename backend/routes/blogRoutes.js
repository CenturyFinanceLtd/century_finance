const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const BlogPost = require("../models/blogPost");

// --- Multer Configuration for File Uploads ---
const storage = multer.diskStorage({
  // Destination directory for uploaded files
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this 'uploads' directory exists
  },
  // Filename configuration to avoid naming conflicts
  filename: function (req, file, cb) {
    // fieldname (e.g., 'thumbnail') - timestamp - original extension
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// --- Route to Add a New Blog Post ---
// We use upload.fields() to handle multiple image uploads from different fields
router.post(
  "/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Extract text data from the request body
      const {
        title,
        category,
        slug,
        metaTitle,
        metaKeywords,
        metaDescription,
        description,
        authorName,
        authorDescription,
      } = req.body;

      // Check if files were uploaded and get their paths
      const thumbnailPath = req.files.thumbnail
        ? req.files.thumbnail[0].path
        : null;
      const authorImagePath = req.files.authorImage
        ? req.files.authorImage[0].path
        : null;

      const newPost = new BlogPost({
        title,
        category,
        slug,
        metaTitle,
        metaKeywords,
        metaDescription,
        description,
        author: {
          name: authorName,
          description: authorDescription,
          image: authorImagePath, // Save the file path
        },
        thumbnail: thumbnailPath, // Save the file path
      });

      await newPost.save();
      res.status(201).json({ message: "Blog post created successfully!" });
    } catch (error) {
      console.error("Error creating blog post:", error);
      res
        .status(500)
        .json({ message: "Error saving blog post", error: error.message });
    }
  }
);

module.exports = router;
