//to be used to modal our data
const mongoose = require("mongoose");

//give our schema a name
const productSchema = new mongoose.Schema({
    //tell schema what kind of data to expect
    products:{
        type:String,
        trim:true //trim removes blankspace after entering input, INCASE OF PASSWORD VALIDATTION i.e TO VALIDATE A SPACE CHARACTER, DONT USE TRIM
    },
    pname:{
        type:String,
        trim:true
    },
    ward:{
        type:String,
        trim:true
    },
    date:{
        type:Date,
        trim:true
    },
    expiry:{
        type:Date,
        trim:true
    },
    price:{
        type:Number,
        trim:true
    },
    quantity:{
        type:Number,
        trim:true
    },
    payment:{
        type:String,
        trim:true
    },
    directions:{
        type:String,
        trim:true
    },
    delivery:{
        type:String,
        trim:true
    },
    type:{
        type:String,
        trim:true
    }
})

module.exports = mongoose.model("Product", productSchema)