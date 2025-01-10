const express = require("express");
const upload = require("../../middleware/multer");
const MissionController = require("../../controllers/MissionController");
const router = express.Router();

router.post("/mission", upload.single("image"), MissionController.create);
router.get("/missions", MissionController.getAll);
router.get("/mission/:id", MissionController.getById);
router.put("/mission/:id", upload.single("image"), MissionController.update);
router.delete("/mission/:id", MissionController.delete);

module.exports = router;
