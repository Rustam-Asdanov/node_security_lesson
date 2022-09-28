const { Router } = require("express");
const {
  loginPage,
  registrationPage,
} = require("../controller/authorization_controller");

const router = Router();

router.route("/login").get(loginPage);
router.route("/register").get(registrationPage);

module.exports = router;
