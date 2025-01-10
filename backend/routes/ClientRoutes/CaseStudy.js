const express = require("express");
const CaseStudiesController = require("../../controllers/CaseStudyController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.get("/casestudies", CaseStudiesController.getAll);
router.get("/casestudy/:id", CaseStudiesController.getById);


module.exports = router;
