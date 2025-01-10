const Testimonial = require("../models/Testimonial");
const { saveLocally } = require("../utils/savelocally");
const config = require("../config/config");
const { uploadToS3 } = require("../utils/uploadtos3");
const File = require("../models/Files");
const s3 = config.settings.s3;

const TestimonialsController = {
  async create(req, res) {
    try {
      const { name, description } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const testimonial = new Testimonial({
        name,
        description,
        image: imageUrl,
      });
      await testimonial.save();
      res.successResponse(testimonial, "Testimonial created successfully");
    } catch (error) {
      res.serverError("Failed to create testimonial", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull = false } = req.query;

      if (isNeedFull) {
        // Fetch all timelines
        const testimonials = await Testimonial.find();
        res.successResponse(testimonials, "Testimonial retrieved successfully");
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of testimonials
        const totalTestimonials = await Testimonial.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalTestimonials / limit);

        // Fetch testimonials with pagination
        const testimonials = await Testimonial.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of testimonials returned

        // Send the response
        res.successResponse(
          {
            data: testimonials,
            totalPages: totalPages,
            currentPage: page,
            totalTestimonials: totalTestimonials,
          },
          "Testimonials retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve testimonials", error.message);
    }
  },

  async getById(req, res) {
    try {
      const testimonial = await Testimonial.findById(req.params.id);
      if (!testimonial) return res.badResponse("Testimonial not found");
      res.successResponse(testimonial, "Testimonial retrieved successfully");
    } catch (error) {
      res.serverError("Invalid testimonial ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Testimonial.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Testimonial not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Testimonial.findById(req.params.id);
        if (!findImage) {
          return res.badResponse("Testimonial not found"); // Handle the case where the testimonial does not exist
        }

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

      const testimonial = await Testimonial.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        { new: true }
      );
      if (!testimonial) return res.badResponse("Testimonial not found");
      res.successResponse(testimonial, "Testimonial updated successfully");
    } catch (error) {
      console.log(error);

      res.serverError("Failed to update testimonial", error.message);
    }
  },

  async delete(req, res) {
    try {
      const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
      if (!testimonial) return res.badResponse("Testimonial not found");
      const findfile = await File.findOne({ fileUrl: testimonial.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Testimonial deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete testimonial", error.message);
    }
  },
};

module.exports = TestimonialsController;
