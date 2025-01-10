const Industry = require("../models/Industry");
const config = require("../config/config");

const s3 = config.settings.s3;
const { uploadToS3 } = require("../utils/uploadtos3");
const { saveLocally } = require("../utils/savelocally");
const File = require("../models/Files");

const IndustryController = {
  async create(req, res) {
    try {
      const { name, description, route } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const industry = new Industry({
        name,
        description,
        route,
        image: imageUrl,
      });
      await industry.save();
      res.successResponse(industry, "industry created successfully");
    } catch (error) {
      res.serverError("Failed to create industry", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const industrys = await Industry.find();
        res.successResponse(industrys, "Industrys retrieved successfully");
        return;
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 15; // Default to 10 items per page

        // Calculate the total number of industrys
        const totalIndustrys = await Industry.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalIndustrys / limit);

        // Fetch industrys with pagination
        const industrys = await Industry.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of industrys returned

        // Send the response
        res.successResponse(
          {
            data: industrys,
            totalPages: totalPages,
            currentPage: page,
            totalIndustrys: totalIndustrys,
          },
          "Industrys retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve industrys", error.message);
    }
  },

  async getById(req, res) {
    try {
      const industry = await Industry.findById(req.params.id);
      if (!industry) return res.badResponse("industry not found");
      res.successResponse(industry, "industry retrieved successfully");
    } catch (error) {
      res.serverError("Invalid industry ID", error.message);
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
        const findImage = await Industry.findById(req.params.id);
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

      const industry = await Industry.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!industry) return res.badResponse("industry not found");
      res.successResponse(industry, "industry updated successfully");
    } catch (error) {
      res.serverError("Failed to update industry", error.message);
    }
  },

  async delete(req, res) {
    try {
      const industry = await Industry.findByIdAndDelete(req.params.id);
      if (!industry) return res.badResponse("industry not found");
      const findfile = await File.findOne({ fileUrl: industry.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "industry deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete industry", error.message);
    }
  },
};

module.exports = IndustryController;
