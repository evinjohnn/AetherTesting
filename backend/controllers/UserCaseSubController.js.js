const UseCaseSub = require("../models/UseCaseSub");

const UseCaseSubController = {
  async create(req, res) {
    try {
      const { name, route } = req.body;

      const usecasesub = new UseCaseSub({
        name,
        route,
      });
      await usecasesub.save();
      res.successResponse(usecasesub, "usecasesub created successfully");
    } catch (error) {
      res.serverError("Failed to create usecasesub", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const usecasesubs = await UseCaseSub.find();
        res.successResponse(usecasesubs, "UseCaseSubs retrieved successfully");
        return;
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 15; // Default to 10 items per page

        // Calculate the total number of usecasesubs
        const totalUseCaseSubs = await UseCaseSub.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalUseCaseSubs / limit);

        // Fetch usecasesubs with pagination
        const usecasesubs = await UseCaseSub.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of usecasesubs returned

        // Send the response
        res.successResponse(
          {
            data: usecasesubs,
            totalPages: totalPages,
            currentPage: page,
            totalUseCaseSubs: totalUseCaseSubs,
          },
          "UseCaseSubs retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve usecasesubs", error.message);
    }
  },

  async getById(req, res) {
    try {
      const usecasesub = await UseCaseSub.findById(req.params.id);
      if (!usecasesub) return res.badResponse("usecasesub not found");
      res.successResponse(usecasesub, "usecasesub retrieved successfully");
    } catch (error) {
      res.serverError("Invalid usecasesub ID", error.message);
    }
  },

  async update(req, res) {
    try {
      // Construct update payload
      const updatePayload = { ...req.body };

      const usecasesub = await UseCaseSub.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!usecasesub) return res.badResponse("usecasesub not found");
      res.successResponse(usecasesub, "usecasesub updated successfully");
    } catch (error) {
      res.serverError("Failed to update usecasesub", error.message);
    }
  },

  async delete(req, res) {
    try {
      const usecasesub = await UseCaseSub.findByIdAndDelete(req.params.id);
      if (!usecasesub) return res.badResponse("usecasesub not found");
      res.successResponse(null, "usecasesub deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete usecasesub", error.message);
    }
  },
};

module.exports = UseCaseSubController;
