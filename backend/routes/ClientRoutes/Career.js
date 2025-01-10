const express = require("express");
const CareerController = require("../../controllers/CareerController");
const router = express.Router();

router.get("/careers", CareerController.getAll);

module.exports = router;
