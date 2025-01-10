const express = require("express");
const SectionController = require("../../controllers/SectionControllers");
const router = express.Router();

router.get("/section", SectionController.getAll);

module.exports = router;
