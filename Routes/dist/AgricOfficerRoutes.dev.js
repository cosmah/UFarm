"use strict";

var express = require('express');

var router = express.Router();

var connectEnsureLogin = require("connect-ensure-login");

var FO = require('../Models/AgricOfficerModel'); //import mod3l
//dashboard


router.get('/aofficer/aoDash', function (req, res) {
  res.render('aofficer/aoDash');
});
router.get('/aofficer/registerfarmerones', function _callee(req, res) {
  var register;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          register = new FO(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(register.save());

        case 4:
          res.render('aofficer/registerfarmerones');
          console.log(req.body);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); //res.status(400).render("/")

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // router.get('/aofficer/registerfarmerones', async(req, res) => {
//     try{
//         const register = new FO(req.body);
//         await register.save()
//         res.render('aofficer/farmerOnes');//redirect to a path, render a file
//         console.log(req.body)
//     }
//     catch(err){
//         console.log(err)
//         //res.status(400).render("/")
//     }
//   });
// router.get('/aofficer/farmerOnes', async(req, res) => {
//     try{
//         let items = await FO.find();
//         console.log(items)
//         res.render('aofficer/farmerOnes',{farmerOnes:items});
//     }
//     catch{
//       console.log(err)
//       res.send('Operation failed')
//       //res.status(400).render("/")
//     }
// });
// //famers register
// router.get('/farmerOne/famersRegister', (req, res) => {
//   res.render('farmerOne/famersRegister');
// });
// //the action name in the form is the one we use in the post route
// router.post('/registerfarmerones', async(req,res)=>{
//   try{
//       const register = new Farmers(req.body);
//       await register.save()
//       res.redirect('/farmerOne/urbanFarmers')//redirect to a path, render a file
//       console.log(req.body)
//   }
//   catch(err){
//       console.log(err)
//       //res.status(400).render("/")
//   }
// })
// router.get('/farmerOne/urbanFarmers', async(req, res) => {
//     try{
//         let items = await Farmers.find();
//         console.log(items)
//         res.render('farmerOne/urbanFarmers',{urbanFarmers:items});
//     }
//     catch{
//       console.log(err)
//       res.send('Operation failed')
//       //res.status(400).render("/")
//     }
// });
// // //delete functionality
// // router.post('/urbanFarmers/delete', async(req,res)=>{
// //   try{
// //       await Farmers.deleteOne({_id:req.body.id});
// //       res.redirect('back') //this line keeps us on our operating page
// //   }
// //   catch(err){
// //       console.log(err)
// //   }
// // });
// // //update route
// // router.get("/studentEdit/:id", async(req,res)=>{
// //   try{
// //       const item = await Register.findOne({_id:req.params.id}); //filtering
// //       res.render("studentEdit", {student:item})
// //   }
// //   catch(err){
// //       res.send("Could not find student");
// //       console.log(err)
// //   }
// // })
// // router.post("/studentEdit", async(req,res)=>{
// //   try{
// //       await Register.findOneAndUpdate({_id:req.query.id},req.body)
// //       res.redirect("/students")
// //   }
// //   catch(err){
// //       res.send("Failed to update student")
// //       console.log(err)
// //   }
// // })

router.get('/aofficer/FoSignUp', function (req, res) {
  res.render('aofficer/FoSignUp');
});
router.get('/aofficer/registerfarmerones', function (req, res) {
  res.render('aofficer/registerfarmerones');
});
module.exports = router;