const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const userControllers = require("../controllers/userControllers");
const { check } = require("express-validator");

let validateRegister = [
  check("name")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Debes ingresar al menos 5 caracteres"),
  check("mail")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email valido"),
  check("password")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Debes ingresar al menos 8 caracteres"),
];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/profilePicture"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ storage });

/*get all products*/
router.get("/", userControllers.profile);

/*create one product*/
router.get("/create", userControllers.create);
router.post("/profile", userControllers.store);

/*edit one product*/
router.get("/edit/:id", userControllers.edit);
router.post("/", uploadFile.single("image"), userControllers.update);

// /*get one product*/
// router.get("/:id", userControllers.detail);

/* delete one product*/
router.delete("/delete/:id", userControllers.destroy);

module.exports = router;
