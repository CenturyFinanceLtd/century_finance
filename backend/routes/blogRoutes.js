const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel"); // Import the Blog model

// @route   GET /api/blogs
// @desc    Get all blog posts
// @access  Public
router.get("/", async (req, res) => {
  try {
    // Fetch all documents from the 'blogs' collection
    // Sort by publishDate in descending order (newest first)
    const blogs = await Blog.find({}).sort({ publishDate: -1 });

    if (!blogs.length) {
      return res.status(404).json({ message: "No blogs found." });
    }

    res.status(200).json(blogs);
  } catch (error) {
    console.error("🔴 Error fetching blogs:", error);
    res.status(500).json({ message: "Server error while fetching blogs." });
  }
});


// In backend/routes/blogRoutes.js

// @route   GET /api/blogs/:slug
// @desc    Get a single blog post by its slug
// @access  Public
router.get('/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Server error while fetching blog post.' });
    }
});


module.exports = router;
