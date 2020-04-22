var express = require('express');
var router = express.Router();

var ProductsController = require('../controllers/products');

router.get('/products', ProductsController.index);
router.post('/products', ProductsController.store);
router.get('/products/:id', ProductsController.show);
router.put('/products/:id', ProductsController.update);
router.delete('/products/:id', ProductsController.destroy);

module.exports = router;