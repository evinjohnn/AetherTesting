const Timeline = require("../models/Timeline");

const TimelineController = {
  async create(req, res) {
    try {
      // Validate request body
      const { event, description, year } = req.body;
      if (!event || !description || !year) {
        return res.validationError(
          "Invalid request body. All fields are required."
        );
      }

      console.log(year);
      

      const existyear = await Timeline.findOne({year});
      if (existyear) {
        return res.badResponse(
          "Timeline event already exists for the given year."
        );
      }

      const timelineEvent = new Timeline({
        event,
        description,
        year,
      });
      await timelineEvent.save();
      res.successResponse(timelineEvent, "Timeline event created successfully");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },
  async getAll(req, res) {
    try {
      const { isNeedFull = false } = req.query;

      if (isNeedFull) {
        // Fetch all timelines
        const timelines = await Timeline.find();
        res.successResponse(timelines, "Timelines retrieved successfully");
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of timelines
        const totalTimelines = await Timeline.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalTimelines / limit);

        // Fetch timelines with pagination
        const timelines = await Timeline.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of timelines returned

        // Send the response
        res.successResponse(
          {
            timelines,
            totalPages: totalPages,
            currentPage: page,
            totalTimelines: totalTimelines,
          },
          "Timelines retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve timelines", error.message);
    }
  },

  async getById(req, res) {
    try {
      const timelineEvent = await Timeline.findById(req.params.id);
      if (!timelineEvent) return res.badResponse("Timeline event not found");
      res.successResponse(
        timelineEvent,
        "Timeline event retrieved successfully"
      );
    } catch (error) {
      res.serverError("Invalid timeline event ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const timelineEvent = await Timeline.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!timelineEvent) return res.badResponse("Timeline event not found");
      res.successResponse(timelineEvent, "Timeline event updated successfully");
    } catch (error) {
      res.serverError("Failed to update timeline event", error.message);
    }
  },

  async delete(req, res) {
    try {
      const timelineEvent = await Timeline.findByIdAndDelete(req.params.id);
      if (!timelineEvent) return res.badResponse("Timeline event not found");
      res.successResponse(null, "Timeline event deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete timeline event", error.message);
    }
  },
};

module.exports = TimelineController;
