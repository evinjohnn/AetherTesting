const Video = require("../models/Video");
const config = require("../config/config");
const { saveLocally } = require("../utils/savelocally");
const { uploadToS3 } = require("../utils/uploadtos3");
const s3 = config.settings.s3;
const File = require("../models/Files");

const createVideo = async (req, res) => {
  try {
    const { section, sub_section } = req.body;
    
    let videoUrl;
    if (req.file) {
      videoUrl = s3 ? await uploadToS3(req.file) : await saveLocally(req.file);
    }

    // Create a new Video document
    const createdVideo = new Video({
      video: videoUrl,
      section,
      sub_section,
    });

    // Save the document to the database
    await createdVideo.save();

    // Send success response
    res.successResponse(createdVideo, "Video created successfully");
  } catch (error) {
    console.error("Error saving video:", error);
    res.serverError("Failed to create video", error.message);
  }
};

const updateVideo = async (req, res) => {
  try {
    let videoUrl;
    const { section, sub_section } = req.body;

    console.log("Request Body:", req.body);
    console.log("Request File:", req.file);

    // Check if a file was uploaded
    if (req.file) {
      videoUrl = s3 ? await uploadToS3(req.file) : await saveLocally(req.file);
      console.log("Video URL:", videoUrl);
    }

    // Prepare the update object
    const updateData = {};
    if (section) updateData.section = section;
    if (sub_section) updateData.sub_section = sub_section;
    if (videoUrl) updateData.video = videoUrl;

    console.log("Update Data:", updateData);

    // Find the video by ID and update it
    const video = await Video.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    console.log("Updated Video:", video);

    // Check if the video was found and updated
    if (!video) return res.badResponse("Video not found");

    res.successResponse(video, "Video updated successfully");
  } catch (error) {
    console.error("Error during update:", error);
    res.serverError("Failed to update Video", error.message);
  }
};

const getVideo = async (req, res) => {
  try {
    const query = {};

    if (req.query.section) {
      query.section = req.query.section;
    }
    if (req.query.sub_section) {
      query.sub_section = req.query.sub_section;
    }

    const video = await Video.find(query);

    res.successResponse(video, "Video success");
  } catch (error) {
    res.serverError(error.message);
  }
};

module.exports = {
  createVideo,
  getVideo,
  updateVideo,
};
