"use strict";

var path = require('path');

var express = require('express');

var router = express.Router(); //conatct page

router.get("/contact", function (req, res) {
  res.render("contact");
}); //conatct page

router.get("/about", function (req, res) {
  res.render("about");
});
router.get("/", function (req, res) {
  res.render("index");
});
router.get("/user/dairy", function (req, res) {
  res.render("user/dairy");
});
router.get("/user/horticulture", function (req, res) {
  res.render("user/horticulture");
});
router.get("/user/poultry", function (req, res) {
  res.render("user/poultry");
});
module.exports = router;