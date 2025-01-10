const express = require("express");
const {
  createQuestionaire,
} = require("../../controllers/QuestionaireController");
const router = express.Router();

router.post("/questionaire", createQuestionaire);

module.exports = router;
