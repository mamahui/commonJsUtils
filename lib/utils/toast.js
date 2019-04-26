"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

// eslint-disable-next-line
var domCss = 'position: fixed;left: 50%;top: 50%;width: auto;height: auto;-webkit-transform: translate(-50%,-50%);z-index: 10000;';
var domCssMask = 'left: 0;top: 0;width: 100%;height:100%;-webkit-transform: translate(0,0)';
var conCss = 'width: 100%;height:100%;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack: center;background-color: rgba(0,0,0, 0.3)'; // eslint-disable-next-line

var textCss = 'min-width:1.6rem;max-width: 4.2rem;padding: 0.24rem 0.4rem;text-align: center;color: #fff;font-size: 0.37333rem;line-height: 1.5;word-break: break-all;background-color: rgba(58, 58, 58, 0.9);border-radius: 0.08rem;';
var id = 'toast';
var textId = 'toast-text';
var dom = null;
var timer = null;

var Toast =
/*#__PURE__*/
function () {
  function Toast() {
    (0, _classCallCheck2["default"])(this, Toast);
    this.Loading = this.Loading.bind(this);
    this.info = this.info.bind(this);
    this.hide = this.hide.bind(this);
    this.dom = document.getElementById(id);
  }

  (0, _createClass2["default"])(Toast, [{
    key: "Loading",
    value: function Loading(text) {}
  }, {
    key: "info",
    value: function info() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
      var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    }
  }, {
    key: "hide",
    value: function hide() {}
  }]);
  return Toast;
}();

function toast() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  dom = document.getElementById(id);

  if (!dom) {
    dom = document.createElement('div');
    dom.id = id;
    dom.setAttribute('style', domCss);
    document.body.appendChild(dom);
    dom.innerHTML = "<div style=\"".concat(conCss, "\"><div id=\"").concat(textId, "\" style=\"").concat(textCss, "\">").concat(text, "</div></div>");
  } else {
    clearTimeout(timer);
    var textDom = document.getElementById(textId);
    textDom.innerHTML = text;
  }

  if (mask) {
    // dom.style = domCss + domCssMask;
    dom.setAttribute('style', domCss + domCssMask);
  } else {
    dom.setAttribute('style', domCss);
  }

  timer = setTimeout(function () {
    dom.remove();
    clearTimeout(timer);
  }, time);
}

var _default = toast;
exports["default"] = _default;