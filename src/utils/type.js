/**
 * @Description: 对数据类型进行判断
 * @Author: mahui
 * @Date: 2019/4/24 2:02 PM
 */
// 判断是否为字符串
const isString = (source) => {
    return typeof source === 'string' ||
        ((!!source && typeof source === 'object') && Object.prototype.toString.call(source) === '[object String]');
};
// 判断是否为数组
const isArray = (source) => {
    return Array.isArray(source) || Object.prototype.toString.call(source) ==='[object Array]' ;
};
// 判断是否为对象
const isObject = (source) => {
    return !!source && Object.prototype.toString.call(source) === '[object Object]';
};
// 判断是否为函数
const isFunction = (source) => {
    return !!source && Object.prototype.toString.call(source) === '[object Function]';
};
// 判断是否为数字
const isNumber = (source) => {
    return !!source && (source.constructor === Number || source instanceof Number);
};
// 判断是否为整数
const isInt = (source) => {
    return !!source && Number.isInteger(source);
};
// 判断是否等于null或者undefined
const isNill = (source) => {
    return source == null;
};

export default {
    isString,
    isArray,
    isObject,
    isFunction,
    isNumber,
    isInt,
    isNill,
}