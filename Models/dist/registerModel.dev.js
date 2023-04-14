"use strict";

//to be used to modal our data
var mongoose = require("mongoose"); //give our schema a name


var registerSchema = new mongoose.Schema({
  //tell schema what kind of data to expect
  name: {
    type: String,
    trim: true //trim removes blankspace after entering input, INCASE OF PASSWORD VALIDATTION i.e TO VALIDATE A SPACE CHARACTER, DONT USE TRIM

  },
  ward: {
    type: String,
    trim: true
  },
  uniquenumber: {
    type: String,
    trim: true
  },
  registrationdate: {
    type: Date,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  dob: {
    type: Date,
    trim: true
  },
  activities: {
    type: String,
    trim: true
  },
  nin: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  directions: {
    type: String,
    trim: true
  },
  residenceperiod: {
    type: Number,
    trim: true
  },
  residence: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    trim: true
  }
});
module.exports = mongoose.model("Register", registerSchema);