const config = require("../config/config");
const File = require("../models/Files");
const Technology = require("../models/Technology");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const TechnologyController = {
  async create(req, res) {
    try {
      const { text, points } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const technology = new Technology({
        text,
        points,
        image: imageUrl,
      });
      await technology.save();
      res.successResponse(technology, "technology created successfully");
    } catch (error) {
      console.log(error);

      res.serverError("Failed to create technology", error.message);
    }
  },

  async getAll(req, res) {
    try {
      if (req.query.isNeedFull) {
        const technologies = await Technology.find();
        res.successResponse(
          technologies,
          "Technologies retrieved successfully"
        );
        return;
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of technologys matching the query
        const totalTechnologys = await Technology.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalTechnologys / limit);

        // Fetch technologys with pagination, filtered by category and search term
        const technologys = await Technology.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of technologys returned

        // Send the response
        res.successResponse(
          {
            technologys: technologys,
            totalPages: totalPages,
            currentPage: page,
            totalTechnologys: totalTechnologys,
          },
          "Technologys retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve technologys", error.message);
    }
  },

  async getById(req, res) {
    try {
      const technology = await Technology.findById(req.params.id);
      if (!technology) return res.badResponse("technology not found");
      res.successResponse(technology, "technology retrieved successfully");
    } catch (error) {
      res.serverError("Invalid technology ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Technology.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Technology not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Technology.findById(req.params.id);
        if (findImage.image) {
          const findfile = await File.findOne({ fileUrl: findImage.image });
          if (findfile) {
            findfile.isActive = false;
            await findfile.save();
          }
        }
      }

      // Construct update payload
      const updatePayload = { ...req.body };
      if (imageUrl) {
        updatePayload.image = imageUrl;
      }

      // Update technology entry
      const technology = await Technology.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!technology) {
        return res.badResponse("Technology not found");
      }

      res.successResponse(technology, "Technology updated successfully");
    } catch (error) {
      console.error("Error updating technology:", error);
      res.serverError("Failed to update technology", error.message);
    }
  },

  async delete(req, res) {
    try {
      const technology = await Technology.findByIdAndDelete(req.params.id);
      if (!technology) return res.badResponse("technology not found");
      const findfile = await File.findOne({ fileUrl: technology.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Technology Deleted Successfully");
    } catch (error) {
      res.serverError("Failed to delete technology", error.message);
    }
  },
};

module.exports = TechnologyController;
