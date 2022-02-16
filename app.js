const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/dinamic/home.html"));
});

app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/dinamic/categories.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/static/contact.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/static/login.html"));
});

app.get("/aboutus", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/static/aboutus.html"));
});

app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/dinamic/product.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/dinamic/carrito.html"));
});
