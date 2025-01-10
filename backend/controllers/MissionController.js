const config = require("../config/config");
const Mission = require("../models/Mission");
const File = require("../models/Files");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const MissionController = {
  async create(req, res) {
    try {
      const { title, description } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const mission = new Mission({
        title,
        description,
        image: imageUrl,
      });
      await mission.save();
      res.successResponse(mission, "mission created successfully");
    } catch (error) {
      res.serverError("Failed to create mission", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const missions = await Mission.find();
        return res.successResponse(missions, "Missions retrieved successfully");
      } else {
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of missions matching the query
        const totalMissions = await Mission.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalMissions / limit);

        // Fetch missions with pagination, filtered by category and search term
        const missions = await Mission.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of missions returned

        // Send the response
        res.successResponse(
          {
            missions: missions,
            totalPages: totalPages,
            currentPage: page,
            totalMissions: totalMissions,
          },
          "Missions retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve missions", error.message);
    }
  },

  async getById(req, res) {
    try {
      const mission = await Mission.findById(req.params.id);
      if (!mission) return res.badResponse("mission not found");
      res.successResponse(mission, "mission retrieved successfully");
    } catch (error) {
      res.serverError("Invalid mission ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Mission.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Mission not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Mission.findById(req.params.id);
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

      // Update mission entry
      const mission = await Mission.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!mission) {
        return res.badResponse("Mission not found");
      }

      res.successResponse(mission, "Mission updated successfully");
    } catch (error) {
      console.error("Error updating mission:", error);
      res.serverError("Failed to update mission", error.message);
    }
  },

  async delete(req, res) {
    try {
      const mission = await Mission.findByIdAndDelete(req.params.id);
      if (!mission) return res.badResponse("mission not found");
      const findfile = await File.findOne({ fileUrl: mission.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Mission Deleted Successfully");
    } catch (error) {
      res.serverError("Failed to delete mission", error.message);
    }
  },
};

module.exports = MissionController;
