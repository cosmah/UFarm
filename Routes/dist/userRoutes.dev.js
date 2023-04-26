"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var Farmers = require('../Models/ufarmerModel'); //import mod3l
//dashboard


router.get('/user/checkout', isAuthenticated, function (req, res) {
  res.render('user/checkout');
});
router.get('/user/cart', function (req, res) {
  res.render('user/cart');
});
router.get('/user/shopDetails', function (req, res) {
  res.render('user/shopDetails');
});
router.get('/user/productsGrid', function (req, res) {
  res.render('user/productsGrid');
});
router.get('/user/productDetails', function (req, res) {
  res.render('user/productDetails');
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