/**
 * @Description:
 * @Author: mahui
 * @Date: 2019/4/25 5:42 PM
 */

import utils from './../src/utils'
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('utils：工具方法测试', function() {
    describe('utils.isString',function () {
        it('传入一个字符串返回true，否则返回false', function () {
            assert.equal(true, utils.isString('12313'));
            assert.equal(false, utils.isString());
            assert.equal(false, utils.isString(1231));
            expect(utils.isString(null)).to.equal(false);
        });
    });
    describe('utils.isFunction', function() {
        it('传入一个函数返回true，否则返回false', function() {
            assert.equal(true, utils.isFunction(() => {}));
            assert.equal(false, utils.isFunction(123));
            assert.equal(false, utils.isFunction());
        });
    });
});