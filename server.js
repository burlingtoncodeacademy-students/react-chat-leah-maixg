// provided code ----
// const express = require("express");

// const port = process.env.PORT || 8000;
// const app = express();

// const Message = require('./Message.js')



// app.listen(port, () => {
//   console.log('listening on port: ' + port) 
// })
// -------------------------------------------------------------------------------

// --- IMPORTS ---
// import Mongoose
const mongoose = require('mongoose');
//importing express
const express = require("express");
//importing cors
const cors = require("cors");
// importing the message schema
const LogSchema = require("./Message");

//

// --- MONGODB CONNECT & INIT ---
// connect to MongoDB (localhost FOR NOW) and server (/chatroom)
mongoose.connect("mongodb://localhost:27017/chatroom")

// initialize Database through the connection constructor
const db = mongoose.connection;

//

// defines the port
const port = process.env.PORT || 8000;

//binding express to a variable
const app = express();

//

// --- ERROR BINDING ---
// show any error if it comes up
db.on("error", console.error.bind(console, "connection error"));

//

// --- MIDDLEWARE ---
// allows us to use JSON
app.use(express.json());
// turns 'request' body into object, extended true indicates using qs library vs query library (< deprecated)
app.use(express.urlencoded({extended: true}));
//adding cors
app.use(cors());

// creating the model to utilize the Log schema and the "Message" model
const Message = mongoose.model("Message", LogSchema)

//
// grabbed this code from hello-express lab (weekSix)
app.get('/data', async (req, res) => {
  let allData = await Message.find({})
  // console.log(req.body)
  res.json(allData)
});

//CREATE functionality for inserting a new entry into our collection
app.post("/create", async (req, res) => {
  //assigning the creation of a new entry to a variable
  const newMessage = new Message ({
    timeSent: req.body.timeSent,
    creatorName: req.body.creatorName,
    room: req.body.room,
    textBody: req.body.textBody
  })
  //saving the new entry to the Model
  await newMessage.save();
  //redirecting to the home page
  res.redirect("/");
});

app.listen(port, () => {
  console.log('listening on port: ' + port) 
});