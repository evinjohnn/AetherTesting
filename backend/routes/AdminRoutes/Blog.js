const express = require("express");
const upload = require("../../middleware/multer");
const BlogController = require("../../controllers/BlogController");
const router = express.Router();

router.post("/blog", upload.single("image"), BlogController.create);
router.get("/blogs", BlogController.getAll);
router.get("/blog/:id", BlogController.getById);
router.put("/blog/:id", upload.single("image"), BlogController.update);
router.delete("/blog/:id", BlogController.delete);

module.exports = router;
