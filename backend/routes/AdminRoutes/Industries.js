const express = require("express");
const upload = require("../../middleware/multer");
const IndustryController = require("../../controllers/IndustryController");
const router = express.Router();

router.post("/industry", upload.single("image"), IndustryController.create);
router.get("/industries", IndustryController.getAll);
router.get("/industry/:id", IndustryController.getById);
router.put("/industry/:id", upload.single("image"), IndustryController.update);
router.delete("/industry/:id", IndustryController.delete);

module.exports = router;
