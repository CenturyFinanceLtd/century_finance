const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Import the 'fs' module
const BlogPost = require("../models/blogPost");

// --- Multer Configuration for File Uploads ---
const storage = multer.diskStorage({
  // --- 👇 FIX #1: USE AN ABSOLUTE PATH FOR THE DESTINATION ---
  destination: function (req, file, cb) {
    // This creates a reliable path to the 'uploads' directory in your project root
    const uploadPath = path.join(__dirname, "..", "uploads");

    // Ensure the directory exists (optional but good practice)
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  // --- END FIX #1 ---
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

// --- 👇 FIX #2: ENSURE ALL LIMITS ARE SET ---
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 25 * 1024 * 1024, // 25 MB limit for thumbnail/author files
    fieldSize: 25 * 1024 * 1024, // 25 MB limit for fields like 'description'
  },
});
// --- END FIX #2 ---

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

      const existingPost = await BlogPost.findOne({ slug: slug.toLowerCase() });

      if (existingPost) {
        return res.status(409).json({
          message:
            "This path (slug) is already in use. Please choose a different one.",
        });
      }

      // Multer saves files with absolute paths, but we want to store a relative path for serving
      const thumbnailPath = req.files.thumbnail
        ? path.join("uploads", path.basename(req.files.thumbnail[0].path))
        : null;
      const authorImagePath = req.files.authorImage
        ? path.join("uploads", path.basename(req.files.authorImage[0].path))
        : null;

      const newPost = new BlogPost({
        title,
        category,
        slug: slug.toLowerCase(),
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

// ... multer configuration and other code ...

// --- Route to GET All Blog Posts for the public site ---
// CHANGE #1: Changed "/all" to "/" to match the frontend call to /api/blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogPost.find({})
      // CHANGE #2: Added all necessary fields to the select statement
      .select("title slug category createdAt thumbnail author metaDescription")
      .sort({ createdAt: -1 }); // Sort by newest first

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch blog posts", error: error.message });
  }
});


// --- Route to Add a New Blog Post ---
// router.post("/add", ... continues here ...

// ... multer configuration and other code ...

// --- Route to GET All Blog Posts for the public site ---
router.get("/", async (req, res) => {
  // ... your existing code for getting all blogs ...
});

// --- 👇 ADD THIS NEW ROUTE TO GET A SINGLE BLOG BY SLUG ---
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await BlogPost.findOne({ slug: slug.toLowerCase() });

    if (!blog) {
      // If no blog is found with that slug, return a 404 error
      return res.status(404).json({ message: "Blog post not found" });
    }

    // If blog is found, send it back
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching single blog post:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch blog post", error: error.message });
  }
});
// --- END OF NEW ROUTE ---


// --- Route to Add a New Blog Post ---
// router.post("/add", ... continues here ...

module.exports = router;
