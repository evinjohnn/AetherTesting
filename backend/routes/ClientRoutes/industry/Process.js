const express = require("express");
const upload = require("../../../middleware/multer");
const ProcessController = require("../../../controllers/ProcessController");
const router = express.Router();

router.post("/process", upload.single("image"), ProcessController.create);
router.get("/process", ProcessController.getAll);
router.get("/process/:id", ProcessController.getById);
router.put("/process/:id", upload.single("image"), ProcessController.update);
router.delete("/process/:id", ProcessController.delete);

module.exports = router;
