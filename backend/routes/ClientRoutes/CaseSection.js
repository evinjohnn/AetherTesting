const express = require("express");
const CaseSectionController = require("../../controllers/CaseSectionController");
const upload = require("../../middleware/multer");
const router = express.Router();


router.get("/casesections", CaseSectionController.getAll);

module.exports = router;
