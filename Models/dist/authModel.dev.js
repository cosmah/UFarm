"use strict";

//to be used to modal our data
var mongoose = require("mongoose"); //give our schema a name


var authSchema = new mongoose.Schema({
  //tell schema what kind of data to expect
  username: {
    type: String,
    trim: true //trim removes blankspace after entering input, INCASE OF PASSWORD VALIDATTION i.e TO VALIDATE A SPACE CHARACTER, DONT USE TRIM

  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  confirmpassword: {
    type: String,
    trim: true
  },
  unique: {
    type: String,
    trim: true
  }
});
module.exports = mongoose.model("Auth", authSchema);