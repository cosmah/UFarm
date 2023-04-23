const path = require('path');
const express = require('express');
const router = express.Router();
//home
// router.get("/index", (req,res)=>{
//     res.render("index")
//   })
//conatct page
  router.get("/contact", (req,res)=>{
    res.render("contact")
  })
  
  //route html
router.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../', 'Public/html', 'index.html'));
})

  module.exports = router