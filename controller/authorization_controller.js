const session = require("express-session");
const passport = require("passport");
const User = require("../model/User");

const { addUser, findUser } = require("../service/authorization_service");

const loginPage = (req, res) => {
  res.render("login");
};

const loginUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/main/secrets");
      });
    }
  });
};

const registrationPage = (req, res) => {
  res.render("register");
};

//
const createUser = async (req, res) => {
  await addUser(req.body)
    .then((response) => {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/main/secrets");
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/register");
    });
};

const logout = (req, res) => {
  req.logout();
  res.redirect("/main");
};

module.exports = {
  loginPage,
  loginUser,
  registrationPage,
  createUser,
  logout,
};
