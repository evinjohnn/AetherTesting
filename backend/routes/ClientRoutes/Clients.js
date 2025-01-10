const express = require("express");
const upload = require("../../middleware/multer");
const ClientController = require("../../controllers/ClientController");
const router = express.Router();

router.get("/clients", ClientController.getAll);

module.exports = router;
