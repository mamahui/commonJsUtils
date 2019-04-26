"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _type = _interopRequireDefault(require("./type"));

var _toast = _interopRequireDefault(require("./toast"));

/**
 * @Description:
 * @Author: mahui
 * @Date: 2019/4/24 2:01 PM
 */
var _default = (0, _objectSpread2["default"])({}, _type["default"], {
  toast: _toast["default"]
});

exports["default"] = _default;