const express = require("express");
const path = require("path");
const app = express();
const webRoutes = require("./src/routes/webRoutes");
const publicPath = path.resolve(__dirname, "./public");

app.set("view engine", "ejs");

app.use(express.static(publicPath));

app.set("views", path.join(__dirname, "/views"));

app.use("/", webRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
