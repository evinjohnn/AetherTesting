const express = require("express");
const upload = require("../../middleware/multer");
const TechnologyController = require("../../controllers/TechnologyController");
const router = express.Router();

router.post("/technology", upload.single("image"), TechnologyController.create);
router.get("/technologies", TechnologyController.getAll);
router.get("/technology/:id", TechnologyController.getById);
router.put(
  "/technology/:id",
  upload.single("image"),
  TechnologyController.update
);
router.delete("/technology/:id", TechnologyController.delete);

module.exports = router;
