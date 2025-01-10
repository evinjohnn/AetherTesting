const express = require("express");
const CategoryController = require("../../controllers/CategoryController");
const router = express.Router();

router.get("/categories", CategoryController.getAll);

module.exports = router;
