//to be used to modal our data
const mongoose = require("mongoose");

//give our schema a name
const LogInSchema = new mongoose.Schema({
    //tell schema what kind of data to expect
    username:{
        type:String,
        trim:true //trim removes blankspace after entering input, INCASE OF PASSWORD VALIDATTION i.e TO VALIDATE A SPACE CHARACTER, DONT USE TRIM
    },

    password:{
        type:String,
        trim:true
    }

})

module.exports = mongoose.model("Login", LogInSchema)