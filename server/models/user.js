const connection = require("../connection");

// exports = {
    exports.loginModel = (employeeCode) => {
        return new Promise((resolve, reject) => {
            // const { employeeCode } = req.body;
            connection.query(`SELECT * FROM new_users WHERE employeeCode ='${employeeCode}'`, function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
// }
    exports.userDataEntry = (req) => {
        return new Promise((resolve, reject) => {
            const { project_name, task, description, assign_date, targetcompletiondate,status } = req.body;
            connection.query(`INSERT INTO user_entry (project_name, task, description, assign_date, targetcompletiondate, status)
            VALUES ('${project_name}', '${task}', '${description}','${assign_date}' ,'${targetcompletiondate}' , '${status}');`, 
            function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    // console.log("result==>>>",resolve(result))
                    resolve(result);
                }
            });
        });
    
    }

    exports.getUsers = () => {
        return new Promise((resolve, reject) => {
              // const { employee_name, type,designation } = req.body;
            // const { employeeCode } = req.body;
            connection.query(`SELECT employeeCode, employeename, designation FROM new_users WHERE type = 'user'`,
             function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    // console.log("result==>>>",result)
                    resolve(result);
                }
            });
        });
    }