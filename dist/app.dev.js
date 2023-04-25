"use strict";

var express = require('express');

var _require = require('path'),
    resolve = _require.resolve;

var port = 3000;
var app = express();

var path = require("path");

var router = express.Router();

var ejs = require('ejs');

var mongoose = require("mongoose");

var bodyParser = require('body-parser');

var multer = require('multer');

var session = require("express-session");

var passport = require("passport"); //we creat an environment 
//require('dotenv').config();


var config = require("./Config/database"); //userModel import


var user = require("./Models/userModel"); //import routes


var generalRoutes = require("./Routes/generalRoutes");

var loginRoutes = require("./Routes/loginRoutes");

var ProductRoute = require("./Routes/ProductRoute");

var ufarmerRoutes = require("./Routes/ufarmerRoutes");

var registerRoute = require("./Routes/registerRoute");

var authRoutes = require("./Routes/authRoutes");

var signupRoutes = require("./Routes/signupRoutes");

var farmerOneRouter = require('./Routes/farmerOneRoutes');

var AgricOfficerRouter = require('./Routes/AgricOfficerRoutes');

var UrbanFarmerRouter = require('./Routes/teamRoutes');

var UserRouter = require('./Routes/userRoutes'); //secret is a password for the session, here we dont want the browser to remember our session if broswer is close


app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
})); // * Passport middleware

app.use(passport.initialize()); //get user

app.use(passport.session()); //start session

passport.use(user.createStrategy()); //local strategy

passport.serializeUser(user.serializeUser()); //we give our user a session id

passport.deserializeUser(user.deserializeUser()); //we destroy the session on logging out
// support parsing of application/json type post data

app.use(bodyParser.json()); //support parsing of application/x-www-form-urlencoded post data

app.use(bodyParser.urlencoded({
  extended: true
})); //creating a connection between a controller and the database using mongoose middleware

mongoose.connect(config.database, {
  //useNewParser collects data then formats it  into what backend understands, 
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection; //check if db is connected successfully

db.once("open", function () {
  console.log("Connected to db");
});
db.on("error", function (err) {
  console.error(err);
}); //TO VIEW PUG(setting templating engine)

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //telling the express module that the public dir has all our site assets

app.use(express["static"](__dirname + '/Public/html'));
app.use(express["static"](__dirname + '/Public/html/landing')); //handling public folder(__dirname resolves to the root folder of the application)

app.set(express["static"](path.join(__dirname, "Public"))); // Set up the server

app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', generalRoutes);
app.use('/', authRoutes);
app.use('/', ufarmerRoutes);
app.use('/', ProductRoute);
app.use('/', registerRoute);
app.use('/', farmerOneRouter);
app.use('/', AgricOfficerRouter);
app.use('/', UrbanFarmerRouter);
app.use('/', UserRouter); //404 message

app.get("*", function (req, res) {
  res.status(404).send("Page does not exist");
});
app.listen(port, function () {
  console.log("Listening at http://localhost:".concat(port));
});