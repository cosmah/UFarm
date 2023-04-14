const express = require('express');
const router = express.Router();
//home
router.get("/", (req,res)=>{
    res.render("index")
  })
//conatct page
  router.get("/contact", (req,res)=>{
    res.render("contact")
  })
  

  module.exports = router