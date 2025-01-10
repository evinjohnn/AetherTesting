const Client = require("../models/Client");
const config = require("../config/config");

const s3 = config.settings.s3;
const { uploadToS3 } = require("../utils/uploadtos3");
const { saveLocally } = require("../utils/savelocally");
const File = require("../models/Files");

const ClientController = {
  async create(req, res) {
    try {
      const { name, description } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const client = new Client({ name, description, image: imageUrl });
      await client.save();
      res.successResponse(client, "client created successfully");
    } catch (error) {
      res.serverError("Failed to create client", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { isNeedFull } = req.query;

      if (isNeedFull) {
        const clients = await Client.find();
        res.successResponse(clients, "Clients retrieved successfully");
        return;
      } else {
        // Parse page and limit from query parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of clients
        const totalClients = await Client.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalClients / limit);

        // Fetch clients with pagination
        const clients = await Client.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of clients returned

        // Send the response
        res.successResponse(
          {
            data: clients,
            totalPages: totalPages,
            currentPage: page,
            totalClients: totalClients,
          },
          "Clients retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve clients", error.message);
    }
  },

  async getById(req, res) {
    try {
      const client = await Client.findById(req.params.id);
      if (!client) return res.badResponse("client not found");
      res.successResponse(client, "client retrieved successfully");
    } catch (error) {
      res.serverError("Invalid client ID", error.message);
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
        const findImage = await Client.findById(req.params.id);
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

      const client = await Client.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!client) return res.badResponse("client not found");
      res.successResponse(client, "client updated successfully");
    } catch (error) {
      res.serverError("Failed to update client", error.message);
    }
  },

  async delete(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);
      if (!client) return res.badResponse("client not found");
      const findfile = await File.findOne({ fileUrl: client.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "client deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete client", error.message);
    }
  },
};

module.exports = ClientController;
