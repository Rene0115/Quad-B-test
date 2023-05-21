"use strict";

var express = require('express');
var entityRouter = require('./entity.route.js');
var router = express.Router();
router.use('/', entityRouter);
module.exports = router;