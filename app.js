const express = require("express");
const path = require("path");
const app = express();
const session = require ("express-session");
const webRoutes = require("./src/routes/webRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const userRoutes = require("./src/routes/userRoutes");
const publicPath = path.resolve(__dirname, "./public");
const logMiddelware = require("./src/middlewares/userLogs");
const methodOverride = require("method-override");

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())



app.set("view engine", "ejs");

app.use(express.static(publicPath));

app.set("views", path.join(__dirname, "/views"));

app.use("/", webRoutes);

app.use("/products", productsRoutes);

app.use(methodOverride("_method"));

// Sesiones y autenticación
app.use(session({
  secret: 'sticker wizzard',
  resave: false,
  saveUninitialized: true,
}));
// app.use(cookieParser());
// app.use(auth);

app.use("/user", userRoutes);

app.use(logMiddelware);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
