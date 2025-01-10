const express = require("express");
const CategoryController = require("../../controllers/CategoryController");
const router = express.Router();

router.post("/category", CategoryController.create);
router.get("/categories", CategoryController.getAll);
router.get("/category/:id", CategoryController.getById);
router.put("/category/:id", CategoryController.update);
router.delete("/category/:id", CategoryController.delete);

module.exports = router;
