const express = require("express");
const router = express.Router();

const webControllers = require("../controllers/webControllers.js");

const multer = require("multer");

router.get("/", webControllers.home);
router.get("/aboutus", webControllers.aboutus);
router.get("/carrito", webControllers.carrito);
router.get("/categories", webControllers.categories);

router.get("/contact", webControllers.contact);
router.get("/login", webControllers.login);

module.exports = router;
