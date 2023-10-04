const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController")
// const login = require("../models/login")
// const login = require("../services/login");


router.route("/login").post(loginController);








module.exports = router;