const config = require("../config/config");

const File = require("../models/Files");
const HowDifferent = require("../models/HowDifferent");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const HowDifferentController = {
  async create(req, res) {
    try {
      const { description } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const howDifferent = new HowDifferent({
        description,
        image: imageUrl,
      });
      await howDifferent.save();
      res.successResponse(howDifferent, "howDifferent created successfully");
    } catch (error) {
      res.serverError("Failed to create howDifferent", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const howDifferent = await HowDifferent.find();
        return res.successResponse(
          howDifferent,
          "HowDifferent retrieved successfully"
        );
      } else {
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of howDifferent matching the query
        const totalMissions = await HowDifferent.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalMissions / limit);

        // Fetch howDifferent with pagination, filtered by category and search term
        const howDifferent = await HowDifferent.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of howDifferent returned

        // Send the response
        res.successResponse(
          {
            howDifferent: howDifferent,
            totalPages: totalPages,
            currentPage: page,
            totalMissions: totalMissions,
          },
          "HowDifferent retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve howDifferent", error.message);
    }
  },

  async getById(req, res) {
    try {
      const howDifferent = await HowDifferent.findById(req.params.id);
      if (!howDifferent) return res.badResponse("howDifferent not found");
      res.successResponse(howDifferent, "howDifferent retrieved successfully");
    } catch (error) {
      res.serverError("Invalid howDifferent ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await HowDifferent.findById(req.params.id);
      if (!findData) {
        return res.badResponse("HowDifferent not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await HowDifferent.findById(req.params.id);
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

      // Update howDifferent entry
      const howDifferent = await HowDifferent.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!howDifferent) {
        return res.badResponse("HowDifferent not found");
      }

      res.successResponse(howDifferent, "HowDifferent updated successfully");
    } catch (error) {
      console.error("Error updating howDifferent:", error);
      res.serverError("Failed to update howDifferent", error.message);
    }
  },

  async delete(req, res) {
    try {
      const howDifferent = await HowDifferent.findByIdAndDelete(req.params.id);
      if (!howDifferent) return res.badResponse("howDifferent not found");
      const findfile = await File.findOne({ fileUrl: howDifferent.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "HowDifferent Deleted Successfully");
    } catch (error) {
      res.serverError("Failed to delete howDifferent", error.message);
    }
  },
};

module.exports = HowDifferentController;
