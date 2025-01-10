const Contact = require("../models/Contact");
const Questionaire = require("../models/Questionaire");

const dashboardCount = async (req, res) => {
  try {
    const dashboardCounts = await Contact.countDocuments();
    const questionairecounts = await Questionaire.countDocuments();

    res.successResponse(
      { dashboardCounts, questionairecounts },
      "Dashboard counts fetched successfully"
    );
  } catch (error) {
    res.serverError("Failed to fetch dashboard counts", error.message);
  }
};

module.exports = dashboardCount;
