const mainPage = (req, res) => {
  res.render("home");
};

const secretPage = (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  mainPage,
  secretPage,
};
