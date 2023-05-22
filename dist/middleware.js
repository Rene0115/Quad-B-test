"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _route = _interopRequireDefault(require("./route.js"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var middleware = function middleware(app) {
  // Enable CORS
  app.use((0, _cors["default"])());

  // Logging
  app.use((0, _morgan["default"])('dev'));

  // Parse incoming JSON data
  app.use(_bodyParser["default"].json());

  // Parse incoming URL-encoded data
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));

  // Register the router
  app.use(_route["default"]);

  // Fallback route handler
  app.use('*', function (req, res) {
    res.status(200).send('Server is Running Check API docs');
  });
};
var _default = middleware;
exports["default"] = _default;