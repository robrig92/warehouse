var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');

/* GET users listing. */
router.get('/users', usersController.index);
router.post('/users', usersController.store);

module.exports = router;