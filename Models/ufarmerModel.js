//to be used to modal our data
const mongoose = require("mongoose");

//give our schema a name
const farmerSchema = new mongoose.Schema({
    //tell schema what kind of data to expect
    firstname:{
        type:String,
        trim:true //trim removes blankspace after entering input, INCASE OF PASSWORD VALIDATTION i.e TO VALIDATE A SPACE CHARACTER, DONT USE TRIM
    },
    lastname:{
        type:String,
        trim:true
    },
    username:{
        type:String,
        trim:true,
        unique:true
    },
    dob:{
        type:Date,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    phonenumber:{
        type:String,
        trim:true
    },
    nin:{
        type:String,
        trim:true
    },
    residenceperiod:{
        type:Number,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    ward:{
        type:String,
        trim:true
    },

    residence:{
        type:String,
        trim:true
    },
    activities: {
        type: [String], // use square brackets to indicate an array of strings
        trim: true
    }
})

module.exports = mongoose.model("Farmer", farmerSchema)