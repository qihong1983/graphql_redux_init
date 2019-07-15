webpackJsonp([15],{

/***/ 2137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(102);

var _reactRedux = __webpack_require__(850);

var _redux = __webpack_require__(58);

var _taffy = __webpack_require__(2159);

var _taffy2 = _interopRequireDefault(_taffy);

var _antd = __webpack_require__(110);

var _channelManagerUtil = __webpack_require__(2151);

var _echarts = __webpack_require__(428);

var _echarts2 = _interopRequireDefault(_echarts);

var _chartConfigs = __webpack_require__(2152);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(429);

var _nprogress = __webpack_require__(2148);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _utils = __webpack_require__(2150);

var _retentionAnalysis = __webpack_require__(2236);

var actionCreators = _interopRequireWildcard(_retentionAnalysis);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = _antd.Button.Group;
var TabPane = _antd.Tabs.TabPane;

// //Echarts 组件
var SubMenu = _antd.Menu.SubMenu;
var Content = _antd.Layout.Content;


var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;

// 推荐在入口文件全局设置 locale

_moment2.default.locale('zh-cn');

var thunk = __webpack_require__(281).default;

var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;


var dateFormat = 'YYYY-MM-DD';

var monthFormat = 'YYYY-MM';

//用户权限列表

var retentionAnalysis = function (_React$Component) {
	_inherits(retentionAnalysis, _React$Component);

	function retentionAnalysis(props) {
		_classCallCheck(this, retentionAnalysis);

		return _possibleConstructorReturn(this, (retentionAnalysis.__proto__ || Object.getPrototypeOf(retentionAnalysis)).call(this, props));
	}

	_createClass(retentionAnalysis, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_nprogress2.default.start();

			var groupList = {
				appCode: this.props.retentionAnalysis.appCode,
				channelGroup: this.props.retentionAnalysis.channelGroup,
				channelCategory: this.props.retentionAnalysis.channelCategory
			};
			this.getChannelGroupList(groupList);

			var firmParam = {
				firm: this.props.retentionAnalysis.firm,
				brand: ""
			};

			this.getFirmList(firmParam);

			var tableParam = {
				appCode: this.props.retentionAnalysis.appCode,
				channelCategory: this.props.retentionAnalysis.channelCategory,
				channelGroup: this.props.retentionAnalysis.channelGroup,
				channelName: this.props.retentionAnalysis.channelName,
				startDate: this.props.retentionAnalysis.startDate,
				endDate: this.props.retentionAnalysis.endDate,
				trendType: this.props.retentionAnalysis.trendType,
				firm: this.props.retentionAnalysis.firm,
				brand: this.props.retentionAnalysis.brand,
				type: this.props.retentionAnalysis.type
			};

			this.getTables(tableParam);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_nprogress2.default.done();
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps) {

			if (nextProps.retentionAnalysis.excelData != this.props.retentionAnalysis.excelData) {
				if (this.props.retentionAnalysis.type == '1') {
					var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.retentionAnalysis.columns);
					var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.retentionAnalysis.columns);
					var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.retentionAnalysis.excelData.leftPercent, helperColumns);

					(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
				} else {
					var _downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.retentionAnalysis.columns);
					var _helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.retentionAnalysis.columns);
					var _downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.retentionAnalysis.excelData.leftCount, _helperColumns);

					(0, _channelManagerUtil.downloadExcle)(_downloadDatas, _downloadTitles, this.fileName);
				}
			}

			// if (nextProps.profileList.Result.excelData != this.props.profileList.Result.excelData) {
			// 	let downloadTitles = dealDownloadTitle(this.props.profileList.TableColumns.tableColumns);
			// 	let helperColumns = dealDownloadColumns(this.props.profileList.TableColumns.tableColumns);
			// 	let downloadDatas = dealDownloadData(nextProps.profileList.Result.excelData, helperColumns);

			// 	downloadExcle(downloadDatas, downloadTitles, this.fileName);
			// }

		}
	}, {
		key: 'getTables',
		value: function getTables(data) {
			this.props.getTables(data);
		}
	}, {
		key: 'getFirmList',
		value: function getFirmList(data) {
			this.props.getFirmList(data, this.props.getBrandList.bind(this));
		}
	}, {
		key: 'getBrandList',
		value: function getBrandList(data) {
			this.props.getBrandList(data);
		}
	}, {
		key: 'getChannelGroupList',
		value: function getChannelGroupList(data) {
			this.props.getChannelGroupList(data);
		}
	}, {
		key: 'changeOs',
		value: function changeOs(value) {
			var data = _defineProperty({
				appCode: value,
				channelCategory: "",
				channelGroup: "",
				channelName: "",
				channelList: []
			}, 'channelGroup', "");

			this.props.changeOs(data, this.getChannelGroupList.bind(this));
		}
	}, {
		key: 'changeChannelCategory',
		value: function changeChannelCategory(value) {

			var data = _defineProperty({
				appCode: this.props.retentionAnalysis.appCode,
				channelCategory: value,
				channelGroup: "",
				channelName: "",
				channelList: []
			}, 'channelGroup', "");

			this.props.changeChannelCategory(data, this.getChannelGroupList.bind(this));
		}

		/**
   * 搜索渠道组
   * @method handleChange
   * @param value {String}
   */

	}, {
		key: 'handleChange',
		value: function handleChange(value) {

			var data = {
				appCode: this.props.retentionAnalysis.appCode,
				channelGroup: value,
				channelCategory: this.props.retentionAnalysis.channelCategory
			};

			this.props.getChannelGroupList(data);
		}
	}, {
		key: 'searchChannel',
		value: function searchChannel(value) {

			var data = {
				appCode: this.props.retentionAnalysis.appCode,
				channelCategory: this.props.retentionAnalysis.channelCategory,
				channelGroup: this.props.retentionAnalysis.channelGroup,
				channelName: value
			};

			this.props.searchChannel(data);
		}
	}, {
		key: 'changeFirm',
		value: function changeFirm(value) {

			var data = {
				firm: value,
				brand: ""
			};

			this.getFirmList(data);
		}
	}, {
		key: 'changeBrand',
		value: function changeBrand(value) {

			var data = {
				firm: this.props.retentionAnalysis.firm,
				brand: value
			};
			this.getBrandList(data);
		}

		/**
   * 开始时间和结束时间切换
   * @method changeDate
   * @param value {Object}
   * @param dateString {Array}
   */

	}, {
		key: 'changeDate',
		value: function changeDate(value, dateString) {

			if (dateString[1] > this.props.retentionAnalysis.maxDate) {

				_antd.notification['error']({
					message: '日期错误',
					description: '超出日期选择范围'
				});
			} else {
				this.props.setDate(dateString);
			}
		}
	}, {
		key: 'clickQuery',
		value: function clickQuery() {
			var tableParam = {
				appCode: this.props.retentionAnalysis.appCode,
				channelCategory: this.props.retentionAnalysis.channelCategory,
				channelGroup: this.props.retentionAnalysis.channelGroup,
				channelName: this.props.retentionAnalysis.channelName,
				startDate: this.props.retentionAnalysis.startDate,
				endDate: this.props.retentionAnalysis.endDate,
				trendType: this.props.retentionAnalysis.trendType,
				firm: this.props.retentionAnalysis.firm,
				brand: this.props.retentionAnalysis.brand,
				type: this.props.retentionAnalysis.type
			};

			this.getTables(tableParam);
		}
	}, {
		key: 'changeDataType',
		value: function changeDataType(e) {

			var tableParam = {
				appCode: this.props.retentionAnalysis.appCode,
				channelCategory: this.props.retentionAnalysis.channelCategory,
				channelGroup: this.props.retentionAnalysis.channelGroup,
				channelName: this.props.retentionAnalysis.channelName,
				startDate: this.props.retentionAnalysis.startDate,
				endDate: this.props.retentionAnalysis.endDate,
				trendType: e.target.value,
				firm: this.props.retentionAnalysis.firm,
				brand: this.props.retentionAnalysis.brand,
				type: this.props.retentionAnalysis.type
			};

			this.getTables(tableParam);
		}
	}, {
		key: 'changeType',
		value: function changeType(e) {

			var data = {
				type: e.target.value,
				trendType: this.props.retentionAnalysis.trendType
			};

			this.props.changeType(this.props.retentionAnalysis.tableTotal, data);
		}
	}, {
		key: 'getDownloadName',
		value: function getDownloadName(data) {
			var prefix = '留存分析-';
			var fileName = '全部';
			var trendType = '日留存';
			var isRateOrNumber = '留存率';
			if (data.trendType == 1) {
				trendType = '日留存';
			} else if (data.type == 2) {
				trendType = '周留存';
			} else {
				trendType = '月留存';
			}

			if (data.type == '1') {
				isRateOrNumber = '留存率';
			} else {
				isRateOrNumber = '留存用户数';
			}

			if (data.brand) {
				fileName = data.brand;
			} else if (data.firm) {
				fileName = data.firm;
			} else if (data.channelName) {
				fileName = data.channelName;
			} else if (data.channelGroup) {
				fileName = data.channelGroup;
			} else if (data.channelCategory) {
				fileName = data.channelCategory == '1' ? '线上' : '线下';
			} else if (data.appCode) {
				fileName = data.appCode == '24' ? 'Android' : 'iOS';
			}

			return prefix + fileName + '-' + trendType + '-' + isRateOrNumber + '-(' + data.startDate + '至' + data.endDate + ').xlsx';
		}
	}, {
		key: 'downloadExcel',
		value: function downloadExcel() {

			var data = {
				appCode: this.props.retentionAnalysis.appCode,
				channelCategory: this.props.retentionAnalysis.channelCategory,
				channelGroup: this.props.retentionAnalysis.channelGroup,
				channelName: this.props.retentionAnalysis.channelName,
				startDate: this.props.retentionAnalysis.startDate,
				endDate: this.props.retentionAnalysis.endDate,
				trendType: this.props.retentionAnalysis.trendType,
				firm: this.props.retentionAnalysis.firm,
				brand: this.props.retentionAnalysis.brand,
				type: this.props.retentionAnalysis.type
			};

			this.fileName = this.getDownloadName(data);

			// var downExcelData = {
			// 	appCode: this.props.profileList.Param.appCode,
			// 	channelGroup: this.props.profileList.Param.channelGroup,
			// 	channelName: this.props.profileList.Param.channelName,
			// 	startDate: this.props.profileList.Param.startDate,
			// 	endDate: this.props.profileList.Param.endDate,
			// 	channelCategory: this.props.profileList.Param.channelCategory,
			// 	offset: this.props.profileList.Pagination.current,
			// 	limit: this.props.profileList.Pagination.pageSize,
			// 	type: this.props.profileList.Param.type
			// }

			this.props.getDownLoadData(data);
		}
	}, {
		key: 'render',
		value: function render() {

			var pagination = {
				// current: this.props.adImpression.offset,
				// pageSize: this.props.adImpression.limit,
				// total: this.props.adImpression.total,
				// defaultPageSize: this.props.adImpression.limit,
				showSizeChanger: true
			};

			return _react2.default.createElement(
				_antd.Layout,
				{ style: { marginLeft: 180, position: "relative", marginTop: 60, overflow: "hidden" } },
				_react2.default.createElement(
					Content,
					{ className: 'channel_filter' },
					_react2.default.createElement(
						_antd.Form,
						{ layout: 'inline' },
						_react2.default.createElement(
							FormItem,
							{ label: '\u64CD\u4F5C\u7CFB\u7EDF' },
							_react2.default.createElement(
								_antd.Select,
								{
									placeholder: '\u64CD\u4F5C\u7CFB\u7EDF\u9009\u62E9',
									dropdownMatchSelectWidth: true,
									value: this.props.retentionAnalysis.appCode,
									className: 'online',
									onChange: this.changeOs.bind(this) },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								_react2.default.createElement(
									Option,
									{ value: '24' },
									'Android'
								),
								_react2.default.createElement(
									Option,
									{ value: '27' },
									'iOS'
								)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '\u7EBF\u4E0A\\\u7EBF\u4E0B' },
							_react2.default.createElement(
								_antd.Select,
								{
									placeholder: '\u8BF7\u9009\u62E9\u7EBF\u4E0A\u7EBF\u4E0B',
									dropdownMatchSelectWidth: true,
									value: this.props.retentionAnalysis.channelCategory,
									onChange: this.changeChannelCategory.bind(this),
									className: 'appCode'
								},
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								_react2.default.createElement(
									Option,
									{ value: '1' },
									'\u7EBF\u4E0A'
								),
								_react2.default.createElement(
									Option,
									{ value: '2' },
									'\u7EBF\u4E0B'
								)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '\u6E20\u9053\u7EC4' },
							_react2.default.createElement(
								_antd.Select,
								{
									showSearch: true,
									placeholder: '\u641C\u7D22\u6E20\u9053\u7EC4',
									dropdownMatchSelectWidth: true,
									value: this.props.retentionAnalysis.channelGroup,
									className: 'channelGroup',
									optionFilterProp: 'children',
									onChange: this.handleChange.bind(this) },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								(0, _utils.renderGroupList)(this.props.retentionAnalysis.channelGroupList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(
								_antd.Select,
								{
									mode: 'combobox',
									placeholder: '\u641C\u7D22\u6E20\u9053\u540D\u79F0',
									notFoundContent: '\u6682\u65E0\u76F8\u5173\u6570\u636E',
									className: 'searchChannel',
									defaultActiveFirstOption: false,
									showArrow: false,
									value: this.props.retentionAnalysis.channelName,
									filterOption: false,
									onChange: this.searchChannel.bind(this)
								},
								(0, _utils.getChannelList)(this.props.retentionAnalysis.channelList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '\u5382\u5546' },
							_react2.default.createElement(
								_antd.Select,
								{
									placeholder: '\u8BF7\u9009\u62E9\u5382\u5546',
									dropdownMatchSelectWidth: true,
									value: this.props.retentionAnalysis.firm,
									onChange: this.changeFirm.bind(this),
									className: 'appCode'
								},
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								(0, _utils.getFirmList)(this.props.retentionAnalysis.firmList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '\u54C1\u724C' },
							_react2.default.createElement(
								_antd.Select,
								{
									placeholder: '\u8BF7\u9009\u62E9\u5382\u5546',
									dropdownMatchSelectWidth: true,
									value: this.props.retentionAnalysis.brand,
									onChange: this.changeBrand.bind(this),
									className: 'appCode'
								},
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								(0, _utils.getBrandList)(this.props.retentionAnalysis.brandList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(RangePicker, {
								defaultValue: [(0, _moment2.default)(this.props.retentionAnalysis.startDate, dateFormat), (0, _moment2.default)(this.props.retentionAnalysis.endDate, dateFormat)],
								format: dateFormat,
								allowClear: false,
								onChange: this.changeDate.bind(this),
								className: 'channel_DataPicker'
							})
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(
								_antd.Button,
								{ type: 'primary', size: "default", onClick: this.clickQuery.bind(this) },
								'\u67E5\u8BE2'
							)
						)
					)
				),
				_react2.default.createElement(
					Content,
					{ className: 'channel_table', style: { minHeight: "300px !important" } },
					_react2.default.createElement(
						'div',
						{ style: { width: "100%", marginBottom: "20px" }, className: 'clearfix' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', onClick: this.downloadExcel.bind(this), style: { float: "right" }, icon: 'download' },
							'\u4E0B\u8F7D'
						),
						_react2.default.createElement(
							_antd.Radio.Group,
							{ value: this.props.retentionAnalysis.trendType, style: { float: "right", marginRight: "20px" }, onChange: this.changeDataType.bind(this) },
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: '1' },
								'\u65E5\u7559\u5B58'
							),
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: '2' },
								'\u5468\u7559\u5B58'
							),
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: '3' },
								'\u6708\u7559\u5B58'
							)
						),
						_react2.default.createElement(
							_antd.Radio.Group,
							{ value: this.props.retentionAnalysis.type, style: { float: "right", marginRight: "20px" }, onChange: this.changeType.bind(this) },
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: '1' },
								'\u7559\u5B58\u7387'
							),
							_react2.default.createElement(
								_antd.Radio.Button,
								{ value: '2' },
								'\u7559\u5B58\u7528\u6237\u6570'
							)
						)
					),
					_react2.default.createElement(_antd.Table, {
						loading: this.props.retentionAnalysis.tablesLoading,
						locale: { "emptyText": "暂无数据" },
						columns: (0, _utils.dealConfigColumns)(this.props.retentionAnalysis.columns),
						dataSource: this.props.retentionAnalysis.tableData,
						pagination: { showSizeChanger: true }
					})
				)
			);
		}
	}]);

	return retentionAnalysis;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	return {
		retentionAnalysis: state.qReducer.retentionAnalysis
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	//全量
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(retentionAnalysis);

/***/ }),

