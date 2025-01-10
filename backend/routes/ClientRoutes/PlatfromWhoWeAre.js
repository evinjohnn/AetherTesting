const express = require("express");
const PlatformWhoWeAreController = require("../../controllers/PlatformWhoWeAreController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post(
  "/platformwhoweare",
  upload.single("image"),
  PlatformWhoWeAreController.create
);
router.get("/platformwhoweare", PlatformWhoWeAreController.getAll);
router.get("/platformwhoweare/:id", PlatformWhoWeAreController.getById);
router.put(
  "/platformwhoweare/:id",
  upload.single("image"),
  PlatformWhoWeAreController.update
);
router.delete("/platformwhoweare/:id", PlatformWhoWeAreController.delete);

module.exports = router;
