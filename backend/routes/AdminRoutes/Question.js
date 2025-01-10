const express = require("express");
const {
  createQuestion,
  UpdateQuestion,
  DeleteQuestion,
} = require("../../controllers/QuestionController");
const { getQuestion } = require("../../controllers/QuestionController");
const router = express.Router();

router.post("/question", createQuestion);
router.get("/question", getQuestion);
router.put("/question/:id", UpdateQuestion);
router.delete("/question/:id", DeleteQuestion);

module.exports = router;
