"use strict";

var express = require('express');
var pino = require('pino');
var dotenv = require('dotenv');
var database = require('./db.config.js');
require('reflect-metadata');
dotenv.config();
var app = express();
var logger = pino();
var port = process.env.PORT || 4000;
var start = function start() {
  database();
  app.listen(port, function () {
    logger.info("Listening on port ".concat(port));
  });
};
start();