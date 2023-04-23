"use strict";

var express = require('express');

var router = express.Router();
router.get('/farmerOne/foDash', function (req, res) {
  res.render('farmerOne/foDash');
});
module.exports = router;