"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
var UserEntity = (_dec = (0, _typeorm.PrimaryGeneratedColumn)(), _dec2 = (0, _typeorm.Column)({
  type: 'varchar'
}), _dec3 = (0, _typeorm.Column)({
  type: 'varchar'
}), _dec4 = (0, _typeorm.Column)({
  type: 'decimal',
  precision: 12,
  scale: 2
}), _dec5 = (0, _typeorm.Column)({
  type: 'decimal',
  precision: 12,
  scale: 2
}), _dec6 = (0, _typeorm.Column)({
  type: 'decimal',
  precision: 12,
  scale: 2
}), _dec7 = (0, _typeorm.Column)({
  type: 'varchar'
}), _dec8 = (0, _typeorm.Column)({
  type: 'bigint'
}), _dec9 = (0, _typeorm.Column)({
  type: 'decimal',
  precision: 12,
  scale: 5
}), _dec10 = (0, _typeorm.Column)({
  type: 'decimal',
  precision: 12,
  scale: 2
}), _dec11 = (0, _typeorm.Column)({
  type: 'decimal',
  precision: 12,
  scale: 2
}), _dec12 = (0, _typeorm.Column)({
  type: 'bigint'
}), _dec13 = (0, _typeorm.Column)({
  type: 'varchar'
}), (_class = /*#__PURE__*/_createClass(function UserEntity() {
  _classCallCheck(this, UserEntity);
  _initializerDefineProperty(this, "id", _descriptor, this);
  _initializerDefineProperty(this, "base_unit", _descriptor2, this);
  _initializerDefineProperty(this, "quote_unit", _descriptor3, this);
  _initializerDefineProperty(this, "low", _descriptor4, this);
  _initializerDefineProperty(this, "high", _descriptor5, this);
  _initializerDefineProperty(this, "last", _descriptor6, this);
  _initializerDefineProperty(this, "type", _descriptor7, this);
  _initializerDefineProperty(this, "open", _descriptor8, this);
  _initializerDefineProperty(this, "volume", _descriptor9, this);
  _initializerDefineProperty(this, "sell", _descriptor10, this);
  _initializerDefineProperty(this, "buy", _descriptor11, this);
  _initializerDefineProperty(this, "at", _descriptor12, this);
  _initializerDefineProperty(this, "name", _descriptor13, this);
}), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "base_unit", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "quote_unit", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "low", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "high", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "last", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "open", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "volume", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "sell", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "buy", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "at", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
var _default = UserEntity;
exports["default"] = _default;