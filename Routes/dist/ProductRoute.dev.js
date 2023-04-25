"use strict";

var express = require('express');

var router = express.Router();

var Product = require('../Models/productModel'); //import mod3l


var multer = require('multer'); // Multer is a middleware for handling multipart/form-data, which is used for uploading files.


var path = require('path'); // register urban farmers


router.get('/urbanFarmer/addProduct', function (req, res) {
  res.render("urbanFarmer/addProduct");
}); //urban farmers register

router.post('/urbanFarmer/addProduct', function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          products = new Product(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(products.save());

        case 4:
          res.redirect('/urbanFarmer/addProduct'); //redirect to a path, render a file

          console.log(req.body);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); //res.status(400).render("/")

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;