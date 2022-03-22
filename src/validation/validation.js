const { check } = require("express-validator");
const userControllers = require("../controllers/userControllers");
const router = require("../routes/userRoutes");

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

router.post("/", validateRegister, userControllers.create);
