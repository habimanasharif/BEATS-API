"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _upload = _interopRequireDefault(require("../helpers/upload"));
var _Song = _interopRequireDefault(require("../controllers/Song"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.render('index');
});
router.post('/upload', _upload["default"].single('file'), _Song["default"].AddSong);
router.get('/fetch/:playlist', _Song["default"].fetchSongs);
var _default = router;
exports["default"] = _default;