const user = require("../models/user");
const _ = require("underscore");
const httpStatus = require("http-status");

exports.login = async (req, res) => {
    let finalRes
  try {
    const { employeeCode, password } = req.body;
    const queryResult = await user.loginModel(employeeCode);
    // console.log("queryResult::", queryResult);
    queryResult.map((e,i)=>{
        finalRes = e.password === password ? res.status(200).json({ status:200,type:e.type} ) : res.status(401).json({ message: 'Invalid credentials' })
    })
    return res.finalRes;
    // return res.json(finalRes);
  } catch (error) {
    console.error("Error in login:", error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};



exports.userData = async (req, res) => {
  try {
    const result = await user.userDataEntry(req);
    // console.log("query result:", result);

    if (result && result.affectedRows === 1) {
      return res.status(200).json({ status: 200 });
    } else {
      return res.status(400).json({ message: 'Bad Request' });
    }
  } catch (error) {
    console.error("Error in userData:", error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};


exports.getUsersData = async (req, res) => {
  let finalRes
try {
  // const { employee_name, type,designation } = req.body;
  const queryResult = await user.getUsers();
  // console.log("queryResult::", queryResult);

  // console.log("query result:===",queryResult);
  return res.json(queryResult);
} catch (error) {
  console.error("Error in login:", error);
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
};

// module.exports = getUser, userData;
