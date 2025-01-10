const express = require("express");
const FaqController = require("../../controllers/FaqController");
const router = express.Router();

router.post("/faq", FaqController.create);
router.get("/faqs", FaqController.getAll);
router.get("/faq/:id", FaqController.getById);
router.put("/faq/:id", FaqController.update);
router.delete("/faq/:id", FaqController.delete);

module.exports = router;
