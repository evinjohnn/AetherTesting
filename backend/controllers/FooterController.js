const Footer = require("../models/Footer");

const createFooter = async (req, res) => {
  try {
    const { description } = req.body;

    // Log the received request body
    console.log("Request Body:", req.body);

    // Create a new Footer document
    const createdFooter = new Footer({
      description,
    });

    // Save the document to the database
    await createdFooter.save();

    // Send success response
    res.successResponse(createdFooter, "Footer created successfully");
  } catch (error) {
    console.error("Error saving footer:", error);
    res.serverError("Failed to create footer", error.message);
  }
};
const updateFooter = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!footer) return res.badResponse("Footer not found");
    res.successResponse(footer, "Footer updated successfully");
  } catch (error) {
    res.serverError("Failed to update Footer", error.message);
  }
};

const getFooter = async (req, res) => {
  try {
    const footer = await Footer.find();

    res.successResponse(footer, "Footer success");
  } catch (error) {
    res.serverError(error.message);
  }
};

module.exports = {
  createFooter,
  getFooter,
  updateFooter,
};
