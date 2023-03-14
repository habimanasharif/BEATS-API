"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var SongSchema = new Schema({
  originalname: {
    type: String,
    required: true
  },
  artistname: {
    type: String,
    required: true
  },
  playlist: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Album',
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  createdAt: {
    "default": Date.now(),
    type: Date
  }
});
var Song = _mongoose["default"].model('song', SongSchema);
module.exports = Song;