const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Register = require('../Models/registerModel')//import mod3l

//dashboard
router.get('/farmerOne/foDash', (req, res) => {
  res.render('farmerOne/foDash');
});

//famers register
router.get('/farmerOne/famersRegister', (req, res) => {
  res.render('farmerOne/famersRegister');
});

//the action name in the form is the one we use in the post route
router.post('/registerfarmerones', async(req,res)=>{
  try{
      const register = new Register(req.body);
      await register.save()
      res.redirect('/farmerOne/foDash')//redirect to a path, render a file
      console.log(req.body)
  }
  catch(err){
      console.log(err)
      //res.status(400).render("/")
  }
})


router.get('/farmerOne/farmerslist', (req, res) => {
  res.render('farmerOne/farmerslist');
});

//read data 
router.get("/farmerOne/farmerslist", async(req,res)=>{
  try{
      let items = await Farmer.find();//go to our collection 'Register', find every record and store them in a variable items.       
      console.log(items)
      res.render("farmerOne/farmerslist",{farmers:items}) 
  }
  catch(err){
      console.log(err)
      res.send('Failed to retrieve student details')
  }
});

// //delete functionality
// router.post('/students/delete', async(req,res)=>{
//   try{
//       await Register.deleteOne({_id:req.body.id});
//       res.redirect('back') //this line keeps us on our operating page
//   }
//   catch(err){
//       console.log(err)
//   }
// });

// //update route
// router.get("/studentEdit/:id", async(req,res)=>{
//   try{
//       const item = await Register.findOne({_id:req.params.id}); //filtering
//       res.render("studentEdit", {student:item})
//   }
//   catch(err){
//       res.send("Could not find student");
//       console.log(err)
//   }
// })

// router.post("/studentEdit", async(req,res)=>{
//   try{
//       await Register.findOneAndUpdate({_id:req.query.id},req.body)
//       res.redirect("/students")
//   }
//   catch(err){
//       res.send("Failed to update student")
//       console.log(err)
//   }
// })

router.get('/farmerOne/foDash', (req, res) => {
  res.render('farmerOne/foDash');
});
router.get('/farmerOne/foDash', (req, res) => {
  res.render('farmerOne/foDash');
});


module.exports = router;
