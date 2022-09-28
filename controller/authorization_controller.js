const { addUser, findUser } = require("../service/authorization_service");

const loginPage = (req, res) => {
  res.render("login");
};

const loginUser = async (req, res) => {
  await findUser(req.body)
    .then((response) => {
      if (response.password === req.body.password) {
        res.redirect("/main/secrets");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const registrationPage = (req, res) => {
  res.render("register");
};

const createUser = async (req, res) => {
  await addUser(req.body)
    .then((response) => {
      console.log(response);
      res.redirect("/main/secrets");
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
