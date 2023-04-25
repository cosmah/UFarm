const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const FarmerOne = require('../Models/AgricOfficerModel') //import model

//dashboard
router.get('/urbanFarmer/ufDash', (req, res) => {
  res.render('urbanFarmer/ufDash');
});

// GET request to render the registration form
router.get('/aofficer/FoSignUp', (req, res) => {
  res.render('aofficer/FoSignUp');
});
router.get('/urbanFarmer/addProduct', (req, res) => {
  res.render('urbanFarmer/addProduct');
});
router.get('/urbanFarmer/feedback', (req, res) => {
  res.render('urbanFarmer/feedback');
});
router.get('/urbanFarmer/products', (req, res) => {
  res.render('urbanFarmer/products');
});
router.get('/urbanFarmer/upDateProduct', (req, res) => {
  res.render('urbanFarmer/upDateProduct');
});
router.get('/urbanFarmer/reports/inventory', (req, res) => {
  res.render('urbanFarmer/reports/inventory');
});




// // POST request to handle the product form submission and save data to the database
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
