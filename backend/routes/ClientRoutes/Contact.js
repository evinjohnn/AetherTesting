const express = require("express");
const ContactController = require("../../controllers/ContactController");
const router = express.Router();

router.post("/contact", ContactController.create);

module.exports = router;
