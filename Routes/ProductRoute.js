const express = require('express');
const router = express.Router();
const Product = require('../Models/productModel');
const multer = require('multer');
const path = require('path');

// GET request to render the add product page
router.get('/urbanFarmer/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('urbanFarmer/products', { products });
  } catch (err) {
    console.log(err);
    res.send('Failed');
  }
});
//DELETE ROUTE
router.post("/urbanFarmer/products/delete",async(req,res)=>{
  try{
    await Product.deleteOne({_id:req.body.id});
    res.redirect('back')
  }
  catch(err){
    console.log(err)
  }
})
//update data
router.get("/urbanFarmer/upDateProduct/:id", async(req,res)=>{
  try{
    const item = await Product.findOne({_id:req.params.id});
    res.render("urbanFarmer/upDateProduct", {product:item});
  }
  catch(err){
    res.render('Record not found');
    console.log(err)
  }
});
router.post("/urbanFarmer/upDateProduct", async(req,res)=>{
  try{
      await Product.findOneAndUpdate({_id:req.query.id},req.body)
      res.redirect("products")
  }
  catch(err){
      res.send("Failed to update product")
      console.log(err)
  }
})


router.get("/urbanFarmer/products",(req,res)=>{
  res.render("urbanFarmer/products")
});
// router.get("/", async(req,res)=>{
//     try {
//       const products = await Product.find({ username: req.params.username });
//       res.render('urbanFarmer/productView', { products });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Server Error');
//     }
//   });

  router.get('/urbanFarmer/productView/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.render('urbanFarmer/productView', { product });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });  


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
      const { username,pname, ward, date, expiry, price, quantity, payment, directions, delivery, type } = req.body;
      const product = new Product({
        username,
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