const express = require('express');
const router = express.Router();
const Auth = require('../Models/authModel')//import mod3l

//LOGIN
router.get('/login.hbs', (req, res) => {
  res.render("login")
})





// //farmer one route
// router.get('/fOauth', (req, res) => {
//     res.render("fOauth")
//   })

//   //clients route
// router.get('/clientAuth', (req, res) => {
//     res.render("clientAuth")
// })



// //urban farmers register
// router.post('/uFauth', async(req,res)=>{
//   try{
//       const auths = new Auth(req.body);
//       await auths.save()
//       res.redirect('/')//redirect to a path, render a file
//       console.log(req.body)
//   }
//   catch(err){
//       console.log(err)
//       //res.status(400).render("/")
//   }
// })

// //farmer one
// router.post('/fOauth', async(req,res)=>{
//     try{
//         const auths = new Auth(req.body);
//         await auths.save()
//         res.redirect('/')//redirect to a path, render a file
//         console.log(req.body)
//     }
//     catch(err){
//         console.log(err)
//         //res.status(400).render("/")
//     }
//   })
  
// //clients
// router.post('/clientAuth', async(req,res)=>{
//     try{
//         const auths = new Auth(req.body);
//         await auths.save()
//         res.redirect('/')//redirect to a path, render a file
//         console.log(req.body)
//     }
//     catch(err){
//         console.log(err)
//         //res.status(400).render("/")
//     }
//   })
  
  






  module.exports = router