const express = require("express");
const CareerController = require("../../controllers/CareerController");
const router = express.Router();

router.post("/career", CareerController.create);
router.get("/careers", CareerController.getAll);
router.get("/career/:id", CareerController.getById);
router.put("/career/:id", CareerController.update);
router.delete("/career/:id", CareerController.delete);

module.exports = router;
