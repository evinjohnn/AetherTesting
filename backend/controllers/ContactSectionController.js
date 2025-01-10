const { ContactSection } = require("../models/ContactSection");

const createContactSection = async (req, res) => {
  try {
    const { description, title, options } = req.body;

    // Log the received request body
    console.log("Request Body:", req.body);

    // Create a new ContactSectionnaire document
    const createdContactSection = new ContactSection({
      description,
      title,
      options,
    });

    // Save the document to the database
    await createdContactSection.save();

    // Send success response
    res.successResponse(
      createdContactSection,
      "Contact Section created successfully"
    );
  } catch (error) {
    console.error("Error saving Contact Section:", error);
    res.serverError("Failed to create Contact Section", error.message);
  }
};

const getContactSection = async (req, res) => {
  try {
    // Parse page and limit from query parameters
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

    // Calculate the total number of teams
    const totalContactSection = await ContactSection.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalContactSection / limit);

    const contactSection = await ContactSection.find()
      .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
      .skip((page - 1) * limit) // Skip the previous pages
      .limit(limit); // Limit the number of teams returned

    res.successResponse(
      {
        contactSection,
        totalPages: totalPages,
        currentPage: page,
        totalContactSection: totalContactSection,
      },
      "ContactSection success"
    );
  } catch (error) {
    res.serverError(error.message);
  }
};
const UpdateContact = async (req, res) => {
  try {
    const contactSection = await ContactSection.findById(req.params.id);
    if (!contactSection) {
      return res.badResponse("ContactSection not found");
    }
    // Update the question with the new data
    contactSection.set(req.body);
    await contactSection.save();
    res.successResponse(contactSection, "ContactSection updated");
  } catch (error) {
    res.serverError(error.message);
  }
};

const DeleteContact = async (req, res) => {
  try {
    const contactSection = await ContactSection.findByIdAndDelete(
      req.params.id
    );
    if (!contactSection) {
      return res.badResponse("ContactSection not found");
    }
    res.successResponse("ContactSection deleted");
  } catch (error) {
    res.serverError(error.message);
  }
};

module.exports = {
  createContactSection,
  getContactSection,
  UpdateContact,
  DeleteContact,
};
