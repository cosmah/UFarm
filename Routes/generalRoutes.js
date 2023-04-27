const path = require('path');
const express = require('express');
const router = express.Router();

//conatct page
  router.get("/contact", (req,res)=>{
    res.render("contact")
  })
//conatct page
  router.get("/about", (req,res)=>{
    res.render("about")
  })
  
  router.get("/", (req,res)=>{
    res.render("index")
  })
  


  module.exports = router