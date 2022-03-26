// provided code ---

// const mongoose = require('mongoose')

// const Message = new mongoose.Schema({
// })

// module.exports = Message
// ----------------------------------------------------

//Import Mongoose
const mongoose = require('mongoose');

//Create new Schema, this outlines expected data structure to create a model
const LogSchema = new mongoose.Schema({
    //Time user sent the message
    timeSent: String,
    //User's username
    creatorName: String,
    //Current room user is in
    room: String,
    //The user's posted message
    textBody: String,
});

//Exporting the schema to be used in server.js
module.exports = LogSchema