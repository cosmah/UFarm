const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

//design schema
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:true
    },
    lastname:{
        type:String,
        trim:true,
        required:true
    },
    uniqueid:{
        type:String,
        trim:true,
        required:true,
        unique:true 
    },
    uniqueid:{
        type:String,
        trim:true,
        required:true 
    },
    dob:{
        type:String,
        trim:true,
        required:true 
    },
    gender:{
        type:String,
        trim:true,
        required:true 
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true 
    },
    phonenumber:{
        type:String,
        trim:true,
        required:true 
    },
    nin:{
        type:String,
        trim:true,
        required:true 
    },
    role:{
        type:String,
        trim:true,
        required:true 
    },
    address:{
        type:String,
        trim:true,
        required:true 
    },
    ward:{
        type:String,
        trim:true,
        required:true 
    },
    password:{
        type:String,
        required:true 
    }

})


userSchema.plugin(passportLocalMongoose, {usernameField: "uniqueid"});
module.exports = mongoose.model('User', userSchema)