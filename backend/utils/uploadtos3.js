const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const path = require("path");
const { v4: uuid } = require("uuid");
const config = require("../config/config");

let s3Client;

if (config.settings.s3) {
  s3Client = new S3Client({
    region: process.env.AWS_REGION,
    endpoint: `https://s3.us-east-1.amazonaws.com`,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
}

const uploadToS3 = async (file) => {
  const fileExtension = path.extname(file.originalname).toLowerCase();

  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${uuid()}${fileExtension}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);

  try {
    await s3Client.send(command);
    return `https://lyntell.s3.us-east-1.amazonaws.com/${params.Key}`;
  } catch (err) {
    console.error("Failed to upload image to S3:", err);
    throw new Error("Failed to upload image");
  }
};

// Function to delete file from S3 bucket
const deleteFromS3 = async (key) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET, // Use environment variable for bucket name
    Key: key, // Key of the file to be deleted
  };

  const command = new DeleteObjectCommand(params);

  try {
    await s3Client.send(command);
    return true;
  } catch (err) {
    console.error("Failed to delete image from S3:", err);
    throw new Error("Failed to delete image");
  }
};

module.exports = {
  uploadToS3,
  deleteFromS3,
};
