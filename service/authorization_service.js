const User = require("../model/User");

const addUser = (user) => {
  console.log("my user " + user.password);
  const newUser = new User({
    email: user.username,
    password: user.password,
  });

  return newUser.save();
};

const findUser = (user) => {
  return User.findOne({ email: user.username });
};

module.exports = {
  addUser,
  findUser,
};
