const config = require("../config/config");
const File = require("../models/Files");
const PlatformWhoWeAre = require("../models/PlatformWhoWeAre");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const PlatformWhoWeAreController = {
  async create(req, res) {
    try {
      const { description, title, card } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      // Create a new PlatformWhoWeAre document
      const newPlatformWhoWeAre = new PlatformWhoWeAre({
        description,
        title,
        card,
        image: imageUrl,
      });

      await newPlatformWhoWeAre.save();
      res.successResponse(
        newPlatformWhoWeAre,
        "PlatformWhoWeAre saved successfully"
      );
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Read (GET): Get all "PlatformWhoWeAre" documents
  async getAll(req, res) {
    try {
      const whoWeAreList = await PlatformWhoWeAre.find();
      res.successResponse(whoWeAreList, "PlatformWhoWeAre found");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Read (GET): Get a specific "PlatformWhoWeAre" document by ID
  async getById(req, res) {
    try {
      const whoWeAre = await PlatformWhoWeAre.findById(req.params.id);
      if (!whoWeAre) {
        return res.status(404).json({ message: "PlatformWhoWeAre not found" });
      }
      res.status(200).json(whoWeAre);
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Update (PUT): Update a specific "PlatformWhoWeAre" document by ID
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
        const findImage = await PlatformWhoWeAre.findById(req.params.id);
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

      const updatedPlatformWhoWeAre = await PlatformWhoWeAre.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        { new: true } // Returns the updated document
      );

      if (!updatedPlatformWhoWeAre) {
        return res.status(404).json({ message: "PlatformWhoWeAre not found" });
      }

      res.successResponse(
        updatedPlatformWhoWeAre,
        "updated who we are now with data"
      );
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Delete (DELETE): Delete a specific "PlatformWhoWeAre" document by ID
  async delete(req, res) {
    try {
      const deletedPlatformWhoWeAre = await PlatformWhoWeAre.findByIdAndDelete(
        req.params.id
      );
      if (!deletedPlatformWhoWeAre) {
        return res.status(404).json({ message: "PlatformWhoWeAre not found" });
      }

      const findfile = await File.findOne({
        fileUrl: deletedPlatformWhoWeAre.image,
      });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }

      res.successResponse(null, "PlatformWhoWeAre deleted successfully");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },
};

module.exports = PlatformWhoWeAreController;
