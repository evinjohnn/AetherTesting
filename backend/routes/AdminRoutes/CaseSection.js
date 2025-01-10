const express = require("express");
const CaseSectionController = require("../../controllers/CaseSectionController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post(
  "/casesection",
  upload.single("image"),
  CaseSectionController.create
);
router.get("/casesections", CaseSectionController.getAll);
router.get("/casesection/:id", CaseSectionController.getById);
router.put(
  "/casesection/:id",
  upload.single("image"),
  CaseSectionController.update
);
router.delete("/casesection/:id", CaseSectionController.delete);

module.exports = router;
