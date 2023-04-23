const express = require('express');
const { Model } = require('mongoose');
const router = express.Router();
const passport = require("passport")
//imported model
const User = require("../Models/userModel")

// Render the login page
router.get('/login', (req, res) => {
  res.render('login');
});
// Render the fodash
router.get('/farmerOne/foDash', (req, res) => {
  res.render('farmerOne/foDash');
});


router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await User.findOne({username: req.user.username,password: req.user.password});
    console.log("This user exists", userExist)
    console.log("this is the user session;", req.session)
    // res.redirect("/ones")
    if(req.user.role == "ao" && userExist){
        res.redirect("/aodash")
      }
      else if(req.user.role == "uf" && userExist){
        res.redirect("/ufdash")
      }
      else if (req.user.role == "fo" && userExist){
        res.redirect("/views/farmerOne/foDash")
      }
        else{
            if(userExist){
                res.redirect("/farmerOne/foDash")
            }
            else{res.send("you are not registered")}

        }})
router.post("/logout", (req,res)=>{
  if(req.session){
    req.session.destroy((error)=>{
      if (error){
      res.status(400).send("unable to logout user")
    }else{
      return res.redirect("/login")
    }
  })
}
}) 























// Handle login form submission
// router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), async (req, res) => {
//   try {
//     // Save the user session
//     req.session.user = req.user;
    
//     // Retrieve the user from the database
//     const user = await User.findOne({ username: req.user.username, password: req.user.password });

//     // Redirect to the appropriate dashboard based on the user's role
//     if (req.user.role === 'fo') {
//       res.redirect('/fodash');
//     } else if (req.user.role === 'uf') {
//       res.redirect('/ufdash');
//     } else if (req.user.role === 'ao') {
//       res.redirect('/aodash');
//     } else {
//       res.redirect('/user');
//     }
//   } catch (err) {
//     console.error(err);
//     res.redirect('/login?error=invalidCredentials');
//   }
// });

// // Handle logout
// router.post('/logout', (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error logging out');
//     } else {
//       res.redirect('/login');
//     }
//   });
// });

// // Render the user dashboard
// router.get('/user', (req, res) => {
//   res.render('user-dashboard', { user: req.session.user });
// });

// // Render the fodash dashboard
// router.get('/fodash', (req, res) => {
//   res.render('fodash', { user: req.session.user });
// });

// // Render the ufdash dashboard
// router.get('/ufdash', (req, res) => {
//   res.render('ufdash', { user: req.session.user });
// });

// // Render the aodash dashboard

// router.get('/aodash', (req, res) => {
//   res.render('aodash', { user: req.session.user });
// });

module.exports = router
