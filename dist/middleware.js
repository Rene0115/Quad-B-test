"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cors = _interopRequireDefault(require("cors"));
var _route = _interopRequireDefault(require("./route.js"));
var _bodyParser = require("body-parser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var middleware = function middleware(app) {
  // Enable CORS
  app.use((0, _cors["default"])());

  // Parse incoming JSON data
  app.use((0, _express.json)());

  // Parse incoming URL-encoded data
  app.use((0, _express.urlencoded)({
    extended: true
  }));

  // Parse incoming URL-encoded data and JSON data
  app.use((0, _bodyParser.urlencoded)({
    extended: false
  }));
  app.use((0, _bodyParser.json)());

  // Register the router
  app.use(_route["default"]);

  // Fallback route handler
  app.use('*', function (req, res) {
    res.status(200).send('Server is Running Check API docs');
  });
};
var _default = middleware;
exports["default"] = _default;