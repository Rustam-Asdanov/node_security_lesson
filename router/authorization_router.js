const { Router } = require("express");
const {
  loginPage,
  registrationPage,
  loginUser,
  createUser,
  logout,
} = require("../controller/authorization_controller");

const router = Router();

router.route("/login").get(loginPage).post(loginUser);
router.route("/register").get(registrationPage).post(createUser);

router.route("/logout").get(logout);

module.exports = router;
