const express = require("express");
const router = express.Router();
const path = require("path");
const webControllers = require("../controllers/webControllers.js");

router.get("/", webControllers.home);
router.get("/aboutus", webControllers.aboutus);
router.get("/carrito", webControllers.carrito);
router.get("/categories", webControllers.categories);
router.get("/product", webControllers.product);
router.get("/contact", webControllers.contact);
router.get("/login", webControllers.login);
router.get("/productcreate", webControllers.stock);
router.get("/productedit", webControllers.edit);

module.exports = router;
