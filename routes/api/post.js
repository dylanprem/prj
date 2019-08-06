const express = require("express");
const router = express.Router();

// @route GET   api/post
// @desc  TEST  Test route
// @access  Public
router.get("/", (req, res) => res.send("Test route"));

module.exports = router;
