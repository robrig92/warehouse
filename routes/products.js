var express = require('express');
var router = express.Router();

var ProductsController = require('../controllers/products');

router.get('/', ProductsController.index);
router.post('/', ProductsController.store);

module.exports = router;
