const express = require("express");
const TimelineController = require("../../controllers/TimelineController");
const router = express.Router();

router.get("/timelines", TimelineController.getAll);

module.exports = router;
