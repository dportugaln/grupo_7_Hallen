const { check } = require("express-validator");
// const bcrypt = require("bcryptjs");

module.exports = {
  userLogin: [
    check("email")
      .notEmpty()
      .withMessage("Debes completar el email")
      .bail()
      .isEmail()
      .withMessage("El email no es válido")
      .bail(),
    check("password", "La contraseña debe ser de al menos 8 caracteres")
      .notEmpty()
      .withMessage("Debes completar el password"),
  ],
  userCreate: [
    check("email")
      .notEmpty()
      .withMessage("Debes completar el email")
      .bail()
      .isEmail()
      .withMessage("El email no es válido"),
    check("password", "La contraseña debe ser de al menos 8 caracteres")
      .notEmpty()
      .withMessage("Debes completar el password")
      .bail()
      .isLength({ min: 8 }),
    check("image").custom((value, { req }) => {
      if (req.file.error === "type") {
        throw new Error("La imagen debe ser de tipo PNG");
      }
      return true;
    }),
  ],
};
