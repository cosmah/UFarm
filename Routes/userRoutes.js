const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Farmers = require('../Models/ufarmerModel')//import mod3l

//dashboard
router.get('/user/checkout', (req, res) => {
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



module.exports = router;
