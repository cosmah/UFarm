"use strict";

var express = require('express');

var router = express.Router();

var Farmer = require('../Models/ufarmerModel'); //import mod3l
// register urban farmers


router.get('/famersRegister', function (req, res) {
  res.render("famersRegister");
}); //urban farmers register

router.post('/famersRegister', function _callee(req, res) {
  var farmers;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          farmers = new Farmer(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(farmers.save());

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
});
module.exports = router;