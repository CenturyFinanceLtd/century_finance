// backend/routes/queryRoutes.js
const express = require("express");
const router = express.Router();
const { submitQuery } = require("../controllers/queryController");

// POST /api/queries/submit
router.post("/submit", submitQuery);

module.exports = router;
