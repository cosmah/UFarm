const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const FarmerOne = require('../Models/AgricOfficerModel') //import model

//dashboard
router.get('/aofficer/aoDash', (req, res) => {
  res.render('aofficer/aoDash');
});

// GET request to render the registration form
router.get('/aofficer/FoSignUp', (req, res) => {
  res.render('aofficer/FoSignUp');
});
router.get('/aofficer/FoReg', (req, res) => {
  res.render('aofficer/FoReg');
});

// POST request to handle the form submission and save data to the database
router.post('/aofficer/FoReg', async(req, res) => {
  try {
    const register = new FarmerOne(req.body);
    await register.save();
    res.render('aofficer/FoReg');
    console.log(req.body);
  } catch(err) {
    console.log(err);
    //res.status(400).render("/")
  }
});

//fetch the data
router.get('/aofficer/farmerOnes', async(req, res) => {
  try{
      let items = await Farmers.find();
      console.log(items)
      res.render('aofficer/farmerOnes',{farmerOnes:items});
  }
  catch{
    console.log(err)
    res.send('Operation failed')
    //res.status(400).render("/")
  }
});


module.exports = router;
