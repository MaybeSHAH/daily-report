const mysql = require("mysql");

const connection = mysql.createConnection({
  // host: "192.168.0.83",
  host: "localhost",
  user: "root",
  passowrd: "",
  database: "papl",
});

connection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else console.log(err);
});

module.exports = connection;