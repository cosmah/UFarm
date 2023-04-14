"use strict";

var express = require('express');

var router = express.Router(); //home

router.get("/", function (req, res) {
  res.render("index");
}); //conatct page

router.get("/contact", function (req, res) {
  res.render("contact");
});
module.exports = router;