/***/ 2146:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else context[name] = definition()
}('reqwest', this, function () {

  var context = this

  if ('window' in context) {
    var doc = document
      , byTag = 'getElementsByTagName'
      , head = doc[byTag]('head')[0]
  } else {
    var XHR2
    try {
      XHR2 = __webpack_require__(2149)
    } catch (ex) {
      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
    }
  }


  var httpsRe = /^http/
    , protocolRe = /(^\w+):\/\//
    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded'
        , 'requestedWith': xmlHttpRequest
        , 'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , 'xml':  'application/xml, text/xml'
            , 'html': 'text/html'
            , 'text': 'text/plain'
            , 'json': 'application/json, text/javascript'
            , 'js':   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o['crossOrigin'] === true) {
          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (context[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (context[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else if (XHR2) {
          return new XHR2()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function succeed(r) {
    var protocol = protocolRe.exec(r.url)
    protocol = (protocol && protocol[1]) || context.location.protocol
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
  }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (succeed(r)) success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o['headers'] || {}
      , h

    headers['Accept'] = headers['Accept']
      || defaultHeaders['accept'][o['type']]
      || defaultHeaders['accept']['*']

    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
    // breaks cross-origin requests with legacy browsers
    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials']
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    context[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o['method'] || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o['url']
      // convert non-string objects to query-string form unless o['processData'] is false
      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
        ? reqwest.toQueryString(o['data'])
        : (o['data'] || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

    // get the xhr from the factory if passed
    // if the factory returns null, fall-back to ours
    http = (o.xhr && o.xhr(o)) || xhr(o)

    http.open(method, url, o['async'] === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o['before'] && o['before'](http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(header) {
    // json, javascript, text/plain, text/html, xml
    if (header === null) return undefined; //In case of no content-type.
    if (header.match('json')) return 'json'
    if (header.match('javascript')) return 'js'
    if (header.match('text')) return 'html'
    if (header.match('xml')) return 'xml'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o['url']
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this

    fn = fn || function () {}

    if (o['timeout']) {
      this.timeout = setTimeout(function () {
        timedOut()
      }, o['timeout'])
    }

    if (o['success']) {
      this._successHandler = function () {
        o['success'].apply(o, arguments)
      }
    }

    if (o['error']) {
      this._errorHandlers.push(function () {
        o['error'].apply(o, arguments)
      })
    }

    if (o['complete']) {
      this._completeHandlers.push(function () {
        o['complete'].apply(o, arguments)
      })
    }

    function complete (resp) {
      o['timeout'] && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function timedOut() {
      self._timedOut = true
      self.request.abort()
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  , 'catch': function (fn) {
      return this.fail(fn)
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type']
      o['dataType'] && (o['type'] = o['dataType'])
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});


/***/ }),

/***/ 2147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	_mockjs2.default.mock("/data/overview/channelGroup.do", "post", {
		"status": true,
		"msg": "返回成功",
		"data|20": [{
			"appCode": 24,
			"channelCategory": 2,
			"channelDescribe": "",
			"channelGroup": "",
			"channelName": "@word(6)",
			"channelTypeId": 54,
			"flag": 1,
			"id": "@natural(10, 9999)",
			"isFree": 0,
			"programId": 3
		}]
	});

	//aaa

	_mockjs2.default.mock("/data/overview/channel.do", "post", {
		"status": true,
		"msg": "返回成功",
		"data|20": [{
			"appCode": 24,
			"channelCategory": 2,
			"channelDescribe": "华为-新闻",
			"channelGroup": "huawei_total_cpi_news",
			"channelName": "@word(12)",
			"channelTypeId": 134,
			"flag": 1,
			"id": 153,
			"isFree": 0,
			"programId": 3,
			"showCol": ""
		}]
	});

	_mockjs2.default.mock("/common/firm.do", "post", {
		"status": true,
		"msg": "返回成功",
		"data|20": [{
			"firm": "@word(5)",
			"id": "@natural(10, 9999)"
		}]
	});

	_mockjs2.default.mock("/common/brand.do", "post", {
		"status": true,
		"msg": "返回成功",
		"data|20": [{
			"brand": "@word(5)",
			"firm": "@word(5)",
			"id": "@natural(10, 9999)"
		}]
	});
}

/***/ }),

/***/ 2148:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 2149:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dealConfigColumns = exports.format2quartile = exports.getBrandList = exports.getFirmList = exports.getChannelList = exports.renderGroupList = exports.userAllow = exports.strToArr = exports.addKey = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _antd.Select.Option;

/**
 * 用于antdesigns Table数据渲染的key
 * @method addKey
 * @param data {Array} 数据
 * @param str {Array} 标识
 * @return arr {Array} [{}]
 */
var addKey = function addKey(data, str) {
	var arr = [];

	data.map(function (v, k) {
		v.key = str + k;
		arr.push(v);
	});

	return arr;
};

/**
 * strToArr
 * 将[1,2] 转变成 1,2
 * @method strToArr
 * @param data {String}
 * @return arr
 */
var strToArr = function strToArr(data) {
	var arr = [];
	var a = data.split(",");
	a.map(function (v, k) {
		arr.push(parseInt(v, 10));
	});
	return arr;
};

/**
 * 全部权限模块
 * @method userAllow
 * @return {Array} 
 */
var userAllow = function userAllow() {
	var list = [{
		key: "1",
		value: "data",
		cnName: "渠道数据",
		url: "/data"
	}, {
		key: "2",
		value: "manager",
		cnName: "渠道管理",
		url: "/manager"
	}, {
		key: "3",
		value: "sys",
		cnName: "系统管理",
		url: "/sys"
	}, {
		key: "4",
		value: "user",
		cnName: "用户管理",
		url: "/user"
	}];

	return list;
};

/**
 * 千分位
 * @method format2quartile
 * @param str {String} 10000
 * @param point {}
 * @return {String} 10,000
 */
var format2quartile = function format2quartile(str, point) {
	str = str + "";
	if (str === 'NaN' || str === 'Infinity') {
		return '--';
	}
	if (isNaN(str)) return str;
	if (!point || point == undefined || point == null) point = 4;
	if (parseFloat(str) === 0) return parseFloat(str);
	if (parseFloat(str) < 1) return parseFloat(str).toFixed(point);
	var pn = "";
	if (str.indexOf(".") > -1) {
		pn = str.substr(str.indexOf("."), str.length);
		str = str.substr(0, str.indexOf("."));
	}
	var len = str.length;
	var str2 = '';
	var max = Math.floor(len / 3);
	for (var i = 0; i < max; i++) {
		var s = str.slice(len - 3, len);
		str = str.substr(0, len - 3);
		str2 = ',' + s + str2;
		len = str.length;
	}
	str += str2;
	if (str.indexOf(",") == 0) str = str.substr(1, str.length);
	return str + pn.substr(0, 3);
};

/**
 * 渲染renderGroupList
 * @method renderGroupList
 * @return arr {Array} [{},{}]
 */
var renderGroupList = function renderGroupList(groupList) {
	var arr = [];

	groupList.map(function (v, k) {
		arr.push(_react2.default.createElement(
			Option,
			{ key: v.id, value: v.channelName },
			v.channelName
		));
	});

	return arr;
};

/**
 * 下载Excel名称规则
 * @method excelName
 * @param data {Array} 
 	//如果页面某个字段没有，可以不传
 	//从上到下顺序
	[{
		//操作系统
		name: "appCode",
		value: ""
	},{
		//线上线下
		name: "channelCategory",
		value: ""
	},{
		//渠道组
		name: "channelGroup",
		value: ""
	},{
		//渠道搜索
		name: "channelName"
		value: ""
	},{
		//单渠道
		name: "channel",
		value: ""
	},{
		//机型
		name: "model"
		value: ""
	},{
		//厂商
		name: "firm",
		value: ""
	},{
		//品牌
		name: "brand",
		value: ""
	}]
 * @param opt {opt}
 	{
		type: "xlsx",
		ame: "广告曝光"
 	}
 * @param date {Object}
 	{
		startDate: "2017-12-12",
		endDate: "2017-12-13"
 	}
 * @return {Object}
 	{
		type: 'xlsx',
		fileName: '广告曝光-' + optionName + '-(' + start + '-' + end + ')',
		worksheetName: '广告曝光-' + optionName + '-(' + start + '-' + end + ')'
	}
 */

var excelName = function excelName(data, opt, date) {

	return {
		type: 'xlsx',
		fileName: '广告曝光-' + optionName + '-(' + start + '-' + end + ')',
		worksheetName: '广告曝光-' + optionName + '-(' + start + '-' + end + ')'
	};
};

var getChannelList = function getChannelList(arr) {
	var obj = [];

	arr.map(function (v, k) {
		obj.push(_react2.default.createElement(
			Option,
			{ key: v.channelName, value: v.channelName },
			v.channelName
		));
	});

	return obj;
};

var getFirmList = function getFirmList(arr) {
	var obj = [];

	arr.map(function (v, k) {
		obj.push(_react2.default.createElement(
			Option,
			{ key: v.id, value: v.firm },
			v.firm
		));
	});

	return obj;
};

var getBrandList = function getBrandList(arr) {
	var obj = [];

	arr.map(function (v, k) {
		obj.push(_react2.default.createElement(
			Option,
			{ key: v.brand, value: v.brand },
			v.brand
		));
	});

	return obj;
};

var dealConfigColumns = function dealConfigColumns(datas) {

	for (var i = 0; i < datas.length; i++) {

		if (datas[i].dataIndex && !datas[i].render) {

			datas[i].render = function (text) {

				return _react2.default.createElement(
					'span',
					null,
					format2quartile(text)
				);
			};
		}
	}

	return datas;
};

exports.addKey = addKey;
exports.strToArr = strToArr;
exports.userAllow = userAllow;
exports.renderGroupList = renderGroupList;
exports.getChannelList = getChannelList;
exports.getFirmList = getFirmList;
exports.getBrandList = getBrandList;
exports.format2quartile = format2quartile;
exports.dealConfigColumns = dealConfigColumns;

/***/ }),

/***/ 2151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ExportTool = __webpack_require__(427);

var getRandomPassword = function getRandomPassword(minLength, maxLength) {
    var text = ['abcdefghijklmnopqrstuvwxyz_', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '1234567890', '~@#$%^&*_+-='];
    var rand = function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    var len = rand(minLength, maxLength); // 长度为6-12
    var pw = '';
    for (var i = 0; i < len; ++i) {
        var strpos = rand(0, 3);
        pw += text[strpos].charAt(rand(0, text[strpos].length - 1));
    }
    return pw;
};

var dealDownloadTitle = function dealDownloadTitle(cols) {
    var columns = cols.map(function (item) {
        if (item.dataIndex != '') {
            return item.title;
        }
    });
    for (var i = 0; i < columns.length; i++) {
        if (typeof columns[i] == 'undefined') {
            columns.splice(i, 1);
            i--;
        }
    }
    return columns;
};

var dealDownloadColumns = function dealDownloadColumns(columns) {
    for (var i = 0; i < columns.length; i++) {
        if (columns[i].dataIndex == '') {
            columns.splice(i, 1);
            i--;
        }
    }
    return columns;
};

var dealDownloadData = function dealDownloadData(datas, columns) {
    var newObjs = [];
    for (var j = 0; j < datas.length; j++) {
        newObjs[j] = {};
    }
    for (var i = 0; i < columns.length; i++) {
        var curKey = columns[i].dataIndex;
        for (var _j = 0; _j < datas.length; _j++) {
            var curObj = datas[_j];
            switch (curKey) {
                case 'appCode':
                    newObjs[_j][curKey] = curObj[curKey] == '24' ? 'Android' : 'iOS';
                    break;
                case 'channelCategory':
                    newObjs[_j][curKey] = curObj[curKey] == '1' ? '线上' : '线下';
                    break;
                case 'isFree':
                    newObjs[_j][curKey] = curObj[curKey] == '0' ? '是' : '否';
                    break;
                default:
                    newObjs[_j][curKey] = curObj[curKey];
            }
        }
    }
    return newObjs;
};

var getDownloadName = function getDownloadName(data) {

    var prefix = '机型管理-';
    var fileName = '全部';
    if (data.brand) {
        fileName = data.brand;
    } else if (data.firm) {
        fileName = data.firm;
    } else if (data.deviceModel) {
        fileName = data.deviceModel;
    } else if (data.appCode) {
        fileName = data.appCode == '24' ? 'Android' : 'iOS';
    }
    return prefix + fileName + '.xlsx';
};

var downloadExcle = function downloadExcle(dataList, columns, fileName) {
    var option = {};
    option.fileName = fileName;
    option.datas = [{
        sheetData: dataList,
        sheetHeader: columns
    }];
    var toExcel = new ExportTool(option);
    toExcel.saveExcel();
};

exports.getRandomPassword = getRandomPassword;
exports.getDownloadName = getDownloadName;
exports.downloadExcle = downloadExcle;
exports.dealDownloadTitle = dealDownloadTitle;
exports.dealDownloadData = dealDownloadData;
exports.dealDownloadColumns = dealDownloadColumns;

/***/ }),

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Bar = exports.Map = exports.Pie = exports.Line = undefined;

var _utils = __webpack_require__(2150);

/**
 * 图表模板 线图，柱状图，折叠柱状图通用
 * @method Line 
 * @param opt {Object} 	{
			"names": ["miliao_news_group", "oppo_news", "huawei_store"],
			"xAxis": ["2017-12-11", "2017-12-12"],
			"series": [{
				"name": "miliao_news_group",
				"type": "line",
				"stack": "miliao_news_group",
				"data": [3.38, 4.17]
			}, {
				"name": "oppo_news",
				"type": "line",
				"stack": "oppo_news",
				"data": [3.83, 9.72]
			}, {
				"name": "huawei_store",
				"type": "line",
				"stack": "huawei_store",
				"data": [2.62, 4.67]
			}]
		}
 * @return {Object} 模板
 */

var Line = function Line(opt) {

	var config = {
		"title": {
			"text": ""
		},
		"color": ["#7988E1", "#74c9ff", "#a9e48f", "#ffbea1", "#f183a0", "#9DA8F0", "#816CA8", "#9DA8F0", "#ABD9ED", "#6CBADC"],
		"tooltip": {
			"trigger": "axis"
		},
		"legend": {
			"type": 'scroll',
			"data": opt.names,
			"left": "left",
			"icon": "rect",
			"itemWidth": 15,
			"orient": "horizontal",
			"align": "left",
			"width": "auto",
			"padding": [0, 20],
			"pageIconColor": "#6d7ac9",
			"pageIconInactiveColor": "#eceffa",
			"tooltip": {
				"show": true
			},
			formatter: function formatter(name) {
				return name.length > 10 ? name.slice(0, 10) + "..." : name;
			}
		},
		"grid": {
			"top": "15%",
			"left": "3%",
			"right": "4%",
			"bottom": "3%",
			"containLabel": true
		},
		"toolbox": {},
		"xAxis": {
			"type": "category",
			"boundaryGap": false,
			"data": opt.xAxis,
			"showAllSymbol": false,
			"splitNumber": 0,
			"silent": false,
			"interval": 0,
			"axisLabel": {
				"interval": "auto",
				"show": true,
				"splitNumber": 0
			},
			"axisTick": {
				"interval": 0
			}
		},
		"yAxis": {
			"type": "value",
			"axisLabel": {
				"formatter": "{value} "
			}
		},
		"series": opt.series
	};

	return config;
};

var Pie = function Pie(obj) {
	var config = {
		title: {
			text: ''
		},
		tooltip: {
			trigger: 'item',
			// formatter: "{a} <br/>{b} : {c} ({d}%)"
			formatter: function formatter(params) {

				return params.seriesName + "<br />" + params.data.name + ' : ' + (0, _utils.format2quartile)(params.data.value, 0) + '(' + params.percent + '%)';
			}
		},
		"color": ["#7988E1", "#74c9ff", "#a9e48f", "#ffbea1", "#f183a0", "#9DA8F0", "#816CA8", "#9DA8F0", "#ABD9ED", "#6CBADC"],

		series: [{
			name: obj.name,
			type: 'pie',
			// radius: '50%',
			// center: ['50%', '50%'],

			label: {
				normal: {
					show: false,
					position: 'outside'
				}
			},
			data: obj.list,
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};

	return config;
};

var Map = function Map(obj) {
	var config = {
		title: {
			text: '',
			subtext: '',
			left: ''
		},
		"color": ["#7988E1", "#74c9ff", "#a9e48f", "#ffbea1", "#f183a0", "#9DA8F0", "#816CA8", "#9DA8F0", "#ABD9ED", "#6CBADC"],
		tooltip: {
			trigger: 'item'
		},
		visualMap: {
			min: 0,
			max: obj.max,
			left: 'left',
			top: 'bottom',
			text: ['高', '低'], // 文本，默认为数值文本
			color: obj.color,
			calculable: true
		},

		series: [{
			name: '新增用户地域分布',
			type: 'map',
			mapType: 'china',
			roam: false,
			label: {
				normal: {
					show: true
				},
				emphasis: {
					show: true
				}
			},
			data: obj.areaData
		}]
	};

	return config;
};

var Bar = function Bar(opt) {

	var config = {
		"title": {
			"text": ""
		},
		"color": ["#7988E1", "#74c9ff", "#a9e48f", "#ffbea1", "#f183a0", "#9DA8F0", "#816CA8", "#9DA8F0", "#ABD9ED", "#6CBADC"],
		"tooltip": {
			"trigger": "axis"
		},
		"legend": {
			"type": 'scroll',
			"data": opt.names,
			"left": "left",
			"icon": "rect",
			"itemWidth": 15,
			"orient": "horizontal",
			"align": "left",
			"width": "auto",
			"padding": [0, 20],
			"pageIconColor": "#6d7ac9",
			"pageIconInactiveColor": "#eceffa",
			"tooltip": {
				"show": true
				// ,
				// formatter: function(name) {
				// 	return (name.length > 10 ? (name.slice(0, 10) + "...") : name);
				// }
			} },
		"grid": {
			"top": "15%",
			"left": "3%",
			"right": "4%",
			"bottom": "3%",
			"containLabel": true
		},
		"toolbox": {},
		"xAxis": {
			"type": "category",
			// "boundaryGap": false,
			"data": opt.xAxis,
			"showAllSymbol": false,
			"splitNumber": 0,
			"silent": false,
			"interval": 0,
			"axisLabel": {
				"interval": "auto",
				"show": true,
				"splitNumber": 0
			},
			"axisTick": {
				"interval": 0
			}
		},
		"yAxis": {
			"type": "value",
			"axisLabel": {
				"formatter": "{value}"
			}
		},
		"series": opt.series
	};

	return config;
};

exports.Line = Line;
exports.Pie = Pie;
exports.Map = Map;
exports.Bar = Bar;

/***/ }),

/***/ 2156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./taffy/lib/taffy": 2160
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2156;


/***/ }),

/***/ 2158:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 2159:
/***/ (function(module, exports, __webpack_require__) {

var sep = __webpack_require__(2158).sep;
module.exports = __webpack_require__(2156)("./taffy"+sep+'lib'+sep+'taffy').taffy;

/***/ }),

/***/ 2160:
/***/ (function(module, exports) {

/*

 Software License Agreement (BSD License)
 http://taffydb.com
 Copyright (c)
 All rights reserved.


 Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following condition is met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 */

/*jslint        browser : true, continue : true,
 devel  : true, indent  : 2,    maxerr   : 500,
 newcap : true, nomen   : true, plusplus : true,
 regexp : true, sloppy  : true, vars     : false,
 white  : true
*/

// BUILD 193d48d, modified by mmikowski to pass jslint

// Setup TAFFY name space to return an object with methods
var TAFFY, exports, T;
(function () {
  'use strict';
  var
    typeList,     makeTest,     idx,    typeKey,
    version,      TC,           idpad,  cmax,
    API,          protectJSON,  each,   eachin,
    isIndexable,  returnFilter, runFilters,
    numcharsplit, orderByCol,   run
    ;


  if ( ! TAFFY ){
    // TC = Counter for Taffy DBs on page, used for unique IDs
    // cmax = size of charnumarray conversion cache
    // idpad = zeros to pad record IDs with
    version = '2.6.2'; // proposed mmikowski 2012-08-06
    TC      = 1;
    idpad   = '000000';
    cmax    = 1000;
    API     = {};

    protectJSON = function ( t ) {
      // ****************************************
      // *
      // * Takes: a variable
      // * Returns: the variable if object/array or the parsed variable if JSON
      // *
      // ****************************************  
      if ( TAFFY.isArray( t ) || TAFFY.isObject( t ) ){
        return t;
      }
      else {
        return JSON.parse( t );
      }
    };

    each = function ( a, fun, u ) {
      var r, i, x, y;
      // ****************************************
      // *
      // * Takes:
      // * a = an object/value or an array of objects/values
      // * f = a function
      // * u = optional flag to describe how to handle undefined values
      //   in array of values. True: pass them to the functions,
      //   False: skip. Default False;
      // * Purpose: Used to loop over arrays
      // *
      // ****************************************  
      if ( a && ((T.isArray( a ) && a.length === 1) || (!T.isArray( a ))) ){
        fun( (T.isArray( a )) ? a[0] : a, 0 );
      }
      else {
        for ( r, i, x = 0, a = (T.isArray( a )) ? a : [a], y = a.length;
              x < y; x++ )
        {
          i = a[x];
          if ( !T.isUndefined( i ) || (u || false) ){
            r = fun( i, x );
            if ( r === T.EXIT ){
              break;
            }

          }
        }
      }
    };

    eachin = function ( o, fun ) {
      // ****************************************
      // *
      // * Takes:
      // * o = an object
      // * f = a function
      // * Purpose: Used to loop over objects
      // *
      // ****************************************  
      var x = 0, r, i;

      for ( i in o ){
        if ( o.hasOwnProperty( i ) ){
          r = fun( o[i], i, x++ );
          if ( r === T.EXIT ){
            break;
          }
        }
      }

    };

    API.extend = function ( m, f ) {
      // ****************************************
      // *
      // * Takes: method name, function
      // * Purpose: Add a custom method to the API
      // *
      // ****************************************  
      API[m] = function () {
        return f.apply( this, arguments );
      };
    };

    isIndexable = function ( f ) {
      var i;
      // Check to see if record ID
      if ( T.isString( f ) && /[t][0-9]*[r][0-9]*/i.test( f ) ){
        return true;
      }
      // Check to see if record
      if ( T.isObject( f ) && f.___id && f.___s ){
        return true;
      }

      // Check to see if array of indexes
      if ( T.isArray( f ) ){
        i = true;
        each( f, function ( r ) {
          if ( !isIndexable( r ) ){
            i = false;

            return TAFFY.EXIT;
          }
        });
        return i;
      }

      return false;
    };

    runFilters = function ( r, filter ) {
      // ****************************************
      // *
      // * Takes: takes a record and a collection of filters
      // * Returns: true if the record matches, false otherwise
      // ****************************************
      var match = true;


      each( filter, function ( mf ) {
        switch ( T.typeOf( mf ) ){
          case 'function':
            // run function
            if ( !mf.apply( r ) ){
              match = false;
              return TAFFY.EXIT;
            }
            break;
          case 'array':
            // loop array and treat like a SQL or
            match = (mf.length === 1) ? (runFilters( r, mf[0] )) :
              (mf.length === 2) ? (runFilters( r, mf[0] ) ||
                runFilters( r, mf[1] )) :
                (mf.length === 3) ? (runFilters( r, mf[0] ) ||
                  runFilters( r, mf[1] ) || runFilters( r, mf[2] )) :
                  (mf.length === 4) ? (runFilters( r, mf[0] ) ||
                    runFilters( r, mf[1] ) || runFilters( r, mf[2] ) ||
                    runFilters( r, mf[3] )) : false;
            if ( mf.length > 4 ){
              each( mf, function ( f ) {
                if ( runFilters( r, f ) ){
                  match = true;
                }
              });
            }
            break;
        }
      });

      return match;
    };

    returnFilter = function ( f ) {
      // ****************************************
      // *
      // * Takes: filter object
      // * Returns: a filter function
      // * Purpose: Take a filter object and return a function that can be used to compare
      // * a TaffyDB record to see if the record matches a query
      // ****************************************  
      var nf = [];
      if ( T.isString( f ) && /[t][0-9]*[r][0-9]*/i.test( f ) ){
        f = { ___id : f };
      }
      if ( T.isArray( f ) ){
        // if we are working with an array

        each( f, function ( r ) {
          // loop the array and return a filter func for each value
          nf.push( returnFilter( r ) );
        });
        // now build a func to loop over the filters and return true if ANY of the filters match
        // This handles logical OR expressions
        f = function () {
          var that = this, match = false;
          each( nf, function ( f ) {
            if ( runFilters( that, f ) ){
              match = true;
            }
          });
          return match;
        };
        return f;

      }
      // if we are dealing with an Object
      if ( T.isObject( f ) ){
        if ( T.isObject( f ) && f.___id && f.___s ){
          f = { ___id : f.___id };
        }

        // Loop over each value on the object to prep match type and match value
        eachin( f, function ( v, i ) {

          // default match type to IS/Equals
          if ( !T.isObject( v ) ){
            v = {
              'is' : v
            };
          }
          // loop over each value on the value object  - if any
          eachin( v, function ( mtest, s ) {
            // s = match type, e.g. is, hasAll, like, etc
            var c = [], looper;

            // function to loop and apply filter
            looper = (s === 'hasAll') ?
              function ( mtest, func ) {
                func( mtest );
              } : each;

            // loop over each test
            looper( mtest, function ( mtest ) {

              // su = match success
              // f = match false
              var su = true, f = false, matchFunc;


              // push a function onto the filter collection to do the matching
              matchFunc = function () {

                // get the value from the record
                var
                  mvalue   = this[i],
                  eqeq     = '==',
                  bangeq   = '!=',
                  eqeqeq   = '===',
                  lt   = '<',
                  gt   = '>',
                  lteq   = '<=',
                  gteq   = '>=',
                  bangeqeq = '!==',
                  r
                  ;


                if ( (s.indexOf( '!' ) === 0) && s !== bangeq &&
                  s !== bangeqeq )
                {
                  // if the filter name starts with ! as in '!is' then reverse the match logic and remove the !
                  su = false;
                  s = s.substring( 1, s.length );
                }
                // get the match results based on the s/match type
                /*jslint eqeq : true */
                r = (
                  (s === 'regex') ? (mtest.test( mvalue )) : (s === 'lt' || s === lt)
                  ? (mvalue < mtest)  : (s === 'gt' || s === gt)
                  ? (mvalue > mtest)  : (s === 'lte' || s === lteq)
                  ? (mvalue <= mtest) : (s === 'gte' || s === gteq)
                  ? (mvalue >= mtest) : (s === 'left')
                  ? (mvalue.indexOf( mtest ) === 0) : (s === 'leftnocase')
                  ? (mvalue.toLowerCase().indexOf( mtest.toLowerCase() )
                    === 0) : (s === 'right')
                  ? (mvalue.substring( (mvalue.length - mtest.length) )
                    === mtest) : (s === 'rightnocase')
                  ? (mvalue.toLowerCase().substring(
                    (mvalue.length - mtest.length) ) === mtest.toLowerCase())
                    : (s === 'like')
                  ? (mvalue.indexOf( mtest ) >= 0) : (s === 'likenocase')
                  ? (mvalue.toLowerCase().indexOf(mtest.toLowerCase()) >= 0)
                    : (s === eqeqeq || s === 'is')
                  ? (mvalue ===  mtest) : (s === eqeq)
                  ? (mvalue == mtest) : (s === bangeqeq)
                  ? (mvalue !==  mtest) : (s === bangeq)
                  ? (mvalue != mtest) : (s === 'isnocase')
                  ? (mvalue.toLowerCase
                    ? mvalue.toLowerCase() === mtest.toLowerCase()
                      : mvalue === mtest) : (s === 'has')
                  ? (T.has( mvalue, mtest )) : (s === 'hasall')
                  ? (T.hasAll( mvalue, mtest )) : (
                    s.indexOf( 'is' ) === -1
                      && !TAFFY.isNull( mvalue )
                      && !TAFFY.isUndefined( mvalue )
                      && !TAFFY.isObject( mtest )
                      && !TAFFY.isArray( mtest )
                    )
                  ? (mtest === mvalue[s])
                    : (T[s] && T.isFunction( T[s] )
                    && s.indexOf( 'is' ) === 0)
                  ? T[s]( mvalue ) === mtest
                    : (T[s] && T.isFunction( T[s] ))
                  ? T[s]( mvalue, mtest ) : (false)
                );
                /*jslint eqeq : false */
                r = (r && !su) ? false : (!r && !su) ? true : r;

                return r;
              };
              c.push( matchFunc );

            });
            // if only one filter in the collection push it onto the filter list without the array
            if ( c.length === 1 ){

              nf.push( c[0] );
            }
            else {
              // else build a function to loop over all the filters and return true only if ALL match
              // this is a logical AND
              nf.push( function () {
                var that = this, match = false;
                each( c, function ( f ) {
                  if ( f.apply( that ) ){
                    match = true;
                  }
                });
                return match;
              });
            }
          });
        });
        // finally return a single function that wraps all the other functions and will run a query
        // where all functions have to return true for a record to appear in a query result
        f = function () {
          var that = this, match = true;
          // faster if less than  4 functions
          match = (nf.length === 1 && !nf[0].apply( that )) ? false :
            (nf.length === 2 &&
              (!nf[0].apply( that ) || !nf[1].apply( that ))) ? false :
              (nf.length === 3 &&
                (!nf[0].apply( that ) || !nf[1].apply( that ) ||
                  !nf[2].apply( that ))) ? false :
                (nf.length === 4 &&
                  (!nf[0].apply( that ) || !nf[1].apply( that ) ||
                    !nf[2].apply( that ) || !nf[3].apply( that ))) ? false
                  : true;
          if ( nf.length > 4 ){
            each( nf, function ( f ) {
              if ( !runFilters( that, f ) ){
                match = false;
              }
            });
          }
          return match;
        };
        return f;
      }

      // if function
      if ( T.isFunction( f ) ){
        return f;
      }
    };

    orderByCol = function ( ar, o ) {
      // ****************************************
      // *
      // * Takes: takes an array and a sort object
      // * Returns: the array sorted
      // * Purpose: Accept filters such as "[col], [col2]" or "[col] desc" and sort on those columns
      // *
      // ****************************************

      var sortFunc = function ( a, b ) {
        // function to pass to the native array.sort to sort an array
        var r = 0;

        T.each( o, function ( sd ) {
          // loop over the sort instructions
          // get the column name
          var o, col, dir, c, d;
          o = sd.split( ' ' );
          col = o[0];

          // get the direction
          dir = (o.length === 1) ? "logical" : o[1];


          if ( dir === 'logical' ){
            // if dir is logical than grab the charnum arrays for the two values we are looking at
            c = numcharsplit( a[col] );
            d = numcharsplit( b[col] );
            // loop over the charnumarrays until one value is higher than the other
            T.each( (c.length <= d.length) ? c : d, function ( x, i ) {
              if ( c[i] < d[i] ){
                r = -1;
                return TAFFY.EXIT;
              }
              else if ( c[i] > d[i] ){
                r = 1;
                return TAFFY.EXIT;
              }
            } );
          }
          else if ( dir === 'logicaldesc' ){
            // if logicaldesc than grab the charnum arrays for the two values we are looking at
            c = numcharsplit( a[col] );
            d = numcharsplit( b[col] );
            // loop over the charnumarrays until one value is lower than the other
            T.each( (c.length <= d.length) ? c : d, function ( x, i ) {
              if ( c[i] > d[i] ){
                r = -1;
                return TAFFY.EXIT;
              }
              else if ( c[i] < d[i] ){
                r = 1;
                return TAFFY.EXIT;
              }
            } );
          }
          else if ( dir === 'asec' && a[col] < b[col] ){
            // if asec - default - check to see which is higher
            r = -1;
            return T.EXIT;
          }
          else if ( dir === 'asec' && a[col] > b[col] ){
            // if asec - default - check to see which is higher
            r = 1;
            return T.EXIT;
          }
          else if ( dir === 'desc' && a[col] > b[col] ){
            // if desc check to see which is lower
            r = -1;
            return T.EXIT;

          }
          else if ( dir === 'desc' && a[col] < b[col] ){
            // if desc check to see which is lower
            r = 1;
            return T.EXIT;

          }
          // if r is still 0 and we are doing a logical sort than look to see if one array is longer than the other
          if ( r === 0 && dir === 'logical' && c.length < d.length ){
            r = -1;
          }
          else if ( r === 0 && dir === 'logical' && c.length > d.length ){
            r = 1;
          }
          else if ( r === 0 && dir === 'logicaldesc' && c.length > d.length ){
            r = -1;
          }
          else if ( r === 0 && dir === 'logicaldesc' && c.length < d.length ){
            r = 1;
          }

          if ( r !== 0 ){
            return T.EXIT;
          }


        } );
        return r;
      };
      // call the sort function and return the newly sorted array
      return (ar && ar.push) ? ar.sort( sortFunc ) : ar;


    };

    // ****************************************
    // *
    // * Takes: a string containing numbers and letters and turn it into an array
    // * Returns: return an array of numbers and letters
    // * Purpose: Used for logical sorting. String Example: 12ABC results: [12,'ABC']
    // **************************************** 
    (function () {
      // creates a cache for numchar conversions
      var cache = {}, cachcounter = 0;
      // creates the numcharsplit function
      numcharsplit = function ( thing ) {
        // if over 1000 items exist in the cache, clear it and start over
        if ( cachcounter > cmax ){
          cache = {};
          cachcounter = 0;
        }

        // if a cache can be found for a numchar then return its array value
        return cache['_' + thing] || (function () {
          // otherwise do the conversion
          // make sure it is a string and setup so other variables
          var nthing = String( thing ),
            na = [],
            rv = '_',
            rt = '',
            x, xx, c;

          // loop over the string char by char
          for ( x = 0, xx = nthing.length; x < xx; x++ ){
            // take the char at each location
            c = nthing.charCodeAt( x );
            // check to see if it is a valid number char and append it to the array.
            // if last char was a string push the string to the charnum array
            if ( ( c >= 48 && c <= 57 ) || c === 46 ){
              if ( rt !== 'n' ){
                rt = 'n';
                na.push( rv.toLowerCase() );
                rv = '';
              }
              rv = rv + nthing.charAt( x );
            }
            else {
              // check to see if it is a valid string char and append to string
              // if last char was a number push the whole number to the charnum array
              if ( rt !== 's' ){
                rt = 's';
                na.push( parseFloat( rv ) );
                rv = '';
              }
              rv = rv + nthing.charAt( x );
            }
          }
          // once done, push the last value to the charnum array and remove the first uneeded item
          na.push( (rt === 'n') ? parseFloat( rv ) : rv.toLowerCase() );
          na.shift();
          // add to cache
          cache['_' + thing] = na;
          cachcounter++;
          // return charnum array
          return na;
        }());
      };
    }());

    // ****************************************
    // *
    // * Runs a query
    // **************************************** 


    run = function () {
      this.context( {
        results : this.getDBI().query( this.context() )
      });

    };

    API.extend( 'filter', function () {
      // ****************************************
      // *
      // * Takes: takes unlimited filter objects as arguments
      // * Returns: method collection
      // * Purpose: Take filters as objects and cache functions for later lookup when a query is run
      // **************************************** 
      var
        nc = TAFFY.mergeObj( this.context(), { run : null } ),
        nq = []
      ;
      each( nc.q, function ( v ) {
        nq.push( v );
      });
      nc.q = nq;
      // Hadnle passing of ___ID or a record on lookup.
      each( arguments, function ( f ) {
        nc.q.push( returnFilter( f ) );
        nc.filterRaw.push( f );
      });

      return this.getroot( nc );
    });

    API.extend( 'order', function ( o ) {
      // ****************************************
      // *
      // * Purpose: takes a string and creates an array of order instructions to be used with a query
      // ****************************************

      o = o.split( ',' );
      var x = [], nc;

      each( o, function ( r ) {
        x.push( r.replace( /^\s*/, '' ).replace( /\s*$/, '' ) );
      });

      nc = TAFFY.mergeObj( this.context(), {sort : null} );
      nc.order = x;

      return this.getroot( nc );
    });

    API.extend( 'limit', function ( n ) {
      // ****************************************
      // *
      // * Purpose: takes a limit number to limit the number of rows returned by a query. Will update the results
      // * of a query
      // **************************************** 
      var nc = TAFFY.mergeObj( this.context(), {}),
        limitedresults
        ;

      nc.limit = n;

      if ( nc.run && nc.sort ){
        limitedresults = [];
        each( nc.results, function ( i, x ) {
          if ( (x + 1) > n ){
            return TAFFY.EXIT;
          }
          limitedresults.push( i );
        });
        nc.results = limitedresults;
      }

      return this.getroot( nc );
    });

    API.extend( 'start', function ( n ) {
      // ****************************************
      // *
      // * Purpose: takes a limit number to limit the number of rows returned by a query. Will update the results
      // * of a query
      // **************************************** 
      var nc = TAFFY.mergeObj( this.context(), {} ),
        limitedresults
        ;

      nc.start = n;

      if ( nc.run && nc.sort && !nc.limit ){
        limitedresults = [];
        each( nc.results, function ( i, x ) {
          if ( (x + 1) > n ){
            limitedresults.push( i );
          }
        });
        nc.results = limitedresults;
      }
      else {
        nc = TAFFY.mergeObj( this.context(), {run : null, start : n} );
      }

      return this.getroot( nc );
    });

    API.extend( 'update', function ( arg0, arg1, arg2 ) {
      // ****************************************
      // *
      // * Takes: a object and passes it off DBI update method for all matched records
      // **************************************** 
      var runEvent = true, o = {}, args = arguments, that;
      if ( TAFFY.isString( arg0 ) &&
        (arguments.length === 2 || arguments.length === 3) )
      {
        o[arg0] = arg1;
        if ( arguments.length === 3 ){
          runEvent = arg2;
        }
      }
      else {
        o = arg0;
        if ( args.length === 2 ){
          runEvent = arg1;
        }
      }

      that = this;
      run.call( this );
      each( this.context().results, function ( r ) {
        var c = o;
        if ( TAFFY.isFunction( c ) ){
          c = c.apply( TAFFY.mergeObj( r, {} ) );
        }
        else {
          if ( T.isFunction( c ) ){
            c = c( TAFFY.mergeObj( r, {} ) );
          }
        }
        if ( TAFFY.isObject( c ) ){
          that.getDBI().update( r.___id, c, runEvent );
        }
      });
      if ( this.context().results.length ){
        this.context( { run : null });
      }
      return this;
    });
    API.extend( 'remove', function ( runEvent ) {
      // ****************************************
      // *
      // * Purpose: removes records from the DB via the remove and removeCommit DBI methods
      // **************************************** 
      var that = this, c = 0;
      run.call( this );
      each( this.context().results, function ( r ) {
        that.getDBI().remove( r.___id );
        c++;
      });
      if ( this.context().results.length ){
        this.context( {
          run : null
        });
        that.getDBI().removeCommit( runEvent );
      }

      return c;
    });


    API.extend( 'count', function () {
      // ****************************************
      // *
      // * Returns: The length of a query result
      // **************************************** 
      run.call( this );
      return this.context().results.length;
    });

    API.extend( 'callback', function ( f, delay ) {
      // ****************************************
      // *
      // * Returns null;
      // * Runs a function on return of run.call
      // **************************************** 
      if ( f ){
        var that = this;
        setTimeout( function () {
          run.call( that );
          f.call( that.getroot( that.context() ) );
        }, delay || 0 );
      }


      return null;
    });

    API.extend( 'get', function () {
      // ****************************************
      // *
      // * Returns: An array of all matching records
      // **************************************** 
      run.call( this );
      return this.context().results;
    });

    API.extend( 'stringify', function () {
      // ****************************************
      // *
      // * Returns: An JSON string of all matching records
      // **************************************** 
      return JSON.stringify( this.get() );
    });
    API.extend( 'first', function () {
      // ****************************************
      // *
      // * Returns: The first matching record
      // **************************************** 
      run.call( this );
      return this.context().results[0] || false;
    });
    API.extend( 'last', function () {
      // ****************************************
      // *
      // * Returns: The last matching record
      // **************************************** 
      run.call( this );
      return this.context().results[this.context().results.length - 1] ||
        false;
    });


    API.extend( 'sum', function () {
      // ****************************************
      // *
      // * Takes: column to sum up
      // * Returns: Sums the values of a column
      // **************************************** 
      var total = 0, that = this;
      run.call( that );
      each( arguments, function ( c ) {
        each( that.context().results, function ( r ) {
          total = total + r[c];
        });
      });
      return total;
    });

    API.extend( 'min', function ( c ) {
      // ****************************************
      // *
      // * Takes: column to find min
      // * Returns: the lowest value
      // **************************************** 
      var lowest = null;
      run.call( this );
      each( this.context().results, function ( r ) {
        if ( lowest === null || r[c] < lowest ){
          lowest = r[c];
        }
      });
      return lowest;
    });

    //  Taffy innerJoin Extension (OCD edition)
    //  =======================================
    //
    //  How to Use
    //  **********
    //
    //  left_table.innerJoin( right_table, condition1 <,... conditionN> )
    //
    //  A condition can take one of 2 forms:
    //
    //    1. An ARRAY with 2 or 3 values:
    //    A column name from the left table, an optional comparison string,
    //    and column name from the right table.  The condition passes if the test
    //    indicated is true.   If the condition string is omitted, '===' is assumed.
    //    EXAMPLES: [ 'last_used_time', '>=', 'current_use_time' ], [ 'user_id','id' ]
    //
    //    2. A FUNCTION:
    //    The function receives a left table row and right table row during the
    //    cartesian join.  If the function returns true for the rows considered,
    //    the merged row is included in the result set.
    //    EXAMPLE: function (l,r){ return l.name === r.label; }
    //
    //  Conditions are considered in the order they are presented.  Therefore the best
    //  performance is realized when the least expensive and highest prune-rate
    //  conditions are placed first, since if they return false Taffy skips any
    //  further condition tests.
    //
    //  Other notes
    //  ***********
    //
    //  This code passes jslint with the exception of 2 warnings about
    //  the '==' and '!=' lines.  We can't do anything about that short of
    //  deleting the lines.
    //
    //  Credits
    //  *******
    //
    //  Heavily based upon the work of Ian Toltz.
    //  Revisions to API by Michael Mikowski.
    //  Code convention per standards in http://manning.com/mikowski
    (function () {
      var innerJoinFunction = (function () {
        var fnCompareList, fnCombineRow, fnMain;

        fnCompareList = function ( left_row, right_row, arg_list ) {
          var data_lt, data_rt, op_code, error;

          if ( arg_list.length === 2 ){
            data_lt = left_row[arg_list[0]];
            op_code = '===';
            data_rt = right_row[arg_list[1]];
          }
          else {
            data_lt = left_row[arg_list[0]];
            op_code = arg_list[1];
            data_rt = right_row[arg_list[2]];
          }

          /*jslint eqeq : true */
          switch ( op_code ){
            case '===' :
              return data_lt === data_rt;
            case '!==' :
              return data_lt !== data_rt;
            case '<'   :
              return data_lt < data_rt;
            case '>'   :
              return data_lt > data_rt;
            case '<='  :
              return data_lt <= data_rt;
            case '>='  :
              return data_lt >= data_rt;
            case '=='  :
              return data_lt == data_rt;
            case '!='  :
              return data_lt != data_rt;
            default :
              throw String( op_code ) + ' is not supported';
          }
          // 'jslint eqeq : false'  here results in
          // "Unreachable '/*jslint' after 'return'".
          // We don't need it though, as the rule exception
          // is discarded at the end of this functional scope
        };

        fnCombineRow = function ( left_row, right_row ) {
          var out_map = {}, i, prefix;

          for ( i in left_row ){
            if ( left_row.hasOwnProperty( i ) ){
              out_map[i] = left_row[i];
            }
          }
          for ( i in right_row ){
            if ( right_row.hasOwnProperty( i ) && i !== '___id' &&
              i !== '___s' )
            {
              prefix = !TAFFY.isUndefined( out_map[i] ) ? 'right_' : '';
              out_map[prefix + String( i ) ] = right_row[i];
            }
          }
          return out_map;
        };

        fnMain = function ( table ) {
          var
            right_table, i,
            arg_list = arguments,
            arg_length = arg_list.length,
            result_list = []
            ;

          if ( typeof table.filter !== 'function' ){
            if ( table.TAFFY ){ right_table = table(); }
            else {
              throw 'TAFFY DB or result not supplied';
            }
          }
          else { right_table = table; }

          this.context( {
            results : this.getDBI().query( this.context() )
          } );

          TAFFY.each( this.context().results, function ( left_row ) {
            right_table.each( function ( right_row ) {
              var arg_data, is_ok = true;
              CONDITION:
                for ( i = 1; i < arg_length; i++ ){
                  arg_data = arg_list[i];
                  if ( typeof arg_data === 'function' ){
                    is_ok = arg_data( left_row, right_row );
                  }
                  else if ( typeof arg_data === 'object' && arg_data.length ){
                    is_ok = fnCompareList( left_row, right_row, arg_data );
                  }
                  else {
                    is_ok = false;
                  }

                  if ( !is_ok ){ break CONDITION; } // short circuit
                }

              if ( is_ok ){
                result_list.push( fnCombineRow( left_row, right_row ) );
              }
            } );
          } );
          return TAFFY( result_list )();
        };

        return fnMain;
      }());

      API.extend( 'join', innerJoinFunction );
    }());

    API.extend( 'max', function ( c ) {
      // ****************************************
      // *
      // * Takes: column to find max
      // * Returns: the highest value
      // ****************************************
      var highest = null;
      run.call( this );
      each( this.context().results, function ( r ) {
        if ( highest === null || r[c] > highest ){
          highest = r[c];
        }
      });
      return highest;
    });

    API.extend( 'select', function () {
      // ****************************************
      // *
      // * Takes: columns to select values into an array
      // * Returns: array of values
      // * Note if more than one column is given an array of arrays is returned
      // **************************************** 

      var ra = [], args = arguments;
      run.call( this );
      if ( arguments.length === 1 ){

        each( this.context().results, function ( r ) {

          ra.push( r[args[0]] );
        });
      }
      else {
        each( this.context().results, function ( r ) {
          var row = [];
          each( args, function ( c ) {
            row.push( r[c] );
          });
          ra.push( row );
        });
      }
      return ra;
    });
    API.extend( 'distinct', function () {
      // ****************************************
      // *
      // * Takes: columns to select unique alues into an array
      // * Returns: array of values
      // * Note if more than one column is given an array of arrays is returned
      // **************************************** 
      var ra = [], args = arguments;
      run.call( this );
      if ( arguments.length === 1 ){

        each( this.context().results, function ( r ) {
          var v = r[args[0]], dup = false;
          each( ra, function ( d ) {
            if ( v === d ){
              dup = true;
              return TAFFY.EXIT;
            }
          });
          if ( !dup ){
            ra.push( v );
          }
        });
      }
      else {
        each( this.context().results, function ( r ) {
          var row = [], dup = false;
          each( args, function ( c ) {
            row.push( r[c] );
          });
          each( ra, function ( d ) {
            var ldup = true;
            each( args, function ( c, i ) {
              if ( row[i] !== d[i] ){
                ldup = false;
                return TAFFY.EXIT;
              }
            });
            if ( ldup ){
              dup = true;
              return TAFFY.EXIT;
            }
          });
          if ( !dup ){
            ra.push( row );
          }
        });
      }
      return ra;
    });
    API.extend( 'supplant', function ( template, returnarray ) {
      // ****************************************
      // *
      // * Takes: a string template formated with key to be replaced with values from the rows, flag to determine if we want array of strings
      // * Returns: array of values or a string
      // **************************************** 
      var ra = [];
      run.call( this );
      each( this.context().results, function ( r ) {
        // TODO: The curly braces used to be unescaped
        ra.push( template.replace( /\{([^\{\}]*)\}/g, function ( a, b ) {
          var v = r[b];
          return typeof v === 'string' || typeof v === 'number' ? v : a;
        } ) );
      });
      return (!returnarray) ? ra.join( "" ) : ra;
    });


    API.extend( 'each', function ( m ) {
      // ****************************************
      // *
      // * Takes: a function
      // * Purpose: loops over every matching record and applies the function
      // **************************************** 
      run.call( this );
      each( this.context().results, m );
      return this;
    });
    API.extend( 'map', function ( m ) {
      // ****************************************
      // *
      // * Takes: a function
      // * Purpose: loops over every matching record and applies the function, returing the results in an array
      // **************************************** 
      var ra = [];
      run.call( this );
      each( this.context().results, function ( r ) {
        ra.push( m( r ) );
      });
      return ra;
    });



    T = function ( d ) {
      // ****************************************
      // *
      // * T is the main TAFFY object
      // * Takes: an array of objects or JSON
      // * Returns a new TAFFYDB
      // **************************************** 
      var TOb = [],
        ID = {},
        RC = 1,
        settings = {
          template          : false,
          onInsert          : false,
          onUpdate          : false,
          onRemove          : false,
          onDBChange        : false,
          storageName       : false,
          forcePropertyCase : null,
          cacheSize         : 100,
          name              : ''
        },
        dm = new Date(),
        CacheCount = 0,
        CacheClear = 0,
        Cache = {},
        DBI, runIndexes, root
        ;
      // ****************************************
      // *
      // * TOb = this database
      // * ID = collection of the record IDs and locations within the DB, used for fast lookups
      // * RC = record counter, used for creating IDs
      // * settings.template = the template to merge all new records with
      // * settings.onInsert = event given a copy of the newly inserted record
      // * settings.onUpdate = event given the original record, the changes, and the new record
      // * settings.onRemove = event given the removed record
      // * settings.forcePropertyCase = on insert force the proprty case to be lower or upper. default lower, null/undefined will leave case as is
      // * dm = the modify date of the database, used for query caching
      // **************************************** 


      runIndexes = function ( indexes ) {
        // ****************************************
        // *
        // * Takes: a collection of indexes
        // * Returns: collection with records matching indexed filters
        // **************************************** 

        var records = [], UniqueEnforce = false;

        if ( indexes.length === 0 ){
          return TOb;
        }

        each( indexes, function ( f ) {
          // Check to see if record ID
          if ( T.isString( f ) && /[t][0-9]*[r][0-9]*/i.test( f ) &&
            TOb[ID[f]] )
          {
            records.push( TOb[ID[f]] );
            UniqueEnforce = true;
          }
          // Check to see if record
          if ( T.isObject( f ) && f.___id && f.___s &&
            TOb[ID[f.___id]] )
          {
            records.push( TOb[ID[f.___id]] );
            UniqueEnforce = true;
          }
          // Check to see if array of indexes
          if ( T.isArray( f ) ){
            each( f, function ( r ) {
              each( runIndexes( r ), function ( rr ) {
                records.push( rr );
              });

            });
          }
        });
        if ( UniqueEnforce && records.length > 1 ){
          records = [];
        }

        return records;
      };

      DBI = {
        // ****************************************
        // *
        // * The DBI is the internal DataBase Interface that interacts with the data
        // **************************************** 
        dm           : function ( nd ) {
          // ****************************************
          // *
          // * Takes: an optional new modify date
          // * Purpose: used to get and set the DB modify date
          // **************************************** 
          if ( nd ){
            dm = nd;
            Cache = {};
            CacheCount = 0;
            CacheClear = 0;
          }
          if ( settings.onDBChange ){
            setTimeout( function () {
              settings.onDBChange.call( TOb );
            }, 0 );
          }
          if ( settings.storageName ){
            setTimeout( function () {
              localStorage.setItem( 'taffy_' + settings.storageName,
                JSON.stringify( TOb ) );
            });
          }
          return dm;
        },
        insert       : function ( i, runEvent ) {
          // ****************************************
          // *
          // * Takes: a new record to insert
          // * Purpose: merge the object with the template, add an ID, insert into DB, call insert event
          // **************************************** 
          var columns = [],
            records   = [],
            input     = protectJSON( i )
            ;
          each( input, function ( v, i ) {
            var nv, o;
            if ( T.isArray( v ) && i === 0 ){
              each( v, function ( av ) {

                columns.push( (settings.forcePropertyCase === 'lower')
                  ? av.toLowerCase()
                    : (settings.forcePropertyCase === 'upper')
                  ? av.toUpperCase() : av );
              });
              return true;
            }
            else if ( T.isArray( v ) ){
              nv = {};
              each( v, function ( av, ai ) {
                nv[columns[ai]] = av;
              });
              v = nv;

            }
            else if ( T.isObject( v ) && settings.forcePropertyCase ){
              o = {};

              eachin( v, function ( av, ai ) {
                o[(settings.forcePropertyCase === 'lower') ? ai.toLowerCase()
                  : (settings.forcePropertyCase === 'upper')
                  ? ai.toUpperCase() : ai] = v[ai];
              });
              v = o;
            }

            RC++;
            v.___id = 'T' + String( idpad + TC ).slice( -6 ) + 'R' +
              String( idpad + RC ).slice( -6 );
            v.___s = true;
            records.push( v.___id );
            if ( settings.template ){
              v = T.mergeObj( settings.template, v );
            }
            TOb.push( v );

            ID[v.___id] = TOb.length - 1;
            if ( settings.onInsert &&
              (runEvent || TAFFY.isUndefined( runEvent )) )
            {
              settings.onInsert.call( v );
            }
            DBI.dm( new Date() );
          });
          return root( records );
        },
        sort         : function ( o ) {
          // ****************************************
          // *
          // * Purpose: Change the sort order of the DB itself and reset the ID bucket
          // **************************************** 
          TOb = orderByCol( TOb, o.split( ',' ) );
          ID = {};
          each( TOb, function ( r, i ) {
            ID[r.___id] = i;
          });
          DBI.dm( new Date() );
          return true;
        },
        update       : function ( id, changes, runEvent ) {
          // ****************************************
          // *
          // * Takes: the ID of record being changed and the changes
          // * Purpose: Update a record and change some or all values, call the on update method
          // ****************************************

          var nc = {}, or, nr, tc, hasChange;
          if ( settings.forcePropertyCase ){
            eachin( changes, function ( v, p ) {
              nc[(settings.forcePropertyCase === 'lower') ? p.toLowerCase()
                : (settings.forcePropertyCase === 'upper') ? p.toUpperCase()
                : p] = v;
            });
            changes = nc;
          }

          or = TOb[ID[id]];
          nr = T.mergeObj( or, changes );

          tc = {};
          hasChange = false;
          eachin( nr, function ( v, i ) {
            if ( TAFFY.isUndefined( or[i] ) || or[i] !== v ){
              tc[i] = v;
              hasChange = true;
            }
          });
          if ( hasChange ){
            if ( settings.onUpdate &&
              (runEvent || TAFFY.isUndefined( runEvent )) )
            {
              settings.onUpdate.call( nr, TOb[ID[id]], tc );
            }
            TOb[ID[id]] = nr;
            DBI.dm( new Date() );
          }
        },
        remove       : function ( id ) {
          // ****************************************
          // *
          // * Takes: the ID of record to be removed
          // * Purpose: remove a record, changes its ___s value to false
          // **************************************** 
          TOb[ID[id]].___s = false;
        },
        removeCommit : function ( runEvent ) {
          var x;
          // ****************************************
          // *
          // * 
          // * Purpose: loop over all records and remove records with ___s = false, call onRemove event, clear ID
          // ****************************************
          for ( x = TOb.length - 1; x > -1; x-- ){

            if ( !TOb[x].___s ){
              if ( settings.onRemove &&
                (runEvent || TAFFY.isUndefined( runEvent )) )
              {
                settings.onRemove.call( TOb[x] );
              }
              ID[TOb[x].___id] = undefined;
              TOb.splice( x, 1 );
            }
          }
          ID = {};
          each( TOb, function ( r, i ) {
            ID[r.___id] = i;
          });
          DBI.dm( new Date() );
        },
        query : function ( context ) {
          // ****************************************
          // *
          // * Takes: the context object for a query and either returns a cache result or a new query result
          // **************************************** 
          var returnq, cid, results, indexed, limitq, ni;

          if ( settings.cacheSize ) {
            cid = '';
            each( context.filterRaw, function ( r ) {
              if ( T.isFunction( r ) ){
                cid = 'nocache';
                return TAFFY.EXIT;
              }
            });
            if ( cid === '' ){
              cid = JSON.stringify( T.mergeObj( context,
                {q : false, run : false, sort : false} ) );
            }
          }
          // Run a new query if there are no results or the run date has been cleared
          if ( !context.results || !context.run ||
            (context.run && DBI.dm() > context.run) )
          {
            results = [];

            // check Cache

            if ( settings.cacheSize && Cache[cid] ){

              Cache[cid].i = CacheCount++;
              return Cache[cid].results;
            }
            else {
              // if no filter, return DB
              if ( context.q.length === 0 && context.index.length === 0 ){
                each( TOb, function ( r ) {
                  results.push( r );
                });
                returnq = results;
              }
              else {
                // use indexes

                indexed = runIndexes( context.index );

                // run filters
                each( indexed, function ( r ) {
                  // Run filter to see if record matches query
                  if ( context.q.length === 0 || runFilters( r, context.q ) ){
                    results.push( r );
                  }
                });

                returnq = results;
              }
            }


          }
          else {
            // If query exists and run has not been cleared return the cache results
            returnq = context.results;
          }
          // If a custom order array exists and the run has been clear or the sort has been cleared
          if ( context.order.length > 0 && (!context.run || !context.sort) ){
            // order the results
            returnq = orderByCol( returnq, context.order );
          }

          // If a limit on the number of results exists and it is less than the returned results, limit results
          if ( returnq.length &&
            ((context.limit && context.limit < returnq.length) ||
              context.start)
          ) {
            limitq = [];
            each( returnq, function ( r, i ) {
              if ( !context.start ||
                (context.start && (i + 1) >= context.start) )
              {
                if ( context.limit ){
                  ni = (context.start) ? (i + 1) - context.start : i;
                  if ( ni < context.limit ){
                    limitq.push( r );
                  }
                  else if ( ni > context.limit ){
                    return TAFFY.EXIT;
                  }
                }
                else {
                  limitq.push( r );
                }
              }
            });
            returnq = limitq;
          }

          // update cache
          if ( settings.cacheSize && cid !== 'nocache' ){
            CacheClear++;

            setTimeout( function () {
              var bCounter, nc;
              if ( CacheClear >= settings.cacheSize * 2 ){
                CacheClear = 0;
                bCounter = CacheCount - settings.cacheSize;
                nc = {};
                eachin( function ( r, k ) {
                  if ( r.i >= bCounter ){
                    nc[k] = r;
                  }
                });
                Cache = nc;
              }
            }, 0 );

            Cache[cid] = { i : CacheCount++, results : returnq };
          }
          return returnq;
        }
      };


      root = function () {
        var iAPI, context;
        // ****************************************
        // *
        // * The root function that gets returned when a new DB is created
        // * Takes: unlimited filter arguments and creates filters to be run when a query is called
        // **************************************** 
        // ****************************************
        // *
        // * iAPI is the the method collection valiable when a query has been started by calling dbname
        // * Certain methods are or are not avaliable once you have started a query such as insert -- you can only insert into root
        // ****************************************
        iAPI = TAFFY.mergeObj( TAFFY.mergeObj( API, { insert : undefined } ),
          { getDBI  : function () { return DBI; },
            getroot : function ( c ) { return root.call( c ); },
          context : function ( n ) {
            // ****************************************
            // *
            // * The context contains all the information to manage a query including filters, limits, and sorts
            // **************************************** 
            if ( n ){
              context = TAFFY.mergeObj( context,
                n.hasOwnProperty('results')
                  ? TAFFY.mergeObj( n, { run : new Date(), sort: new Date() })
                  : n
              );
            }
            return context;
          },
          extend  : undefined
        });

        context = (this && this.q) ? this : {
          limit     : false,
          start     : false,
          q         : [],
          filterRaw : [],
          index     : [],
          order     : [],
          results   : false,
          run       : null,
          sort      : null,
          settings  : settings
        };
        // ****************************************
        // *
        // * Call the query method to setup a new query
        // **************************************** 
        each( arguments, function ( f ) {

          if ( isIndexable( f ) ){
            context.index.push( f );
          }
          else {
            context.q.push( returnFilter( f ) );
          }
          context.filterRaw.push( f );
        });


        return iAPI;
      };

      // ****************************************
      // *
      // * If new records have been passed on creation of the DB either as JSON or as an array/object, insert them
      // **************************************** 
      TC++;
      if ( d ){
        DBI.insert( d );
      }


      root.insert = DBI.insert;

      root.merge = function ( i, key, runEvent ) {
        var
          search      = {},
          finalSearch = [],
          obj         = {}
          ;

        runEvent    = runEvent || false;
        key         = key      || 'id';

        each( i, function ( o ) {
          var existingObject;
          search[key] = o[key];
          finalSearch.push( o[key] );
          existingObject = root( search ).first();
          if ( existingObject ){
            DBI.update( existingObject.___id, o, runEvent );
          }
          else {
            DBI.insert( o, runEvent );
          }
        });

        obj[key] = finalSearch;
        return root( obj );
      };

      root.TAFFY = true;
      root.sort = DBI.sort;
      // ****************************************
      // *
      // * These are the methods that can be accessed on off the root DB function. Example dbname.insert;
      // **************************************** 
      root.settings = function ( n ) {
        // ****************************************
        // *
        // * Getting and setting for this DB's settings/events
        // **************************************** 
        if ( n ){
          settings = TAFFY.mergeObj( settings, n );
          if ( n.template ){

            root().update( n.template );
          }
        }
        return settings;
      };

      // ****************************************
      // *
      // * These are the methods that can be accessed on off the root DB function. Example dbname.insert;
      // **************************************** 
      root.store = function ( n ) {
        // ****************************************
        // *
        // * Setup localstorage for this DB on a given name
        // * Pull data into the DB as needed
        // **************************************** 
        var r = false, i;
        if ( localStorage ){
          if ( n ){
            i = localStorage.getItem( 'taffy_' + n );
            if ( i && i.length > 0 ){
              root.insert( i );
              r = true;
            }
            if ( TOb.length > 0 ){
              setTimeout( function () {
                localStorage.setItem( 'taffy_' + settings.storageName,
                  JSON.stringify( TOb ) );
              });
            }
          }
          root.settings( {storageName : n} );
        }
        return root;
      };

      // ****************************************
      // *
      // * Return root on DB creation and start having fun
      // **************************************** 
      return root;
    };
    // ****************************************
    // *
    // * Sets the global TAFFY object
    // **************************************** 
    TAFFY = T;


    // ****************************************
    // *
    // * Create public each method
    // *
    // ****************************************   
    T.each = each;

    // ****************************************
    // *
    // * Create public eachin method
    // *
    // ****************************************   
    T.eachin = eachin;
    // ****************************************
    // *
    // * Create public extend method
    // * Add a custom method to the API
    // *
    // ****************************************   
    T.extend = API.extend;


    // ****************************************
    // *
    // * Creates TAFFY.EXIT value that can be returned to stop an each loop
    // *
    // ****************************************  
    TAFFY.EXIT = 'TAFFYEXIT';

    // ****************************************
    // *
    // * Create public utility mergeObj method
    // * Return a new object where items from obj2
    // * have replaced or been added to the items in
    // * obj1
    // * Purpose: Used to combine objs
    // *
    // ****************************************   
    TAFFY.mergeObj = function ( ob1, ob2 ) {
      var c = {};
      eachin( ob1, function ( v, n ) { c[n] = ob1[n]; });
      eachin( ob2, function ( v, n ) { c[n] = ob2[n]; });
      return c;
    };


    // ****************************************
    // *
    // * Create public utility has method
    // * Returns true if a complex object, array
    // * or taffy collection contains the material
    // * provided in the second argument
    // * Purpose: Used to comare objects
    // *
    // ****************************************
    TAFFY.has = function ( var1, var2 ) {

      var re = true, n;

      if ( (var1.TAFFY) ){
        re = var1( var2 );
        if ( re.length > 0 ){
          return true;
        }
        else {
          return false;
        }
      }
      else {

        switch ( T.typeOf( var1 ) ){
          case 'object':
            if ( T.isObject( var2 ) ){
              eachin( var2, function ( v, n ) {
                if ( re === true && !T.isUndefined( var1[n] ) &&
                  var1.hasOwnProperty( n ) )
                {
                  re = T.has( var1[n], var2[n] );
                }
                else {
                  re = false;
                  return TAFFY.EXIT;
                }
              });
            }
            else if ( T.isArray( var2 ) ){
              each( var2, function ( v, n ) {
                re = T.has( var1, var2[n] );
                if ( re ){
                  return TAFFY.EXIT;
                }
              });
            }
            else if ( T.isString( var2 ) ){
              if ( !TAFFY.isUndefined( var1[var2] ) ){
                return true;
              }
              else {
                return false;
              }
            }
            return re;
          case 'array':
            if ( T.isObject( var2 ) ){
              each( var1, function ( v, i ) {
                re = T.has( var1[i], var2 );
                if ( re === true ){
                  return TAFFY.EXIT;
                }
              });
            }
            else if ( T.isArray( var2 ) ){
              each( var2, function ( v2, i2 ) {
                each( var1, function ( v1, i1 ) {
                  re = T.has( var1[i1], var2[i2] );
                  if ( re === true ){
                    return TAFFY.EXIT;
                  }
                });
                if ( re === true ){
                  return TAFFY.EXIT;
                }
              });
            }
            else if ( T.isString( var2 ) || T.isNumber( var2 ) ){
              for ( n = 0; n < var1.length; n++ ){
                re = T.has( var1[n], var2 );
                if ( re ){
                  return true;
                }
              }
            }
            return re;
          case 'string':
            if ( T.isString( var2 ) && var2 === var1 ){
              return true;
            }
            break;
          default:
            if ( T.typeOf( var1 ) === T.typeOf( var2 ) && var1 === var2 ){
              return true;
            }
            break;
        }
      }
      return false;
    };

    // ****************************************
    // *
    // * Create public utility hasAll method
    // * Returns true if a complex object, array
    // * or taffy collection contains the material
    // * provided in the call - for arrays it must
    // * contain all the material in each array item
    // * Purpose: Used to comare objects
    // *
    // ****************************************
    TAFFY.hasAll = function ( var1, var2 ) {

      var T = TAFFY, ar;
      if ( T.isArray( var2 ) ){
        ar = true;
        each( var2, function ( v ) {
          ar = T.has( var1, v );
          if ( ar === false ){
            return TAFFY.EXIT;
          }
        });
        return ar;
      }
      else {
        return T.has( var1, var2 );
      }
    };


    // ****************************************
    // *
    // * typeOf Fixed in JavaScript as public utility
    // *
    // ****************************************
    TAFFY.typeOf = function ( v ) {
      var s = typeof v;
      if ( s === 'object' ){
        if ( v ){
          if ( typeof v.length === 'number' &&
            !(v.propertyIsEnumerable( 'length' )) )
          {
            s = 'array';
          }
        }
        else {
          s = 'null';
        }
      }
      return s;
    };

    // ****************************************
    // *
    // * Create public utility getObjectKeys method
    // * Returns an array of an objects keys
    // * Purpose: Used to get the keys for an object
    // *
    // ****************************************   
    TAFFY.getObjectKeys = function ( ob ) {
      var kA = [];
      eachin( ob, function ( n, h ) {
        kA.push( h );
      });
      kA.sort();
      return kA;
    };

    // ****************************************
    // *
    // * Create public utility isSameArray
    // * Returns an array of an objects keys
    // * Purpose: Used to get the keys for an object
    // *
    // ****************************************   
    TAFFY.isSameArray = function ( ar1, ar2 ) {
      return (TAFFY.isArray( ar1 ) && TAFFY.isArray( ar2 ) &&
        ar1.join( ',' ) === ar2.join( ',' )) ? true : false;
    };

    // ****************************************
    // *
    // * Create public utility isSameObject method
    // * Returns true if objects contain the same
    // * material or false if they do not
    // * Purpose: Used to comare objects
    // *
    // ****************************************   
    TAFFY.isSameObject = function ( ob1, ob2 ) {
      var T = TAFFY, rv = true;

      if ( T.isObject( ob1 ) && T.isObject( ob2 ) ){
        if ( T.isSameArray( T.getObjectKeys( ob1 ),
          T.getObjectKeys( ob2 ) ) )
        {
          eachin( ob1, function ( v, n ) {
            if ( ! ( (T.isObject( ob1[n] ) && T.isObject( ob2[n] ) &&
              T.isSameObject( ob1[n], ob2[n] )) ||
              (T.isArray( ob1[n] ) && T.isArray( ob2[n] ) &&
                T.isSameArray( ob1[n], ob2[n] )) || (ob1[n] === ob2[n]) )
            ) {
              rv = false;
              return TAFFY.EXIT;
            }
          });
        }
        else {
          rv = false;
        }
      }
      else {
        rv = false;
      }
      return rv;
    };

    // ****************************************
    // *
    // * Create public utility is[DataType] methods
    // * Return true if obj is datatype, false otherwise
    // * Purpose: Used to determine if arguments are of certain data type
    // *
    // * mmikowski 2012-08-06 refactored to make much less "magical":
    // *   fewer closures and passes jslint
    // *
    // ****************************************

    typeList = [
      'String',  'Number', 'Object',   'Array',
      'Boolean', 'Null',   'Function', 'Undefined'
    ];
  
    makeTest = function ( thisKey ) {
      return function ( data ) {
        return TAFFY.typeOf( data ) === thisKey.toLowerCase() ? true : false;
      };
    };
  
    for ( idx = 0; idx < typeList.length; idx++ ){
      typeKey = typeList[idx];
      TAFFY['is' + typeKey] = makeTest( typeKey );
    }
  }
}());

if ( typeof(exports) === 'object' ){
  exports.taffy = TAFFY;
}



/***/ }),

/***/ 2236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData = exports.setDate = exports.changeType = exports.getTables = exports.getBrandList = exports.getFirmList = exports.searchChannel = exports.getChannelGroupList = exports.changeChannelCategory = exports.changeOs = exports.test = undefined;

__webpack_require__(2147);

__webpack_require__(2248);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _antd = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//todo mock数据
var test = function test() {};
//测试


//todo mock数据
var colmunRate1 = [{
	title: '激活日期',
	dataIndex: 'day',
	key: 'day'
}, {
	title: '新增用户',
	dataIndex: 'newUser',
	key: 'newUser'
}, {
	title: '次日留存率',
	dataIndex: 'n2',
	key: 'n2',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}, {
	title: '2日留存率',
	dataIndex: 'n3',
	key: 'n3',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}, {
	title: '3日留存率',
	dataIndex: 'n4',
	key: 'n4',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}, {
	title: '4日留存率 ',
	dataIndex: 'n5',
	key: 'n5',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}, {
	title: '5日留存率',
	dataIndex: 'n6',
	key: 'n6',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}, {
	title: '6日留存率',
	dataIndex: 'n7',
	key: 'n7',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}, {
	title: '7日留存率',
	dataIndex: 'n8',
	key: 'n8',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}];

var colmunNumber1 = [{
	title: '激活日期',
	dataIndex: 'day',
	key: 'day'
}, {
	title: '新增用户',
	dataIndex: 'newUser',
	key: 'newUser'
}, {
	title: '次日留存用户数',
	dataIndex: 'n2',
	key: 'n2'
}, {
	title: '2日留存用户数',
	dataIndex: 'n3',
	key: 'n3'
}, {
	title: '3日留存用户数',
	dataIndex: 'n4',
	key: 'n4'
}, {
	title: '4日留存用户数 ',
	dataIndex: 'n5',
	key: 'n5'
}, {
	title: '5日留存用户数',
	dataIndex: 'n6',
	key: 'n6'
}, {
	title: '6日留存用户数',
	dataIndex: 'n7',
	key: 'n7'
}, {
	title: '7日留存用户数',
	dataIndex: 'n8',
	key: 'n8'
}];

var colmunRate2 = [{
	title: '激活日期',
	dataIndex: 'day',
	key: 'day'
}, {
	title: '新增用户',
	dataIndex: 'newUser',
	key: 'newUser'
}, {
	title: '次周留存率',
	dataIndex: 'n2',
	key: 'n2',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}];

var colmunNumber2 = [{
	title: '激活日期',
	dataIndex: 'day',
	key: 'day'
}, {
	title: '新增用户',
	dataIndex: 'newUser',
	key: 'newUser'
}, {
	title: '次周留存用户数',
	dataIndex: 'n2',
	key: 'n2'
}];

var colmunRate3 = [{
	title: '激活日期',
	dataIndex: 'day',
	key: 'day'
}, {
	title: '新增用户',
	dataIndex: 'newUser',
	key: 'newUser'
}, {
	title: '次月留存率',
	dataIndex: 'n2',
	key: 'n2',
	render: function render(text) {
		return _react2.default.createElement(
			"span",
			null,
			" ",
			(Number(text) * 100).toFixed(2) + '%',
			" "
		);
	}
}];

var colmunNumber3 = [{
	title: '激活日期',
	dataIndex: 'day',
	key: 'day'
}, {
	title: '新增用户',
	dataIndex: 'newUser',
	key: 'newUser'
}, {
	title: '次月留存用户数',
	dataIndex: 'n2',
	key: 'n2'
}];
var changeOs = function changeOs(data, callback) {
	return function (dispatch) {

		dispatch({
			type: "RETENTANALYSIS_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELLIST",
			payload: data.channelList
		});

		var groupData = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory
		};

		callback(groupData);
	};
};

var setDate = function setDate(data) {
	return function (dispatch) {
		dispatch({
			type: "RETENTANALYSIS_STARTDATE",
			payload: data[0]
		});

		dispatch({
			type: "RETENTANALYSIS_ENDDATE",
			payload: data[1]
		});
	};
};

var changeChannelCategory = function changeChannelCategory(data, callback) {
	return function (dispatch) {

		dispatch({
			type: "RETENTANALYSIS_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELLIST",
			payload: data.channelList
		});

		var groupData = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory
		};

		callback(groupData);
	};
};

