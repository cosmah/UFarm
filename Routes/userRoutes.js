const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Farmers = require('../Models/ufarmerModel')//import mod3l

//dashboard
router.get('/user/checkout', isAuthenticated,(req, res) => {
  res.render('user/checkout');
});
router.get('/user/cart', (req, res) => {
  res.render('user/cart');
});

router.get('/user/shopDetails', (req, res) => {
  res.render('user/shopDetails');
});

router.get('/user/productsGrid', (req, res) => {
  res.render('user/productsGrid');
});
router.get('/user/productDetails', (req, res) => {
  res.render('user/productDetails');
});

// Authentication middleware
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
