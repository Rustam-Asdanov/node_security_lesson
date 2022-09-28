const mainPage = (req, res) => {
  res.render("home");
};

const secretPage = (req, res) => {
  res.render("secrets");
};

module.exports = {
  mainPage,
  secretPage,
};
