const express = require("express");
const router = express.Router();

// @route GET   api/delete
// @desc  TEST  Test route
// @access  Public
router.get("/", (req, res) => res.send("Test route"));

module.exports = router;
