var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', usersController.index);
router.post('/', usersController.store);

module.exports = router;
