// require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connection = require('./connection');
const login = require("./models/login")
const indexRouter = require("./router/indexRouter");
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(cors({
    origin: '*'
  }));
  

app.use(bodyParser.json());

app.use(express.json());
app.use("/api", indexRouter);

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
