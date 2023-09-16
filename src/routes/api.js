const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");

router.get("/blogDetails", blogController.blogDetails);

module.exports = router;
