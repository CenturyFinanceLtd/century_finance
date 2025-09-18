const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, default: '' },
    content: { type: String, required: true },
    coverImageUrl: { type: String, default: '' },
    author: { type: String, default: 'Anonymous' },
    category: { type: String, default: 'General' },
    tags: [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);

