const PlatformSub = require("../models/PlatformSub");

const PlatformController = {
  async create(req, res) {
    try {
      const { name, route } = req.body;

      const platform = new PlatformSub({
        name,
        route,
      });
      await platform.save();
      res.successResponse(platform, "platform created successfully");
    } catch (error) {
      res.serverError("Failed to create platform", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const platforms = await PlatformSub.find();
        res.successResponse(platforms, "Platforms retrieved successfully");
        return;
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 15; // Default to 10 items per page

        // Calculate the total number of platforms
        const totalPlatforms = await PlatformSub.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalPlatforms / limit);

        // Fetch platforms with pagination
        const platforms = await PlatformSub.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of platforms returned

        // Send the response
        res.successResponse(
          {
            data: platforms,
            totalPages: totalPages,
            currentPage: page,
            totalPlatforms: totalPlatforms,
          },
          "Platforms retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve platforms", error.message);
    }
  },

  async getById(req, res) {
    try {
      const platform = await PlatformSub.findById(req.params.id);
      if (!platform) return res.badResponse("platform not found");
      res.successResponse(platform, "platform retrieved successfully");
    } catch (error) {
      res.serverError("Invalid platform ID", error.message);
    }
  },

  async update(req, res) {
    try {
      // Construct update payload
      const updatePayload = { ...req.body };

      const platform = await PlatformSub.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!platform) return res.badResponse("platform not found");
      res.successResponse(platform, "platform updated successfully");
    } catch (error) {
      res.serverError("Failed to update platform", error.message);
    }
  },

  async delete(req, res) {
    try {
      const platform = await PlatformSub.findByIdAndDelete(req.params.id);
      if (!platform) return res.badResponse("platform not found");
      res.successResponse(null, "platform deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete platform", error.message);
    }
  },
};

module.exports = PlatformController;
