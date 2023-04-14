const express = require('express');
const router = express.Router();

router.get("/about", (req,res)=>{
    res.render("about",{title: "Hello",message: "How are you doing"})
  })
  

  module.exports = router