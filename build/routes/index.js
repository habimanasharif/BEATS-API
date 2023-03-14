"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _songs = _interopRequireDefault(require("./songs"));
var _album = _interopRequireDefault(require("./album"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use('/song', _songs["default"]);
router.use('/album', _album["default"]);
var _default = router;
exports["default"] = _default;