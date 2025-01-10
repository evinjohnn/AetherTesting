const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  // Check if the header is present in the request
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "No authorization header provided" });
  }

  // Split the authorization header to get the token
  const tokenParts = req.headers.authorization.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ message: "Invalid authorization header format" });
  }

  const token = tokenParts[1];
  // Perform your authentication logic here
  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);
    // Check if the user exists and the token is valid
    const admin = await User.findOne({
      email: decoded.email,
    });

    if (!admin) {
      return res.status(401).json({ auth: false, message: "Invalid token" });
    }

    req.email = admin.email; // Example: Store user ID in the request object for further use
    req.id = admin._id;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log(error);
    // Token verification failed, send a 401 Unauthorized response
    return res.status(401).json({ message: "Failed to authenticate token" });
  }
};

module.exports = { authMiddleware };
