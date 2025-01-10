const express = require("express");
const UserCaseSubController = require("../../controllers/UserCaseSubController.js");
const router = express.Router();

router.post("/usecasesub", UserCaseSubController.create);
router.get("/usecasesub", UserCaseSubController.getAll);
router.get("/usecasesub/:id", UserCaseSubController.getById);
router.put("/usecasesub/:id", UserCaseSubController.update);
router.delete("/usecasesub/:id", UserCaseSubController.delete);

module.exports = router;
