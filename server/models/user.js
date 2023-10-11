const connection = require("../connection");

// exports = {
    exports.loginModel = (employeeCode) => {
        return new Promise((resolve, reject) => {
            // const { employeeCode } = req.body;
            connection.query(`SELECT * FROM login_details WHERE emp_code ='${employeeCode}'`,
             function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    exports.userDataEntry = (req) => {
        return new Promise((resolve, reject) => {
            const { project_name, task_name, description, assign_date, target_date,status,e_id } = req.body;
            connection.query(`INSERT INTO task (assign_date,target_date,proj_name, task_name, description, status,e_id)
            VALUES ('${assign_date}','${target_date}','${project_name}','${task_name}', '${description}', '${status}','${e_id}');`, 
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
            connection.query(`SELECT emp_code, emp_name, emp_dsgn FROM login_details WHERE type = 'user'`,
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

    exports.historyData = (req) => {
        return new Promise((resolve, reject) => {
              const { assign_date, target_date,e_id } = req.body;
            // const { employeeCode } = req.body;
            connection.query(`SELECT * FROM task WHERE e_id = '${e_id}' AND assign_date >= '${assign_date}'
            AND target_date <= '${target_date}';`,
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


    exports.pendingTask = (req) => {
        return new Promise((resolve, reject) => {
              const { assign_date, target_date,e_id } = req.body;
            // const { employeeCode } = req.body;
            connection.query(`SELECT * FROM task WHERE e_id = '${e_id}' AND assign_date >= '${assign_date}'
            AND target_date <= '${target_date}';`,
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


    exports.updateTask = (req) => {
        return new Promise((resolve, reject) => {
              const { status, id } = req.body;
            // const { employeeCode } = req.body;
            connection.query(`UPDATE task SET status = '${status}' WHERE id = ${id};`,
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