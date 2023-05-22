"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _pino = _interopRequireDefault(require("pino"));
var _dotenv = require("dotenv");
var _dbConfig = _interopRequireDefault(require("./db.config.js"));
require("reflect-metadata");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var app = (0, _express["default"])();
var logger = (0, _pino["default"])();
var port = process.env.PORT || 4000;
var start = function start() {
  (0, _dbConfig["default"])();
  app.listen(port, function () {
    logger.info("Listening on port ".concat(port));
  });
};
start();
var _default = logger;
exports["default"] = _default;