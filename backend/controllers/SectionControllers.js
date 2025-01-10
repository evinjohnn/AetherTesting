const config = require("../config/config");
const Section = require("../models/Section");

const SectionController = {
  async create(req, res) {
    const { section, subsection, title, subtitle, description } = req.body;
    console.log(req.body);
    try {
      const newSection = new Section({
        section,
        subsection,
        title,
        subtitle,
        description,
      });
      await newSection.save();
      res.successResponse(newSection, "section created successfully");
    } catch (error) {
      res.serverError("Failed to create section", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { section, subsection } = req.query;
      const query = {};
      if (section) {
        query.section = section;
      }
      if (subsection) {
        query.subsection = subsection;
      }

      let sections;
      if (query.section || query.subsection) {
        sections = await Section.findOne(query);
      } else {
        sections = await Section.find();
      }
      // Send the response
      res.successResponse(sections, "Sections retrieved successfully");
    } catch (error) {
      res.serverError("Failed to retrieve Sections", error.message);
    }
  },

  async getById(req, res) {
    try {
      const section = await Section.findById(req.params.id);
      if (!section) return res.badResponse("section not found");
      res.successResponse(section, "section retrieved successfully");
    } catch (error) {
      res.serverError("Invalid section ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Section.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Section not found"); // Handle the case where the testimonial does not exist
      }

      // Construct update payload
      const updatePayload = { ...req.body };

      const section = await Section.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!section) return res.badResponse("section not found");
      res.successResponse(section, "section updated successfully");
    } catch (error) {
      res.serverError("Failed to update section", error.message);
    }
  },

  async delete(req, res) {
    try {
      const section = await Section.findByIdAndDelete(req.params.id);
      if (!section) return res.badResponse("section not found");

      res.successResponse(null, "section deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete section", error.message);
    }
  },
};

module.exports = SectionController;
