const express = require("express");
const {
  createQuestionaire,
  getQuestionaire,
} = require("../../controllers/QuestionaireController");
const router = express.Router();

router.post("/questionaire", createQuestionaire);
router.get("/questionaire", getQuestionaire);

module.exports = router;
