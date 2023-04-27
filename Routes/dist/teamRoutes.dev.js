"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var FarmerOne = require('../Models/AgricOfficerModel'); //import model
// Logout route


router.get('/urbanFarmer/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect('../');
  });
}); //dashboard

router.get('/urbanFarmer/ufDash', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/ufDash');
}); // GET request to render the registration form

router.get('/aofficer/FoSignUp', isAuthenticated, function (req, res) {
  res.render('aofficer/FoSignUp');
});
router.get('/urbanFarmer/addProduct', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/addProduct');
});
router.get('/urbanFarmer/feedback', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/feedback');
});
router.get('/urbanFarmer/productView', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/productView');
});
router.get('/urbanFarmer/products', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/products');
});
router.get('/urbanFarmer/upDateProduct', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/upDateProduct');
});
router.get('/urbanFarmer/reports/inventory', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/reports/inventory');
});
router.get('/urbanFarmer/reports/sales', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/reports/sales');
});
router.get('/urbanFarmer/reports/orders', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/reports/orders');
});
router.get('/urbanFarmer/reports/reports', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/reports/reports');
});
router.get('/urbanFarmer/reports/few', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/reports/few');
});
router.get('/urbanFarmer/reports/outOfStock', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/reports/outOfStock');
});
router.get('/urbanFarmer/profile', isAuthenticated, function (req, res) {
  res.render('urbanFarmer/profile');
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