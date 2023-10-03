const express = require("express");
const router = express.Router();

const login = require("../services/login");


router.route("/login").post(login.login);




module.exports = router;