var getChannelGroupList = function getChannelGroupList(data) {

	return function (dispatch) {
		dispatch({
			type: "RETENTANALYSIS_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		// dispatch({
		// 	type: "RETENTANALYSIS_TABLESLOADING",
		// 	payload: true
		// })


		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channelGroup.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "RETENTANALYSIS_TABLESLOADING",
				payload: false
			});

			if (msg.status) {

				dispatch({
					type: "RETENTANALYSIS_CHANNELGROUPLIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var searchChannel = function searchChannel(data) {
	return function (dispatch) {

		// appCode:
		// channelCategory:
		// channelGroup:
		// channelName:


		dispatch({
			type: "RETENTANALYSIS_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "RETENTANALYSIS_CHANNELNAME",
			payload: data.channelName
		});

		// channelName

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channel.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				dispatch({
					type: "RETENTANALYSIS_CHANNELLIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var getFirmList = function getFirmList(data, callback) {

	return function (dispatch) {

		dispatch({
			type: "RETENTANALYSIS_FIRM",
			payload: data.firm
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/common/firm.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				dispatch({
					type: "RETENTANALYSIS_FIRMLIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}

			callback(data);
		});
	};
};

var getBrandList = function getBrandList(data) {

	return function (dispatch) {
		dispatch({
			type: "RETENTANALYSIS_BRAND",
			payload: data.brand
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/common/brand.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				dispatch({
					type: "RETENTANALYSIS_BRANDLIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var getTables = function getTables(data) {
	return function (dispatch) {

		dispatch({
			type: "RETENTANALYSIS_TABLESLOADING",
			payload: true
		});

		var params = {
			appCode: data.appCode,
			channelCategory: data.channelCategory,
			channelGroup: data.channelGroup,
			channelName: data.channelName,
			startDate: data.startDate,
			endDate: data.endDate,
			trendType: data.trendType,
			firm: data.firm,
			brand: data.brand
		};

		dispatch({
			type: "RETENTANALYSIS_TRENDTYPE",
			payload: data.trendType
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/left/table.do',
			method: 'post',
			data: params,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "RETENTANALYSIS_TABLESLOADING",
				payload: false
			});

			if (msg.status) {

				dispatch({
					type: "RETENTANALYSIS_TABLETOTAL",
					payload: msg.data
				});

				rateOrNumber(data, msg.data, dispatch);
			} else {
				_antd.notification['error']({
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var rateOrNumber = function rateOrNumber(param, data, dispatch) {

	if (param.type == 1) {

		if (param.trendType == 1) {
			dispatch({
				type: "RETENTANALYSIS_COLUMNS",
				payload: colmunRate1
			});

			setRateData(data.leftPercent, dispatch);
		} else if (param.trendType == 2) {
			dispatch({
				type: "RETENTANALYSIS_COLUMNS",
				payload: colmunRate2
			});

			setRateData(data.leftPercent, dispatch);
		} else {
			dispatch({
				type: "RETENTANALYSIS_COLUMNS",
				payload: colmunRate3
			});

			setRateData(data.leftPercent, dispatch);
		}
	} else {

		if (param.trendType == 1) {
			dispatch({
				type: "RETENTANALYSIS_COLUMNS",
				payload: colmunNumber1
			});

			setNumberData(data.leftCount, dispatch);
		} else if (param.trendType == 2) {
			dispatch({
				type: "RETENTANALYSIS_COLUMNS",
				payload: colmunNumber2
			});

			setNumberData(data.leftCount, dispatch);
		} else {
			dispatch({
				type: "RETENTANALYSIS_COLUMNS",
				payload: colmunNumber3
			});

			setNumberData(data.leftCount, dispatch);
		}
	}
};

var setRateExcelData = function setRateExcelData(data, dispatch) {

	var arr = [];

	data.map(function (pv, pk) {
		var obj = {};
		pv.map(function (v, k) {
			if (k == 0) {
				obj["day"] = v;
			} else if (k == 1) {
				obj["newUser"] = v;
			} else {
				obj["n" + k] = v;
			}
		});

		arr.push(obj);
	});

	return arr;
};

var setRateData = function setRateData(data, dispatch) {

	var arr = [];

	data.map(function (pv, pk) {
		var obj = {};
		pv.map(function (v, k) {
			if (k == 0) {
				obj["day"] = v;
			} else if (k == 1) {
				obj["newUser"] = v;
			} else {
				obj["n" + k] = v;
			}
		});

		arr.push(obj);
	});

	dispatch({
		type: "RETENTANALYSIS_TABLEDATA",
		payload: arr
	});
};

var setNumberExcelData = function setNumberExcelData(data, dispatch) {
	var arr = [];

	data.map(function (pv, pk) {
		var obj = {};
		pv.map(function (v, k) {

			if (k == 0) {
				obj["day"] = v;
			} else if (k == 1) {
				obj["newUser"] = v;
			} else {
				if (v != 0) {
					obj["n" + k] = v;
				}
			}
		});

		arr.push(obj);
	});

	// dispatch({
	// 	type: "RETENTANALYSIS_TABLEDATA",
	// 	payload: arr
	// })
	return arr;
};

var setNumberData = function setNumberData(data, dispatch) {
	var arr = [];

	data.map(function (pv, pk) {
		var obj = {};
		pv.map(function (v, k) {

			if (k == 0) {
				obj["day"] = v;
			} else if (k == 1) {
				obj["newUser"] = v;
			} else {
				if (v != 0) {
					obj["n" + k] = v;
				}
			}
		});

		arr.push(obj);
	});

	dispatch({
		type: "RETENTANALYSIS_TABLEDATA",
		payload: arr
	});
};

var changeType = function changeType(tableData, data) {
	return function (dispatch) {
		dispatch({
			type: "RETENTANALYSIS_TYPE",
			payload: data.type
		});

		rateOrNumber(data, tableData, dispatch);
	};
};

var getDownLoadData = function getDownLoadData(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/left/table.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				msg.data.leftPercent = setRateExcelData(msg.data.leftPercent);

				msg.data.leftCount = setNumberExcelData(msg.data.leftCount);

				dispatch({
					type: "RETENTANALYSIS_EXCELDATA",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

exports.test = test;
exports.changeOs = changeOs;
exports.changeChannelCategory = changeChannelCategory;
exports.getChannelGroupList = getChannelGroupList;
exports.searchChannel = searchChannel;
exports.getFirmList = getFirmList;
exports.getBrandList = getBrandList;
exports.getTables = getTables;
exports.changeType = changeType;
exports.setDate = setDate;
exports.getDownLoadData = getDownLoadData;

/***/ }),

/***/ 2248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	//周留存和月留存

	// Mock.mock("/data/left/table.do", "post", {
	// 	"status": true,
	// 	"data": {
	// 		"leftPercent": [
	// 			["2017-12-03", 174901, 0.3912],
	// 			["2017-12-04", 176817, 0.3449],
	// 			["2017-12-05", 194834, 0.3224],
	// 			["2017-12-06", 189603, 0.3142],
	// 			["2017-12-07", 240797, 0.3048],
	// 			["2017-12-08", 281876, 0.3635],
	// 			["2017-12-09", 366695, 0.3922]
	// 		],
	// 		"leftCount": [
	// 			["2017-12-03", 174901, 68428],
	// 			["2017-12-04", 176817, 60987],
	// 			["2017-12-05", 194834, 62808],
	// 			["2017-12-06", 189603, 59578],
	// 			["2017-12-07", 240797, 73386],
	// 			["2017-12-08", 281876, 102456],
	// 			["2017-12-09", 366695, 143821]
	// 		]
	// 	},
	// 	"msg": ""
	// });

	//日留存
	_mockjs2.default.mock("/data/left/table.do", "post", {
		"status": true,
		"data": {
			"leftPercent": [["2017-09-01", 187438, 0.2270, 0.1739, 0.1590, 0.1460, 0.1398, 0.1307, 0.1238], ["2017-09-02", 182051, 0.2389, 0.1832, 0.1664, 0.1536, 0.1431, 0.1365, 0.1304], ["2017-09-03", 192363, 0.2407, 0.1882, 0.1700, 0.1546, 0.1453, 0.1368, 0.1334], ["2017-09-04", 172088, 0.2474, 0.1959, 0.1707, 0.1546, 0.1415, 0.1372, 0.1331], ["2017-09-05", 165412, 0.2498, 0.1918, 0.1679, 0.1501, 0.1442, 0.1405, 0.1359], ["2017-09-06", 172035, 0.2458, 0.1887, 0.1611, 0.1499, 0.1443, 0.1383, 0.1387], ["2017-09-07", 200948, 0.2271, 0.1833, 0.2394, 0.1659, 0.1323, 0.1335, 0.1375], ["2017-09-08", 180840, 0.2243, 0.1829, 0.1657, 0.1370, 0.1638, 0.1643, 0.1128], ["2017-09-09", 208470, 0.2044, 0.2241, 0.1449, 0.1376, 0.2022, 0.1151, 0.0992], ["2017-09-10", 205670, 0.2176, 0.1643, 0.1457, 0.1527, 0.1244, 0.1117, 0.1070], ["2017-09-11", 174927, 0.2228, 0.1820, 0.1724, 0.1411, 0.1238, 0.1182, 0.1170], ["2017-09-12", 154463, 0.2439, 0.1915, 0.1594, 0.1383, 0.1311, 0.1285, 0.1255], ["2017-09-13", 180468, 0.2393, 0.1768, 0.1475, 0.1347, 0.1337, 0.1287, 0.1329], ["2017-09-14", 179358, 0.2164, 0.1583, 0.1421, 0.1361, 0.1314, 0.1353, 0.1333], ["2017-09-15", 165282, 0.2143, 0.1676, 0.1572, 0.1472, 0.1453, 0.1405, 0.1331], ["2017-09-16", 154731, 0.2269, 0.1818, 0.1680, 0.1602, 0.1549, 0.1469, 0.1447], ["2017-09-17", 173785, 0.2153, 0.1756, 0.1629, 0.1539, 0.1432, 0.1380, 0.1356], ["2017-09-18", 142334, 0.2455, 0.2029, 0.1860, 0.1690, 0.1543, 0.1505, 0.1474], ["2017-09-19", 133852, 0.2479, 0.2027, 0.1802, 0.1605, 0.1564, 0.1522, 0.1488], ["2017-09-20", 254224, 0.3670, 0.3067, 0.1975, 0.2804, 0.1942, 0.2266, 0.1873], ["2017-09-21", 244792, 0.2283, 0.3228, 0.2042, 0.1969, 0.2511, 0.1957, 0.2446], ["2017-09-22", 172802, 0.2699, 0.2289, 0.2005, 0.2085, 0.1904, 0.1941, 0.1751], ["2017-09-23", 177426, 0.2553, 0.2102, 0.2040, 0.1842, 0.1844, 0.1682, 0.1787], ["2017-09-24", 170737, 0.2486, 0.2150, 0.1931, 0.1837, 0.1733, 0.1767, 0.1713], ["2017-09-25", 149000, 0.2540, 0.2160, 0.1944, 0.1862, 0.1734, 0.1696, 0.1307], ["2017-09-26", 155067, 0.2450, 0.2186, 0.1856, 0.1879, 0.1651, 0.1314, 0.1222], ["2017-09-27", 162450, 0.2486, 0.2110, 0.1895, 0.1768, 0.1288, 0.1202, 0.1425], ["2017-09-28", 160404, 0.2475, 0.2294, 0.1786, 0.1321, 0.1211, 0.1621, 0.1468], ["2017-09-29", 158941, 0.2529, 0.2005, 0.1446, 0.1306, 0.1493, 0.1519, 0.1384], ["2017-09-30", 173829, 0.2357, 0.1626, 0.1412, 0.1668, 0.1534, 0.1518, 0.1429], ["2017-10-01", 198488, 0.2068, 0.1626, 0.1700, 0.1632, 0.1455, 0.1481, 0.1419], ["2017-10-02", 177978, 0.2158, 0.1990, 0.1746, 0.1601, 0.1573, 0.1530, 0.1455], ["2017-10-03", 167705, 0.2478, 0.1923, 0.1706, 0.1626, 0.1584, 0.1498, 0.1447], ["2017-10-04", 178053, 0.2298, 0.2041, 0.1719, 0.1810, 0.1533, 0.1631, 0.1438], ["2017-10-05", 164141, 0.2282, 0.1952, 0.1731, 0.1701, 0.1534, 0.1576, 0.1440], ["2017-10-06", 158229, 0.2390, 0.2021, 0.1690, 0.1694, 0.1531, 0.1454, 0.1401], ["2017-10-07", 153925, 0.2424, 0.1921, 0.1735, 0.1663, 0.1527, 0.1450, 0.1447], ["2017-10-08", 162704, 0.2393, 0.2037, 0.1776, 0.1649, 0.1544, 0.1547, 0.1523], ["2017-10-09", 150466, 0.2542, 0.2100, 0.1828, 0.1683, 0.1588, 0.1531, 0.1533], ["2017-10-10", 144462, 0.2468, 0.1965, 0.1759, 0.1627, 0.1557, 0.1568, 0.1460], ["2017-10-11", 159851, 0.2287, 0.1795, 0.1589, 0.1474, 0.1448, 0.1382, 0.1365], ["2017-10-12", 215604, 0.2236, 0.1591, 0.1442, 0.1390, 0.1227, 0.1196, 0.1076], ["2017-10-13", 177116, 0.2181, 0.1730, 0.1607, 0.1414, 0.1348, 0.1225, 0.1176], ["2017-10-14", 172345, 0.2399, 0.1930, 0.1685, 0.1602, 0.1561, 0.1530, 0.1468], ["2017-10-15", 172664, 0.2385, 0.1802, 0.1643, 0.1503, 0.1445, 0.1381, 0.1323], ["2017-10-16", 157055, 0.2328, 0.1862, 0.1663, 0.1550, 0.1419, 0.1349, 0.1384], ["2017-10-17", 139061, 0.2519, 0.1945, 0.1752, 0.1562, 0.1495, 0.1492, 0.1469], ["2017-10-18", 142083, 0.2418, 0.1906, 0.1674, 0.1549, 0.1527, 0.1532, 0.1523], ["2017-10-19", 169186, 0.2255, 0.1682, 0.1394, 0.1511, 0.1432, 0.1302, 0.1267], ["2017-10-20", 170628, 0.1985, 0.1508, 0.1475, 0.1392, 0.1279, 0.1192, 0.1159], ["2017-10-21", 145894, 0.2316, 0.1828, 0.1673, 0.1525, 0.1435, 0.1376, 0.1344], ["2017-10-22", 144345, 0.2210, 0.1846, 0.1720, 0.1522, 0.1536, 0.1477, 0.1433], ["2017-10-23", 129137, 0.2489, 0.2007, 0.1760, 0.1657, 0.1502, 0.1428, 0.1429], ["2017-10-24", 144067, 0.2486, 0.1883, 0.1674, 0.1524, 0.1437, 0.1405, 0.1439], ["2017-10-25", 141798, 0.2361, 0.1917, 0.1680, 0.1540, 0.1520, 0.1478, 0.1462], ["2017-10-26", 135216, 0.2383, 0.1789, 0.1638, 0.1481, 0.1484, 0.1453, 0.1396], ["2017-10-27", 135931, 0.2159, 0.1737, 0.1582, 0.1484, 0.1438, 0.1354, 0.1390], ["2017-10-28", 147847, 0.2242, 0.1724, 0.1561, 0.1468, 0.1394, 0.1432, 0.1327], ["2017-10-29", 132243, 0.2320, 0.1866, 0.1746, 0.1588, 0.1609, 0.1477, 0.1452], ["2017-10-30", 118999, 0.2455, 0.1950, 0.1755, 0.1673, 0.1513, 0.1481, 0.1505], ["2017-10-31", 119429, 0.2579, 0.2015, 0.1857, 0.1664, 0.1622, 0.1617, 0.1601], ["2017-11-01", 158260, 0.2065, 0.1611, 0.1424, 0.1338, 0.1342, 0.1316, 0.1263], ["2017-11-02", 130544, 0.2347, 0.1884, 0.1747, 0.1696, 0.1654, 0.1578, 0.1548], ["2017-11-03", 177410, 0.2272, 0.3011, 0.2900, 0.2853, 0.2750, 0.2683, 0.2540], ["2017-11-04", 153102, 0.2788, 0.2301, 0.2188, 0.2056, 0.2019, 0.1864, 0.1850], ["2017-11-05", 176166, 0.2552, 0.2165, 0.2014, 0.1913, 0.1795, 0.1740, 0.1823], ["2017-11-06", 140626, 0.2717, 0.2280, 0.2097, 0.1884, 0.1779, 0.1796, 0.1862], ["2017-11-07", 135860, 0.2843, 0.2410, 0.2114, 0.1939, 0.1939, 0.1993, 0.1891], ["2017-11-08", 166696, 0.2463, 0.1878, 0.1658, 0.1593, 0.1694, 0.1688, 0.1562], ["2017-11-09", 159783, 0.2399, 0.1892, 0.1820, 0.1876, 0.1799, 0.1671, 0.1636], ["2017-11-10", 138051, 0.2424, 0.2095, 0.2095, 0.2006, 0.1832, 0.1795, 0.1946], ["2017-11-11", 137197, 0.2717, 0.2292, 0.2135, 0.1965, 0.1904, 0.1958, 0.1933], ["2017-11-12", 154877, 0.2724, 0.2333, 0.2129, 0.2045, 0.2064, 0.2014, 0.1954], ["2017-11-13", 176189, 0.2611, 0.2096, 0.1974, 0.2450, 0.2317, 0.2244, 0.1965], ["2017-11-14", 183255, 0.3066, 0.2665, 0.2857, 0.2686, 0.2583, 0.2407, 0.2360], ["2017-11-15", 177879, 0.2440, 0.2055, 0.1835, 0.1710, 0.1683, 0.1688, 0.1648], ["2017-11-16", 160926, 0.2541, 0.2038, 0.1873, 0.1812, 0.1795, 0.1716, 0.1640], ["2017-11-17", 204230, 0.3405, 0.3040, 0.2155, 0.2223, 0.2651, 0.2550, 0.2556], ["2017-11-18", 180568, 0.2687, 0.2026, 0.1864, 0.1990, 0.1905, 0.1900, 0.1926], ["2017-11-19", 157476, 0.2354, 0.2015, 0.1967, 0.1871, 0.1845, 0.1832, 0.1828], ["2017-11-20", 140813, 0.2484, 0.2101, 0.1963, 0.1832, 0.1750, 0.1712, 0.1711], ["2017-11-21", 145971, 0.2502, 0.2040, 0.1877, 0.1758, 0.1706, 0.1726, 0.1738], ["2017-11-22", 154741, 0.2504, 0.2233, 0.1897, 0.1808, 0.1816, 0.1861, 0.1907], ["2017-11-23", 147215, 0.2576, 0.2114, 0.1968, 0.1932, 0.1939, 0.1870, 0.1833], ["2017-11-24", 156138, 0.2546, 0.2065, 0.1981, 0.1927, 0.1837, 0.1774, 0.1710], ["2017-11-25", 168163, 0.2464, 0.1978, 0.1908, 0.1820, 0.1744, 0.1682, 0.1680], ["2017-11-26", 170141, 0.2479, 0.2113, 0.2035, 0.1932, 0.1844, 0.1823, 0.1786], ["2017-11-27", 154744, 0.2581, 0.2168, 0.2025, 0.1861, 0.1753, 0.1702, 0.1727], ["2017-11-28", 178355, 0.2989, 0.2621, 0.2398, 0.2259, 0.2178, 0.2147, 0.2142], ["2017-11-29", 156343, 0.2595, 0.2148, 0.1975, 0.1850, 0.1829, 0.1827, 0.1760], ["2017-11-30", 181606, 0.2223, 0.1758, 0.1643, 0.1589, 0.1552, 0.1473, 0.1489], ["2017-12-01", 167802, 0.2439, 0.2018, 0.1905, 0.1817, 0.1743, 0.1705, 0.1601], ["2017-12-02", 177322, 0.2570, 0.2079, 0.1986, 0.1868, 0.1801, 0.1727, 0.1729], ["2017-12-03", 174916, 0.2409, 0.2061, 0.1929, 0.1850, 0.1768, 0.1737, 0.1695], ["2017-12-04", 176986, 0.2318, 0.1913, 0.1756, 0.1610, 0.1517, 0.1468, 0.1460], ["2017-12-05", 195446, 0.2146, 0.1792, 0.1597, 0.1489, 0.1425, 0.1400, 0.1367], ["2017-12-06", 189573, 0.2138, 0.1732, 0.1567, 0.1455, 0.1434, 0.1362, 0.1383], ["2017-12-07", 243789, 0.2074, 0.1705, 0.1559, 0.1439, 0.1365, 0.1329, 0.1344], ["2017-12-08", 284256, 0.3024, 0.2571, 0.2271, 0.2088, 0.1974, 0.1953, 0.2004], ["2017-12-09", 370377, 0.3400, 0.2714, 0.2454, 0.2268, 0.2140, 0.2118, 0.1975], ["2017-12-10", 378261, 0.3591, 0.3049, 0.2721, 0.2507, 0.2336, 0.2166, 0.1970], ["2017-12-11", 211739, 0.2341, 0.2006, 0.1876, 0.1767, 0.1583, 0.1495, 0.1498], ["2017-12-12", 231801, 0.1792, 0.1517, 0.1422, 0.1263, 0.1203, 0.1190, 0.1131], ["2017-12-13", 243585, 0.1865, 0.1551, 0.1341, 0.1237, 0.1236, 0.1169, 0.1174], ["2017-12-14", 332425, 0.2274, 0.1693, 0.1491, 0.1425, 0.1318, 0.1273, 0.1253], ["2017-12-15", 475645, 0.2122, 0.1674, 0.1572, 0.1433, 0.1335, 0.1300, 0.1239], ["2017-12-16", 352315, 0.2015, 0.1664, 0.1496, 0.1409, 0.1386, 0.1320, 0.1301], ["2017-12-17", 253426, 0.2077, 0.1685, 0.1568, 0.1499, 0.1443, 0.1404, 0.1302], ["2017-12-18", 238310, 0.1956, 0.1629, 0.1536, 0.1418, 0.1325, 0.1226, 0.1297], ["2017-12-19", 272850, 0.1752, 0.1405, 0.1258, 0.1133, 0.1050, 0.1075, 0.1078], ["2017-12-20", 361197, 0.1336, 0.1076, 0.0969, 0.0883, 0.0890, 0.0874, 0.0849], ["2017-12-21", 320008, 0.1646, 0.1379, 0.1218, 0.1216, 0.1194, 0.1140, 0.1101], ["2017-12-22", 227974, 0.2013, 0.1601, 0.1546, 0.1494, 0.1390, 0.1351, 0.1275], ["2017-12-23", 245237, 0.1834, 0.1519, 0.1428, 0.1326, 0.1279, 0.1248, 0.1245], ["2017-12-24", 253082, 0.1813, 0.1530, 0.1356, 0.1299, 0.1233, 0.1250, 0.1130], ["2017-12-25", 325014, 0.2514, 0.1968, 0.1681, 0.1491, 0.1416, 0.1272, 0.1193], ["2017-12-26", 407593, 0.2654, 0.2065, 0.1757, 0.1645, 0.1438, 0.1323, 0.1291], ["2017-12-27", 288181, 0.2581, 0.2030, 0.1844, 0.1582, 0.1479, 0.1453, 0.1533], ["2017-12-28", 276742, 0.2171, 0.1682, 0.1427, 0.1362, 0.1301, 0.1422, 0.1349], ["2017-12-29", 267750, 0.2251, 0.1540, 0.1443, 0.1368, 0.1423, 0.1355, 0.1304], ["2017-12-30", 301438, 0.2012, 0.1620, 0.1489, 0.1539, 0.1465, 0.1415, 0.1376], ["2017-12-31", 266811, 0.1824, 0.1414, 0.1507, 0.1414, 0.1331, 0.1289, 0.1223], ["2018-01-01", 283540, 0.1758, 0.1573, 0.1473, 0.1352, 0.1295, 0.1277, 0.1180], ["2018-01-02", 262092, 0.2139, 0.1617, 0.1437, 0.1324, 0.1299, 0.1278, 0.1245], ["2018-01-03", 282400, 0.2146, 0.1734, 0.1518, 0.1464, 0.1357, 0.1317, 0.1301], ["2018-01-04", 316238, 0.1738, 0.1193, 0.1113, 0.0997, 0.0962, 0.0949, 0.0959], ["2018-01-05", 274406, 0.1518, 0.1206, 0.1028, 0.0976, 0.0958, 0.1004, 0.0962], ["2018-01-06", 254471, 0.1716, 0.1217, 0.1103, 0.1065, 0.1090, 0.1079, 0.1033], ["2018-01-07", 259578, 0.1541, 0.1178, 0.1082, 0.1097, 0.1055, 0.1048, 0.1030], ["2018-01-08", 216364, 0.1904, 0.1424, 0.1337, 0.1280, 0.1111, 0.1119, 0.1078], ["2018-01-09", 208296, 0.2284, 0.1723, 0.1496, 0.1274, 0.1269, 0.1297, 0.1260], ["2018-01-10", 194563, 0.2388, 0.1778, 0.1640, 0.1519, 0.1466, 0.1504, 0.1313], ["2018-01-11", 167480, 0.2256, 0.1723, 0.1605, 0.1540, 0.1492, 0.1454, 0.1416], ["2018-01-12", 188550, 0.2181, 0.1574, 0.1478, 0.1400, 0.1378, 0.1428, 0.1331], ["2018-01-13", 183324, 0.2275, 0.1627, 0.1526, 0.1451, 0.1468, 0.1492, 0.1391], ["2018-01-14", 176568, 0.2227, 0.1721, 0.1581, 0.1566, 0.1524, 0.1472, 0.1458], ["2018-01-15", 177143, 0.2435, 0.1730, 0.1613, 0.1492, 0.1379, 0.1361, 0.1300], ["2018-01-16", 186324, 0.2491, 0.1715, 0.1572, 0.1421, 0.1376, 0.1323, 0.1284], ["2018-01-17", 209283, 0.2963, 0.1980, 0.1848, 0.1780, 0.1633, 0.1518, 0.1429], ["2018-01-18", 252687, 0.3246, 0.1969, 0.1782, 0.1685, 0.1604, 0.1486, 0.1424], ["2018-01-19", 213926, 0.3081, 0.1917, 0.1720, 0.1593, 0.1509, 0.1482, 0.1356], ["2018-01-20", 204661, 0.3002, 0.1936, 0.1747, 0.1631, 0.1556, 0.1546, 0.1440], ["2018-01-21", 225744, 0.2903, 0.1870, 0.1675, 0.1579, 0.1487, 0.1440, 0.1336], ["2018-01-22", 189212, 0.3169, 0.2122, 0.1847, 0.1755, 0.1647, 0.1580, 0.1477], ["2018-01-23", 217917, 0.3464, 0.2179, 0.1900, 0.1732, 0.1609, 0.1561, 0.1378], ["2018-01-24", 241993, 0.3107, 0.2010, 0.1730, 0.1558, 0.1487, 0.1361, 0.1244], ["2018-01-25", 312807, 0.2606, 0.1890, 0.1654, 0.1519, 0.1431, 0.1248, 0.0823], ["2018-01-26", 256651, 0.2515, 0.1969, 0.1779, 0.1599, 0.1426, 0.0967, 0.1128], ["2018-01-27", 204391, 0.3067, 0.1994, 0.1763, 0.1582, 0.1275, 0.1350, 0.1319], ["2018-01-28", 192718, 0.3153, 0.1856, 0.1666, 0.1440, 0.1381, 0.1387, 0.1251], ["2018-01-29", 201907, 0.2996, 0.1837, 0.1506, 0.1404, 0.1370, 0.1270, 0.1175], ["2018-01-30", 182831, 0.2897, 0.1701, 0.1695, 0.1642, 0.1469, 0.1445, 0.1344], ["2018-01-31", 159903, 0.2515, 0.1816, 0.1697, 0.1573, 0.1543, 0.1626, 0.1518], ["2018-02-01", 136117, 0.2575, 0.1943, 0.1791, 0.1703, 0.1661, 0.1603, 0.1525], ["2018-02-02", 136505, 0.2583, 0.2086, 0.1911, 0.1823, 0.1667, 0.1618, ""], ["2018-02-03", 139166, 0.2609, 0.2058, 0.1965, 0.1781, 0.1723, "", ""], ["2018-02-04", 145260, 0.2548, 0.2103, 0.1888, 0.1781, "", "", ""], ["2018-02-05", 148254, 0.2578, 0.2064, 0.1885, "", "", "", ""], ["2018-02-06", 153345, 0.2674, 0.2189, "", "", "", "", ""], ["2018-02-07", 147008, 0.2535, "", "", "", "", "", ""]],
			"leftCount": [["2017-09-01", 187438, 42543, 32600, 29803, 27364, 26207, 24498, 23197], ["2017-09-02", 182051, 43500, 33357, 30290, 27958, 26044, 24844, 23732], ["2017-09-03", 192363, 46296, 36206, 32701, 29736, 27946, 26310, 25654], ["2017-09-04", 172088, 42577, 33704, 29377, 26599, 24353, 23617, 22897], ["2017-09-05", 165412, 41323, 31727, 27780, 24829, 23846, 23248, 22477], ["2017-09-06", 172035, 42292, 32467, 27709, 25788, 24831, 23795, 23858], ["2017-09-07", 200948, 45631, 36825, 48109, 33330, 26594, 26825, 27640], ["2017-09-08", 180840, 40561, 33078, 29970, 24775, 29628, 29703, 20394], ["2017-09-09", 208470, 42616, 46711, 30204, 28685, 42154, 23996, 20687], ["2017-09-10", 205670, 44756, 33794, 29965, 31407, 25582, 22966, 22010], ["2017-09-11", 174927, 38965, 31834, 30165, 24680, 21661, 20668, 20462], ["2017-09-12", 154463, 37670, 29583, 24628, 21361, 20245, 19845, 19384], ["2017-09-13", 180468, 43187, 31910, 26626, 24308, 24133, 23223, 23987], ["2017-09-14", 179358, 38806, 28394, 25480, 24409, 23574, 24259, 23904], ["2017-09-15", 165282, 35422, 27703, 25981, 24333, 24016, 23214, 22007], ["2017-09-16", 154731, 35110, 28131, 25994, 24783, 23970, 22725, 22384], ["2017-09-17", 173785, 37417, 30517, 28309, 26742, 24888, 23983, 23560], ["2017-09-18", 142334, 34943, 28881, 26472, 24057, 21964, 21428, 20985], ["2017-09-19", 133852, 33178, 27134, 24121, 21481, 20935, 20368, 19913], ["2017-09-20", 254224, 93311, 77960, 50220, 71291, 49364, 57610, 47614], ["2017-09-21", 244792, 55876, 79023, 49987, 48202, 61457, 47915, 59886], ["2017-09-22", 172802, 46645, 39562, 34647, 36022, 32902, 33542, 30257], ["2017-09-23", 177426, 45300, 37296, 36195, 32687, 32719, 29847, 31710], ["2017-09-24", 170737, 42452, 36705, 32967, 31367, 29591, 30163, 29245], ["2017-09-25", 149000, 37846, 32185, 28959, 27748, 25843, 25264, 19477], ["2017-09-26", 155067, 37987, 33892, 28774, 29134, 25596, 20371, 18956], ["2017-09-27", 162450, 40383, 34270, 30792, 28717, 20920, 19522, 23154], ["2017-09-28", 160404, 39705, 36799, 28651, 21184, 19423, 26009, 23547], ["2017-09-29", 158941, 40202, 31873, 22976, 20753, 23734, 24148, 21999], ["2017-09-30", 173829, 40970, 28273, 24550, 28990, 26670, 26383, 24847], ["2017-10-01", 198488, 41042, 32282, 33739, 32391, 28883, 29400, 28164], ["2017-10-02", 177978, 38414, 35413, 31068, 28498, 27993, 27225, 25903], ["2017-10-03", 167705, 41556, 32251, 28613, 27274, 26563, 25128, 24274], ["2017-10-04", 178053, 40923, 36343, 30606, 32219, 27294, 29045, 25606], ["2017-10-05", 164141, 37464, 32045, 28412, 27928, 25180, 25876, 23632], ["2017-10-06", 158229, 37813, 31974, 26739, 26805, 24232, 23011, 22165], ["2017-10-07", 153925, 37308, 29562, 26707, 25593, 23506, 22321, 22279], ["2017-10-08", 162704, 38941, 33148, 28892, 26826, 25122, 25174, 24786], ["2017-10-09", 150466, 38248, 31597, 27511, 25320, 23888, 23038, 23063], ["2017-10-10", 144462, 35648, 28389, 25406, 23501, 22487, 22653, 21090], ["2017-10-11", 159851, 36557, 28688, 25408, 23563, 23140, 22097, 21824], ["2017-10-12", 215604, 48216, 34309, 31084, 29967, 26444, 25789, 23199], ["2017-10-13", 177116, 38636, 30635, 28466, 25039, 23884, 21689, 20837], ["2017-10-14", 172345, 41342, 33268, 29048, 27613, 26900, 26365, 25301], ["2017-10-15", 172664, 41172, 31109, 28364, 25945, 24958, 23839, 22848], ["2017-10-16", 157055, 36563, 29241, 26116, 24336, 22280, 21183, 21741], ["2017-10-17", 139061, 35030, 27054, 24368, 21727, 20795, 20748, 20423], ["2017-10-18", 142083, 34357, 27084, 23790, 22010, 21693, 21764, 21640], ["2017-10-19", 169186, 38153, 28461, 23584, 25559, 24223, 22027, 21441], ["2017-10-20", 170628, 33877, 25728, 25174, 23749, 21831, 20346, 19774], ["2017-10-21", 145894, 33791, 26674, 24411, 22249, 20936, 20074, 19609], ["2017-10-22", 144345, 31898, 26640, 24824, 21969, 22171, 21321, 20680], ["2017-10-23", 129137, 32137, 25921, 22726, 21401, 19392, 18435, 18454], ["2017-10-24", 144067, 35817, 27123, 24112, 21953, 20701, 20243, 20728], ["2017-10-25", 141798, 33484, 27180, 23827, 21842, 21558, 20951, 20728], ["2017-10-26", 135216, 32222, 24186, 22144, 20022, 20071, 19644, 18870], ["2017-10-27", 135931, 29347, 23612, 21498, 20177, 19547, 18411, 18888], ["2017-10-28", 147847, 33144, 25494, 23083, 21710, 20606, 21174, 19624], ["2017-10-29", 132243, 30684, 24671, 23088, 20998, 21279, 19529, 19205], ["2017-10-30", 118999, 29209, 23204, 20887, 19908, 18000, 17621, 17908], ["2017-10-31", 119429, 30804, 24070, 22172, 19870, 19375, 19315, 19120], ["2017-11-01", 158260, 32675, 25502, 22531, 21169, 21232, 20830, 19991], ["2017-11-02", 130544, 30645, 24597, 22803, 22134, 21589, 20604, 20208], ["2017-11-03", 177410, 40301, 53415, 51445, 50610, 48796, 47600, 45059], ["2017-11-04", 153102, 42692, 35223, 33499, 31472, 30905, 28542, 28327], ["2017-11-05", 176166, 44962, 38137, 35474, 33698, 31618, 30653, 32118], ["2017-11-06", 140626, 38209, 32068, 29496, 26495, 25015, 25263, 26191], ["2017-11-07", 135860, 38623, 32749, 28723, 26341, 26349, 27082, 25693], ["2017-11-08", 166696, 41053, 31307, 27633, 26554, 28240, 28139, 26034], ["2017-11-09", 159783, 38332, 30233, 29080, 29978, 28740, 26703, 26137], ["2017-11-10", 138051, 33470, 28920, 28928, 27697, 25289, 24781, 26864], ["2017-11-11", 137197, 37282, 31440, 29292, 26959, 26118, 26868, 26525], ["2017-11-12", 154877, 42188, 36137, 32973, 31673, 31961, 31195, 30260], ["2017-11-13", 176189, 45997, 36935, 34787, 43171, 40828, 39545, 34625], ["2017-11-14", 183255, 56192, 48830, 52362, 49217, 47331, 44108, 43257], ["2017-11-15", 177879, 43395, 36561, 32641, 30424, 29945, 30024, 29315], ["2017-11-16", 160926, 40893, 32793, 30135, 29164, 28890, 27607, 26393], ["2017-11-17", 204230, 69541, 62091, 44014, 45399, 54146, 52076, 52209], ["2017-11-18", 180568, 48520, 36587, 33649, 35934, 34393, 34310, 34774], ["2017-11-19", 157476, 37076, 31730, 30972, 29470, 29061, 28845, 28781], ["2017-11-20", 140813, 34973, 29579, 27648, 25796, 24644, 24113, 24089], ["2017-11-21", 145971, 36525, 29771, 27397, 25660, 24897, 25192, 25369], ["2017-11-22", 154741, 38751, 34548, 29356, 27980, 28100, 28792, 29513], ["2017-11-23", 147215, 37924, 31120, 28968, 28440, 28552, 27525, 26982], ["2017-11-24", 156138, 39756, 32248, 30929, 30082, 28676, 27696, 26693], ["2017-11-25", 168163, 41432, 33261, 32091, 30607, 29335, 28290, 28248], ["2017-11-26", 170141, 42182, 35950, 34621, 32874, 31368, 31023, 30382], ["2017-11-27", 154744, 39943, 33543, 31339, 28794, 27125, 26345, 26722], ["2017-11-28", 178355, 53304, 46749, 42766, 40282, 38840, 38294, 38205], ["2017-11-29", 156343, 40566, 33579, 30883, 28929, 28590, 28561, 27510], ["2017-11-30", 181606, 40365, 31923, 29834, 28865, 28185, 26758, 27035], ["2017-12-01", 167802, 40927, 33868, 31968, 30492, 29252, 28614, 26858], ["2017-12-02", 177322, 45567, 36865, 35215, 33132, 31931, 30620, 30659], ["2017-12-03", 174916, 42140, 36046, 33750, 32357, 30917, 30391, 29645], ["2017-12-04", 176986, 41018, 33855, 31081, 28489, 26840, 25977, 25839], ["2017-12-05", 195446, 41934, 35033, 31212, 29094, 27842, 27371, 26726], ["2017-12-06", 189573, 40523, 32825, 29703, 27592, 27177, 25811, 26223], ["2017-12-07", 243789, 50574, 41570, 38009, 35082, 33275, 32403, 32774], ["2017-12-08", 284256, 85947, 73076, 64550, 59351, 56118, 55501, 56959], ["2017-12-09", 370377, 125919, 100515, 90902, 84019, 79272, 78431, 73148], ["2017-12-10", 378261, 135838, 115332, 102919, 94823, 88351, 81935, 74507], ["2017-12-11", 211739, 49568, 42484, 39720, 37417, 33526, 31651, 31725], ["2017-12-12", 231801, 41540, 35156, 32969, 29286, 27876, 27579, 26225], ["2017-12-13", 243585, 45440, 37774, 32659, 30139, 30107, 28467, 28589], ["2017-12-14", 332425, 75586, 56278, 49549, 47387, 43822, 42306, 41654], ["2017-12-15", 475645, 100940, 79619, 74749, 68164, 63479, 61813, 58952], ["2017-12-16", 352315, 71006, 58642, 52696, 49633, 48847, 46495, 45836], ["2017-12-17", 253426, 52645, 42692, 39738, 37999, 36581, 35569, 33006], ["2017-12-18", 238310, 46606, 38820, 36593, 33801, 31580, 29211, 30902], ["2017-12-19", 272850, 47796, 38342, 34338, 30908, 28657, 29332, 29420], ["2017-12-20", 361197, 48259, 38850, 34995, 31887, 32148, 31574, 30673], ["2017-12-21", 320008, 52673, 44131, 38983, 38902, 38224, 36467, 35234], ["2017-12-22", 227974, 45885, 36503, 35235, 34053, 31693, 30802, 29069], ["2017-12-23", 245237, 44976, 37257, 35026, 32525, 31364, 30604, 30542], ["2017-12-24", 253082, 45888, 38710, 34317, 32876, 31214, 31636, 28598], ["2017-12-25", 325014, 81700, 63951, 54649, 48457, 46017, 41337, 38759], ["2017-12-26", 407593, 108189, 84177, 71612, 67040, 58613, 53942, 52600], ["2017-12-27", 288181, 74378, 58514, 53139, 45582, 42624, 41863, 44187], ["2017-12-28", 276742, 60083, 46551, 39504, 37697, 36004, 39357, 37327], ["2017-12-29", 267750, 60258, 41232, 38647, 36617, 38098, 36288, 34903], ["2017-12-30", 301438, 60663, 48843, 44896, 46390, 44172, 42648, 41484], ["2017-12-31", 266811, 48671, 37732, 40215, 37716, 35516, 34404, 32635], ["2018-01-01", 283540, 49841, 44596, 41773, 38343, 36715, 36198, 33469], ["2018-01-02", 262092, 56065, 42378, 37675, 34696, 34035, 33489, 32632], ["2018-01-03", 282400, 60616, 48960, 42868, 41338, 38323, 37183, 36751], ["2018-01-04", 316238, 54968, 37740, 35206, 31526, 30431, 30005, 30322], ["2018-01-05", 274406, 41648, 33088, 28200, 26777, 26283, 27558, 26409], ["2018-01-06", 254471, 43671, 30960, 28060, 27095, 27732, 27468, 26289], ["2018-01-07", 259578, 39992, 30574, 28085, 28463, 27394, 27191, 26745], ["2018-01-08", 216364, 41200, 30817, 28931, 27703, 24047, 24202, 23316], ["2018-01-09", 208296, 47571, 35897, 31163, 26532, 26437, 27018, 26244], ["2018-01-10", 194563, 46454, 34590, 31909, 29549, 28521, 29268, 25553], ["2018-01-11", 167480, 37782, 28863, 26879, 25797, 24994, 24356, 23712], ["2018-01-12", 188550, 41130, 29684, 27864, 26391, 25981, 26925, 25104], ["2018-01-13", 183324, 41708, 29832, 27972, 26606, 26904, 27353, 25505], ["2018-01-14", 176568, 39321, 30383, 27912, 27653, 26907, 25986, 25752], ["2018-01-15", 177143, 43127, 30652, 28572, 26423, 24431, 24104, 23031], ["2018-01-16", 186324, 46418, 31949, 29286, 26474, 25646, 24650, 23929], ["2018-01-17", 209283, 62010, 41443, 38678, 37259, 34169, 31763, 29915], ["2018-01-18", 252687, 82032, 49747, 45028, 42582, 40539, 37546, 35990], ["2018-01-19", 213926, 65909, 41005, 36790, 34074, 32277, 31706, 29002], ["2018-01-20", 204661, 61442, 39614, 35756, 33372, 31842, 31631, 29481], ["2018-01-21", 225744, 65535, 42214, 37815, 35651, 33576, 32512, 30157], ["2018-01-22", 189212, 59962, 40149, 34941, 33216, 31156, 29891, 27951], ["2018-01-23", 217917, 75491, 47483, 41411, 37744, 35067, 34014, 30021], ["2018-01-24", 241993, 75198, 48632, 41873, 37699, 35979, 32938, 30109], ["2018-01-25", 312807, 81503, 59106, 51749, 47524, 44770, 39030, 25753], ["2018-01-26", 256651, 64536, 50531, 45654, 41032, 36591, 24828, 28958], ["2018-01-27", 204391, 62682, 40746, 36035, 32329, 26064, 27598, 26968], ["2018-01-28", 192718, 60769, 35765, 32098, 27746, 26616, 26732, 24113], ["2018-01-29", 201907, 60484, 37088, 30412, 28350, 27670, 25635, 23734], ["2018-01-30", 182831, 52970, 31096, 30985, 30023, 26864, 26415, 24572], ["2018-01-31", 159903, 40208, 29039, 27136, 25150, 24670, 26005, 24271], ["2018-02-01", 136117, 35049, 26454, 24373, 23175, 22603, 21826, 20759], ["2018-02-02", 136505, 35262, 28469, 26092, 24880, 22761, 22084, 0], ["2018-02-03", 139166, 36303, 28634, 27348, 24781, 23983, 0, 0], ["2018-02-04", 145260, 37017, 30541, 27431, 25865, 0, 0, 0], ["2018-02-05", 148254, 38225, 30602, 27942, 0, 0, 0, 0], ["2018-02-06", 153345, 40999, 33561, 0, 0, 0, 0, 0], ["2018-02-07", 147008, 37271, 0, 0, 0, 0, 0, 0]]
		},
		"msg": ""
	});
}

/***/ })

});
//# sourceMappingURL=retentionAnalysis.js.map