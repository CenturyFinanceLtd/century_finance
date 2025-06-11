const mongoose = require("mongoose");

// Define the schema for the content blocks
const contentBlockSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { _id: false }
);

// Define the main blog schema
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true },
    primaryKeywords: [String],
    secondaryKeywords: [String],
    metaDescription: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      bio: { type: String },
    },
    publishDate: { type: Date, default: Date.now },
    contentBlocks: [contentBlockSchema],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Blog = mongoose.model("Blog", blogSchema, "blogs"); // The third argument specifies the collection name 'blogs'

module.exports = Blog;
