"use strict";

var express = require('express');

var _require = require('path'),
    resolve = _require.resolve;

var port = 3000;
var app = express();

var path = require("path");

var router = express.Router();

var mongoose = require("mongoose");

var bodyParser = require('body-parser'); //we creat an environment 
//require('dotenv').config();


var config = require("./Config/database"); //import routes


var generalRoutes = require("./Routes/generalRoutes");

var loginRoutes = require("./Routes/loginRoutes");

var ProductRoute = require("./Routes/ProductRoute");

var ufarmerRoutes = require("./Routes/ufarmerRoutes");

var registerRoute = require("./Routes/registerRoute");

var authRoutes = require("./Routes/authRoutes");

var signupRoutes = require("./Routes/signupRoutes"); // support parsing of application/json type post data


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
app.set("views", path.join(__dirname, "views")); //handling public folder(__dirname resolves to the root folder of the application)

app.set(express["static"](path.join(__dirname, "public"))); // Set up the server

app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', generalRoutes);
app.use('/', authRoutes);
app.use('/', ufarmerRoutes);
app.use('/', ProductRoute);
app.use('/', registerRoute);
app.listen(port, function () {
  console.log("Listening at http://localhost:".concat(port));
});