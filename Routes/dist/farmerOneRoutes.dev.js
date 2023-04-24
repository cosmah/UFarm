"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var Farmers = require('../Models/ufarmerModel'); //import mod3l
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
          register = new Farmers(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(register.save());

        case 4:
          res.redirect('/farmerOne/urbanFarmers'); //redirect to a path, render a file

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
router.get('/farmerOne/urbanFarmers', function _callee2(req, res) {
  var items;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Farmers.find());

        case 3:
          items = _context2.sent;
          console.log(items);
          res.render('farmerOne/urbanFarmers', {
            urbanFarmers: items
          });
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(err);
          res.send('Operation failed'); //res.status(400).render("/")

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/farmerOne/ufSignUp', function (req, res) {
  res.render('farmerOne/ufSignUp');
});
router.get('/farmerOne/foDash', function (req, res) {
  res.render('farmerOne/foDash');
});
module.exports = router;