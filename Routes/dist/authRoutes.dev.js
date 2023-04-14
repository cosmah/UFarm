"use strict";

var express = require('express');

var router = express.Router();

var Auth = require('../Models/authModel'); //import mod3l
// register urban farmers


router.get('/uFauth', function (req, res) {
  res.render("uFauth");
}); //farmer one route

router.get('/fOauth', function (req, res) {
  res.render("fOauth");
}); //clients route

router.get('/clientAuth', function (req, res) {
  res.render("clientAuth");
}); //urban farmers register

router.post('/uFauth', function _callee(req, res) {
  var auths;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          auths = new Auth(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(auths.save());

        case 4:
          res.redirect('/'); //redirect to a path, render a file

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
}); //farmer one

router.post('/fOauth', function _callee2(req, res) {
  var auths;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          auths = new Auth(req.body);
          _context2.next = 4;
          return regeneratorRuntime.awrap(auths.save());

        case 4:
          res.redirect('/'); //redirect to a path, render a file

          console.log(req.body);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0); //res.status(400).render("/")

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //clients

router.post('/clientAuth', function _callee3(req, res) {
  var auths;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          auths = new Auth(req.body);
          _context3.next = 4;
          return regeneratorRuntime.awrap(auths.save());

        case 4:
          res.redirect('/'); //redirect to a path, render a file

          console.log(req.body);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0); //res.status(400).render("/")

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;