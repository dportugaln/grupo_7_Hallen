const fs = require("fs");
const path = require("path");

// const usersFilePath = path.join(__dirname, "../../data/users.json");
// const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const {
  Product,
  Category,
  User,
  Color,
  Order,
  Rol,
  Size,
} = require("../../database/associations");

/* const { validationResult } = require("express-validator");
const validationHelper = require ("../validation/validationHelper") */

module.exports = {
  //   profile: (req, res) => {
  //     res.render(path.join(__dirname, "../views/dinamic/profile"));
  //   },

  //   create: (req, res) => {
  //     res.render(path.join(__dirname, "../views/static/login"));
  //   },
  //   store: (req, res) => {
  //     let newUser = {};
  //     console.log(req.body);
  //     console.log("aca estoy");
  //     // res.send(req);

  // /*     let errors = validationResult(req);
  //     let betterErrors = validationHelper(errors.mapped())
  //     betterErrors.create('image', 'No me gusta el archivo que subiste', req.body.image);
  //     betterErrors.create('email', 'No me gusta el email que elegiste', req.body.email); */
  //     if (errors.isEmpty()) {
  //       // Es necesario este if? Porque cuando creamos usuarios no les damos la opción
  //       // de poner imágenes.
  //       if (req.file) {
  //         let newUser = {
  //           id: users[users.length - 1].id + 1,

  //           image: req.file.filename,
  //         };
  //         users.push(newUser);
  //         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
  //         res.redirect("/user/profile");
  //       } else {
  //         let newUser = {
  //           id: users[users.length - 1].id + 1,

  //           image: "default-image.png",
  //         };
  //         users.push(newUser);
  //         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
  //         console.log(req.body);
  //         console.log(newUser);
  //         res.redirect("/user/profile");
  //       }
  //     } else {
  //       res.render("../views/static/login", {
  //         // errors: errors.array(),
  //         errors: betterErrors,
  //         old: req.body,
  //       });
  //     }
  //   },
  //   edit: (req, res) => {
  //     let id = req.params.id;
  //     let userToEdit = users.find((user) => user.id == id);
  //     res.render(path.join(__dirname, "../views/static/userEdit"), {
  //       userToEdit,
  //     });
  //   },
  //   update: (req, res) => {
  //     let id = req.params.id;
  //     let userToEdit = users.find((user) => user.id == id);

  //     userToEdit = {
  //       id: userToEdit.id,
  //       ...req.body,
  //       image: userToEdit.image,
  //     };

  //     let newUsers = users.map((user) => {
  //       if (user.id == userToEdit.id) {
  //         return (user = { ...userToEdit });
  //       }
  //       return user;
  //     });

  //     fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, " "));
  //     res.redirect("/");
  //   },
  //   destroy: (req, res) => {
  //     let id = req.params.id;
  //     let finalUsers = users.filter((user) => user.id != id);
  //     fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
  //     res.redirect("/");
  //   },
  profile: (req, res) => {
    res.render("../views/dinamic/profile");
  },
  create: (req, res) => {
    return res.render(path.join(__dirname, "../views/static/login"));
    // res.render("../views/static/login");
  },
  store: (req, res) => {
    const _body = req.body;
    console.log('_body ->', _body);
    // user = {
    //   idUser: 1,
    //   nameUser: req.body.first_name,
    //   email: req.body.email,
    //   password: req.body.password,
    //   dni: req.body.id_num,
    //   birthdate: req.body.birth_date,
    //   sex: req.body.sex,
    //   rol_idrol: 1,
    // };

    // db.UserModel
    //   .create(user)
    //   .then((storedUser) => {
    //     return res.redirect('/');
    //   })
    //   .catch(error => console.log(error));

    // User.create({
    //   idUser: 1,
    //   nameUser: req.body.first_name,
    //   email: req.body.email,
    //   password: req.body.password,
    //   dni: req.body.id_num,
    //   birthdate: req.body.birth_date,
    //   sex: req.body.sex,
    //   rol_idrol: 1,
    // });



  },
  edit: (req, res) => {
    db.UserModel.findByPk(req.params.id)
      .then(response => {
        res.render('../views/static/userEdit')
      });
  },
  update: (req, res) => {
    user = {
      idUser: 1,
      nameUser: req.body.first_name,
      email: req.body.email,
      password: req.body.password,
      dni: req.body.id_num,
      birthdate: req.body.birth_date,
      sex: req.body.sex,
      rol_idrol: 1,
    };

    db.UserModel
      .update(user)
      .then((storedUser) => {
        return res.redirect('/');
      })
      .catch(error => console.log(error));
  },
  destroy: (req, res) => {
    //Eliminamos usuarios? Nunca borré ninguna cuenta jaja.
  },
  validate: (req, res) => {

    User
      .findOne({
        where: { email: req.body.email }
      })
      .then(user => {
        // Si el email existe
        console.log(user);
        if (user) {
          // Y la contraseña es válida
          if (req.body.password == user.password) {
            // Eliminamos la contraseña antes de guardar en sesión
            userData = user.dataValues;
            delete userData.password

            req.session.user = userData;

            // Si pidió que recordar
            if (req.body.remember) {
              // Generamos un token seguro, eso para que no pueda entrar cualquiera
              // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
              const token = crypto.randomBytes(64).toString('base64');

              // Lo guardamos en nuestra base, para poder chequearlo luego
              user.createToken({ userId: user.id, token });

              // Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
              res.cookie('rememberToken', token, { maxAge: 1000 * 60 * 60 * 24 * 90 });
            }

            return res.redirect('/users/profile');
          } else {
            return res.render('users/login', {
              errors: {
                password: {
                  msg: 'La contraseña no coincide con la base.'
                },
              },
              old: req.body
            });
          }
        } else {
          return res.render('users/login', {
            errors: {
              email: {
                msg: 'El email no se encuentra registrado en nuestra base de datos'
              },
            },
            old: req.body
          });
        }
      });
  }
};
