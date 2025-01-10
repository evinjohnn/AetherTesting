const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const QuestionnaireSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  answers: {
    type: [AnswerSchema],
    required: true,
  },
});

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
});
const Questionaire = mongoose.model("Questionaire", QuestionnaireSchema);
const Question = mongoose.model("Question", QuestionSchema);

module.exports = {
  Questionaire,
  Question,
};
