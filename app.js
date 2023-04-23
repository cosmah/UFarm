const express = require('express');
const {resolve} = require('path');
const port = 3000;
const app = express();
const path = require("path");
const router = express.Router();
const ejs = require('ejs');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require("express-session")
const passport = require("passport")

//we creat an environment 
//require('dotenv').config();
const config = require("./Config/database")

//userModel import
const user = require("./Models/userModel")
//import routes
const generalRoutes = require("./Routes/generalRoutes")
const loginRoutes = require("./Routes/loginRoutes")
const ProductRoute = require("./Routes/ProductRoute")
const ufarmerRoutes = require("./Routes/ufarmerRoutes")
const registerRoute = require("./Routes/registerRoute")
const authRoutes = require("./Routes/authRoutes");
const signupRoutes = require("./Routes/signupRoutes");
const farmerOneRouter = require('./Routes/farmerOneRoutes');

//secret is a password for the session, here we dont want the browser to remember our session if broswer is close
app.use(session({
  secret: "secret",
  resave:false,
  saveUninitialized:false
}))

// * Passport middleware
app.use(passport.initialize());//get user
app.use(passport.session());//start session
passport.use(user.createStrategy());//local strategy
passport.serializeUser(user.serializeUser());//we give our user a session id
passport.deserializeUser(user.deserializeUser());//we destroy the session on logging out



// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


//creating a connection between a controller and the database using mongoose middleware
mongoose.connect(config.database,{
  //useNewParser collects data then formats it  into what backend understands, 
  useNewUrlParser:true,
  useUnifiedTopology: true
})

const db = mongoose.connection
//check if db is connected successfully
db.once("open", ()=>{
  console.log("Connected to db")
})
db.on("error", (err)=>{
  console.error(err)
})

//TO VIEW PUG(setting templating engine)
app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))



//telling the express module that the public dir has all our site assets
app.use(express.static(__dirname + '/Public/html'));
app.use(express.static(__dirname + '/Public/html/landing'));



//handling public folder(__dirname resolves to the root folder of the application)
app.set(express.static(path.join(__dirname, "Public")));






// Set up the server
app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', generalRoutes);
app.use('/', authRoutes);
app.use('/', ufarmerRoutes);
app.use('/', ProductRoute);
app.use('/', registerRoute); 
app.use('/', farmerOneRouter);

//404 message
app.get("*", (req,res)=>{
  res.status(404).send("Page does not exist")
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
