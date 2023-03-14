"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("@babel/polyfill");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _gridfsStream = _interopRequireDefault(require("gridfs-stream"));
var _database = _interopRequireDefault(require("./database"));
var _routes = _interopRequireDefault(require("./routes"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-console */

var app = (0, _express["default"])();
(0, _database["default"])();
app.enable('trust proxy');
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.set('view engine', 'ejs');
app.use(_routes["default"]);
// const mongoURI = 'mongodb+srv://admin:admin@cluster0.ayqwu.mongodb.net/TourRadar?retryWrites=true&w=majority';
// mongo connection
var conn = _mongoose["default"].createConnection(_config["default"].MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var gfs;
// init gfs
conn.once('open', function () {
  gfs = (0, _gridfsStream["default"])(conn.db, _mongoose["default"].mongo);
  gfs.collection('uploads');
});
app.get('/song/play/:filename', function (req, res) {
  gfs.files.findOne({
    filename: req.params.filename
  }, function (err, file) {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // Read output to browser
    var readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});
app.get('/image/view/:filename', function (req, res) {
  gfs.files.findOne({
    filename: req.params.filename
  }, function (err, file) {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // Read output to browser
    var readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});
var _default = app;
exports["default"] = _default;