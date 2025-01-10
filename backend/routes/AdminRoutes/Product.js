const express = require("express");
const upload = require("../../middleware/multer");
const ProductController = require("../../controllers/ProductController");
const router = express.Router();

router.post("/product", upload.single("image"), ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/product/:id", ProductController.getById);
router.put("/product/:id", upload.single("image"), ProductController.update);
router.delete("/product/:id", ProductController.delete);

module.exports = router;
