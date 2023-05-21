"use strict";

var express = require('express');
var cors = require('cors');
var router = require('./route.js');
var bodyParser = require('body-parser');
var middleware = function middleware(app) {
  // Enable CORS
  app.use(cors());

  // Parse incoming JSON data
  app.use(express.json());

  // Parse incoming URL-encoded data
  app.use(express.urlencoded({
    extended: true
  }));

  // Parse incoming URL-encoded data and JSON data
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());

  // Register the router
  app.use(router);

  // Fallback route handler
  app.use('*', function (req, res) {
    res.status(200).send('Server is Running Check API docs');
  });
};
module.exports = middleware;