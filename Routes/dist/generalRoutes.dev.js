"use strict";

var path = require('path');

var express = require('express');

var router = express.Router(); //conatct page

router.get("/contact", function (req, res) {
  res.render("contact");
});
router.get("/", function (req, res) {
  res.render("index");
});
module.exports = router;