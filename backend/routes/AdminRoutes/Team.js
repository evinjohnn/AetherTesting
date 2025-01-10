const express = require("express");
const TeamController = require("../../controllers/TeamController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post("/team", upload.single("image"), TeamController.create);
router.get("/teams", TeamController.getAll);
router.get("/team/:id", TeamController.getById);
router.put("/team/:id", upload.single("image"), TeamController.update);
router.delete("/team/:id", TeamController.delete);

module.exports = router;
