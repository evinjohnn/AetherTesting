const express = require("express");
const {
  Login,
  verifyForgotMail,
  refreshToken,
  myProfile,
} = require("../../controllers/AuthController");
const { authMiddleware } = require("../../middleware/authmiddleware");
const router = express.Router();

router.post(`/login`, Login);
router.post(`/verifyforgotmail`, verifyForgotMail);
router.post("/refresh/refreshtoken", refreshToken);
router.get("/myprofile", authMiddleware, myProfile);

module.exports = router;
