"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _upload = _interopRequireDefault(require("../helpers/upload"));
var _Album = _interopRequireDefault(require("../controllers/Album"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.render('album');
});
router.post('/add', _upload["default"].single('file'), _Album["default"].NewAlbum);
router.get('/fetch/albums', _Album["default"].FetchallAlbum);
var _default = router;
exports["default"] = _default;