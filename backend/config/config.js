const path = require("path");
const env = process.env.NODE_ENV || "development";
configPath = path.resolve(__dirname, `./.env.${env}`);

require("dotenv").config({ path: configPath });

const config = {
  env: env,
  port: process.env.PORT || 6001,
  app: {
    name: "Aether Backend Service",
  },
  settings: {
    s3: false,
  },
};

module.exports = config;
