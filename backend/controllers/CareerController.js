const Career = require("../models/Career");

const CareerController = {
  async create(req, res) {
    try {
      const career = new Career(req.body);
      await career.save();
      res.successResponse(career, 'Career created successfully');
    } catch (error) {
      res.serverError('Failed to create career', error.message);
    }
  },

  async getAll(req, res) {
    try {
      const careers = await Career.find();
      res.successResponse(careers, 'Careers retrieved successfully');
    } catch (error) {
      res.serverError('Failed to retrieve careers', error.message);
    }
  },

  async getById(req, res) {
    try {
      const career = await Career.findById(req.params.id);
      if (!career) return res.badResponse('Career not found');
      res.successResponse(career, 'Career retrieved successfully');
    } catch (error) {
      res.serverError('Invalid Career ID', error.message);
    }
  },

  async update(req, res) {
    try {
      const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!career) return res.badResponse('Career not found');
      res.successResponse(career, 'Career updated successfully');
    } catch (error) {
      res.serverError('Failed to update career', error.message);
    }
  },

  async delete(req, res) {
    try {
      const career = await Career.findByIdAndDelete(req.params.id);
      if (!career) return res.badResponse('Career not found');
      res.successResponse(null, 'Career deleted successfully');
    } catch (error) {
      res.serverError('Failed to delete career', error.message);
    }
  },
};

module.exports = CareerController;
