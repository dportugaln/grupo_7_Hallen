const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const { validationResult, body } = require("express-validator");

module.exports = {
  profile: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/profile"));
  },

  create: (req, res) => {
    res.render(path.join(__dirname, "../views/static/login"));
  },
  store: (req, res) => {
    let newUser = {};
    console.log(req.body);
    console.log("aca estoy");
    // res.send(req);
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      // Es necesario este if? Porque cuando creamos usuarios no les damos la opción
      // de poner imágenes.
      if (req.file) {
        let newUser = {
          id: users[users.length - 1].id + 1,

          image: req.file.filename,
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/user/profile");
      } else {
        let newUser = {
          id: users[users.length - 1].id + 1,

          image: "default-image.png",
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        console.log(req.body);
        console.log(newUser);
        res.redirect("/user/profile");
      }
    } else {
      res.render("../views/static/login", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },
  edit: (req, res) => {
    let id = req.params.id;
    let userToEdit = users.find((user) => user.id == id);
    res.render(path.join(__dirname, "../views/static/userEdit"), {
      userToEdit,
    });
  },
  update: (req, res) => {
    let id = req.params.id;
    let userToEdit = users.find((user) => user.id == id);

    userToEdit = {
      id: userToEdit.id,
      ...req.body,
      image: userToEdit.image,
    };

    let newUsers = users.map((user) => {
      if (user.id == userToEdit.id) {
        return (user = { ...userToEdit });
      }
      return user;
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, " "));
    res.redirect("/");
  },
  destroy: (req, res) => {
    let id = req.params.id;
    let finalUsers = users.filter((user) => user.id != id);
    fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
    res.redirect("/");
  },
};
