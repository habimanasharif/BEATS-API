"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var AlbumSchema = new Schema({
  albumname: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    "default": Date.now(),
    type: Date
  }
});
var Album = _mongoose["default"].model('Album', AlbumSchema);
module.exports = Album;