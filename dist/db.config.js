"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _typeorm = require("typeorm");
var _entity = require("./entity.js");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var dataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: [_entity.UserEntity]
});
var _default = dataSource;
exports["default"] = _default;