const config = require("../config/config");
const File = require("../models/Files");
const WhoWeAre = require("../models/WhoWeAre");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const WhoWeAreController = {
  async create(req, res) {
    try {
      const { description, card } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      // Create a new WhoWeAre document
      const newWhoWeAre = new WhoWeAre({
        description,
        card,
        image: imageUrl,
      });

      await newWhoWeAre.save();
      res.successResponse(newWhoWeAre, "WhoWeAre saved successfully");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Read (GET): Get all "WhoWeAre" documents
  async getAll(req, res) {
    try {
      const whoWeAreList = await WhoWeAre.find();
      res.successResponse(whoWeAreList, "WhoWeAre found");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Read (GET): Get a specific "WhoWeAre" document by ID
  async getById(req, res) {
    try {
      const whoWeAre = await WhoWeAre.findById(req.params.id);
      if (!whoWeAre) {
        return res.status(404).json({ message: "WhoWeAre not found" });
      }
      res.status(200).json(whoWeAre);
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Update (PUT): Update a specific "WhoWeAre" document by ID
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
        const findImage = await WhoWeAre.findById(req.params.id);
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

      const updatedWhoWeAre = await WhoWeAre.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        { new: true } // Returns the updated document
      );

      if (!updatedWhoWeAre) {
        return res.status(404).json({ message: "WhoWeAre not found" });
      }

      res.successResponse(updatedWhoWeAre, "updated who we are now with data");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Delete (DELETE): Delete a specific "WhoWeAre" document by ID
  async delete(req, res) {
    try {
      const deletedWhoWeAre = await WhoWeAre.findByIdAndDelete(req.params.id);
      if (!deletedWhoWeAre) {
        return res.status(404).json({ message: "WhoWeAre not found" });
      }

      const findfile = await File.findOne({ fileUrl: deletedWhoWeAre.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }

      res.successResponse(null, "WhoWeAre deleted successfully");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },
};

module.exports = WhoWeAreController;
