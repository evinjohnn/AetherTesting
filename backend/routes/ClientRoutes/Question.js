const express = require("express");
const { getQuestion } = require("../../controllers/QuestionController");
const router = express.Router();

router.get("/question", getQuestion);

module.exports = router;
