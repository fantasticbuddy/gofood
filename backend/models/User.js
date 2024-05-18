const mongoose = require('mongoose')

const { Schema } = mongoose;

// We are making schema for user - these are all the things we are going to take from user
const UserSchema = new Schema({
    name:{
        type : String,
        required : true  // mandatory to provide
    },
    location:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    date:{
        type : Date,
        default  : Date.now
    },
  });

  // exporting the schema - A schema named 'user' will be created
  module.exports = mongoose.model('user',UserSchema)