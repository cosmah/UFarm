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
}); //DELETE ROUTE

router.post("/urbanFarmer/products/delete", function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Product.deleteOne({
            _id: req.body.id
          }));

        case 3:
          res.redirect('back');
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //update data

router.get("/urbanFarmer/upDateProduct/:id", function _callee3(req, res) {
  var item;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Product.findOne({
            _id: req.params.id
          }));

        case 3:
          item = _context3.sent;
          res.render("urbanFarmer/upDateProduct", {
            product: item
          });
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.render('Record not found');
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post("/urbanFarmer/upDateProduct", function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Product.findOneAndUpdate({
            _id: req.query.id
          }, req.body));

        case 3:
          res.redirect("products");
          _context4.next = 10;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          res.send("Failed to update product");
          console.log(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
router.get("/urbanFarmer/products", function (req, res) {
  res.render("urbanFarmer/products");
}); // router.get("/", async(req,res)=>{
//     try {
//       const products = await Product.find({ username: req.params.username });
//       res.render('urbanFarmer/productView', { products });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Server Error');
//     }
//   });

router.get('/urbanFarmer/productView/:id', function _callee5(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Product.findById(req.params.id));

        case 3:
          product = _context5.sent;
          res.render('urbanFarmer/productView', {
            product: product
          });
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.sendStatus(500);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
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
router.post('/urbanFarmer/addProduct', upload.array('products', 3), function _callee6(req, res) {
  var _req$body, username, pname, ward, date, expiry, price, quantity, payment, directions, delivery, type, product;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
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
          _context6.next = 5;
          return regeneratorRuntime.awrap(product.save());

        case 5:
          res.redirect('/urbanFarmer/addProduct'); //redirect to a path, render a file

          console.log(req.body);
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0); //res.status(400).render("/")

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
module.exports = router;