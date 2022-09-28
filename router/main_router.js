const { Router } = require("express");

const { mainPage, secretPage } = require("../controller/main_controller");

const router = Router();

router.route("/").get(mainPage);
router.route("/secrets").get(secretPage);

module.exports = router;
