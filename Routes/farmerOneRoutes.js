const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Farmers = require('../Models/ufarmerModel')//import mod3l

//dashboard
router.get('/farmerOne/foDash', isAuthenticated,(req, res) => {
  res.render('farmerOne/foDash');
});

//famers register
router.get('/farmerOne/famersRegister', isAuthenticated,(req, res) => {
  res.render('farmerOne/famersRegister');
});

// Logout route
router.get('/farmerOne/logout', isAuthenticated,(req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    }
    res.redirect('../');
  });
});


//the action name in the form is the one we use in the post route
router.post('/registerfarmerones', isAuthenticated,async(req,res)=>{
  try{
      const register = new Farmers(req.body);
      await register.save()
      res.redirect('/farmerOne/urbanFarmers')//redirect to a path, render a file
      console.log(req.body)
  }
  catch(err){
      console.log(err)
      //res.status(400).render("/")
  }
})


router.get('/farmerOne/urbanFarmers', isAuthenticated,async(req, res) => {
    try{
        let items = await Farmers.find();
        console.log(items)
        res.render('farmerOne/urbanFarmers',{urbanFarmers:items});
    }
    catch{
      console.log(err)
      res.send('Operation failed')
      //res.status(400).render("/")
    }
});
//DELETE ROUTE
router.post("/farmerOne/urbanFarmers/delete",async(req,res)=>{
  try{
    await Farmers.deleteOne({_id:req.body.id});
    res.redirect('back')
  }
  catch(err){
    console.log(err)
  }
})
//update data
router.get("/farmerOne/ufUpdate/:id", async(req,res)=>{
  try{
    const item = await Farmers.findOne({_id:req.params.id});
    res.render("farmerOne/ufUpdate", {urbanFarmer:item});
  }
  catch(err){
    res.render('Record not found');
    console.log(err)
  }
});
router.post("/farmerOne/ufUpdate", async(req,res)=>{
  try{
      await Farmers.findOneAndUpdate({_id:req.query.id},req.body)
      res.redirect("farmerOne/ufUpdate")
  }
  catch(err){
      res.send("Failed to update farmer details")
      console.log(err)
  }
})


router.get('/farmerOne/ufSignUp', isAuthenticated,(req, res) => {
  res.render('farmerOne/ufSignUp');
});
router.get('/farmerOne/foDash', isAuthenticated,(req, res) => {
  res.render('farmerOne/foDash');
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
