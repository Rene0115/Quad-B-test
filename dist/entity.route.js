"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = _interopRequireDefault(require("./controller.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var entityRouter = (0, _express.Router)();
entityRouter.post('/create', _controller["default"]);
var _default = entityRouter;
exports["default"] = _default;