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
const listModel = new mongoose.model('mywishes', listSchema);

//Find all wishes in database
app.get('/api/wishes', async (req, res) => {
    const wishes = await listModel.find({});

    res.status(200).json({wishes})
});

//Push wish data to database
app.post('/api/wishes', async (req, res)=>{

    const { title, dateAdd, desc, picture } = req.body;
   
    const newWish = new listModel({ title, dateAdd, desc, picture });
    await newWish.save(); //wait until last process is finished
   
    res.status(201).json({ message: 'Wish created successfully', wish: newWish });
})

//Search for a particular wish ID
app.get('/api/wishes/:id', async(req, res) =>
{
    const wish = await listModel.findById(req.params.id); // Searches for id given by user
    res.json(wish);
})

//Find wish from id and update it, creating a new, updated wish is displayed
app.put('/api/wishes/:id', async (req, res) => {
    let wish = await listModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

    //Send edited wish
    res.send(wish);
})

//Handles the movie deletion, server side
app.delete('/api/wishes/:id', async (req, res) =>
{
    console.log('Deleting wish, ID: ', req.params.id);
    const wish = await listModel.findByIdAndDelete(req.params.id); //wait until the id of wish is found
    res.status(200).send({ message: "Wish successfully deleted", wish}); //tell user if deletion was successful
});

//Only run on specified port when running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
