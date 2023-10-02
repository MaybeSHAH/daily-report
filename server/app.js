// require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connection = require('./connection');
// const indexRouter = require("./routers/indexRouter");

const app = express();
const PORT = 3000;

app.use(cors({
    origin: '*'
  }));
  

app.use(express.json());

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
