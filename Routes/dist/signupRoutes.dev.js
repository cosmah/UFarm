"use strict";

var express = require('express');

var _require = require('mongoose'),
    Model = _require.Model;

var router = express.Router(); //imported model

var User = require("../Models/userModel"); //genral call


router.get("/signup", function (req, res) {
  res.render("signup");
}); //farmerone call

router.get("/foSignUp", function (req, res) {
  res.render("foSignUp");
}); //urban farmer call 

router.get("/ufSignUp", function (req, res) {
  res.render("ufSignUp");
}); //agriculture officer

router.get("/aoSignUp", function (req, res) {
  res.render("aoSignUp");
});
router.post("/signup", function _callee(req, res) {
  var user, userName;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          _context.prev = 1;
          user = new User(req.body);
          _context.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.body.username
          }));

        case 5:
          userName = _context.sent;

          if (!userName) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.send("this unique id already exists"));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(User.register(user, req.body.password, function (error) {
            if (error) {
              throw error;
            }

            res.redirect("/");
          }));

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          res.status(400).send("sorry it seems there is trouble accesing this page");
          console.log(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
}); //farmer one

router.post("/foSignUp", function _callee2(req, res) {
  var user, userName;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _context2.prev = 1;
          user = new User(req.body);
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.body.username
          }));

        case 5:
          userName = _context2.sent;

          if (!userName) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.send("this unique id already exists"));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(User.register(user, req.body.password, function (error) {
            if (error) {
              throw error;
            }

            res.redirect("/");
          }));

        case 12:
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          res.status(400).send("sorry it seems there is trouble accesing this page");
          console.log(_context2.t0);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14]]);
});
router.post("/ufSignUp", function _callee3(req, res) {
  var user, userName;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.body);
          _context3.prev = 1;
          user = new User(req.body);
          _context3.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.body.username
          }));

        case 5:
          userName = _context3.sent;

          if (!userName) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.send("this unique id already exists"));

        case 10:
          _context3.next = 12;
          return regeneratorRuntime.awrap(User.register(user, req.body.password, function (error) {
            if (error) {
              throw error;
            }

            res.redirect("/");
          }));

        case 12:
          _context3.next = 18;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](1);
          res.status(400).send("sorry it seems there is trouble accesing this page");
          console.log(_context3.t0);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 14]]);
});
module.exports = router;