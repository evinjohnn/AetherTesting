const express = require("express");
const PlatformSubController = require("../../controllers/PlatformSubController");
const router = express.Router();

router.post("/platformsub", PlatformSubController.create);
router.get("/platformsub", PlatformSubController.getAll);
router.get("/platformsub/:id", PlatformSubController.getById);
router.put("/platformsub/:id", PlatformSubController.update);
router.delete("/platformsub/:id", PlatformSubController.delete);

module.exports = router;
