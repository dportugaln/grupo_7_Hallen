const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const userControllers = require("../controllers/userControllers");
// const loginValidator = require ("../middlewares/loginValidator")
// const guestValidator = require ("../middlewares/guestValidator")
// const validate = require("../validation/userValidation");
// const { check } = require("express-validator");

// let validateRegister = [
//   check("first_name")
//     .notEmpty()
//     .withMessage("Este campo es obligatorio")
//     .bail()
//     .isLength({ min: 5 })
//     .withMessage("Debes ingresar al menos 5 caracteres"),
//     check("last_name")
//     .notEmpty()
//     .withMessage("Este campo es obligatorio")
//     .bail()
//     .isLength({ min: 5 })
//     .withMessage("Debes ingresar al menos 5 caracteres"),
//   check("email")
//     .notEmpty()
//     .withMessage("Este campo es obligatorio")
//     .bail()
//     .isEmail()
//     .withMessage("Debes ingresar un email valido"),
//   check("password")
//     .notEmpty()
//     .withMessage("Este campo es obligatorio")
//     .bail()
//     .isLength({ min: 8 })
//     .withMessage("Debes ingresar al menos 8 caracteres"),
/* check("id_num")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .isLength({ min: 7 })
    .withMessage("Debes ingresar al menos 8 caracteres"),
  check("birth_date")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .isDate()
    .withMessage("Debes ingresar una fecha de nacimiento válida"), */
// ];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/profilePicture"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

// const uploadFile = multer({
//   storage,
//   limits: { fileSize: 1024 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype !== "image/png") {
//       file.error = "type";
//       req.file = file;

//       return cb(null, false, new Error("Está mal el mimeType"));
//     }
//     return cb(null, true);
//   },
// });

/*login*/

router.post("/login", userControllers.validate);


/*register*/
router.get("/create", userControllers.create);
router.post("/create", userControllers.store);

/*edit user*/
router.get("/profile", userControllers.profile);
router.get("/profile/:id", userControllers.edit);
router.post("/profile", userControllers.update);

// /*get one product*/
// router.get("/:id", userControllers.detail);

/* delete one product*/
router.delete("/delete/:id", userControllers.destroy);

module.exports = router;
