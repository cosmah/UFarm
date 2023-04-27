//to be used to modal our data
const mongoose = require("mongoose");

//give our schema a name
const productSchema = new mongoose.Schema({
    //tell schema what kind of data to expect
    products: {
        type: [String], // use an array of strings instead of just a single string
        trim: true
      },      
    username:{
        type:String,
        trim:true,
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