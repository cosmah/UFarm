const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const Register = require('../Models/registerModel')//import mod3l

//register farmer one
router.get("/registerfarmerones", (req,res)=>{
    res.render("registerfarmerones")
  })




//create a post route to send data to backend
//the action name in the form is the one we use in the post route
router.post('/registerfarmerones', async(req,res)=>{
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect('/ones')//redirect to a path, render a file
        console.log(req.body)
    }
    catch(err){
        console.log(err)
        //res.status(400).render("/")
    }
})

//to deny access from a non loged user, use connectEnsureLogin method
//farmer ones page
router.get("/ones", connectEnsureLogin.ensureLoggedIn(), async(req,res)=>{
    try{
        let items = await Register.find();
        res.render("ones",{ones:items})
    }
    catch(err){
        console.log(err)
        res.send("Failed to retrieve farmer ones details")
    }
    
});














//update route
router.get("/onesEdit/:id", async(req,res)=>{
    try{
        const item = await Register.findOne({_id:req.params.id}); //filtering
        res.render("onesEdit", {one:item})
    }
    catch(err){
        res.send("Could not find farmer one");
        console.log(err)
    }
})

router.post("/onesEdit", async(req,res)=>{
    try{
        await Register.findOneAndUpdate({_id:req.query.id},req.body)
        res.redirect("ones")
    }
    catch(err){
        res.send("Failed to update farmer one")
        console.log(err)
    }
})


module.exports = router

//input = req.body
//id = req.param