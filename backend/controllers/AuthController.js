const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const User = require("../models/User");
const JWT_CONFIG = require("../config/jwtConfig");

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.validationError("User not found");
    }

    if (!user.password) {
      return res.validationError("Password not set");
    }

    // If user exists, compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.validationError("Invalid credentials");
    }

    // Generate JWT tokens with user type
    const accesstoken = jwt.sign(
      {
        type: "accesstoken",
        email,
        type: "Login",
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_ACCESSEXPIRES_IN }
    );

    const refreshtoken = jwt.sign(
      {
        type: "refreshtoken",
        email,
        type: "Login",
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_REFRESHEXPIRES_IN }
    );

    const data = {
      accesstoken,
      refreshtoken,
      expireAt: process.env.JWT_ACCESSEXPIRES_IN,
    };

    res.successResponse(data, "Logged In Successfully");
  } catch (error) {
    console.error("Error during login:", error);
    res.serverError(`Internal Server Error`, error.message);
  }
};

const verifyForgotMail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return validationError("Email not found");
    }

    // Generate a token
    const token = jwt.sign(
      { type: "forgotpassword", email, userType: "admin" },
      process.env.JWT_SECRET_FORGOT_PASSWORD,
      { expiresIn: process.env.JWT_SECRET_FORGOT_PASSWORD_IN }
    );

    const emailTemplatePath = path.join(
      __dirname,
      "../../",
      "public",
      "lyntellverifyforgotmail.html"
    );

    let emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

    // Replace placeholders with actual values
    emailTemplate = emailTemplate.replace(
      "{{url}}",
      `${process.env.BASE_URL}/forgotpassword?token=`
    );

    emailTemplate = emailTemplate.replace("{{link}}", token);

    const subject = "Email Verification Link";

    await sendHtmlEmailNotification(email, subject, emailTemplate);

    res.successResponse(null, "Password Reset Link Sended Successfully");
  } catch (error) {
    console.error("Error during forgot mail verification:", error);
    res.serverError(`Internal Server Error ${error.message}`);
  }
};

const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.id);
    res.successResponse(user, "User profile fetched successfully");
  } catch (error) {
    console.error("Error during user profile fetching:", error);
    res.serverError(`Internal Server Error ${error.message}`);
  }
};

const refreshToken = async (req, res) => {
  try {
    // Extract token from request headers
    const token = req.body.refreshToken;
    // Verify and decode token
    console.log(token);

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);

    const { email } = decodedToken;
    // Find user by email
    const user = await User.findOne({
      email,
    });

    if (user) {
      // Generate new token with appropriate expiration time
      const refreshtoken = jwt.sign(
        {
          email: user.email,
          type: "refreshtoken",
        },
        JWT_CONFIG.SECRET,
        { expiresIn: JWT_CONFIG.REFRESHEXPIRES_IN }
      );
      const accesstoken = jwt.sign(
        {
          email: user.email,
          type: "accesstoken",
        },
        JWT_CONFIG.SECRET,
        { expiresIn: JWT_CONFIG.ACCESSEXPIRES_IN }
      );

      // Send new token in response
      // return res.status(200).json({ refreshtoken, accesstoken });

      return res.successResponse(
        { refreshtoken, accesstoken },
        "Tokens created successfully"
      );
    } else {
      return res.status(404).json({ message: "User not found" });
      // return res.serverError("Internal server error", error);
    }
  } catch (error) {
    console.error("Token refresh error:", error);
    return res.status(401).json({ message: "Token refresh failed" });
    // return res.serverError("Internal server error", error);
  }
};

module.exports = {
  Login,
  verifyForgotMail,
  refreshToken,
  myProfile,
};
