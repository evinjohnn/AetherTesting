const express = require("express");
const upload = require("../../middleware/multer");
const ClientController = require("../../controllers/ClientController");
const router = express.Router();

router.post("/client", upload.single("image"), ClientController.create);
router.get("/clients", ClientController.getAll);
router.get("/client/:id", ClientController.getById);
router.put("/client/:id", upload.single("image"), ClientController.update);
router.delete("/client/:id", ClientController.delete);

module.exports = router;
