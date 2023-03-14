"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
var _multer = _interopRequireDefault(require("multer"));
var _crypto = _interopRequireDefault(require("crypto"));
var _multerGridfsStorage = require("multer-gridfs-storage");
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable consistent-return */

var storage = new _multerGridfsStorage.GridFsStorage({
  url: _config["default"].MONGO_URI,
  file: function file(req, _file) {
    return new Promise(function (resolve, reject) {
      _crypto["default"].randomBytes(16, function (err, buf) {
        if (err) {
          return reject(err);
        }
        var filename = buf.toString('hex') + _path["default"].extname(_file.originalname);
        var fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
var _default = (0, _multer["default"])({
  storage: storage
});
exports["default"] = _default;