const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Blog = require('../models/Blog');

const router = express.Router();

// Utility to slugify titles
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
}

async function ensureUniqueSlug(baseSlug) {
  let slug = baseSlug;
  let counter = 1;
  // check for existing slug and append increment if needed
  while (await Blog.findOne({ slug })) {
    counter += 1;
    slug = `${baseSlug}-${counter}`;
  }
  return slug;
}

// Create blog
router.post('/', async (req, res) => {
  try {
    const { title, content, excerpt, coverImageUrl, author, category, tags, status, slug: providedSlug } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'title and content are required' });
    }

    const baseSlug = providedSlug ? slugify(providedSlug) : slugify(title);
    const slug = await ensureUniqueSlug(baseSlug);

    const blog = new Blog({
      title,
      slug,
      content,
      excerpt: excerpt || '',
      coverImageUrl: coverImageUrl || '',
      author: author || 'Anonymous',
      category: category || 'General',
      tags: Array.isArray(tags) ? tags : [],
      status: status || 'published',
      publishedAt: new Date(),
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Helper: escape RegExp special chars
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
}

// List blogs with optional limit and category/tag filters
router.get('/', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit, 10) || 0, 100);
    const filter = { status: 'published' };
    if (req.query.category) {
      const cat = String(req.query.category).trim();
      if (cat) {
        filter.category = { $regex: `^${escapeRegExp(cat)}$`, $options: 'i' };
      }
    }
    if (req.query.tag) {
      const tag = String(req.query.tag).trim();
      if (tag) {
        filter.tags = { $regex: `^${escapeRegExp(tag)}$`, $options: 'i' };
      }
    }
    const blogsQuery = Blog.find(filter).sort({ publishedAt: -1 });
    if (limit > 0) blogsQuery.limit(limit);
    const blogs = await blogsQuery.exec();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Categories with counts (placed before slug route to avoid conflict)
router.get('/categories', async (req, res) => {
  try {
    const results = await Blog.aggregate([
      { $match: { status: 'published' } },
      { $addFields: { _catNorm: { $toLower: { $ifNull: ['$category', 'General'] } } } },
      { $group: { _id: '$_catNorm', count: { $sum: 1 }, anyCase: { $first: '$category' } } },
      { $project: { _id: 0, key: '$_id', category: { $ifNull: ['$anyCase', 'General'] }, count: 1 } },
      { $sort: { category: 1 } },
    ]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tags with counts
router.get('/tags', async (req, res) => {
  try {
    const results = await Blog.aggregate([
      { $match: { status: 'published' } },
      { $unwind: '$tags' },
      { $addFields: { _tagNorm: { $toLower: { $ifNull: ['$tags', ''] } } } },
      { $match: { _tagNorm: { $ne: '' } } },
      { $group: { _id: '$_tagNorm', count: { $sum: 1 }, anyCase: { $first: '$tags' } } },
      { $project: { _id: 0, key: '$_id', tag: '$anyCase', count: 1 } },
      { $sort: { tag: 1 } },
    ]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get blog by id (explicit path to avoid conflict with slug route)
router.get('/id/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update blog by id
router.put('/:id', async (req, res) => {
  try {
    const existing = await Blog.findById(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Blog not found' });

    const {
      title,
      content,
      excerpt,
      coverImageUrl,
      author,
      category,
      tags,
      status,
      slug: providedSlug,
    } = req.body;

    if (title !== undefined) existing.title = title;
    if (content !== undefined) existing.content = content;
    if (excerpt !== undefined) existing.excerpt = excerpt;
    if (coverImageUrl !== undefined) existing.coverImageUrl = coverImageUrl;
    if (author !== undefined) existing.author = author;
    if (category !== undefined) existing.category = category;
    if (Array.isArray(tags)) existing.tags = tags;
    if (status !== undefined) existing.status = status;

    // Handle slug changes: if provided or title changed and no provided slug
    if (providedSlug !== undefined) {
      const baseSlug = slugify(providedSlug);
      const newSlug = await ensureUniqueSlug(baseSlug);
      existing.slug = newSlug;
    } else if (title !== undefined && !req.body.keepSlug) {
      // If title changed but no slug explicitly provided, regenerate unless keepSlug=true
      const baseSlug = slugify(existing.title);
      const newSlug = await ensureUniqueSlug(baseSlug);
      existing.slug = newSlug;
    }

    await existing.save();
    res.json(existing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete blog by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Blog not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// File upload configuration and route (placed after exports for clarity)
// but in Express this still works since we attached to the same router instance above.
const uploadDir = path.join(__dirname, '..', 'blogimages');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9-_\.]/g, '_');
    const fname = `${Date.now()}_${base}${ext}`;
    cb(null, fname);
  },
});

const upload = multer({ storage });

// Upload endpoint: POST /api/blogs/upload (form-data with field 'image')
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const filename = req.file.filename;
    const urlPath = `/blogimages/${filename}`;
    const fullUrl = `${req.protocol}://${req.get('host')}${urlPath}`;
    res.json({ filename, url: urlPath, fullUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
