const express = require("express");
const upload = require("../../middleware/multer");
const SubIndustryController = require("../../controllers/SubIndustryController");
const router = express.Router();

router.post(
  "/subindustry",
  upload.single("image"),
  SubIndustryController.create
);
router.get("/subindustries", SubIndustryController.getAll);
router.get("/subindustry/:id", SubIndustryController.getById);
router.put(
  "/subindustry/:id",
  upload.single("image"),
  SubIndustryController.update
);
router.delete("/subindustry/:id", SubIndustryController.delete);

module.exports = router;
