const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const BlogPost = require("../models/blogPost");

// --- Multer Configuration for File Uploads ---
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// --- Route to Add a New Blog Post ---
router.post(
  "/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
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

      // --- 👇 NEW: UNIQUE SLUG CHECK ---
      // Check if a post with this slug already exists.
      const existingPost = await BlogPost.findOne({ slug: slug.toLowerCase() });

      // If a post is found, send a specific error message.
      if (existingPost) {
        // 409 Conflict is the appropriate HTTP status code
        return res
          .status(409)
          .json({
            message:
              "This path (slug) is already in use. Please choose a different one.",
          });
      }
      // --- END OF NEW CHECK ---

      const thumbnailPath = req.files.thumbnail
        ? req.files.thumbnail[0].path
        : null;
      const authorImagePath = req.files.authorImage
        ? req.files.authorImage[0].path
        : null;

      const newPost = new BlogPost({
        title,
        category,
        slug: slug.toLowerCase(), // Save slug in lowercase to ensure consistency
        metaTitle,
        metaKeywords,
        metaDescription,
        description,
        author: {
          name: authorName,
          description: authorDescription,
          image: authorImagePath,
        },
        thumbnail: thumbnailPath,
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
