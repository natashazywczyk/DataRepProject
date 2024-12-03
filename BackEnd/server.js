//Create Express Application
const express = require('express');
const app = express();
const port = 4000; //make localhost port 4000

//Added CORS Middleware to server
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Body-parser Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Server Connection String
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.n2bkl.mongodb.net/Bucketlist');

//What data to be stored
const listSchema = new mongoose.Schema({
    title: String,
    dateAdd: String,
    desc: String,
    picture: String
});

//Object to represent Database
//Generate model based schema
const listModel = new mongoose.model('myWishes', listSchema);
