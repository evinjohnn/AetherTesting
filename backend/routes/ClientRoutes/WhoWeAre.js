const express = require("express");
const WhoWeAreController = require("../../controllers/WhoWeAreController");
const router = express.Router();

router.get("/whoweare", WhoWeAreController.getAll);

module.exports = router;
