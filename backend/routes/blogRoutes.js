const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const BlogPost = require("../models/blogPost");

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

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 25 * 1024 * 1024,
    fieldSize: 25 * 1024 * 1024,
  },
});

router.post(
  "/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // --- Start Debug Logging ---
      console.log("--- BLOG POST REQUEST RECEIVED ---");
      console.log("Request Body Fields:", req.body);
      console.log("Request Files:", req.files);
      // --- End Debug Logging ---

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
        console.log(`Slug "${slug}" already exists. Sending 409 conflict.`);
        return res.status(409).json({
          message:
            "This path (slug) is already in use. Please choose a different one.",
        });
      }

      console.log("Slug check passed.");

      const thumbnailPath = req.files.thumbnail
        ? req.files.thumbnail[0].path
        : null;
      const authorImagePath = req.files.authorImage
        ? req.files.authorImage[0].path
        : null;

      console.log("Thumbnail Path determined:", thumbnailPath);
      console.log("Author Image Path determined:", authorImagePath);

      const newPostData = {
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
      };

      console.log("Constructed new blog post data object for Mongoose.");

      const newPost = new BlogPost(newPostData);

      console.log("Mongoose document created. Attempting to save...");

      await newPost.save();

      console.log("--- SAVE SUCCESSFUL ---");

      res.status(201).json({ message: "Blog post created successfully!" });
    } catch (error) {
      // --- Detailed Error Logging ---
      console.error("---!!! DETAILED ERROR IN BLOG POST CREATION !!!---");
      console.error(error);
      console.error("---!!! END DETAILED ERROR !!!---");
      res
        .status(500)
        .json({ message: "Error saving blog post", error: error.message });
    }
  }
);

module.exports = router;
