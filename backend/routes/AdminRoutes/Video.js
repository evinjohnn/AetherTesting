const express = require("express");
const VideoController = require("../../controllers/VideoController.js");
const router = express.Router();
const upload = require("../../middleware/multer");

router.post("/video", upload.single("video"), VideoController.createVideo);
router.get("/video", VideoController.getVideo);
router.put("/video/:id", upload.single("video"), VideoController.updateVideo);

module.exports = router;
