const config = require("../config/config");
const File = require("../models/Files");
const AboutWhoWeAre = require("../models/AboutWhoWeAre");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const AboutWhoWeAreController = {
  async create(req, res) {
    try {
      const { description, card, title } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      // Create a new AboutWhoWeAre document
      const newAboutWhoWeAre = new AboutWhoWeAre({
        description,
        title,
        card,
        image: imageUrl,
      });

      await newAboutWhoWeAre.save();
      res.successResponse(newAboutWhoWeAre, "AboutWhoWeAre saved successfully");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Read (GET): Get all "AboutWhoWeAre" documents
  async getAll(req, res) {
    try {
      const whoWeAreList = await AboutWhoWeAre.find();
      res.successResponse(whoWeAreList, "AboutWhoWeAre found");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Read (GET): Get a specific "AboutWhoWeAre" document by ID
  async getById(req, res) {
    try {
      const whoWeAre = await AboutWhoWeAre.findById(req.params.id);
      if (!whoWeAre) {
        return res.status(404).json({ message: "AboutWhoWeAre not found" });
      }
      res.status(200).json(whoWeAre);
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Update (PUT): Update a specific "AboutWhoWeAre" document by ID
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
        const findImage = await AboutWhoWeAre.findById(req.params.id);
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

      const updatedAboutWhoWeAre = await AboutWhoWeAre.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        { new: true } // Returns the updated document
      );

      if (!updatedAboutWhoWeAre) {
        return res.status(404).json({ message: "AboutWhoWeAre not found" });
      }

      res.successResponse(
        updatedAboutWhoWeAre,
        "updated who we are now with data"
      );
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },

  // Delete (DELETE): Delete a specific "AboutWhoWeAre" document by ID
  async delete(req, res) {
    try {
      const deletedAboutWhoWeAre = await AboutWhoWeAre.findByIdAndDelete(
        req.params.id
      );
      if (!deletedAboutWhoWeAre) {
        return res.status(404).json({ message: "AboutWhoWeAre not found" });
      }

      const findfile = await File.findOne({
        fileUrl: deletedAboutWhoWeAre.image,
      });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }

      res.successResponse(null, "AboutWhoWeAre deleted successfully");
    } catch (error) {
      res.serverError("Failed to create timeline event", error.message);
    }
  },
};

module.exports = AboutWhoWeAreController;
