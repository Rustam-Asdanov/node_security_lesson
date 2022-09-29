const session = require("express-session");
const passport = require("passport");

const { addUser, findUser } = require("../service/authorization_service");

const loginPage = (req, res) => {
  res.render("login");
};

const loginUser = async (req, res) => {};

const registrationPage = (req, res) => {
  res.render("register");
};

const createUser = async (req, res) => {};

module.exports = {
  loginPage,
  loginUser,
  registrationPage,
  createUser,
};
