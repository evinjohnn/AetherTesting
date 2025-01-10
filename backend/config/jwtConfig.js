module.exports = {
  EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1H",
  SECRET_RESET_EXPIRESIN: process.env.JWT_SECRET_RESET_PASSWORD_IN || "1H",
  REFRESHEXPIRES_IN: process.env.JWT_REFRESHEXPIRES_IN || "5d",
  ACCESSEXPIRES_IN: process.env.JWT_ACCESSEXPIRES_IN || "15m",

  SECRET: process.env.JWT_SECRET || "your_jwt_secret_key",
  SECRET_RESET_PASSWORD:
    process.env.JWT_SECRET_RESET_PASSWORD || "your_jwt_secret_password",
};
