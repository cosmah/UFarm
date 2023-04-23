"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var Register = require('../Models/registerModel'); //import mod3l
//dashboard


router.get('/farmerOne/foDash', function (req, res) {
  res.render('farmerOne/foDash');
}); //famers register

router.get('/farmerOne/famersRegister', function (req, res) {
  res.render('farmerOne/famersRegister');
}); //the action name in the form is the one we use in the post route

router.post('/registerfarmerones', function _callee(req, res) {
  var register;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          register = new Register(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(register.save());

        case 4:
          res.redirect('/farmerOne/foDash'); //redirect to a path, render a file

          console.log(req.body);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); //res.status(400).render("/")

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/farmerOne/farmerslist', function (req, res) {
  res.render('farmerOne/farmerslist');
}); //read data 

router.get("/farmerOne/farmerslist", function _callee2(req, res) {
  var items;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Farmer.find());

        case 3:
          items = _context2.sent;
          //go to our collection 'Register', find every record and store them in a variable items.       
          console.log(items);
          res.render("farmerOne/farmerslist", {
            farmers: items
          });
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.send('Failed to retrieve student details');

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // //delete functionality
// router.post('/students/delete', async(req,res)=>{
//   try{
//       await Register.deleteOne({_id:req.body.id});
//       res.redirect('back') //this line keeps us on our operating page
//   }
//   catch(err){
//       console.log(err)
//   }
// });
// //update route
// router.get("/studentEdit/:id", async(req,res)=>{
//   try{
//       const item = await Register.findOne({_id:req.params.id}); //filtering
//       res.render("studentEdit", {student:item})
//   }
//   catch(err){
//       res.send("Could not find student");
//       console.log(err)
//   }
// })
// router.post("/studentEdit", async(req,res)=>{
//   try{
//       await Register.findOneAndUpdate({_id:req.query.id},req.body)
//       res.redirect("/students")
//   }
//   catch(err){
//       res.send("Failed to update student")
//       console.log(err)
//   }
// })

router.get('/farmerOne/foDash', function (req, res) {
  res.render('farmerOne/foDash');
});
router.get('/farmerOne/foDash', function (req, res) {
  res.render('farmerOne/foDash');
});
module.exports = router;