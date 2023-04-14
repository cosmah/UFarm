const express = require('express');
const router = express.Router();
const Farmer = require('../Models/ufarmerModel')//import mod3l

// register urban farmers
router.get('/famersRegister', (req, res) => {
  res.render("famersRegister")
})




//urban farmers register
router.post('/famersRegister', async(req,res)=>{
  try{
      const farmers = new Farmer(req.body);
      await farmers.save()
      res.redirect('/')//redirect to a path, render a file
      console.log(req.body)
  }
  catch(err){
      console.log(err)
      //res.status(400).render("/")
  }
})







  module.exports = router