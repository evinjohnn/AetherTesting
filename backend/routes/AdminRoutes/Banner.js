const express = require("express");
const upload = require("../../middleware/multer");
const BannerController = require("../../controllers/BannerController");
const router = express.Router();

router.post("/banner", upload.single("image"), BannerController.create);
router.get("/banners", BannerController.getAll);
router.get("/banner/:id", BannerController.getById);
router.put("/banner/:id", upload.single("image"), BannerController.update);
router.delete("/banner/:id", BannerController.delete);

module.exports = router;
