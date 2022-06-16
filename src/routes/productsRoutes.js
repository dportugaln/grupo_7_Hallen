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

/*get all products*/
router.get("/", productControllers.index);

/*create one product*/
router.get("/create", productControllers.create);
router.post("/create", uploadFile.single("image"), productControllers.store);

/*edit one product*/
router.get("/edit/:id", productControllers.edit);
router.put("/edit/:id", productControllers.update);

// /*get one product*/
router.get("/:id", productControllers.detail);

/* delete one product*/
router.delete("/delete/:id", productControllers.destroy);

module.exports = router;
