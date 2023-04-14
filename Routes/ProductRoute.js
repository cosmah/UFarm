const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel')//import mod3l

// register urban farmers
router.get('/addProducts', (req, res) => {
  res.render("addProducts")
})




//urban farmers register
router.post('/addProducts', async(req,res)=>{
  try{
      const products = new Product(req.body);
      await products.save()
      res.redirect('/')//redirect to a path, render a file
      console.log(req.body)
  }
  catch(err){
      console.log(err)
      //res.status(400).render("/")
  }
})







  module.exports = router