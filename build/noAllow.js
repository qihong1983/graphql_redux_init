webpackJsonp([25],{

/***/ 2135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _antd.Layout.Content;

var noAllow = function (_React$Component) {
	_inherits(noAllow, _React$Component);

	function noAllow(props) {
		_classCallCheck(this, noAllow);

		return _possibleConstructorReturn(this, (noAllow.__proto__ || Object.getPrototypeOf(noAllow)).call(this, props));
	}

	_createClass(noAllow, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_antd.Layout,
				null,
				_react2.default.createElement(
					Content,
					{ style: { background: '#ffffff', padding: 24, paddingTop: "80px", margin: 0, minHeight: '0px' } },
					_react2.default.createElement(_antd.Alert, {
						message: '\u6CA1\u6709\u6743\u9650',
						description: '\u8BF7\u8054\u7CFB\u675C\u946B\uFF08bjduxin@corp.netease.com\uFF09\u5F00\u901A\uFF01',
						type: 'warning',
						showIcon: true
					})
				)
			);
		}
	}]);

	return noAllow;
}(_react2.default.Component);

exports.default = noAllow;

/***/ })

});
//# sourceMappingURL=noAllow.js.map