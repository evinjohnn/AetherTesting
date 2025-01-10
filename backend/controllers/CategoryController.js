const CategoryModel = require("../models/CategoryModel");

const CategoryController = {
  async create(req, res) {
    try {
      const { title } = req.body;
      const category = new CategoryModel({
        title,
      });
      await category.save();
      res.successResponse(category, "Category created successfully");
    } catch (error) {
      res.serverError("Failed to create Category", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const categorys = await CategoryModel.find().sort({ updatedAt: -1 }); // Sort by updatedAt in descending order
      res.successResponse(categorys, "Category's retrieved successfully");
    } catch (error) {
      res.serverError("Failed to retrieve Category's", error.message);
    }
  },

  async getById(req, res) {
    try {
      const category = await CategoryModel.findById(req.params.id);
      if (!category) return res.badResponse("Category not found");
      res.successResponse(category, "Category retrieved successfully");
    } catch (error) {
      res.serverError("Invalid Category ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const category = await CategoryModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!category) return res.badResponse("Category not found");
      res.successResponse(category, "Category updated successfully");
    } catch (error) {
      res.serverError("Failed to update Category", error.message);
    }
  },

  async delete(req, res) {
    try {
      const category = await CategoryModel.findByIdAndDelete(req.params.id);
      if (!category) return res.badResponse("Category not found");
      res.successResponse(null, "Category deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete Category", error.message);
    }
  },
};

module.exports = CategoryController;
