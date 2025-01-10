const express = require("express");
const TestimonialsController = require("../../controllers/TestimonialController");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post(
  "/testimonial",
  upload.single("image"),
  TestimonialsController.create
);
router.get("/testimonials", TestimonialsController.getAll);
router.get("/testimonial/:id", TestimonialsController.getById);
router.put(
  "/testimonial/:id",
  upload.single("image"),
  TestimonialsController.update
);
router.delete("/testimonial/:id", TestimonialsController.delete);

module.exports = router;
