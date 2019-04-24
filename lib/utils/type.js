'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @Description: 对数据类型进行判断
 * @Author: mahui
 * @Date: 2019/4/24 2:02 PM
 */
// 判断是否为字符串
var isString = function isString(source) {
    return typeof source === 'string' || !!source && (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' && Object.prototype.toString.call(source) === '[object String]';
};
// 判断是否为数组
var isArray = function isArray(source) {
    return Array.isArray(source) || Object.prototype.toString.call(source) === '[object Array]';
};
// 判断是否为对象
var isObject = function isObject(source) {
    return !!source && Object.prototype.toString.call(source) === '[object Object]';
};
// 判断是否为函数
var isFunction = function isFunction(source) {
    return !!source && Object.prototype.toString.call(source) === '[object Function]';
};
// 判断是否为数字
var isNumber = function isNumber(source) {
    return !!source && (source.constructor === Number || source instanceof Number);
};
// 判断是否为整数
var isInt = function isInt(source) {
    return !!source && Number.isInteger(source);
};
// 判断是否等于null或者undefined
var isNill = function isNill(source) {
    return source == null;
};

exports.default = {
    isString: isString,
    isArray: isArray,
    isObject: isObject,
    isFunction: isFunction,
    isNumber: isNumber,
    isInt: isInt,
    isNill: isNill
};