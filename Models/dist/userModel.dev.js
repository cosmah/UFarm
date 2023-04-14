"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = require('mongoose');

var passportLocalMongoose = require('passport-local-mongoose'); //design schema


var userSchema = new mongoose.Schema((_ref = {
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
  uniqueid: {
    type: String,
    trim: true,
    required: true,
    unique: true
  }
}, _defineProperty(_ref, "uniqueid", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "dob", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "gender", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "email", {
  type: String,
  trim: true,
  required: true,
  unique: true
}), _defineProperty(_ref, "phonenumber", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "nin", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "role", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "address", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "ward", {
  type: String,
  trim: true,
  required: true
}), _defineProperty(_ref, "password", {
  type: String,
  required: true
}), _ref));
userSchema.plugin(passportLocalMongoose, {
  usernameField: "uniqueid"
});
module.exports = mongoose.model('User', userSchema);