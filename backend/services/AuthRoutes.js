const express = require("express");
const router = express.Router();

// Import Auth routes

const AuthRouter = require("../routes/AdminRoutes/Auth");

// Mount Auth routes

router.use("/", AuthRouter);

module.exports = router;
