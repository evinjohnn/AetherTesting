const express = require("express");
const ContactController = require("../../controllers/ContactController");
const router = express.Router();

router.get("/contacts", ContactController.getAll);
router.get("/contact/:id", ContactController.getById);
router.delete("/contact/:id", ContactController.delete);

module.exports = router;
