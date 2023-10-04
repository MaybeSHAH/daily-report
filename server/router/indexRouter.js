const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const{login, userData,getUsersData} = userController
// const login = require("../models/login")


router.route("/login").post(login);
router.route("/userEntry").post(userData)
router.route("/userType").get(getUsersData)








module.exports = router;