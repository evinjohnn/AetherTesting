const express = require("express");
const TechnologyController = require("../../controllers/TechnologyController");
const router = express.Router();

router.get("/technologies", TechnologyController.getAll);

module.exports = router;
