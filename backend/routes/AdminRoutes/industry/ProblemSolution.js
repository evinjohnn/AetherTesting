const express = require("express");
const upload = require("../../../middleware/multer");
const ProblemSolutionController = require("../../../controllers/ProblemSolutionController");
const router = express.Router();

router.post(
  "/problem-solution",
  upload.single("image"),
  ProblemSolutionController.create
);
router.get("/problem-solutions", ProblemSolutionController.getAll);
router.get("/problem-solution/:id", ProblemSolutionController.getById);
router.put(
  "/problem-solution/:id",
  upload.single("image"),
  ProblemSolutionController.update
);
router.delete("/problem-solution/:id", ProblemSolutionController.delete);

module.exports = router;
