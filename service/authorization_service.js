const User = require("../model/User");

//
const addUser = (user) => {
  return User.register({ username: user.username }, user.password);
};

const findUser = (user) => {
  return User.findOne({ email: user.username });
};

module.exports = {
  addUser,
  findUser,
};
