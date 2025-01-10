const config = require("../config/config");
const File = require("../models/Files");
const Voice = require("../models/VoiceModal");
const s3 = config.settings.s3;
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");

const VoiceController = {
  async create(req, res) {
    const { title } = req.body;
    try {
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const voice = new Voice({
        title,
        image: imageUrl,
      });
      await voice.save();
      res.successResponse(voice, "voice created successfully");
    } catch (error) {
      res.serverError("Failed to create voice", error.message);
    }
  },

  async getAll(req, res) {
    try {
      // Parse page and limit from query parameters
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

      // Calculate the total number of voices
      const totalVoices = await Voice.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalVoices / limit);

      // Fetch voices with pagination
      const voices = await Voice.find()
        .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
        .skip((page - 1) * limit) // Skip the previous pages
        .limit(limit); // Limit the number of voices returned

      // Send the response
      res.successResponse(
        {
          data: voices,
          totalPages: totalPages,
          currentPage: page,
          totalVoices: totalVoices,
        },
        "Voices retrieved successfully"
      );
    } catch (error) {
      res.serverError("Failed to retrieve voices", error.message);
    }
  },

  async getById(req, res) {
    try {
      const voice = await Voice.findById(req.params.id);
      if (!voice) return res.badResponse("voice not found");
      res.successResponse(voice, "voice retrieved successfully");
    } catch (error) {
      res.serverError("Invalid voice ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Voice.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Voice not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Voice.findById(req.params.id);
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

      const voice = await Voice.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!voice) return res.badResponse("voice not found");
      res.successResponse(voice, "voice updated successfully");
    } catch (error) {
      res.serverError("Failed to update voice", error.message);
    }
  },

  async delete(req, res) {
    try {
      const voice = await Voice.findByIdAndDelete(req.params.id);
      if (!voice) return res.badResponse("voice not found");
      const findfile = await File.findOne({ fileUrl: voice.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "voice deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete voice", error.message);
    }
  },
};

module.exports = VoiceController;
