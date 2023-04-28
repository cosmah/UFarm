"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var Farmers = require('../Models/ufarmerModel'); //import mod3l
//dashboard


router.get('/farmerOne/foDash', isAuthenticated, function (req, res) {
  res.render('farmerOne/foDash');
}); //famers register

router.get('/farmerOne/famersRegister', isAuthenticated, function (req, res) {
  res.render('farmerOne/famersRegister');
}); // Logout route

router.get('/farmerOne/logout', isAuthenticated, function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect('../');
  });
}); //the action name in the form is the one we use in the post route

router.post('/registerfarmerones', isAuthenticated, function _callee(req, res) {
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
router.get('/farmerOne/urbanFarmers', isAuthenticated, function _callee2(req, res) {
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
}); //DELETE ROUTE

router.post("/farmerOne/urbanFarmers/delete", function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Farmers.deleteOne({
            _id: req.body.id
          }));

        case 3:
          res.redirect('back');
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //update data

router.get("/farmerOne/ufUpdate/:id", function _callee4(req, res) {
  var item;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Farmers.findOne({
            _id: req.params.id
          }));

        case 3:
          item = _context4.sent;
          res.render("farmerOne/ufUpdate", {
            urbanFarmer: item
          });
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.render('Record not found');
          console.log(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post("/farmerOne/ufUpdate", function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Farmers.findOneAndUpdate({
            _id: req.query.id
          }, req.body));

        case 3:
          res.redirect("farmerOne/ufUpdate");
          _context5.next = 10;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.send("Failed to update farmer details");
          console.log(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
router.get('/farmerOne/ufSignUp', isAuthenticated, function (req, res) {
  res.render('farmerOne/ufSignUp');
});
router.get('/farmerOne/foDash', isAuthenticated, function (req, res) {
  res.render('farmerOne/foDash');
}); // Authentication middleware

function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    // User is logged in, allow access
    return next();
  } else {
    // User is not logged in, redirect to login page
    res.redirect('/login');
  }
}

module.exports = router;