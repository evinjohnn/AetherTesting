const config = require("../config/config");
const Banner = require("../models/Banner");
const File = require("../models/Files");
const s3 = config.settings.s3;
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");

const BannerController = {
  async create(req, res) {
    const { section, title, description } = req.body;
    try {
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const banner = new Banner({
        section,
        title,
        description,
        image: imageUrl,
      });
      await banner.save();
      res.successResponse(banner, "banner created successfully");
    } catch (error) {
      res.serverError("Failed to create banner", error.message);
    }
  },

  async getAll(req, res) {
    try {
      // Parse page and limit from query parameters
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

      // Calculate the total number of banners
      const totalBanners = await Banner.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalBanners / limit);

      // Fetch banners with pagination
      const banners = await Banner.find()
        .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
        .skip((page - 1) * limit) // Skip the previous pages
        .limit(limit); // Limit the number of banners returned

      // Send the response
      res.successResponse(
        {
          data: banners,
          totalPages: totalPages,
          currentPage: page,
          totalBanners: totalBanners,
        },
        "Banners retrieved successfully"
      );
    } catch (error) {
      res.serverError("Failed to retrieve banners", error.message);
    }
  },

  async getById(req, res) {
    try {
      const banner = await Banner.findById(req.params.id);
      if (!banner) return res.badResponse("banner not found");
      res.successResponse(banner, "banner retrieved successfully");
    } catch (error) {
      res.serverError("Invalid banner ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Banner.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Banner not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Banner.findById(req.params.id);
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

      const banner = await Banner.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!banner) return res.badResponse("banner not found");
      res.successResponse(banner, "banner updated successfully");
    } catch (error) {
      res.serverError("Failed to update banner", error.message);
    }
  },

  async delete(req, res) {
    try {
      const banner = await Banner.findByIdAndDelete(req.params.id);
      if (!banner) return res.badResponse("banner not found");
      const findfile = await File.findOne({ fileUrl: banner.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "banner deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete banner", error.message);
    }
  },
};

module.exports = BannerController;
