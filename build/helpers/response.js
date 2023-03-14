"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(res, status, message, data, error) {
  return res.status(status).json(error ? {
    status: status,
    message: message,
    error: error
  } : {
    status: status,
    message: message,
    data: data
  });
};
exports["default"] = _default;