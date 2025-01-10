const express = require("express");
const FooterController = require("../../controllers/FooterController.js");
// const upload = require("../../middleware/multer");
const router = express.Router();

router.post("/footer", FooterController.createFooter);
router.get("/footer", FooterController.getFooter);
// router.get("/team/:id", FooterController.getById);
router.put("/footer/:id", FooterController.updateFooter);
// router.delete("/footer/:id", FooterController.delete);

module.exports = router;
