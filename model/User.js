const mongoose = require("mongoose");

// 4
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// 5
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

// 6
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User;
