const CaseSection = require("../models/CaseSection");
const config = require("../config/config");

const s3 = config.settings.s3;
const { uploadToS3 } = require("../utils/uploadtos3");
const { saveLocally } = require("../utils/savelocally");
const File = require("../models/Files");

const CaseSectionController = {
  async create(req, res) {
    try {
      const { description, section, sub_section } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const caseSection = new CaseSection({
        description,
        section,
        sub_section,
        image: imageUrl,
      });
      await caseSection.save();
      res.successResponse(caseSection, "Case section created successfully");
    } catch (error) {
      res.serverError("Failed to create case section", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const query = {};
        if (req.query.section) {
          query.section = req.query.section;
        }
        if (req.query.sub_section) {
          query.sub_section = req.query.sub_section;
        }
        const caseSections = await CaseSection.find(query);
        return res.successResponse(
          caseSections,
          "Case sections retrieved successfully"
        );
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        const totalBlogs = await CaseSection.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalBlogs / limit);

        const caseSections = await CaseSection.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of blogs returned

        res.successResponse(
          {
            caseSections,
            totalPages: totalPages,
            currentPage: page,
            totalBlogs: totalBlogs,
          },
          "Case sections retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve case sections", error.message);
    }
  },

  async getById(req, res) {
    try {
      const caseSection = await CaseSection.findById(req.params.id);
      if (!caseSection) return res.badResponse("Case section not found");
      res.successResponse(caseSection, "Case section retrieved successfully");
    } catch (error) {
      res.serverError("Invalid case section ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await CaseSection.findById(req.params.id);
      if (!findData) {
        return res.badResponse("CaseSection not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await CaseSection.findById(req.params.id);
        const findfile = await File.findOne({ fileUrl: findImage.image });
        if (findfile) {
          findfile.isActive = false;
          await findfile.save();
        }
      }

      // Construct update payload
      const updatePayload = { ...req.body };
      if (imageUrl) {
        updatePayload.image = imageUrl;
      }

      const caseSection = await CaseSection.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!caseSection) return res.badResponse("Case section not found");
      res.successResponse(caseSection, "Case section updated successfully");
    } catch (error) {
      res.serverError("Failed to update case section", error.message);
    }
  },

  async delete(req, res) {
    try {
      const caseSection = await CaseSection.findByIdAndDelete(req.params.id);
      if (!caseSection) return res.badResponse("Case section not found");
      const findfile = await File.findOne({ fileUrl: caseSection.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Case section deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete case section", error.message);
    }
  },
};

module.exports = CaseSectionController;
