const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const File = require("../models/Files");

// Function to get file extension
const getFileExtension = (filename) => {
  return path.extname(filename);
};

// Function to save file locally
const saveLocally = async (file) => {
  const randomId = uuid();
  const fileExtension = getFileExtension(file.originalname);
  const imagePath = path.join(
    __dirname,
    "../views/assets",
    `${randomId}${fileExtension}`
  );

  // Write the file to the specified path
  fs.writeFileSync(imagePath, file.buffer);

  const newFile = new File({
    filePath: `${randomId}${fileExtension}`,
    fileUrl: `${process.env.SERVER_URL}/assets/${randomId}${fileExtension}`,
  });

  await newFile.save();

  // Return the path to the saved file
  return `${process.env.SERVER_URL}/assets/${randomId}${fileExtension}`;
};

const cleanupUnusedFiles = async () => {
  const assetsPath = path.join(__dirname, "../views/assets");

  // Get all files in the folder
  const files = fs.readdirSync(assetsPath);

  try {
    // Get file paths marked as unused from the database
    const unusedFiles = await File.find({ isActive: false });

    // Create a Set of unused file paths for quick lookup
    const unusedFilePaths = new Set(
      unusedFiles.map((file) => path.basename(file.filePath))
    );

    // Loop through all files in the folder
    files.forEach((file) => {
      // Check if the file exists in the unusedFilePaths set
      if (unusedFilePaths.has(file)) {
        const filePath = path.join(assetsPath, file);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Error deleting file: ${filePath}`, err);
          } else {
            console.log(`Deleted unused file: ${filePath}`);
          }
        });
      }
    });

    console.log("Cleanup completed successfully.");
  } catch (err) {
    console.error("Error during cleanup process:", err);
  }
};

module.exports = {
  saveLocally,
  cleanupUnusedFiles,
};
