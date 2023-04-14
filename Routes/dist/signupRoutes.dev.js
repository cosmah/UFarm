"use strict";

var express = require('express');

var router = express.Router();

var User = require('../Models/userModel'); //import mod3l
//register farmer one


router.get("/signup", function (req, res) {
  res.render("signup");
});
module.exports = router;