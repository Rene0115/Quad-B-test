"use strict";

var express = require('express');
var fetchDataAndCreateEntities = require('./controller.js');
var entityRouter = express.Router();
entityRouter.post('/create', fetchDataAndCreateEntities);
module.exports = entityRouter;