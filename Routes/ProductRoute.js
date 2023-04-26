const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
const multer = require('multer');
const path = require('path');

// GET request to render the add product page
router.get('/urbanFarmer/addProduct', async (req, res) => {
  try {
    const products = await Product.find();
    res.render("urbanFarmer/addProduct", { products });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving products");
  }
});

router.get("/urbanFarmer/products",(req,res)=>{
  res.render("urbanFarmer/products")
});

//products register
// router.post('/urbanFarmer/addProduct', async(req,res)=>{
//   try{
//       const products = new Product(req.body);
//       await products.save()
//       res.redirect('/urbanFarmer/addProduct')//redirect to a path, render a file
//       console.log(req.body)
//   }
//   catch(err){
//       console.log(err)
//       //res.status(400).render("/")
//   }
// })
//urban farmers register
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/') // upload directory
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) // unique filename with extension
    }
  }),
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) { // allow only image files
      cb(null, true)
    } else {
      cb(new Error('Only image files are allowed'))
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // max file size 5MB
});

router.post('/urbanFarmer/addProduct', upload.array('products', 3), async(req, res) => {
  try{
      const { pname, ward, date, expiry, price, quantity, payment, directions, delivery, type } = req.body;
      const product = new Product({
        pname,
        ward,
        date,
        expiry,
        price,
        quantity,
        payment,
        directions,
        delivery,
        type,
        products: req.files.map(file => '/uploads/' + file.filename) // save file paths in database
      });
      await product.save()
      res.redirect('/urbanFarmer/addProduct')//redirect to a path, render a file
      console.log(req.body)
  }
  catch(err){
      console.log(err)
      //res.status(400).render("/")
  }
});








  module.exports = router