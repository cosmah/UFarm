const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel')//import mod3l
const multer = require('multer'); // Multer is a middleware for handling multipart/form-data, which is used for uploading files.
const path = require('path');

// register urban farmers
router.get('/urbanFarmer/addProduct', (req, res) => {
  res.render("urbanFarmer/addProduct")
})




//urban farmers register
router.post('/urbanFarmer/addProduct', async(req,res)=>{
  try{
      const products = new Product(req.body);
      await products.save()
      res.redirect('/urbanFarmer/addProduct')//redirect to a path, render a file
      console.log(req.body)
  }
  catch(err){
      console.log(err)
      //res.status(400).render("/")
  }
})







  module.exports = router