"use strict";

var mongoose = require('mongoose');

var passportLocalMongoose = require('passport-local-mongoose'); //design schema


var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  // uniqueid:{
  //     type:String,
  //     trim:true,
  //     required:true 
  // },
  dob: {
    type: Date,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    // required:true,
    unique: true
  },
  phonenumber: {
    type: String,
    trim: true,
    required: true
  },
  nin: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true,
    required: true
  },
  ward: {
    type: String,
    trim: true
  },
  //for development purpose uncomment
  password: {
    type: String,
    required: true
  }
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);