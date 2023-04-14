"use strict";

var express = require('express');

var router = express.Router();
router.get("/about", function (req, res) {
  res.render("about", {
    title: "Hello",
    message: "How are you doing"
  });
});
module.exports = router;