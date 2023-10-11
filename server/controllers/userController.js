const user = require("../models/user");
const _ = require("underscore");
const httpStatus = require("http-status");

exports.login = async (req, res) => {
    // let finalRes
  try {
    const { employeeCode, password } = req.body;
    const queryResult = await user.loginModel(employeeCode);
    // console.log("queryResult::", queryResult);
    return res.json(queryResult);
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
    // let finalRes
  try {
    const queryResult = await user.getUsers();
    // console.log("queryResult::", queryResult);
    return res.json(queryResult);
  } catch (error) {
    // console.error("Error in login:", error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};


exports.historyData = async (req, res) => {
  console.log("inside history")
  // let finalRes
try {
  // const { assign_date, target_date,e_id } = req.body;
  const queryResult = await user.historyData(req);
  console.log("queryResult::", queryResult);
  return res.json(queryResult);
} catch (error) {
  console.error("historyData:", error);
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
};

exports.pendingData = async (req, res) => {
  console.log("pendingData")
  // let finalRes
try {
  // const { assign_date, target_date,e_id } = req.body;
  const queryResult = await user.pendingTask(req);
  console.log("queryResult::", queryResult);

  return res.json(queryResult);
} catch (error) {
  console.error("pendingData:", error);
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
};

exports.updateData = async (req, res) => {
  try {
    // console.log("inside update")
    const result = await user.updateTask(req);
    // console.log("query result:", result);

    if (result && result.affectedRows === 1) {
      return res.status(200).json({ status: 200 });
    } else {
      return res.status(400).json({ message: 'Bad Request' });
    }
  } catch (error) {
    console.error("updateData:", error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

