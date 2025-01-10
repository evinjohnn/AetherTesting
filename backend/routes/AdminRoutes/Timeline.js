const express = require("express");
const TimelineController = require("../../controllers/TimelineController");
const router = express.Router();

router.post("/timeline", TimelineController.create);
router.get("/timelines", TimelineController.getAll);
router.get("/timeline/:id", TimelineController.getById);
router.put("/timeline/:id", TimelineController.update);
router.delete("/timeline/:id", TimelineController.delete);

module.exports = router;
