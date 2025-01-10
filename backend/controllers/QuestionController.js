const { Question } = require("../models/Questionaire");

const createQuestion = async (req, res) => {
  try {
    const { question, options } = req.body;

    // Log the received request body
    console.log("Request Body:", req.body);

    // Create a new Question document
    const createdQuestion = new Question({
      question,
      options,
    });

    // Save the document to the database
    await createdQuestion.save();

    // Send success response
    res.successResponse(createdQuestion, "Question created successfully");
  } catch (error) {
    console.error("Error saving questionnaire:", error);
    res.serverError("Failed to create questionnaire", error.message);
  }
};

const getQuestion = async (req, res) => {
  try {
    // Parse page and limit from query parameters
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

    // Calculate the total number of teams
    const totalQuestion = await Question.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalQuestion / limit);

    const question = await Question.find()
      .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
      .skip((page - 1) * limit) // Skip the previous pages
      .limit(limit); // Limit the number of teams returned

    res.successResponse(
      {
        question,
        totalPages: totalPages,
        currentPage: page,
        totalQuestion: totalQuestion,
      },
      "Question success"
    );
  } catch (error) {
    res.serverError(error.message);
  }
};

const UpdateQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.badResponse("Question not found");
    }
    // Update the question with the new data
    question.set(req.body);
    await question.save();
    res.successResponse(question, "Question updated");
  } catch (error) {
    res.serverError(error.message);
  }
};

const DeleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.badResponse("Question not found");
    }
    res.successResponse("Question deleted");
  } catch (error) {
    res.serverError(error.message);
  }
};

module.exports = {
  createQuestion,
  getQuestion,
  UpdateQuestion,
  DeleteQuestion,
};
