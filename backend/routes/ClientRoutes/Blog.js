const express = require("express");
const upload = require("../../middleware/multer");
const BlogController = require("../../controllers/BlogController");
const router = express.Router();

router.get("/blogs", BlogController.getAll);
router.get("/blog/:id", BlogController.getById);

module.exports = router;
