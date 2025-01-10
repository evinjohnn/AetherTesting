const express = require("express");
const upload = require("../../middleware/multer");
const HowDifferentController = require("../../controllers/HowDifferentController");

const router = express.Router();

router.post(
  "/howDifferent",
  upload.single("image"),
  HowDifferentController.create
);
router.get("/howDifferents", HowDifferentController.getAll);
router.get("/howDifferent/:id", HowDifferentController.getById);
router.put(
  "/howDifferent/:id",
  upload.single("image"),
  HowDifferentController.update
);
router.delete("/howDifferent/:id", HowDifferentController.delete);

module.exports = router;
