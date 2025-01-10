const Contact = require("../models/Contact");

const ContactController = {
  async create(req, res) {
    try {
      // Validate request body
      const { name, message, email, date, mobile, company } = req.body;

      if (!name || !message || !email || !mobile || !company || !date) {
        return res.validationError("All fields are required");
      }
      const contact = new Contact(req.body);
      await contact.save();
      res.successResponse(contact, "Contact Created Successfully");
    } catch (error) {
      res.serverError("Failed to create Contact", error.message);
    }
  },

  async getAll(req, res) {
    try {
      // Parse page and limit from query parameters
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

      // Calculate the total number of blogs
      const totalContactEnquiry = await Contact.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalContactEnquiry / limit);

      const contacts = await Contact.find()
        .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
        .skip((page - 1) * limit) // Skip the previous pages
        .limit(limit); // Limit the number of blogs returned

      res.successResponse(
        {
          contacts,
          totalPages: totalPages,
          currentPage: page,
          totalContact: totalContactEnquiry,
        },
        "Contacts retrieved successfully"
      );
    } catch (error) {
      res.serverError("Failed to retrieve Contacts", error.message);
    }
  },

  async getById(req, res) {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) return res.badResponse("Contact not found");
      res.successResponse(contact, "Contact retrieved successfully");
    } catch (error) {
      res.serverError("Invalid Contact ID", error.message);
    }
  },

  async delete(req, res) {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      if (!contact) return res.badResponse("Contact not found");
      res.successResponse(null, "Contact deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete Contact", error.message);
    }
  },
};

module.exports = ContactController;
