const CaseStudy = require("../models/CaseStudy");
const config = require("../config/config");
const s3 = config.settings.s3;
const { uploadToS3 } = require("../utils/uploadtos3");
const { saveLocally } = require("../utils/savelocally");
const File = require("../models/Files");

const CaseStudiesController = {
  async create(req, res) {
    try {
      const { title, description, section, sub_section } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const caseStudy = new CaseStudy({
        title,
        description,
        image: imageUrl,
        section,
        sub_section,
      });
      await caseStudy.save();
      res.successResponse(caseStudy, "Case study created successfully");
    } catch (error) {
      res.serverError("Failed to create case study", error.message);
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
        const caseStudys = await CaseStudy.find(query);

        return res.successResponse(
          caseStudys,
          "Case studies retrieved successfully"
        );
      } else {
        const { type } = req.query;

        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
        // Calculate the total number of casestudys
        const totalCaseStudys = await CaseStudy.countDocuments();

        const query = {};
        if (type) {
          query.sub_section = type; // Filter by category if provided
        }

        // Calculate total pages
        const totalPages = Math.ceil(totalCaseStudys / limit);

        // Fetch casestudys with pagination
        const casestudys = await CaseStudy.find(query)
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of casestudys returned

        // Send the response
        res.successResponse(
          {
            data: casestudys,
            totalPages: totalPages,
            currentPage: page,
            totalCaseStudys: totalCaseStudys,
          },
          "CaseStudys retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve casestudys", error.message);
    }
  },

  async getById(req, res) {
    try {
      const caseStudy = await CaseStudy.findById(req.params.id);
      if (!caseStudy) return res.badResponse("Case study not found");
      res.successResponse(caseStudy, "Case study retrieved successfully");
    } catch (error) {
      res.serverError("Invalid case study ID", error.message);
    }
  },

  async update(req, res) {
    try {
      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await CaseStudy.findById(req.params.id);
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

      const caseStudy = await CaseStudy.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!caseStudy) return res.badResponse("Case study not found");

      res.successResponse(caseStudy, "Case study updated successfully");
    } catch (error) {
      res.serverError("Failed to update case study", error.message);
    }
  },

  async delete(req, res) {
    try {
      const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);
      if (!caseStudy) return res.badResponse("Case study not found");
      const findfile = await File.findOne({ fileUrl: caseStudy.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Case study deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete case study", error.message);
    }
  },
};

module.exports = CaseStudiesController;
