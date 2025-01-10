const config = require("../config/config");
const Process = require("../models/Process");
const File = require("../models/Files");
const s3 = config.settings.s3;
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");

const ProcessController = {
  async create(req, res) {
    const { title, description, section, sub_section } = req.body;
    try {
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const process = new Process({
        title,
        description,
        section,
        sub_section,
        image: imageUrl,
      });
      await process.save();
      res.successResponse(process, "process created successfully");
    } catch (error) {
      res.serverError("Failed to create process", error.message);
    }
  },

  async getAll(req, res) {
    try {
      if (req.query.isNeedFull) {
        const query = {};
        if (req.query.section) {
          query.section = req.query.section;
        }
        if (req.query.sub_section) {
          query.sub_section = req.query.sub_section;
        }
        const process = await Process.find(query);
        res.successResponse(process, "process retrieved successfully");
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
        // Calculate the total number of processs
        const totalProcesss = await Process.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalProcesss / limit);

        // Fetch processs with pagination
        const processs = await Process.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of processs returned

        // Send the response
        res.successResponse(
          {
            data: processs,
            totalPages: totalPages,
            currentPage: page,
            totalProcesss: totalProcesss,
          },
          "Processs retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve processs", error.message);
    }
  },

  async getById(req, res) {
    try {
      const process = await Process.findById(req.params.id);
      if (!process) return res.badResponse("process not found");
      res.successResponse(process, "process retrieved successfully");
    } catch (error) {
      res.serverError("Invalid process ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Process.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Process not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Process.findById(req.params.id);
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

      const process = await Process.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!process) return res.badResponse("process not found");
      res.successResponse(process, "process updated successfully");
    } catch (error) {
      res.serverError("Failed to update process", error.message);
    }
  },

  async delete(req, res) {
    try {
      const process = await Process.findByIdAndDelete(req.params.id);
      if (!process) return res.badResponse("process not found");
      const findfile = await File.findOne({ fileUrl: process.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "process deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete process", error.message);
    }
  },
};

module.exports = ProcessController;
