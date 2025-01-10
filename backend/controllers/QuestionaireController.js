const { Questionaire } = require("../models/Questionaire");

const createQuestionaire = async (req, res) => {
  try {
    const { email, answers } = req.body;

    // Log the received request body
    console.log("Request Body:", req.body);

    // Create a new Questionnaire document
    const createdQuestionaire = new Questionaire({
      email,
      answers,
    });

    // Save the document to the database
    await createdQuestionaire.save();

    // Send success response
    res.successResponse(
      createdQuestionaire,
      "Questionnaire created successfully"
    );
  } catch (error) {
    console.error("Error saving questionnaire:", error);
    res.serverError("Failed to create questionnaire", error.message);
  }
};

const getQuestionaire = async (req, res) => {
  try {
    // Parse page and limit from query parameters
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

    // Calculate the total number of teams
    const totalQuestionaire = await Questionaire.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalQuestionaire / limit);

    const questionaire = await Questionaire.find()
      .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
      .skip((page - 1) * limit) // Skip the previous pages
      .limit(limit); // Limit the number of teams returned

    res.successResponse(
      {
        questionaire,
        totalPages: totalPages,
        currentPage: page,
        totalQuestionaire: totalQuestionaire,
      },
      "Question success"
    );
  } catch (error) {
    res.serverError(error.message);
  }
};

module.exports = {
  createQuestionaire,
  getQuestionaire,
};
