const express = require('express');
const users = require('./users');
const products = require('./products');

var app = express();

app.use(users);
app.use(products);

module.exports = app;