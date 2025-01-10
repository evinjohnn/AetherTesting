const express = require("express");
const FaqController = require("../../controllers/FaqController");
const router = express.Router();

router.get("/faqs", FaqController.getAll);

module.exports = router;
