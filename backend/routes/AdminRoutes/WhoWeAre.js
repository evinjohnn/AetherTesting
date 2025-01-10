const express = require("express");
const WhoWeAreController = require("../../controllers/WhoWeAreController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post("/whoweare", upload.single("image"), WhoWeAreController.create);
router.get("/whoweare", WhoWeAreController.getAll);
router.get("/whoweare/:id", WhoWeAreController.getById);
router.put("/whoweare/:id", upload.single("image"), WhoWeAreController.update);
router.delete("/whoweare/:id", WhoWeAreController.delete);

module.exports = router;
