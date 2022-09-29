const bcrypt = require("bcrypt");
const salt_round = 12;

const { addUser, findUser } = require("../service/authorization_service");

const loginPage = (req, res) => {
  res.render("login");
};

const loginUser = async (req, res) => {
  await findUser(req.body)
    .then((response) => {
      if (response)
        bcrypt
          .compare(req.body.password, response.password)
          .then((result) => {
            if (result) res.redirect("/main/secrets");
          })
          .catch((err) => {
            console.log(err);
          });
    })
    .catch((err) => {
      console.log(err);
    });
};

const registrationPage = (req, res) => {
  res.render("register");
};

const createUser = async (req, res) => {
  const body = req.body;
  bcrypt
    .hash(body.password, salt_round)
    .then(async (hash) => {
      body.password = hash;
      await addUser(req.body)
        .then((response) => {
          res.redirect("/main/secrets");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  loginPage,
  loginUser,
  registrationPage,
  createUser,
};
