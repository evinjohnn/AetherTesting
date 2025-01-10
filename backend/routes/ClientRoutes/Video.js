const express = require("express");
const VideoController = require("../../controllers/VideoController.js");
const router = express.Router();

router.get("/video", VideoController.getVideo);

module.exports = router;
