const express = require("express");
const AboutWhoWeAreController = require("../../controllers/AboutWhoWeAreController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post(
  "/aboutwhoweare",
  upload.single("image"),

  AboutWhoWeAreController.create
);
router.get("/aboutwhoweare", AboutWhoWeAreController.getAll);
router.get("/aboutwhoweare/:id", AboutWhoWeAreController.getById);
router.put(
  "/aboutwhoweare/:id",
  upload.single("image"),
  AboutWhoWeAreController.update
);
router.delete("/aboutwhoweare/:id", AboutWhoWeAreController.delete);

module.exports = router;
