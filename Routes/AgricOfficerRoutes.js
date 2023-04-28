const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const FarmerOne = require('../Models/AgricOfficerModel') //import model

//dashboard
router.get('/aofficer/aoDash', isAuthenticated,(req, res) => {
  res.render('aofficer/aoDash');
});

// GET request to render the registration form
router.get('/aofficer/FoSignUp', isAuthenticated,(req, res) => {
  res.render('aofficer/FoSignUp');
});
router.get('/aofficer/FoReg', isAuthenticated,(req, res) => {
  res.render('aofficer/FoReg');
});
router.get('/aofficer/farmerOnes', isAuthenticated,(req, res) => {
  res.render('aofficer/farmerOnes');
});


// Logout route
router.get('/aofficer/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    }
    res.redirect('../');
  });
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
// router.get("/aofficer/farmerOnes", isAuthenticated,async(req,res)=>{
//   try{
//     let items = await FarmerOne.find();
//     console.log(items)
//     res.render("aofficer/farmerOnes",{farmerones:items})
//   }
//   catch(err){
//     console.log(err)
//     res.send('Failed')
//   }
// });

router.get("/aofficer/farmerOnes", isAuthenticated,async (req, res) => {
  try {
    const items = await FarmerOne.find();
    res.render('/aofficer/farmerOnes', { farmerones: items });
  } catch (err) {
    console.log(err);
    res.send('Failed');
  }
});


module.exports = router;
