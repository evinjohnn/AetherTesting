const Faq = require("../models/FAQ");

const FaqController = {
  async create(req, res) {
    try {
      const { question, answers, section, sub_section } = req.body;
      const faq = new Faq({
        question,
        answers,
        section,
        sub_section,
      });
      await faq.save();
      res.successResponse(faq, "FAQ created successfully");
    } catch (error) {
      res.serverError("Failed to create FAQ", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const query = {};
      if (req.query.section) {
        query.section = req.query.section;
      }
      if (req.query.sub_section) {
        query.sub_section = req.query.sub_section;
      }
      const faqs = await Faq.find(query).sort({ updatedAt: -1 }); // Sort by updatedAt in descending order
      res.successResponse(faqs, "FAQs retrieved successfully");
    } catch (error) {
      res.serverError("Failed to retrieve FAQs", error.message);
    }
  },

  async getById(req, res) {
    try {
      const faq = await Faq.findById(req.params.id);
      if (!faq) return res.badResponse("FAQ not found");
      res.successResponse(faq, "FAQ retrieved successfully");
    } catch (error) {
      res.serverError("Invalid FAQ ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!faq) return res.badResponse("FAQ not found");
      res.successResponse(faq, "FAQ updated successfully");
    } catch (error) {
      res.serverError("Failed to update FAQ", error.message);
    }
  },

  async delete(req, res) {
    try {
      const faq = await Faq.findByIdAndDelete(req.params.id);
      if (!faq) return res.badResponse("FAQ not found");
      res.successResponse(null, "FAQ deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete FAQ", error.message);
    }
  },
};

module.exports = FaqController;
