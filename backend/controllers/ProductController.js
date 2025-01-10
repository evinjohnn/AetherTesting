const config = require("../config/config");
const File = require("../models/Files");
const s3 = config.settings.s3;
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const Products = require("../models/ProductModal");

const ProductController = {
  async create(req, res) {
    const { title } = req.body;
    try {
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const product = new Products({
        title,
        image: imageUrl,
      });
      await product.save();
      res.successResponse(product, "product created successfully");
    } catch (error) {
      res.serverError("Failed to create product", error.message);
    }
  },

  async getAll(req, res) {
    try {
      // Parse page and limit from query parameters
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

      // Calculate the total number of products
      const totalProducts = await Products.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalProducts / limit);

      // Fetch products with pagination
      const products = await Products.find()
        .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
        .skip((page - 1) * limit) // Skip the previous pages
        .limit(limit); // Limit the number of products returned

      // Send the response
      res.successResponse(
        {
          data: products,
          totalPages: totalPages,
          currentPage: page,
          totalProducts: totalProducts,
        },
        "Products retrieved successfully"
      );
    } catch (error) {
      res.serverError("Failed to retrieve products", error.message);
    }
  },

  async getById(req, res) {
    try {
      const product = await Products.findById(req.params.id);
      if (!product) return res.badResponse("product not found");
      res.successResponse(product, "product retrieved successfully");
    } catch (error) {
      res.serverError("Invalid product ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Products.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Product not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Products.findById(req.params.id);
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

      const product = await Products.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!product) return res.badResponse("product not found");
      res.successResponse(product, "product updated successfully");
    } catch (error) {
      res.serverError("Failed to update product", error.message);
    }
  },

  async delete(req, res) {
    try {
      const product = await Products.findByIdAndDelete(req.params.id);
      if (!product) return res.badResponse("product not found");
      const findfile = await File.findOne({ fileUrl: product.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "product deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete product", error.message);
    }
  },
};

module.exports = ProductController;
