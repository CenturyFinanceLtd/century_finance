const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaKeywords: { type: String },
    metaDescription: { type: String },
    description: { type: String },
    author: {
      name: { type: String },
      description: { type: String },
      image: { type: String }, // Stores the path to the uploaded image
    },
    thumbnail: { type: String }, // Stores the path to the uploaded image
    createdAt: { type: Date, default: Date.now },
  },
  {
    // This ensures the collection is named 'blogs'
    collection: "blogs",
  }
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
