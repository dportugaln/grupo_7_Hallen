const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productControllers = require("../controllers/productControllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/products"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ storage });

router.get("/", productControllers.product);
router.get("/create", productControllers.create);
router.post("/", uploadFile.single("image"), productControllers.store);

module.exports = router;
