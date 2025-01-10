const express = require("express");
const upload = require("../../middleware/multer");
const BannerController = require("../../controllers/BannerController");
const router = express.Router();

router.get("/banners", BannerController.getAll);

module.exports = router;
