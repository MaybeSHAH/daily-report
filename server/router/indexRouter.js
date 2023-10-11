const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const{login, userData,getUsersData,historyData,pendingData,updateData} = userController
// const login = require("../models/login")


router.route("/login").post(login);
router.route("/userEntry").post(userData)
router.route("/userType").get(getUsersData)
router.route("/historyData").get(historyData)
router.route("/pendingData").get(pendingData)
router.route("/updateData").put(updateData)








module.exports = router;