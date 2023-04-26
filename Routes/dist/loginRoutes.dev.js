"use strict";

var express = require('express');

var _require = require('mongoose'),
    Model = _require.Model;

var router = express.Router();

var passport = require("passport"); //imported model


var User = require("../Models/userModel");

router.get("/login", function (req, res) {
  res.render("login");
}); // we redirect to a path and render a page

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/login"
}), function _callee(req, res) {
  var userExist;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req.session.user = req.user;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.user.username,
            password: req.user.password
          }));

        case 3:
          userExist = _context.sent;
          console.log("this user exists", userExist);
          console.log("this is the user session:", req.session); // res.redirect("/students")

          if (req.user.role == "ao" && userExist) {
            res.redirect("/aofficer/aoDash");
          } else if (req.user.role == "uf" && userExist) {
            res.redirect("/urbanFarmer/ufDash");
          } else if (req.user.role == "fo" && userExist) {
            res.redirect("/farmerOne/foDash");
          } else {
            if (userExist) {
              res.redirect("/user/productsGrid");
            } else {
              res.send("you are not registered");
            }
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/Routes", function (req, res) {
  if (req.session) {
    req.session.destroy(function (error) {
      if (error) {
        res.status(400).send("unable to logout user");
      } else {
        return res.redirect("/login");
      }
    });
  }
});
module.exports = router;