const express = require("express");
const {
  createContactSection,
  UpdateContact,
  DeleteContact,
} = require("../../controllers/ContactSectionController");
const {
  getContactSection,
} = require("../../controllers/ContactSectionController");
const router = express.Router();

router.post("/contact-section", createContactSection);
router.get("/contact-section", getContactSection);
router.put("/contact-section/:id", UpdateContact);
router.delete("/contact-section/:id", DeleteContact);

module.exports = router;
