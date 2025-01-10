const express = require("express");
const upload = require("../../middleware/multer");
const VoiceController = require("../../controllers/VoiceController");
const router = express.Router();

router.post("/voice", upload.single("image"), VoiceController.create);
router.get("/voices", VoiceController.getAll);
router.get("/voice/:id", VoiceController.getById);
router.put("/voice/:id", upload.single("image"), VoiceController.update);
router.delete("/voice/:id", VoiceController.delete);

module.exports = router;
