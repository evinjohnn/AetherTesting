const express = require("express");
const TestimonialsController = require("../../controllers/TestimonialController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.get("/testimonials", TestimonialsController.getAll);

module.exports = router;
