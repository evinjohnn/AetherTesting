const express = require("express");
const IndustryController = require("../../controllers/IndustryController");
const router = express.Router();

router.get("/industries", IndustryController.getAll);

module.exports = router;
