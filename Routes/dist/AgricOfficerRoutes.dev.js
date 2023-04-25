"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var FarmerOne = require('../Models/AgricOfficerModel'); //import model
//dashboard


router.get('/aofficer/aoDash', function (req, res) {
  res.render('aofficer/aoDash');
}); // GET request to render the registration form

router.get('/aofficer/FoSignUp', function (req, res) {
  res.render('aofficer/FoSignUp');
});
router.get('/aofficer/FoReg', function (req, res) {
  res.render('aofficer/FoReg');
});
router.get('/aofficer/farmerOnes', function (req, res) {
  res.render('aofficer/farmerOnes');
}); // POST request to handle the form submission and save data to the database

router.post('/aofficer/FoReg', function _callee(req, res) {
  var register;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          register = new FarmerOne(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(register.save());

        case 4:
          res.render('aofficer/FoReg');
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
}); //fetch the data

router.get("/aofficer/farmerOnes", function _callee2(req, res) {
  var items;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(FarmerOne.find());

        case 3:
          items = _context2.sent;
          console.log(items);
          res.render("aofficer/farmerOnes", {
            farmerones: items
          });
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.send('Failed');

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;