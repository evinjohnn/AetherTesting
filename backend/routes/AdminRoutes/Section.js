const express = require("express");
const SectionController = require("../../controllers/SectionControllers");
const router = express.Router();

router.post("/section", SectionController.create);
router.get("/section", SectionController.getAll);
router.get("/section/:id", SectionController.getById);
router.put("/section/:id", SectionController.update);
router.delete("/section/:id", SectionController.delete);

module.exports = router;
