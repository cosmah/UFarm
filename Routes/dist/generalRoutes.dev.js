"use strict";

var path = require('path');

var express = require('express');

var router = express.Router(); //home
// router.get("/index", (req,res)=>{
//     res.render("index")
//   })
//conatct page

router.get("/contact", function (req, res) {
  res.render("contact");
}); //route html

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'Public/html', 'index.html'));
});
module.exports = router;