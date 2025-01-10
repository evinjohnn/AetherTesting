const express = require("express");
const FooterController = require("../../controllers/FooterController.js");
const router = express.Router();

router.get("/footer", FooterController.getFooter);

module.exports = router;
