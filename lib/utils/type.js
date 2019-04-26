"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _isInteger = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-integer"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

/**
 * @Description: 对数据类型进行判断
 * @Author: mahui
 * @Date: 2019/4/24 2:02 PM
 */
// 判断是否为字符串
var isString = function isString(source) {
  return typeof source === 'string' || !!source && (0, _typeof2["default"])(source) === 'object' && Object.prototype.toString.call(source) === '[object String]';
}; // 判断是否为数组


var isArray = function isArray(source) {
  return (0, _isArray["default"])(source) || Object.prototype.toString.call(source) === '[object Array]';
}; // 判断是否为对象


var isObject = function isObject(source) {
  return !!source && Object.prototype.toString.call(source) === '[object Object]';
}; // 判断是否为函数


var isFunction = function isFunction(source) {
  return !!source && Object.prototype.toString.call(source) === '[object Function]';
}; // 判断是否为数字


var isNumber = function isNumber(source) {
  return !!source && (source.constructor === Number || source instanceof Number);
}; // 判断是否为整数


var isInt = function isInt(source) {
  return !!source && (0, _isInteger["default"])(source);
}; // 判断是否等于null或者undefined


var isNill = function isNill(source) {
  return source == null;
};

var _default = {
  isString: isString,
  isArray: isArray,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isInt: isInt,
  isNill: isNill
};
exports["default"] = _default;