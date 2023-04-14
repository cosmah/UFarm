const express = require('express');
const router = express.Router();
const User = require('../Models/userModel')//import mod3l

//register farmer one
router.get("/signup", (req,res)=>{
    res.render("signup")
  })




module.exports = router