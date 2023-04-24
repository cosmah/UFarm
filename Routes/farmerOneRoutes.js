const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Farmers = require('../Models/ufarmerModel')//import mod3l

//dashboard
router.get('/farmerOne/foDash', (req, res) => {
  res.render('farmerOne/foDash');
});

//famers register
router.get('/farmerOne/famersRegister', (req, res) => {
  res.render('farmerOne/famersRegister');
});

//the action name in the form is the one we use in the post route
router.post('/registerfarmerones', async(req,res)=>{
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


router.get('/farmerOne/urbanFarmers', async(req, res) => {
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



router.get('/farmerOne/ufSignUp', (req, res) => {
  res.render('farmerOne/ufSignUp');
});
router.get('/farmerOne/foDash', (req, res) => {
  res.render('farmerOne/foDash');
});


module.exports = router;
