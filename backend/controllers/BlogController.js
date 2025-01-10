const config = require("../config/config");
const Blog = require("../models/Blog");
const File = require("../models/Files");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;

const BlogController = {
  async create(req, res) {
    try {
      const { title, content, category, author } = req.body;
      let imageUrl;
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      const blog = new Blog({
        title,
        content,
        category,
        author,
        image: imageUrl,
      });
      await blog.save();
      res.successResponse(blog, "blog created successfully");
    } catch (error) {
      res.serverError("Failed to create blog", error.message);
    }
  },

  async getAll(req, res) {
    try {
      const { category, searchTerm } = req.query;
      // Parse page and limit from query parameters
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

      // Construct the query object
      const query = {};
      if (category) {
        query.category = category; // Filter by category if provided
      }
      if (searchTerm) {
        query.title = { $regex: searchTerm, $options: "i" }; // Filter by search term in title (case insensitive)
      }

      // Calculate the total number of blogs matching the query
      const totalBlogs = await Blog.countDocuments(query);

      // Calculate total pages
      const totalPages = Math.ceil(totalBlogs / limit);

      // Fetch blogs with pagination, filtered by category and search term
      const blogs = await Blog.find(query)
        .sort({ updatedAt: -1 }) // Sort by updatedAt in descending order
        .skip((page - 1) * limit) // Skip the previous pages
        .limit(limit); // Limit the number of blogs returned

      // Send the response
      res.successResponse(
        {
          blogs: blogs,
          totalPages: totalPages,
          currentPage: page,
          totalBlogs: totalBlogs,
        },
        "Blogs retrieved successfully"
      );
    } catch (error) {
      res.serverError("Failed to retrieve blogs", error.message);
    }
  },

  async getById(req, res) {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.badResponse("blog not found");
      res.successResponse(blog, "blog retrieved successfully");
    } catch (error) {
      res.serverError("Invalid blog ID", error.message);
    }
  },

  async update(req, res) {
    try {
      const findData = await Blog.findById(req.params.id);
      if (!findData) {
        return res.badResponse("Blog not found"); // Handle the case where the testimonial does not exist
      }

      let imageUrl;

      // Upload image if a file is provided
      if (req.file) {
        imageUrl = s3
          ? await uploadToS3(req.file)
          : await saveLocally(req.file);
      }

      if (req.file) {
        const findImage = await Blog.findById(req.params.id);
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

      // Update blog entry
      const blog = await Blog.findByIdAndUpdate(req.params.id, updatePayload, {
        new: true,
      });

      if (!blog) {
        return res.badResponse("Blog not found");
      }

      res.successResponse(blog, "Blog updated successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
      res.serverError("Failed to update blog", error.message);
    }
  },

  async delete(req, res) {
    try {
      const blog = await Blog.findByIdAndDelete(req.params.id);
      if (!blog) return res.badResponse("blog not found");
      const findfile = await File.findOne({ fileUrl: blog.image });
      if (findfile) {
        findfile.isActive = false;
        await findfile.save();
      }
      res.successResponse(null, "Blog Deleted Successfully");
    } catch (error) {
      res.serverError("Failed to delete blog", error.message);
    }
  },
};

module.exports = BlogController;
