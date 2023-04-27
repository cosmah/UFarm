"use strict";

var express = require('express');

var router = express.Router();

var Product = require('../Models/productModel');

var multer = require('multer');

var path = require('path'); // GET request to render the add product page


router.get('/urbanFarmer/products', function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Product.find());

        case 3:
          products = _context.sent;
          res.render('urbanFarmer/products', {
            products: products
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.send('Failed');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/urbanFarmer/products", function (req, res) {
  res.render("urbanFarmer/products");
});
router.get("/urbanFarmer/productView", function (req, res) {
  res.render("urbanFarmer/productView");
}); //urban farmers register

var upload = multer({
  storage: multer.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, 'public/uploads/'); // upload directory
    },
    filename: function filename(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // unique filename with extension
    }
  }),
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      // allow only image files
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024
  } // max file size 5MB

});
router.post('/urbanFarmer/addProduct', upload.array('products', 3), function _callee2(req, res) {
  var _req$body, username, pname, ward, date, expiry, price, quantity, payment, directions, delivery, type, product;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, username = _req$body.username, pname = _req$body.pname, ward = _req$body.ward, date = _req$body.date, expiry = _req$body.expiry, price = _req$body.price, quantity = _req$body.quantity, payment = _req$body.payment, directions = _req$body.directions, delivery = _req$body.delivery, type = _req$body.type;
          product = new Product({
            username: username,
            pname: pname,
            ward: ward,
            date: date,
            expiry: expiry,
            price: price,
            quantity: quantity,
            payment: payment,
            directions: directions,
            delivery: delivery,
            type: type,
            products: req.files.map(function (file) {
              return '/uploads/' + file.filename;
            }) // save file paths in database

          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(product.save());

        case 5:
          res.redirect('/urbanFarmer/addProduct'); //redirect to a path, render a file

          console.log(req.body);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0); //res.status(400).render("/")

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;