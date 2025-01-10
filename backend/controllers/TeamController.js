const Team = require("../models/Team");
const { saveLocally } = require("../utils/savelocally");
const config = require("../config/config");
const s3 = config.settings.s3;
const { uploadToS3 } = require("../utils/uploadtos3");
const File = require("../models/Files");

const TeamController = {
  async create(req, res) {
    try {
      const { name, position, education } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }
      const teamMember = new Team({
        name,
        position,
        education,
        image: imageUrl,
      });
      await teamMember.save();
      res.successResponse(teamMember, "Team member created successfully");
    } catch (error) {
      res.serverError("Failed to create team member", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull = false } = req.query;

      if (isNeedFull) {
        const team = await Team.find();
        res.successResponse(team, "Team retrieved successfully");
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of teams
        const totalTeams = await Team.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalTeams / limit);

        // Fetch teams with pagination
        const teams = await Team.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of teams returned

        // Send the response
        res.successResponse(
          {
            data: teams,
            totalPages: totalPages,
            currentPage: page,
            totalTeams: totalTeams,
          },
          "Teams retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve teams", error.message);
    }
  },

  async getById(req, res) {
    try {
      const teamMember = await Team.findById(req.params.id);
      if (!teamMember) return res.badResponse("Team member not found");
      res.successResponse(teamMember, "Team member retrieved successfully");
    } catch (error) {
      res.serverError("Invalid team member ID", error.message);
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
        const findMember = await Team.findById(req.params.id);
        const findfile = await File.findOne({ fileUrl: findMember.image });
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

      const teamMember = await Team.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );
      if (!teamMember) return res.badResponse("Team member not found");
      res.successResponse(teamMember, "Team member updated successfully");
    } catch (error) {
      res.serverError("Failed to update team member", error.message);
    }
  },

  async delete(req, res) {
    try {
      const teamMember = await Team.findByIdAndDelete(req.params.id);
      if (!teamMember) return res.badResponse("Team member not found");
      const findfile = await File.findOne({ fileUrl: teamMember.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Team member deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete team member", error.message);
    }
  },
};

module.exports = TeamController;
