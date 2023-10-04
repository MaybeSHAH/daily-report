// const connection = require('../connection');

const connection = require("../connection");




// const loginModel = (req, res) => {
//     const { employeeCode } = req.body;
//     const query = `SELECT * FROM users WHERE employeeCode ='${employeeCode}'`;
  
//     connection.query(query, (err, results) => {
//       if (err) {
//         console.error("Database error:", err);
//         return res.status(500).json({ error: "Internal server error" });
//       } else {
//         console.log("results::", results);
//         // res.status(200).json(results);
//         res.render[results]
//         // return results

//       }
//     });
//   };
  


//   module.exports = loginModel;

module.exports = {
    loginModel(employeeCode) {
        return new Promise((resolve, reject) => {
            // const { employeeCode } = req.body;
            connection.query(`SELECT * FROM users WHERE employeeCode ='${employeeCode}'`, function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}