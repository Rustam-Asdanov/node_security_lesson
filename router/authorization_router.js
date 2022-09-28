const { Router } = require("express");
const {
  loginPage,
  registrationPage,
  loginUser,
  createUser,
} = require("../controller/authorization_controller");

const router = Router();

router.route("/login").get(loginPage).post(loginUser);
router.route("/register").get(registrationPage).post(createUser);

module.exports = router;
