const express = require("express");
const dashboardCount = require("../../controllers/DashboardController");
const router = express.Router();

router.get("/dashboard-count", dashboardCount);

module.exports = router;
