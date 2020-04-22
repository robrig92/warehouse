var express = require('express');
var router = express.Router();

var ProductsController = require('../controllers/products');

router.get('/products', ProductsController.index);
router.post('/products', ProductsController.store);

module.exports = router;