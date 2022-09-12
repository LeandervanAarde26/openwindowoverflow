const express = require("express");
require ('dotenv/config');
const mongoose = require('mongoose');
//add routes
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;
const uri = proces.env.DB_CONNECTION;
//Next line is irrelevant, its just a test for something
// const db = mongoose.connection.useDb('dbname')

//app.use

app.use(cors({origin:'http://localhost:3000'}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect(uri,(err) =>{
    err? console.log('not connected to DB'): (console.log("Connected to DB"));
    // console.log(mongoose.connection.db) 
});

app.listen(PORT, () =>{console.log(`Server is now running on ${PORT}`)}); 