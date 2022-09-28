const loginPage = (req, res) => {
  res.render("login");
};

const registrationPage = (req, res) => {
  res.render("register");
};

module.exports = {
  loginPage,
  registrationPage,
};
