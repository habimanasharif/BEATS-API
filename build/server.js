"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-console */

var PORT = process.env.PORT || 3000;
_app["default"].listen(PORT, function () {
  return console.log("Listening on ".concat(PORT));
});