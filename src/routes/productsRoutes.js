const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productControllers = require("../controllers/productControllers");

// let bodyParser = require('body-parser')
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

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
router.post("/delete", productControllers.destroy);
router.get("/create", productControllers.create);
router.get("/", productControllers.index);

/*create one product*/

router.post("/create", uploadFile.single("image"), productControllers.store);
/*edit one product*/
router.get("/edit/:id", productControllers.edit);
router.post("/edit/:id", uploadFile.single("image"), productControllers.update);

// /*get one product*/
// router.get("/:id", productControllers.detail); -> ERROR

/* delete one product*/
router.get("/delete", productControllers.delete);
// router.post("/delete", urlencodedParser, productControllers.destroy);

module.exports = router;
