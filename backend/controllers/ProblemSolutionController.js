const config = require("../config/config");
const ProblemSolution = require("../models/ProblemSolution");
const File = require("../models/Files");
const s3 = config.settings.s3;
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");

const ProblemSolutionController = {
  async create(req, res) {
    const { problem, solution, type, section, sub_section } = req.body;
    try {
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const problemsolution = new ProblemSolution({
        type,
        problem,
        solution,
        sub_section,
        section,
        image: imageUrl,
      });
      await problemsolution.save();
      res.successResponse(
        problemsolution,
        "problemsolution created successfully"
      );
    } catch (error) {
      res.serverError("Failed to create problemsolution", error.message);
    }
  },

  async getAll(req, res) {
    try {
      
      if (req.query.isNeedFull) {
        const problemsolutions = await ProblemSolution.find({
          section: req.query.section,
          sub_section: req.query.sub_section && req.query.sub_section,
        });

        res.successResponse(
          problemsolutions,
          "ProblemSolutions retrieved successfully"
        );
      } else {
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        // Calculate the total number of problemsolutions
        const totalProblemSolutions = await ProblemSolution.countDocuments();

        // Calculate total pages
        const totalPages = Math.ceil(totalProblemSolutions / limit);

        // Fetch problemsolutions with pagination
        const problemsolutions = await ProblemSolution.find()
          .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
          .skip((page - 1) * limit) // Skip the previous pages
          .limit(limit); // Limit the number of problemsolutions returned

        // Send the response
        res.successResponse(
          {
            data: problemsolutions,
            totalPages: totalPages,
            currentPage: page,
            totalProblemSolutions: totalProblemSolutions,
          },
          "ProblemSolutions retrieved successfully"
        );
      }
    } catch (error) {
      res.serverError("Failed to retrieve problemsolutions", error.message);
    }
  },

  async getById(req, res) {
    try {
      const problemsolution = await ProblemSolution.findById(req.params.id);
      if (!problemsolution) return res.badResponse("problemsolution not found");
      res.successResponse(
        problemsolution,
        "problemsolution retrieved successfully"
      );
    } catch (error) {
      res.serverError("Invalid problemsolution ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await ProblemSolution.findById(req.params.id);
      if (!findData) {
        return res.badResponse("ProblemSolution not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await ProblemSolution.findById(req.params.id);
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

      const problemsolution = await ProblemSolution.findByIdAndUpdate(
        req.params.id,
        updatePayload,
        {
          new: true,
        }
      );

      if (!problemsolution) return res.badResponse("problemsolution not found");
      res.successResponse(
        problemsolution,
        "problemsolution updated successfully"
      );
    } catch (error) {
      res.serverError("Failed to update problemsolution", error.message);
    }
  },

  async delete(req, res) {
    try {
      const problemsolution = await ProblemSolution.findByIdAndDelete(
        req.params.id
      );
      if (!problemsolution) return res.badResponse("problemsolution not found");
      const findfile = await File.findOne({ fileUrl: problemsolution.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "problemsolution deleted successfully");
    } catch (error) {
      res.serverError("Failed to delete problemsolution", error.message);
    }
  },
};

module.exports = ProblemSolutionController;
