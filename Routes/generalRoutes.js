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
  
  router.get("/user/dairy", (req,res)=>{
    res.render("user/dairy")
  })
  
  router.get("/user/horticulture", (req,res)=>{
    res.render("user/horticulture")
  })
  
  router.get("/user/poultry", (req,res)=>{
    res.render("user/poultry")
  })
  


  module.exports = router