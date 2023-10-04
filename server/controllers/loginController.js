const login = require("../models/login");
const _ = require("underscore");
const httpStatus = require("http-status");

const getUser = async (req, res) => {
    let finalRes
  try {
    const { employeeCode, password } = req.body;
    const queryResult = await login.loginModel(employeeCode);
    // console.log("queryResult::", queryResult);
    queryResult.map((e,i)=>{
        finalRes = e.password === password ? res.status(200).json({ status:200,type:e.type} ) : res.status(401).json({ message: 'Invalid credentials' })
    })
    return res.status(200).finalRes;
    // return res.json(finalRes);
  } catch (error) {
    console.error("Error in getUser:", error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

module.exports = getUser;
