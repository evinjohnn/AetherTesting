const express = require("express");
const TeamController = require("../../controllers/TeamController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.get("/teams", TeamController.getAll);

module.exports = router;
