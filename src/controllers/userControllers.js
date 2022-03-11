const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports = {
  profile: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/userProfile"));
  },

  create: (req, res) => {
    res.render(path.join(__dirname, "../views/static/profile"));
  },
  store: (req, res) => {
    if (req.file) {
      let newUser = {
        id: users[users.length - 1].id + 1,
        ...req.body,
        image: req.file.filename,
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
      res.redirect("/");
    } else {
      let newUser = {
        id: users[users.length - 1].id + 1,
        ...req.body,
        image: "default-image.png",
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
      res.redirect("/profile");
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
