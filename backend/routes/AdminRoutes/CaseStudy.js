const express = require("express");
const CaseStudiesController = require("../../controllers/CaseStudyController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post("/casestudy", upload.single("image"), CaseStudiesController.create);
router.get("/casestudies", CaseStudiesController.getAll);
router.get("/casestudy/:id", CaseStudiesController.getById);
router.put(
  "/casestudy/:id",
  upload.single("image"),
  CaseStudiesController.update
);
router.delete("/casestudy/:id", CaseStudiesController.delete);

module.exports = router;
