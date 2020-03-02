var express = require('express');
var router = express.Router();

var ProductsController = require('../controllers/products');

router.post('/', ProductsController.store);

module.exports = router;
