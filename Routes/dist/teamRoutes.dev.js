"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var FarmerOne = require('../Models/AgricOfficerModel'); //import model
//dashboard


router.get('/urbanFarmer/ufDash', function (req, res) {
  res.render('urbanFarmer/ufDash');
}); // GET request to render the registration form

router.get('/aofficer/FoSignUp', function (req, res) {
  res.render('aofficer/FoSignUp');
});
router.get('/urbanFarmer/addProduct', function (req, res) {
  res.render('urbanFarmer/addProduct');
});
router.get('/urbanFarmer/feedback', function (req, res) {
  res.render('urbanFarmer/feedback');
});
router.get('/urbanFarmer/products', function (req, res) {
  res.render('urbanFarmer/products');
});
router.get('/urbanFarmer/upDateProduct', function (req, res) {
  res.render('urbanFarmer/upDateProduct');
});
router.get('/urbanFarmer/reports/inventory', function (req, res) {
  res.render('urbanFarmer/reports/inventory');
}); // // POST request to handle the product form submission and save data to the database
// router.post('/aofficer/FoReg', async(req, res) => {
//   try {
//     const register = new FarmerOne(req.body);
//     await register.save();
//     res.render('aofficer/FoReg');
//     console.log(req.body);
//   } catch(err) {
//     console.log(err);
//     //res.status(400).render("/")
//   }
// });

module.exports = router;