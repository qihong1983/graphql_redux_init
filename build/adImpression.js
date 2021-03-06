webpackJsonp([17],{

/***/ 2119:
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

var _channelManagerUtil = __webpack_require__(2151);

var _antd = __webpack_require__(110);

var _echarts = __webpack_require__(428);

var _echarts2 = _interopRequireDefault(_echarts);

var _chartConfigs = __webpack_require__(2152);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(429);

var _nprogress = __webpack_require__(2148);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _utils = __webpack_require__(2150);

var _adImpression = __webpack_require__(2216);

var actionCreators = _interopRequireWildcard(_adImpression);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var adImpression = function (_React$Component) {
	_inherits(adImpression, _React$Component);

	function adImpression(props) {
		_classCallCheck(this, adImpression);

		return _possibleConstructorReturn(this, (adImpression.__proto__ || Object.getPrototypeOf(adImpression)).call(this, props));
	}

	_createClass(adImpression, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_nprogress2.default.start();

			var groupListData = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory
			};

			this.getGroupList(groupListData);
			this.props.getGroupList(groupListData);

			var chartsData = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelName: this.props.adImpression.channelName,
				endDate: this.props.adImpression.endDate,
				startDate: this.props.adImpression.startDate
			};

			this.getCharts(chartsData);

			var tableData = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelName: this.props.adImpression.channelName,
				endDate: this.props.adImpression.endDate,
				startDate: this.props.adImpression.endDate,
				limit: this.props.adImpression.limit,
				offset: this.props.adImpression.offset
			};

			this.getTables(tableData);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.getChartShow();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_nprogress2.default.done();
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps) {
			if (nextProps.adImpression.excelData != this.props.adImpression.excelData) {
				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.adImpression.columns);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.adImpression.columns);
				var arr = [];
				nextProps.adImpression.excelData.map(function (v, k) {
					if (v.expo60 != undefined && v.unitPrice != undefined) {
						v.roi = (v.expo60 / v.unitPrice).toFixed(2);
					} else {
						v.roi = "";
					}
					arr.push(v);
				});

				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(arr, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'getGroupList',
		value: function getGroupList(data) {
			this.props.getGroupList(data);
		}
	}, {
		key: 'getTables',
		value: function getTables(data) {
			this.props.getTables(data);
		}
	}, {
		key: 'parseData',
		value: function parseData() {
			var db = (0, _taffy2.default)(this.props.adImpression.chartsData);
			var data = db().order("day").get();
			db = (0, _taffy2.default)(data);
			var names = db().distinct("channelName");
			var xAxis = db().distinct("day");
			var series = [];

			names.map(function (v, k) {

				var unitPrice = db({
					"channelName": v
				}).select("unitPrice");

				var expo60 = db({
					"channelName": v
				}).select("expo60");

				var rois = [];
				for (var i = 0; i < unitPrice.length; i++) {
					if (expo60[i] == undefined || unitPrice[i] == undefined) {
						rois.push('-');
					} else {
						rois.push((expo60[i] / unitPrice[i]).toFixed(2));
					}
				}

				series.push({
					"name": v,
					"type": "line",
					"stack": v,
					"data": rois
				});
			});

			var data = {
				"names": names,
				"xAxis": xAxis,
				"series": series
			};

			return data;
		}
	}, {
		key: 'getChartShow',
		value: function getChartShow() {
			if (this.props.adImpression.chartsData.length != 0) {
				var data = this.parseData();
				var myChart = _echarts2.default.init(this.refs.charts);
				var config = (0, _chartConfigs.Line)(data);
				myChart.setOption(config);
				window.onresize = myChart.resize;
			} else {
				if (this.props.adImpression.chartsNoData) {
					this.refs.charts.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getCharts',
		value: function getCharts(data) {
			this.props.getCharts(data);
		}
	}, {
		key: 'changeOs',
		value: function changeOs(value) {

			var data = {
				appCode: value,
				channelCategory: "",
				channelGroup: "",
				channelName: ""
			};

			this.props.changeOs(data, this.getGroupList.bind(this));
		}
	}, {
		key: 'changeChannelCategory',
		value: function changeChannelCategory(value) {

			var data = {
				appCode: this.props.adImpression.appCode,
				channelCategory: value,
				channelGroup: "",
				channelName: ""
			};

			this.props.changeChannelCategory(data, this.getGroupList.bind(this));
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
				channelGroup: value
			};

			this.props.changeChannelGroup(data);
		}

		/**
   * 渠道搜索
   * @method searchChannel
   * @param value {String}
   */

	}, {
		key: 'searchChannel',
		value: function searchChannel(value) {

			var data = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelGroup: this.props.adImpression.channelGroup,
				channelName: value
			};

			this.props.searchChannel(data);
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

			if (dateString[1] > this.props.adImpression.maxDate) {

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
			var chartsData = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelName: this.props.adImpression.channelName,
				endDate: this.props.adImpression.endDate,
				startDate: this.props.adImpression.startDate
			};

			this.getCharts(chartsData);

			var tableData = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelName: this.props.adImpression.channelName,
				endDate: this.props.adImpression.endDate,
				startDate: this.props.adImpression.endDate,
				limit: this.props.adImpression.limit,
				offset: 1
			};

			this.getTables(tableData);
		}
	}, {
		key: 'handleTableChange',
		value: function handleTableChange(pagination, filters, sorter) {

			var tableData = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelName: this.props.adImpression.channelName,
				endDate: this.props.adImpression.endDate,
				startDate: this.props.adImpression.endDate,
				limit: pagination.pageSize,
				offset: pagination.current
			};

			this.getTables(tableData);
		}
	}, {
		key: 'getTableData',
		value: function getTableData() {
			var arr = [];

			this.props.adImpression.tableData.map(function (v, k) {

				if (v.expo60 != undefined && v.unitPrice != undefined) {
					v.roi = (v.expo60 / v.unitPrice).toFixed(2);
				} else {
					v.roi = "";
				}
				arr.push(v);
			});

			return arr;
		}
	}, {
		key: 'getDownloadName',
		value: function getDownloadName(data) {
			var prefix = '广告曝光-';
			var fileName = '全部';

			if (data.channelName) {
				fileName = data.channelName;
			} else if (data.channelGroup) {
				fileName = data.channelGroup;
			} else if (data.channelCategory) {
				fileName = data.channelCategory == '1' ? '线上' : '线下';
			} else if (data.appCode) {
				fileName = data.appCode == '24' ? 'Android' : 'iOS';
			}

			return prefix + fileName + '-(' + data.startDate + '至' + data.endDate + ')';
		}
	}, {
		key: 'downloadExcel',
		value: function downloadExcel() {

			var data = {
				appCode: this.props.adImpression.appCode,
				channelCategory: this.props.adImpression.channelCategory,
				channelName: this.props.adImpression.channelName,
				endDate: this.props.adImpression.endDate,
				startDate: this.props.adImpression.startDate,
				limit: -1,
				offset: 1
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData(data);
		}
	}, {
		key: 'render',
		value: function render() {

			var pagination = {
				current: this.props.adImpression.offset,
				pageSize: this.props.adImpression.limit,
				total: this.props.adImpression.total,
				defaultPageSize: this.props.adImpression.limit,
				showSizeChanger: true
			};

			(0, _utils.addKey)(this.props.adImpression.tableData, 'adImpression' + new Date().getTime());

			var tableData = this.getTableData();

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
									value: this.props.adImpression.appCode,
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
									value: this.props.adImpression.channelCategory,
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
									value: this.props.adImpression.channelGroup,
									className: 'channelGroup',
									optionFilterProp: 'children',
									onChange: this.handleChange.bind(this) },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								(0, _utils.renderGroupList)(this.props.adImpression.channelGroupList)
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
									value: this.props.adImpression.channelName,
									filterOption: false,
									onChange: this.searchChannel.bind(this)
								},
								(0, _utils.getChannelList)(this.props.adImpression.channelList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(RangePicker, {
								value: [(0, _moment2.default)(this.props.adImpression.startDate, dateFormat), (0, _moment2.default)(this.props.adImpression.endDate, dateFormat)],
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
					{ className: 'channel_charts' },
					_react2.default.createElement(
						_antd.Card,
						{ title: '\u65B0\u589E\u7528\u6237Top10\u6E20\u9053\u768460\u65E5\u5185\u5E7F\u544A\u66DD\u5149/\u6FC0\u6D3B\u5355\u4EF7', noHovering: true, style: { minHeight: "380px" } },
						_react2.default.createElement(
							_antd.Spin,
							{ spinning: this.props.adImpression.chartsLoading },
							_react2.default.createElement('div', { ref: 'charts', style: { width: "100%", minHeight: "300px" } })
						)
					)
				),
				_react2.default.createElement(
					Content,
					{ className: 'channel_table' },
					_react2.default.createElement(
						'div',
						{ style: { width: "100%", marginBottom: "20px" }, className: 'clearfix' },
						_react2.default.createElement(
							_antd.Button,
							{ type: 'primary', style: { float: "right" }, onClick: this.downloadExcel.bind(this), icon: 'download' },
							'\u4E0B\u8F7D'
						)
					),
					_react2.default.createElement(_antd.Table, {
						loading: this.props.adImpression.tablesLoading,
						locale: { "emptyText": "暂无数据" },
						columns: (0, _utils.dealConfigColumns)(this.props.adImpression.columns),
						dataSource: tableData,
						pagination: pagination,
						onChange: this.handleTableChange.bind(this),
						scroll: { x: '130%' }
					})
				)
			);
		}
	}]);

	return adImpression;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	return {
		adImpression: state.Reducer.adImpression
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	//全量
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(adImpression);

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

/***/ 2216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData = exports.setDate = exports.searchChannel = exports.changeChannelGroup = exports.changeChannelCategory = exports.changeOs = exports.getGroupList = exports.getTables = exports.getCharts = exports.test = undefined;

__webpack_require__(2147);

__webpack_require__(2240);

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
var getCharts = function getCharts(data) {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_CHARTSLOADING",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/exposure/chart.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "ADIMPRESSION_CHARTSLOADING",
				payload: false
			});

			if (msg.status) {

				if (msg.data.length != 0) {
					dispatch({
						type: "ADIMPRESSION_CHARTSNODATA",
						payload: false
					});
				} else {
					dispatch({
						type: "ADIMPRESSION_CHARTSNODATA",
						payload: true
					});
				}

				dispatch({
					type: "ADIMPRESSION_CHARTSDATA",
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
			type: "ADIMPRESSION_TABLESLOADING",
			payload: true
		});

		dispatch({
			type: "ADIMPRESSION_OFFSET",
			payload: data.offset
		});

		dispatch({
			type: "ADIMPRESSION_LIMIT",
			payload: data.limit
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/exposure/table.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "ADIMPRESSION_TABLESLOADING",
				payload: false
			});

			if (msg.status) {

				// if (msg.data.length != 0) {
				// 	dispatch({
				// 		type: "ADIMPRESSION_CHARTSNODATA",
				// 		payload: false
				// 	})
				// } else {
				// 	dispatch({
				// 		type: "ADIMPRESSION_CHARTSNODATA",
				// 		payload: true
				// 	})
				// }

				dispatch({
					type: "ADIMPRESSION_TABLEDATA",
					payload: msg.data
				});

				dispatch({
					type: "ADIMPRESSION_TOTAL",
					payload: msg.total
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

var getGroupList = function getGroupList(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channelGroup.do',
			// url: '../../mock/userList/systemUser.json',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				dispatch({
					type: "ADIMPRESSION_CHANNELGROUPLIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '获取渠道组失败',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var changeOs = function changeOs(data, callback) {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "ADIMPRESSION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "ADIMPRESSION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "ADIMPRESSION_CHANNELNAME",
			payload: data.channelName
		});

		var groupList = {
			appCode: data.appCode,
			channelCategory: data.channelCategory
		};
		callback(groupList);
	};
};

var changeChannelCategory = function changeChannelCategory(data, callback) {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "ADIMPRESSION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "ADIMPRESSION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "ADIMPRESSION_CHANNELNAME",
			payload: data.channelName
		});

		var groupList = {
			appCode: data.appCode,
			channelCategory: data.channelCategory
		};
		callback(groupList);
	};
};

var changeChannelGroup = function changeChannelGroup(data) {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_CHANNELGROUP",
			payload: data.channelGroup
		});
	};
};

var searchChannel = function searchChannel(data) {
	return function (dispatch) {

		dispatch({
			type: "ADIMPRESSION_CHANNELNAME",
			payload: data.channelName
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channel.do',
			// url: '../../mock/userList/systemUser.json',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				dispatch({
					type: "ADIMPRESSION_CHANNELLIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '获取渠道列表失败 ',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var setDate = function setDate(data) {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_STARTDATE",
			payload: data[0]
		});

		dispatch({
			type: "ADIMPRESSION_ENTDATE",
			payload: data[1]
		});
	};
};

var getDownLoadData = function getDownLoadData(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/exposure/table.do',
			// url: '../../mock/userList/systemUser.json',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {
				dispatch({
					type: "ADIMPRESSION_EXCELDATA",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '下载Excel',
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
exports.getCharts = getCharts;
exports.getTables = getTables;
exports.getGroupList = getGroupList;
exports.changeOs = changeOs;
exports.changeChannelCategory = changeChannelCategory;
exports.changeChannelGroup = changeChannelGroup;
exports.searchChannel = searchChannel;
exports.setDate = setDate;
exports.getDownLoadData = getDownLoadData;

/***/ }),

/***/ 2240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	_mockjs2.default.mock("/data/exposure/chart.do", "post", {
		"status": true,
		"data": [{
			"channelName": "QQ_news_yunying1",
			"day": "2017-12-30",
			"expo1": 3.92,
			"expo2": 0.30,
			"expo3": 0.25,
			"expo4": 0.25,
			"expo5": 0.33,
			"expo6": 0.33,
			"expo60": 5.98,
			"expo7": 0.33,
			"newUser": 50937,
			"unitPrice": 0.95
		}, {
			"channelName": "baidu_news",
			"day": "2017-12-30",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.12,
			"expo7": 0.00,
			"newUser": 12420,
			"unitPrice": 5.00
		}, {
			"channelName": "huawei_news",
			"day": "2017-12-30",
			"expo1": 3.19,
			"expo2": 1.20,
			"expo3": 1.14,
			"expo4": 1.09,
			"expo5": 1.09,
			"expo6": 1.23,
			"expo60": 35.15,
			"expo7": 1.07,
			"newUser": 46247,
			"unitPrice": 14.44
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2017-12-30",
			"expo1": 1.39,
			"expo2": 0.21,
			"expo3": 0.22,
			"expo4": 0.13,
			"expo5": 0.10,
			"expo6": 0.16,
			"expo60": 4.05,
			"expo7": 0.20,
			"newUser": 3257,
			"unitPrice": 3.57
		}, {
			"channelName": "news_kp_push",
			"day": "2017-12-30",
			"expo1": 0.36,
			"expo2": 0.13,
			"expo3": 0.10,
			"expo4": 0.11,
			"expo5": 0.10,
			"expo6": 0.10,
			"expo60": 2.56,
			"expo7": 0.10,
			"newUser": 17965,
			"unitPrice": 3.00
		}, {
			"channelName": "miliao_news",
			"day": "2017-12-30",
			"expo1": 2.41,
			"expo2": 0.54,
			"expo3": 0.43,
			"expo4": 0.39,
			"expo5": 0.42,
			"expo6": 0.42,
			"expo60": 10.71,
			"expo7": 0.35,
			"newUser": 56630,
			"unitPrice": 4.58
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2017-12-30",
			"expo1": 2.27,
			"expo2": 0.90,
			"expo3": 0.80,
			"expo4": 0.73,
			"expo5": 0.68,
			"expo6": 0.83,
			"expo60": 20.92,
			"expo7": 0.64,
			"newUser": 24123,
			"unitPrice": 12.01
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2017-12-30",
			"expo1": 3.40,
			"expo2": 1.43,
			"expo3": 1.15,
			"expo4": 1.03,
			"expo5": 1.01,
			"expo6": 1.14,
			"expo60": 26.53,
			"expo7": 0.85,
			"newUser": 12662,
			"unitPrice": 13.24
		}, {
			"channelName": "appstore",
			"day": "2017-12-30",
			"expo1": 5.70,
			"expo2": 2.97,
			"expo3": 3.10,
			"expo4": 3.14,
			"expo5": 2.99,
			"expo6": 3.16,
			"expo60": 100.25,
			"expo7": 3.06,
			"newUser": 20476,
			"unitPrice": 5.30
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2017-12-31",
			"expo1": 3.22,
			"expo2": 0.20,
			"expo3": 0.17,
			"expo4": 0.32,
			"expo5": 0.30,
			"expo6": 0.23,
			"expo60": 4.47,
			"expo7": 0.19,
			"newUser": 55150,
			"unitPrice": 0.95
		}, {
			"channelName": "baidu_news",
			"day": "2017-12-31",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.07,
			"expo7": 0.00,
			"newUser": 12711,
			"unitPrice": 5.00
		}, {
			"channelName": "huawei_news",
			"day": "2017-12-31",
			"expo1": 1.85,
			"expo2": 1.12,
			"expo3": 0.98,
			"expo4": 0.97,
			"expo5": 1.11,
			"expo6": 0.98,
			"expo60": 32.62,
			"expo7": 0.98,
			"newUser": 37614,
			"unitPrice": 14.44
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2017-12-31",
			"expo1": 1.30,
			"expo2": 0.28,
			"expo3": 0.16,
			"expo4": 0.12,
			"expo5": 0.18,
			"expo6": 0.20,
			"expo60": 4.26,
			"expo7": 0.14,
			"newUser": 2539,
			"unitPrice": 3.57
		}, {
			"channelName": "news_kp_push",
			"day": "2017-12-31",
			"expo1": 0.29,
			"expo2": 0.11,
			"expo3": 0.11,
			"expo4": 0.09,
			"expo5": 0.10,
			"expo6": 0.08,
			"expo60": 2.32,
			"expo7": 0.08,
			"newUser": 10196,
			"unitPrice": 3.00
		}, {
			"channelName": "miliao_news",
			"day": "2017-12-31",
			"expo1": 1.95,
			"expo2": 0.47,
			"expo3": 0.37,
			"expo4": 0.37,
			"expo5": 0.37,
			"expo6": 0.30,
			"expo60": 8.51,
			"expo7": 0.28,
			"newUser": 54867,
			"unitPrice": 4.58
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2017-12-31",
			"expo1": 1.51,
			"expo2": 0.84,
			"expo3": 0.76,
			"expo4": 0.67,
			"expo5": 0.81,
			"expo6": 0.64,
			"expo60": 20.15,
			"expo7": 0.58,
			"newUser": 20118,
			"unitPrice": 12.01
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2017-12-31",
			"expo1": 2.07,
			"expo2": 1.15,
			"expo3": 0.96,
			"expo4": 0.96,
			"expo5": 1.11,
			"expo6": 0.88,
			"expo60": 26.65,
			"expo7": 0.90,
			"newUser": 9140,
			"unitPrice": 13.24
		}, {
			"channelName": "appstore",
			"day": "2017-12-31",
			"expo1": 3.71,
			"expo2": 4.02,
			"expo3": 3.67,
			"expo4": 3.57,
			"expo5": 4.00,
			"expo6": 3.79,
			"expo60": 122.22,
			"expo7": 3.78,
			"newUser": 14334,
			"unitPrice": 5.30
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-01",
			"expo1": 3.86,
			"expo2": 0.25,
			"expo3": 0.37,
			"expo4": 0.38,
			"expo5": 0.28,
			"expo6": 0.22,
			"expo60": 4.69,
			"expo7": 0.21,
			"newUser": 58622,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-01",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.10,
			"expo7": 0.00,
			"newUser": 12627,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-01",
			"expo1": 1.91,
			"expo2": 1.02,
			"expo3": 0.95,
			"expo4": 1.10,
			"expo5": 0.98,
			"expo6": 0.94,
			"expo60": 31.41,
			"expo7": 0.99,
			"newUser": 41586,
			"unitPrice": 14.60
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-01",
			"expo1": 1.23,
			"expo2": 0.21,
			"expo3": 0.15,
			"expo4": 0.20,
			"expo5": 0.22,
			"expo6": 0.17,
			"expo60": 4.85,
			"expo7": 0.17,
			"newUser": 2213,
			"unitPrice": 4.59
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-01",
			"expo1": 0.28,
			"expo2": 0.10,
			"expo3": 0.10,
			"expo4": 0.11,
			"expo5": 0.09,
			"expo6": 0.07,
			"expo60": 2.16,
			"expo7": 0.08,
			"newUser": 7126,
			"unitPrice": 3.38
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-01",
			"expo1": 2.01,
			"expo2": 0.50,
			"expo3": 0.41,
			"expo4": 0.38,
			"expo5": 0.31,
			"expo6": 0.29,
			"expo60": 8.75,
			"expo7": 0.30,
			"newUser": 58983,
			"unitPrice": 7.32
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-01",
			"expo1": 1.66,
			"expo2": 0.82,
			"expo3": 0.79,
			"expo4": 0.90,
			"expo5": 0.71,
			"expo6": 0.68,
			"expo60": 21.73,
			"expo7": 0.67,
			"newUser": 20635,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-01",
			"expo1": 2.20,
			"expo2": 1.03,
			"expo3": 0.89,
			"expo4": 0.98,
			"expo5": 0.80,
			"expo6": 0.81,
			"expo60": 24.38,
			"expo7": 0.82,
			"newUser": 13670,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-01",
			"expo1": 3.95,
			"expo2": 3.81,
			"expo3": 3.47,
			"expo4": 3.68,
			"expo5": 3.74,
			"expo6": 3.74,
			"expo60": 115.38,
			"expo7": 3.75,
			"newUser": 16213,
			"unitPrice": 6.05
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-02",
			"expo1": 4.22,
			"expo2": 0.71,
			"expo3": 0.35,
			"expo4": 0.24,
			"expo5": 0.17,
			"expo6": 0.18,
			"expo60": 4.89,
			"expo7": 0.18,
			"newUser": 59378,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-02",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.27,
			"expo7": 0.00,
			"newUser": 12275,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-02",
			"expo1": 1.86,
			"expo2": 1.08,
			"expo3": 1.52,
			"expo4": 1.33,
			"expo5": 1.28,
			"expo6": 1.32,
			"expo60": 40.49,
			"expo7": 1.29,
			"newUser": 39395,
			"unitPrice": 14.60
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-02",
			"expo1": 2.00,
			"expo2": 0.54,
			"expo3": 0.45,
			"expo4": 0.36,
			"expo5": 0.31,
			"expo6": 0.29,
			"expo60": 8.81,
			"expo7": 0.30,
			"newUser": 54052,
			"unitPrice": 7.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-02",
			"expo1": 1.23,
			"expo2": 0.24,
			"expo3": 0.24,
			"expo4": 0.22,
			"expo5": 0.15,
			"expo6": 0.12,
			"expo60": 3.92,
			"expo7": 0.08,
			"newUser": 1669,
			"unitPrice": 4.59
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-02",
			"expo1": 1.71,
			"expo2": 0.94,
			"expo3": 0.99,
			"expo4": 0.94,
			"expo5": 0.87,
			"expo6": 0.91,
			"expo60": 27.43,
			"expo7": 0.82,
			"newUser": 17379,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-02",
			"expo1": 2.21,
			"expo2": 1.12,
			"expo3": 1.20,
			"expo4": 0.89,
			"expo5": 0.91,
			"expo6": 0.99,
			"expo60": 28.15,
			"expo7": 0.91,
			"newUser": 10485,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-02",
			"expo1": 3.91,
			"expo2": 3.52,
			"expo3": 3.53,
			"expo4": 3.41,
			"expo5": 3.34,
			"expo6": 3.49,
			"expo60": 104.38,
			"expo7": 3.40,
			"newUser": 16116,
			"unitPrice": 6.05
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-02",
			"expo1": 0.30,
			"expo2": 0.14,
			"expo3": 0.13,
			"expo4": 0.11,
			"expo5": 0.11,
			"expo6": 0.09,
			"expo60": 2.31,
			"expo7": 0.09,
			"newUser": 5646,
			"unitPrice": 3.38
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-03",
			"expo1": 4.59,
			"expo2": 0.45,
			"expo3": 0.27,
			"expo4": 0.23,
			"expo5": 0.21,
			"expo6": 0.18,
			"expo60": 4.10,
			"expo7": 0.18,
			"newUser": 52884,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-03",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 9359,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-03",
			"expo1": 1.76,
			"expo2": 1.15,
			"expo3": 0.91,
			"expo4": 0.86,
			"expo5": 0.87,
			"expo6": 0.81,
			"expo60": 25.66,
			"expo7": 0.91,
			"newUser": 42371,
			"unitPrice": 14.60
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-03",
			"expo1": 2.48,
			"expo2": 0.55,
			"expo3": 0.34,
			"expo4": 0.23,
			"expo5": 0.24,
			"expo6": 0.22,
			"expo60": 6.36,
			"expo7": 0.27,
			"newUser": 68246,
			"unitPrice": 7.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-03",
			"expo1": 0.90,
			"expo2": 0.28,
			"expo3": 0.23,
			"expo4": 0.18,
			"expo5": 0.15,
			"expo6": 0.09,
			"expo60": 3.39,
			"expo7": 0.12,
			"newUser": 2246,
			"unitPrice": 4.59
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-03",
			"expo1": 1.08,
			"expo2": 0.56,
			"expo3": 0.44,
			"expo4": 0.37,
			"expo5": 0.38,
			"expo6": 0.36,
			"expo60": 11.90,
			"expo7": 0.43,
			"newUser": 24693,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-03",
			"expo1": 1.86,
			"expo2": 1.18,
			"expo3": 0.81,
			"expo4": 0.72,
			"expo5": 0.70,
			"expo6": 0.72,
			"expo60": 19.93,
			"expo7": 0.81,
			"newUser": 9870,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-03",
			"expo1": 3.84,
			"expo2": 3.72,
			"expo3": 3.31,
			"expo4": 3.12,
			"expo5": 3.40,
			"expo6": 3.26,
			"expo60": 97.95,
			"expo7": 3.38,
			"newUser": 15441,
			"unitPrice": 6.05
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-03",
			"expo1": 0.17,
			"expo2": 0.08,
			"expo3": 0.08,
			"expo4": 0.08,
			"expo5": 0.08,
			"expo6": 0.07,
			"expo60": 2.02,
			"expo7": 0.08,
			"newUser": 7269,
			"unitPrice": 3.38
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-04",
			"expo1": 4.34,
			"expo2": 0.53,
			"expo3": 0.20,
			"expo4": 0.18,
			"expo5": 0.18,
			"expo6": 0.19,
			"expo60": 3.60,
			"expo7": 0.18,
			"newUser": 79553,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-04",
			"expo1": 0.01,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.04,
			"expo7": 0.00,
			"newUser": 5826,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-04",
			"expo1": 1.91,
			"expo2": 0.89,
			"expo3": 0.77,
			"expo4": 0.77,
			"expo5": 0.67,
			"expo6": 0.77,
			"expo60": 21.31,
			"expo7": 0.69,
			"newUser": 43167,
			"unitPrice": 14.60
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-04",
			"expo1": 3.42,
			"expo2": 0.44,
			"expo3": 0.19,
			"expo4": 0.19,
			"expo5": 0.16,
			"expo6": 0.19,
			"expo60": 4.75,
			"expo7": 0.18,
			"newUser": 79549,
			"unitPrice": 7.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-04",
			"expo1": 1.24,
			"expo2": 0.26,
			"expo3": 0.18,
			"expo4": 0.17,
			"expo5": 0.11,
			"expo6": 0.13,
			"expo60": 3.57,
			"expo7": 0.11,
			"newUser": 2792,
			"unitPrice": 4.59
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-04",
			"expo1": 1.58,
			"expo2": 0.62,
			"expo3": 0.51,
			"expo4": 0.49,
			"expo5": 0.46,
			"expo6": 0.51,
			"expo60": 12.81,
			"expo7": 0.45,
			"newUser": 19819,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-04",
			"expo1": 2.24,
			"expo2": 1.04,
			"expo3": 0.83,
			"expo4": 0.76,
			"expo5": 0.76,
			"expo6": 0.84,
			"expo60": 20.96,
			"expo7": 0.77,
			"newUser": 9398,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-04",
			"expo1": 3.93,
			"expo2": 3.33,
			"expo3": 2.96,
			"expo4": 2.94,
			"expo5": 3.06,
			"expo6": 3.13,
			"expo60": 86.35,
			"expo7": 2.97,
			"newUser": 15176,
			"unitPrice": 6.05
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-04",
			"expo1": 0.26,
			"expo2": 0.08,
			"expo3": 0.08,
			"expo4": 0.07,
			"expo5": 0.05,
			"expo6": 0.06,
			"expo60": 1.65,
			"expo7": 0.04,
			"newUser": 4798,
			"unitPrice": 3.38
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-05",
			"expo1": 4.35,
			"expo2": 0.15,
			"expo3": 0.15,
			"expo4": 0.16,
			"expo5": 0.19,
			"expo6": 0.17,
			"expo60": 2.36,
			"expo7": 0.17,
			"newUser": 55522,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-05",
			"expo1": 0.00,
			"expo2": 0.01,
			"expo3": 0.01,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.14,
			"expo7": 0.01,
			"newUser": 6242,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-05",
			"expo1": 1.76,
			"expo2": 0.91,
			"expo3": 0.81,
			"expo4": 0.69,
			"expo5": 0.79,
			"expo6": 0.74,
			"expo60": 22.05,
			"expo7": 0.75,
			"newUser": 37231,
			"unitPrice": 14.60
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-05",
			"expo1": 1.18,
			"expo2": 0.21,
			"expo3": 0.14,
			"expo4": 0.08,
			"expo5": 0.12,
			"expo6": 0.12,
			"expo60": 3.27,
			"expo7": 0.08,
			"newUser": 3403,
			"unitPrice": 4.59
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-05",
			"expo1": 0.29,
			"expo2": 0.09,
			"expo3": 0.07,
			"expo4": 0.05,
			"expo5": 0.05,
			"expo6": 0.04,
			"expo60": 1.53,
			"expo7": 0.04,
			"newUser": 3326,
			"unitPrice": 3.38
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-05",
			"expo1": 3.49,
			"expo2": 0.32,
			"expo3": 0.20,
			"expo4": 0.18,
			"expo5": 0.20,
			"expo6": 0.17,
			"expo60": 4.59,
			"expo7": 0.21,
			"newUser": 74258,
			"unitPrice": 7.32
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-05",
			"expo1": 1.58,
			"expo2": 0.65,
			"expo3": 0.56,
			"expo4": 0.51,
			"expo5": 0.56,
			"expo6": 0.51,
			"expo60": 13.14,
			"expo7": 0.45,
			"newUser": 18097,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-05",
			"expo1": 1.91,
			"expo2": 0.90,
			"expo3": 0.83,
			"expo4": 0.70,
			"expo5": 0.81,
			"expo6": 0.73,
			"expo60": 18.53,
			"expo7": 0.64,
			"newUser": 10001,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-05",
			"expo1": 3.56,
			"expo2": 3.07,
			"expo3": 2.87,
			"expo4": 2.65,
			"expo5": 2.85,
			"expo6": 2.90,
			"expo60": 79.49,
			"expo7": 2.87,
			"newUser": 14751,
			"unitPrice": 6.05
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-06",
			"expo1": 3.04,
			"expo2": 0.11,
			"expo3": 0.11,
			"expo4": 0.11,
			"expo5": 0.10,
			"expo6": 0.09,
			"expo60": 1.64,
			"expo7": 0.11,
			"newUser": 66198,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-06",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.06,
			"expo7": 0.00,
			"newUser": 6215,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-06",
			"expo1": 1.81,
			"expo2": 0.91,
			"expo3": 0.74,
			"expo4": 0.81,
			"expo5": 0.75,
			"expo6": 0.72,
			"expo60": 21.08,
			"expo7": 0.72,
			"newUser": 39902,
			"unitPrice": 14.60
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-06",
			"expo1": 2.49,
			"expo2": 0.63,
			"expo3": 0.33,
			"expo4": 0.36,
			"expo5": 0.32,
			"expo6": 0.32,
			"expo60": 8.16,
			"expo7": 0.36,
			"newUser": 39793,
			"unitPrice": 7.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-06",
			"expo1": 1.19,
			"expo2": 0.32,
			"expo3": 0.17,
			"expo4": 0.18,
			"expo5": 0.15,
			"expo6": 0.12,
			"expo60": 3.83,
			"expo7": 0.14,
			"newUser": 2193,
			"unitPrice": 4.59
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-06",
			"expo1": 1.56,
			"expo2": 0.69,
			"expo3": 0.54,
			"expo4": 0.56,
			"expo5": 0.53,
			"expo6": 0.43,
			"expo60": 12.55,
			"expo7": 0.41,
			"newUser": 18864,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-06",
			"expo1": 2.09,
			"expo2": 1.13,
			"expo3": 0.85,
			"expo4": 0.90,
			"expo5": 0.83,
			"expo6": 0.73,
			"expo60": 19.80,
			"expo7": 0.72,
			"newUser": 9791,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-06",
			"expo1": 3.38,
			"expo2": 3.12,
			"expo3": 2.69,
			"expo4": 2.68,
			"expo5": 2.79,
			"expo6": 2.86,
			"expo60": 78.19,
			"expo7": 2.83,
			"newUser": 17165,
			"unitPrice": 6.05
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-06",
			"expo1": 0.39,
			"expo2": 0.10,
			"expo3": 0.06,
			"expo4": 0.04,
			"expo5": 0.04,
			"expo6": 0.05,
			"expo60": 1.42,
			"expo7": 0.05,
			"newUser": 2795,
			"unitPrice": 3.38
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-07",
			"expo1": 2.92,
			"expo2": 0.14,
			"expo3": 0.12,
			"expo4": 0.10,
			"expo5": 0.10,
			"expo6": 0.08,
			"expo60": 1.44,
			"expo7": 0.09,
			"newUser": 75570,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-07",
			"expo1": 0.01,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.04,
			"expo7": 0.00,
			"newUser": 6199,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-07",
			"expo1": 1.83,
			"expo2": 0.81,
			"expo3": 0.89,
			"expo4": 0.76,
			"expo5": 0.72,
			"expo6": 0.74,
			"expo60": 20.62,
			"expo7": 0.69,
			"newUser": 39676,
			"unitPrice": 14.60
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-07",
			"expo1": 1.14,
			"expo2": 0.15,
			"expo3": 0.15,
			"expo4": 0.15,
			"expo5": 0.14,
			"expo6": 0.14,
			"expo60": 3.37,
			"expo7": 0.15,
			"newUser": 2080,
			"unitPrice": 4.59
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-07",
			"expo1": 0.39,
			"expo2": 0.06,
			"expo3": 0.05,
			"expo4": 0.04,
			"expo5": 0.05,
			"expo6": 0.04,
			"expo60": 1.49,
			"expo7": 0.04,
			"newUser": 2365,
			"unitPrice": 3.38
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-07",
			"expo1": 2.51,
			"expo2": 0.64,
			"expo3": 0.42,
			"expo4": 0.35,
			"expo5": 0.34,
			"expo6": 0.33,
			"expo60": 8.25,
			"expo7": 0.35,
			"newUser": 38030,
			"unitPrice": 7.32
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-07",
			"expo1": 1.56,
			"expo2": 0.63,
			"expo3": 0.66,
			"expo4": 0.58,
			"expo5": 0.48,
			"expo6": 0.49,
			"expo60": 13.16,
			"expo7": 0.43,
			"newUser": 18599,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-07",
			"expo1": 2.11,
			"expo2": 0.93,
			"expo3": 0.99,
			"expo4": 0.86,
			"expo5": 0.72,
			"expo6": 0.69,
			"expo60": 18.98,
			"expo7": 0.68,
			"newUser": 9000,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-07",
			"expo1": 3.74,
			"expo2": 3.07,
			"expo3": 2.99,
			"expo4": 2.84,
			"expo5": 3.05,
			"expo6": 3.01,
			"expo60": 77.88,
			"expo7": 2.83,
			"newUser": 16683,
			"unitPrice": 6.05
		}, {
			"channelName": "appstore",
			"day": "2018-01-08",
			"expo1": 3.37,
			"expo2": 3.17,
			"expo3": 2.79,
			"expo4": 2.76,
			"expo5": 2.92,
			"expo6": 2.74,
			"expo60": 71.71,
			"expo7": 2.74,
			"newUser": 15217,
			"unitPrice": 6.05
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-08",
			"expo1": 2.89,
			"expo2": 0.35,
			"expo3": 0.26,
			"expo4": 0.22,
			"expo5": 0.20,
			"expo6": 0.05,
			"expo60": 2.12,
			"expo7": 0.05,
			"newUser": 50907,
			"unitPrice": 3.31
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-08",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.04,
			"expo7": 0.00,
			"newUser": 6218,
			"unitPrice": 8.58
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-08",
			"expo1": 1.82,
			"expo2": 1.03,
			"expo3": 0.84,
			"expo4": 0.82,
			"expo5": 0.81,
			"expo6": 0.70,
			"expo60": 20.85,
			"expo7": 0.78,
			"newUser": 32241,
			"unitPrice": 14.60
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-08",
			"expo1": 2.55,
			"expo2": 0.70,
			"expo3": 0.36,
			"expo4": 0.32,
			"expo5": 0.31,
			"expo6": 0.27,
			"expo60": 7.50,
			"expo7": 0.36,
			"newUser": 37966,
			"unitPrice": 7.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-08",
			"expo1": 1.23,
			"expo2": 0.23,
			"expo3": 0.18,
			"expo4": 0.11,
			"expo5": 0.12,
			"expo6": 0.13,
			"expo60": 3.02,
			"expo7": 0.11,
			"newUser": 1217,
			"unitPrice": 4.59
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-08",
			"expo1": 0.34,
			"expo2": 0.09,
			"expo3": 0.09,
			"expo4": 0.05,
			"expo5": 0.06,
			"expo6": 0.04,
			"expo60": 1.53,
			"expo7": 0.06,
			"newUser": 2102,
			"unitPrice": 3.38
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-08",
			"expo1": 1.35,
			"expo2": 0.66,
			"expo3": 0.56,
			"expo4": 0.47,
			"expo5": 0.42,
			"expo6": 0.39,
			"expo60": 11.29,
			"expo7": 0.41,
			"newUser": 19177,
			"unitPrice": 11.63
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-08",
			"expo1": 2.08,
			"expo2": 1.26,
			"expo3": 1.00,
			"expo4": 0.84,
			"expo5": 0.80,
			"expo6": 0.67,
			"expo60": 19.08,
			"expo7": 0.75,
			"newUser": 7651,
			"unitPrice": 12.33
		}, {
			"channelName": "appstore",
			"day": "2018-01-09",
			"expo1": 3.82,
			"expo2": 3.22,
			"expo3": 2.92,
			"expo4": 3.03,
			"expo5": 2.74,
			"expo6": 2.77,
			"expo60": 70.90,
			"expo7": 2.88,
			"newUser": 14102,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-09",
			"expo1": 4.02,
			"expo2": 0.94,
			"expo3": 0.72,
			"expo4": 0.62,
			"expo5": 0.18,
			"expo6": 0.29,
			"expo60": 7.09,
			"expo7": 0.32,
			"newUser": 25107,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-09",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 7322,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-09",
			"expo1": 2.07,
			"expo2": 0.97,
			"expo3": 0.83,
			"expo4": 0.81,
			"expo5": 0.73,
			"expo6": 0.82,
			"expo60": 19.93,
			"expo7": 0.77,
			"newUser": 32716,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-09",
			"expo1": 2.72,
			"expo2": 0.61,
			"expo3": 0.33,
			"expo4": 0.29,
			"expo5": 0.26,
			"expo6": 0.29,
			"expo60": 6.73,
			"expo7": 0.36,
			"newUser": 41470,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-09",
			"expo1": 1.22,
			"expo2": 0.21,
			"expo3": 0.15,
			"expo4": 0.15,
			"expo5": 0.15,
			"expo6": 0.13,
			"expo60": 3.11,
			"expo7": 0.11,
			"newUser": 2281,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-09",
			"expo1": 0.39,
			"expo2": 0.07,
			"expo3": 0.08,
			"expo4": 0.05,
			"expo5": 0.06,
			"expo6": 0.04,
			"expo60": 1.55,
			"expo7": 0.05,
			"newUser": 1941,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-09",
			"expo1": 1.12,
			"expo2": 0.48,
			"expo3": 0.40,
			"expo4": 0.36,
			"expo5": 0.32,
			"expo6": 0.33,
			"expo60": 9.20,
			"expo7": 0.34,
			"newUser": 25463,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-09",
			"expo1": 1.75,
			"expo2": 0.83,
			"expo3": 0.68,
			"expo4": 0.60,
			"expo5": 0.53,
			"expo6": 0.56,
			"expo60": 13.15,
			"expo7": 0.56,
			"newUser": 10987,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-10",
			"expo1": 3.51,
			"expo2": 3.02,
			"expo3": 2.97,
			"expo4": 2.68,
			"expo5": 2.63,
			"expo6": 2.63,
			"expo60": 63.94,
			"expo7": 2.62,
			"newUser": 14920,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-10",
			"expo1": 4.39,
			"expo2": 0.90,
			"expo3": 0.70,
			"expo4": 0.60,
			"expo5": 0.44,
			"expo6": 0.40,
			"expo60": 8.39,
			"expo7": 0.42,
			"newUser": 16357,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-10",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 7528,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-10",
			"expo1": 1.86,
			"expo2": 0.87,
			"expo3": 0.78,
			"expo4": 0.73,
			"expo5": 0.78,
			"expo6": 0.72,
			"expo60": 18.57,
			"expo7": 0.75,
			"newUser": 32914,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-10",
			"expo1": 2.72,
			"expo2": 0.80,
			"expo3": 0.31,
			"expo4": 0.28,
			"expo5": 0.28,
			"expo6": 0.29,
			"expo60": 6.73,
			"expo7": 0.39,
			"newUser": 42111,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-10",
			"expo1": 1.17,
			"expo2": 0.19,
			"expo3": 0.21,
			"expo4": 0.15,
			"expo5": 0.16,
			"expo6": 0.10,
			"expo60": 3.12,
			"expo7": 0.10,
			"newUser": 1888,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-10",
			"expo1": 0.26,
			"expo2": 0.08,
			"expo3": 0.09,
			"expo4": 0.07,
			"expo5": 0.05,
			"expo6": 0.06,
			"expo60": 1.68,
			"expo7": 0.07,
			"newUser": 2113,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-10",
			"expo1": 1.10,
			"expo2": 0.42,
			"expo3": 0.37,
			"expo4": 0.35,
			"expo5": 0.34,
			"expo6": 0.32,
			"expo60": 8.34,
			"expo7": 0.30,
			"newUser": 25844,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-10",
			"expo1": 2.08,
			"expo2": 0.99,
			"expo3": 0.86,
			"expo4": 0.76,
			"expo5": 0.78,
			"expo6": 0.71,
			"expo60": 16.42,
			"expo7": 0.68,
			"newUser": 8250,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-11",
			"expo1": 3.78,
			"expo2": 3.50,
			"expo3": 3.13,
			"expo4": 3.18,
			"expo5": 3.06,
			"expo6": 3.03,
			"expo60": 70.46,
			"expo7": 3.04,
			"newUser": 13605,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-11",
			"expo1": 2.43,
			"expo2": 1.25,
			"expo3": 1.31,
			"expo4": 1.25,
			"expo5": 1.08,
			"expo6": 1.10,
			"expo60": 20.89,
			"expo7": 1.01,
			"newUser": 3313,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-11",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.01,
			"expo7": 0.00,
			"newUser": 7377,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-11",
			"expo1": 1.77,
			"expo2": 0.85,
			"expo3": 0.71,
			"expo4": 0.77,
			"expo5": 0.74,
			"expo6": 0.76,
			"expo60": 17.51,
			"expo7": 0.72,
			"newUser": 34845,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-11",
			"expo1": 2.53,
			"expo2": 0.71,
			"expo3": 0.31,
			"expo4": 0.32,
			"expo5": 0.29,
			"expo6": 0.31,
			"expo60": 6.56,
			"expo7": 0.36,
			"newUser": 37826,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-11",
			"expo1": 1.22,
			"expo2": 0.28,
			"expo3": 0.21,
			"expo4": 0.27,
			"expo5": 0.14,
			"expo6": 0.17,
			"expo60": 3.35,
			"expo7": 0.13,
			"newUser": 1314,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-11",
			"expo1": 0.32,
			"expo2": 0.10,
			"expo3": 0.06,
			"expo4": 0.08,
			"expo5": 0.09,
			"expo6": 0.09,
			"expo60": 1.69,
			"expo7": 0.06,
			"newUser": 1662,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-11",
			"expo1": 1.28,
			"expo2": 0.55,
			"expo3": 0.47,
			"expo4": 0.47,
			"expo5": 0.45,
			"expo6": 0.40,
			"expo60": 10.02,
			"expo7": 0.39,
			"newUser": 20336,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-11",
			"expo1": 2.20,
			"expo2": 1.16,
			"expo3": 0.94,
			"expo4": 0.99,
			"expo5": 0.85,
			"expo6": 0.86,
			"expo60": 19.83,
			"expo7": 0.80,
			"newUser": 7473,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-12",
			"expo1": 3.42,
			"expo2": 3.06,
			"expo3": 2.85,
			"expo4": 2.86,
			"expo5": 2.79,
			"expo6": 2.77,
			"expo60": 61.93,
			"expo7": 2.72,
			"newUser": 13908,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-12",
			"expo1": 2.46,
			"expo2": 1.33,
			"expo3": 1.24,
			"expo4": 1.21,
			"expo5": 1.15,
			"expo6": 1.05,
			"expo60": 21.88,
			"expo7": 0.99,
			"newUser": 2851,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-12",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 7253,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-12",
			"expo1": 1.80,
			"expo2": 0.85,
			"expo3": 0.82,
			"expo4": 0.78,
			"expo5": 0.79,
			"expo6": 0.75,
			"expo60": 17.67,
			"expo7": 0.80,
			"newUser": 33792,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-12",
			"expo1": 2.67,
			"expo2": 0.72,
			"expo3": 0.32,
			"expo4": 0.29,
			"expo5": 0.29,
			"expo6": 0.27,
			"expo60": 6.10,
			"expo7": 0.39,
			"newUser": 44022,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-12",
			"expo1": 1.43,
			"expo2": 0.24,
			"expo3": 0.18,
			"expo4": 0.13,
			"expo5": 0.11,
			"expo6": 0.13,
			"expo60": 2.44,
			"expo7": 0.14,
			"newUser": 19356,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-12",
			"expo1": 0.38,
			"expo2": 0.09,
			"expo3": 0.06,
			"expo4": 0.07,
			"expo5": 0.07,
			"expo6": 0.08,
			"expo60": 1.50,
			"expo7": 0.06,
			"newUser": 1454,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-12",
			"expo1": 1.38,
			"expo2": 0.57,
			"expo3": 0.52,
			"expo4": 0.56,
			"expo5": 0.48,
			"expo6": 0.50,
			"expo60": 10.25,
			"expo7": 0.44,
			"newUser": 18383,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-12",
			"expo1": 2.07,
			"expo2": 0.98,
			"expo3": 0.93,
			"expo4": 0.84,
			"expo5": 0.84,
			"expo6": 0.74,
			"expo60": 15.37,
			"expo7": 0.74,
			"newUser": 7956,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-13",
			"expo1": 3.63,
			"expo2": 3.72,
			"expo3": 3.27,
			"expo4": 3.20,
			"expo5": 3.23,
			"expo6": 3.23,
			"expo60": 68.48,
			"expo7": 3.10,
			"newUser": 13756,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-13",
			"expo1": 2.09,
			"expo2": 1.54,
			"expo3": 1.42,
			"expo4": 1.46,
			"expo5": 1.30,
			"expo6": 1.24,
			"expo60": 25.35,
			"expo7": 0.92,
			"newUser": 3597,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-13",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.02,
			"expo7": 0.00,
			"newUser": 7289,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-13",
			"expo1": 1.82,
			"expo2": 1.05,
			"expo3": 0.87,
			"expo4": 0.84,
			"expo5": 0.79,
			"expo6": 0.89,
			"expo60": 18.51,
			"expo7": 0.86,
			"newUser": 36329,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-13",
			"expo1": 2.68,
			"expo2": 0.70,
			"expo3": 0.32,
			"expo4": 0.30,
			"expo5": 0.28,
			"expo6": 0.29,
			"expo60": 6.07,
			"expo7": 0.38,
			"newUser": 44998,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-13",
			"expo1": 1.32,
			"expo2": 0.26,
			"expo3": 0.20,
			"expo4": 0.13,
			"expo5": 0.16,
			"expo6": 0.19,
			"expo60": 3.02,
			"expo7": 0.23,
			"newUser": 8514,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-13",
			"expo1": 0.34,
			"expo2": 0.09,
			"expo3": 0.06,
			"expo4": 0.06,
			"expo5": 0.06,
			"expo6": 0.06,
			"expo60": 1.27,
			"expo7": 0.05,
			"newUser": 1449,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-13",
			"expo1": 1.35,
			"expo2": 0.67,
			"expo3": 0.54,
			"expo4": 0.55,
			"expo5": 0.50,
			"expo6": 0.51,
			"expo60": 10.82,
			"expo7": 0.47,
			"newUser": 18414,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-13",
			"expo1": 2.14,
			"expo2": 1.09,
			"expo3": 0.83,
			"expo4": 0.85,
			"expo5": 0.75,
			"expo6": 0.81,
			"expo60": 16.90,
			"expo7": 0.84,
			"newUser": 7905,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-14",
			"expo1": 3.96,
			"expo2": 3.84,
			"expo3": 3.54,
			"expo4": 3.52,
			"expo5": 3.53,
			"expo6": 3.27,
			"expo60": 69.56,
			"expo7": 3.08,
			"newUser": 13921,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-14",
			"expo1": 2.19,
			"expo2": 1.43,
			"expo3": 1.37,
			"expo4": 1.29,
			"expo5": 1.20,
			"expo6": 1.16,
			"expo60": 22.54,
			"expo7": 1.06,
			"newUser": 3089,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-14",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 7497,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-14",
			"expo1": 1.97,
			"expo2": 1.03,
			"expo3": 0.95,
			"expo4": 0.91,
			"expo5": 0.99,
			"expo6": 0.92,
			"expo60": 19.20,
			"expo7": 0.86,
			"newUser": 35945,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-14",
			"expo1": 2.55,
			"expo2": 0.71,
			"expo3": 0.36,
			"expo4": 0.32,
			"expo5": 0.35,
			"expo6": 0.33,
			"expo60": 6.28,
			"expo7": 0.30,
			"newUser": 41735,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-14",
			"expo1": 1.22,
			"expo2": 0.25,
			"expo3": 0.17,
			"expo4": 0.20,
			"expo5": 0.19,
			"expo6": 0.24,
			"expo60": 3.14,
			"expo7": 0.13,
			"newUser": 5404,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-14",
			"expo1": 0.42,
			"expo2": 0.09,
			"expo3": 0.10,
			"expo4": 0.06,
			"expo5": 0.07,
			"expo6": 0.06,
			"expo60": 1.96,
			"expo7": 0.07,
			"newUser": 1390,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-14",
			"expo1": 1.43,
			"expo2": 0.59,
			"expo3": 0.57,
			"expo4": 0.48,
			"expo5": 0.53,
			"expo6": 0.52,
			"expo60": 10.78,
			"expo7": 0.51,
			"newUser": 17903,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-14",
			"expo1": 2.32,
			"expo2": 1.08,
			"expo3": 1.02,
			"expo4": 0.96,
			"expo5": 1.01,
			"expo6": 0.96,
			"expo60": 17.82,
			"expo7": 0.81,
			"newUser": 7797,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-15",
			"expo1": 3.60,
			"expo2": 3.37,
			"expo3": 3.12,
			"expo4": 3.10,
			"expo5": 2.88,
			"expo6": 2.60,
			"expo60": 55.41,
			"expo7": 2.60,
			"newUser": 14998,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-15",
			"expo1": 1.81,
			"expo2": 1.31,
			"expo3": 1.16,
			"expo4": 0.83,
			"expo5": 0.73,
			"expo6": 0.68,
			"expo60": 13.79,
			"expo7": 0.70,
			"newUser": 4901,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-15",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.02,
			"expo7": 0.00,
			"newUser": 7507,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-15",
			"expo1": 1.91,
			"expo2": 1.06,
			"expo3": 0.92,
			"expo4": 0.99,
			"expo5": 0.96,
			"expo6": 0.85,
			"expo60": 17.82,
			"expo7": 0.90,
			"newUser": 32692,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-15",
			"expo1": 2.60,
			"expo2": 0.69,
			"expo3": 0.27,
			"expo4": 0.29,
			"expo5": 0.26,
			"expo6": 0.22,
			"expo60": 4.82,
			"expo7": 0.24,
			"newUser": 51018,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-15",
			"expo1": 1.14,
			"expo2": 0.17,
			"expo3": 0.18,
			"expo4": 0.22,
			"expo5": 0.25,
			"expo6": 0.13,
			"expo60": 2.62,
			"expo7": 0.24,
			"newUser": 3573,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-15",
			"expo1": 0.34,
			"expo2": 0.12,
			"expo3": 0.04,
			"expo4": 0.06,
			"expo5": 0.04,
			"expo6": 0.05,
			"expo60": 1.08,
			"expo7": 0.04,
			"newUser": 1184,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-15",
			"expo1": 1.52,
			"expo2": 0.67,
			"expo3": 0.57,
			"expo4": 0.56,
			"expo5": 0.53,
			"expo6": 0.47,
			"expo60": 9.56,
			"expo7": 0.47,
			"newUser": 17097,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-15",
			"expo1": 2.42,
			"expo2": 1.24,
			"expo3": 0.99,
			"expo4": 0.99,
			"expo5": 0.93,
			"expo6": 0.76,
			"expo60": 16.74,
			"expo7": 0.84,
			"newUser": 7348,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-16",
			"expo1": 3.75,
			"expo2": 3.44,
			"expo3": 3.34,
			"expo4": 3.03,
			"expo5": 2.86,
			"expo6": 2.74,
			"expo60": 54.91,
			"expo7": 2.78,
			"newUser": 13093,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-16",
			"expo1": 1.43,
			"expo2": 1.15,
			"expo3": 0.56,
			"expo4": 0.52,
			"expo5": 0.41,
			"expo6": 0.43,
			"expo60": 7.49,
			"expo7": 0.37,
			"newUser": 8837,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-16",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 7880,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-16",
			"expo1": 1.97,
			"expo2": 0.96,
			"expo3": 1.02,
			"expo4": 0.97,
			"expo5": 0.84,
			"expo6": 0.87,
			"expo60": 16.42,
			"expo7": 0.80,
			"newUser": 32977,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-16",
			"expo1": 2.53,
			"expo2": 0.65,
			"expo3": 0.30,
			"expo4": 0.27,
			"expo5": 0.22,
			"expo6": 0.21,
			"expo60": 4.27,
			"expo7": 0.21,
			"newUser": 58188,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-16",
			"expo1": 1.20,
			"expo2": 0.28,
			"expo3": 0.23,
			"expo4": 0.27,
			"expo5": 0.17,
			"expo6": 0.24,
			"expo60": 2.84,
			"expo7": 0.14,
			"newUser": 2606,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-16",
			"expo1": 0.39,
			"expo2": 0.16,
			"expo3": 0.12,
			"expo4": 0.13,
			"expo5": 0.12,
			"expo6": 0.16,
			"expo60": 2.06,
			"expo7": 0.14,
			"newUser": 1683,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-16",
			"expo1": 1.62,
			"expo2": 0.62,
			"expo3": 0.58,
			"expo4": 0.58,
			"expo5": 0.47,
			"expo6": 0.53,
			"expo60": 9.20,
			"expo7": 0.49,
			"newUser": 18758,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-16",
			"expo1": 2.34,
			"expo2": 1.15,
			"expo3": 1.01,
			"expo4": 0.84,
			"expo5": 0.79,
			"expo6": 0.85,
			"expo60": 14.13,
			"expo7": 0.70,
			"newUser": 7647,
			"unitPrice": 16.08
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-17",
			"expo1": 0.57,
			"expo2": 1.04,
			"expo3": 0.39,
			"expo4": 0.32,
			"expo5": 0.30,
			"expo6": 0.27,
			"expo60": 4.90,
			"expo7": 0.26,
			"newUser": 16113,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-17",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.01,
			"expo7": 0.00,
			"newUser": 8116,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-17",
			"expo1": 1.81,
			"expo2": 1.07,
			"expo3": 0.93,
			"expo4": 0.79,
			"expo5": 0.85,
			"expo6": 0.79,
			"expo60": 14.74,
			"expo7": 0.79,
			"newUser": 34811,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-17",
			"expo1": 2.38,
			"expo2": 0.71,
			"expo3": 0.35,
			"expo4": 0.28,
			"expo5": 0.28,
			"expo6": 0.27,
			"expo60": 5.04,
			"expo7": 0.25,
			"newUser": 49340,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-17",
			"expo1": 1.38,
			"expo2": 0.32,
			"expo3": 0.27,
			"expo4": 0.15,
			"expo5": 0.22,
			"expo6": 0.13,
			"expo60": 2.56,
			"expo7": 0.14,
			"newUser": 13533,
			"unitPrice": 3.23
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-17",
			"expo1": 1.00,
			"expo2": 0.50,
			"expo3": 0.51,
			"expo4": 0.54,
			"expo5": 0.57,
			"expo6": 0.48,
			"expo60": 7.98,
			"expo7": 0.38,
			"newUser": 27199,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-17",
			"expo1": 2.20,
			"expo2": 1.23,
			"expo3": 1.00,
			"expo4": 0.83,
			"expo5": 0.80,
			"expo6": 0.71,
			"expo60": 13.94,
			"expo7": 0.70,
			"newUser": 7487,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-17",
			"expo1": 3.69,
			"expo2": 3.51,
			"expo3": 3.07,
			"expo4": 2.75,
			"expo5": 2.68,
			"expo6": 2.77,
			"expo60": 50.05,
			"expo7": 2.74,
			"newUser": 13069,
			"unitPrice": 5.31
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-17",
			"expo1": 0.34,
			"expo2": 0.13,
			"expo3": 0.14,
			"expo4": 0.10,
			"expo5": 0.12,
			"expo6": 0.11,
			"expo60": 1.44,
			"expo7": 0.08,
			"newUser": 1500,
			"unitPrice": 7.06
		}, {
			"channelName": "appstore",
			"day": "2018-01-18",
			"expo1": 3.63,
			"expo2": 2.83,
			"expo3": 2.14,
			"expo4": 2.02,
			"expo5": 2.08,
			"expo6": 2.05,
			"expo60": 33.16,
			"expo7": 1.93,
			"newUser": 22676,
			"unitPrice": 5.31
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-18",
			"expo1": 0.38,
			"expo2": 0.11,
			"expo3": 0.10,
			"expo4": 0.09,
			"expo5": 0.07,
			"expo6": 0.10,
			"expo60": 1.29,
			"expo7": 0.09,
			"newUser": 1029,
			"unitPrice": 7.06
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-18",
			"expo1": 1.38,
			"expo2": 0.97,
			"expo3": 0.40,
			"expo4": 0.31,
			"expo5": 0.29,
			"expo6": 0.27,
			"expo60": 4.38,
			"expo7": 0.21,
			"newUser": 23890,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-18",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.02,
			"expo7": 0.00,
			"newUser": 8056,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-18",
			"expo1": 2.13,
			"expo2": 1.14,
			"expo3": 0.89,
			"expo4": 0.90,
			"expo5": 0.84,
			"expo6": 0.82,
			"expo60": 13.66,
			"expo7": 0.71,
			"newUser": 40039,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-18",
			"expo1": 2.56,
			"expo2": 0.75,
			"expo3": 0.30,
			"expo4": 0.27,
			"expo5": 0.26,
			"expo6": 0.24,
			"expo60": 4.40,
			"expo7": 0.28,
			"newUser": 68712,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-18",
			"expo1": 1.29,
			"expo2": 0.36,
			"expo3": 0.18,
			"expo4": 0.26,
			"expo5": 0.14,
			"expo6": 0.15,
			"expo60": 2.60,
			"expo7": 0.14,
			"newUser": 8964,
			"unitPrice": 3.23
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-18",
			"expo1": 1.73,
			"expo2": 0.80,
			"expo3": 0.64,
			"expo4": 0.59,
			"expo5": 0.54,
			"expo6": 0.49,
			"expo60": 8.46,
			"expo7": 0.44,
			"newUser": 21402,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-18",
			"expo1": 2.67,
			"expo2": 1.27,
			"expo3": 0.88,
			"expo4": 0.79,
			"expo5": 0.76,
			"expo6": 0.74,
			"expo60": 11.81,
			"expo7": 0.67,
			"newUser": 9500,
			"unitPrice": 16.08
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-19",
			"expo1": 0.49,
			"expo2": 0.89,
			"expo3": 0.30,
			"expo4": 0.25,
			"expo5": 0.23,
			"expo6": 0.19,
			"expo60": 3.24,
			"expo7": 0.19,
			"newUser": 30575,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-19",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 8273,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-19",
			"expo1": 1.89,
			"expo2": 1.03,
			"expo3": 0.98,
			"expo4": 0.89,
			"expo5": 0.87,
			"expo6": 0.82,
			"expo60": 14.16,
			"expo7": 0.85,
			"newUser": 37603,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-19",
			"expo1": 2.42,
			"expo2": 0.61,
			"expo3": 0.39,
			"expo4": 0.37,
			"expo5": 0.35,
			"expo6": 0.32,
			"expo60": 5.48,
			"expo7": 0.41,
			"newUser": 44487,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-19",
			"expo1": 1.22,
			"expo2": 0.20,
			"expo3": 0.31,
			"expo4": 0.16,
			"expo5": 0.15,
			"expo6": 0.17,
			"expo60": 2.45,
			"expo7": 0.20,
			"newUser": 7490,
			"unitPrice": 3.23
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-19",
			"expo1": 1.62,
			"expo2": 0.69,
			"expo3": 0.60,
			"expo4": 0.57,
			"expo5": 0.49,
			"expo6": 0.47,
			"expo60": 7.76,
			"expo7": 0.45,
			"newUser": 19294,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-19",
			"expo1": 2.34,
			"expo2": 1.21,
			"expo3": 0.96,
			"expo4": 0.79,
			"expo5": 0.84,
			"expo6": 0.71,
			"expo60": 12.13,
			"expo7": 0.75,
			"newUser": 8380,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-19",
			"expo1": 3.27,
			"expo2": 2.84,
			"expo3": 2.54,
			"expo4": 2.57,
			"expo5": 2.56,
			"expo6": 2.46,
			"expo60": 38.83,
			"expo7": 2.53,
			"newUser": 16770,
			"unitPrice": 5.31
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-19",
			"expo1": 0.35,
			"expo2": 0.11,
			"expo3": 0.09,
			"expo4": 0.08,
			"expo5": 0.09,
			"expo6": 0.08,
			"expo60": 1.12,
			"expo7": 0.08,
			"newUser": 1059,
			"unitPrice": 7.06
		}, {
			"channelName": "appstore",
			"day": "2018-01-20",
			"expo1": 3.31,
			"expo2": 3.18,
			"expo3": 2.87,
			"expo4": 2.88,
			"expo5": 2.80,
			"expo6": 2.94,
			"expo60": 41.43,
			"expo7": 2.56,
			"newUser": 16913,
			"unitPrice": 5.31
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-20",
			"expo1": 0.42,
			"expo2": 0.14,
			"expo3": 0.09,
			"expo4": 0.11,
			"expo5": 0.10,
			"expo6": 0.05,
			"expo60": 1.02,
			"expo7": 0.04,
			"newUser": 1024,
			"unitPrice": 7.06
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-20",
			"expo1": 0.37,
			"expo2": 0.80,
			"expo3": 0.32,
			"expo4": 0.29,
			"expo5": 0.24,
			"expo6": 0.23,
			"expo60": 3.48,
			"expo7": 0.24,
			"newUser": 22383,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-20",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 8797,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-20",
			"expo1": 1.88,
			"expo2": 1.08,
			"expo3": 0.93,
			"expo4": 0.91,
			"expo5": 0.83,
			"expo6": 0.89,
			"expo60": 13.85,
			"expo7": 0.99,
			"newUser": 39479,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-20",
			"expo1": 2.24,
			"expo2": 0.74,
			"expo3": 0.47,
			"expo4": 0.42,
			"expo5": 0.40,
			"expo6": 0.45,
			"expo60": 6.47,
			"expo7": 0.51,
			"newUser": 41240,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-20",
			"expo1": 1.10,
			"expo2": 0.31,
			"expo3": 0.17,
			"expo4": 0.16,
			"expo5": 0.17,
			"expo6": 0.19,
			"expo60": 2.23,
			"expo7": 0.15,
			"newUser": 3388,
			"unitPrice": 3.23
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-20",
			"expo1": 1.50,
			"expo2": 0.64,
			"expo3": 0.57,
			"expo4": 0.48,
			"expo5": 0.43,
			"expo6": 0.39,
			"expo60": 6.72,
			"expo7": 0.46,
			"newUser": 21274,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-20",
			"expo1": 2.21,
			"expo2": 1.10,
			"expo3": 0.89,
			"expo4": 0.82,
			"expo5": 0.72,
			"expo6": 0.76,
			"expo60": 12.00,
			"expo7": 0.82,
			"newUser": 8586,
			"unitPrice": 16.08
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-21",
			"expo1": 0.30,
			"expo2": 0.85,
			"expo3": 0.32,
			"expo4": 0.25,
			"expo5": 0.25,
			"expo6": 0.24,
			"expo60": 3.23,
			"expo7": 0.18,
			"newUser": 29141,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-21",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.03,
			"expo7": 0.00,
			"newUser": 9027,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-21",
			"expo1": 1.89,
			"expo2": 1.04,
			"expo3": 0.96,
			"expo4": 0.84,
			"expo5": 0.87,
			"expo6": 0.98,
			"expo60": 12.80,
			"expo7": 0.94,
			"newUser": 40195,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-21",
			"expo1": 1.97,
			"expo2": 0.68,
			"expo3": 0.50,
			"expo4": 0.42,
			"expo5": 0.44,
			"expo6": 0.47,
			"expo60": 6.06,
			"expo7": 0.48,
			"newUser": 39930,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-21",
			"expo1": 1.31,
			"expo2": 0.18,
			"expo3": 0.17,
			"expo4": 0.17,
			"expo5": 0.20,
			"expo6": 0.13,
			"expo60": 1.91,
			"expo7": 0.12,
			"newUser": 4771,
			"unitPrice": 3.23
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-21",
			"expo1": 1.55,
			"expo2": 0.71,
			"expo3": 0.63,
			"expo4": 0.56,
			"expo5": 0.52,
			"expo6": 0.57,
			"expo60": 7.60,
			"expo7": 0.54,
			"newUser": 18658,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-21",
			"expo1": 2.04,
			"expo2": 1.08,
			"expo3": 0.96,
			"expo4": 0.77,
			"expo5": 0.80,
			"expo6": 0.83,
			"expo60": 11.50,
			"expo7": 0.77,
			"newUser": 8177,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-21",
			"expo1": 3.07,
			"expo2": 2.92,
			"expo3": 2.76,
			"expo4": 2.59,
			"expo5": 2.66,
			"expo6": 2.40,
			"expo60": 35.25,
			"expo7": 2.32,
			"newUser": 18769,
			"unitPrice": 5.31
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-21",
			"expo1": 0.40,
			"expo2": 0.08,
			"expo3": 0.06,
			"expo4": 0.11,
			"expo5": 0.08,
			"expo6": 0.06,
			"expo60": 0.85,
			"expo7": 0.05,
			"newUser": 1012,
			"unitPrice": 7.06
		}, {
			"channelName": "appstore",
			"day": "2018-01-22",
			"expo1": 3.53,
			"expo2": 3.44,
			"expo3": 3.04,
			"expo4": 3.06,
			"expo5": 2.68,
			"expo6": 2.60,
			"expo60": 35.78,
			"expo7": 2.56,
			"newUser": 15254,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-22",
			"expo1": 0.32,
			"expo2": 0.82,
			"expo3": 0.27,
			"expo4": 0.20,
			"expo5": 0.24,
			"expo6": 0.14,
			"expo60": 2.53,
			"expo7": 0.13,
			"newUser": 22821,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-22",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 8878,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-22",
			"expo1": 2.01,
			"expo2": 1.16,
			"expo3": 0.98,
			"expo4": 0.96,
			"expo5": 1.07,
			"expo6": 0.98,
			"expo60": 12.58,
			"expo7": 0.93,
			"newUser": 34231,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-22",
			"expo1": 2.01,
			"expo2": 0.62,
			"expo3": 0.45,
			"expo4": 0.45,
			"expo5": 0.49,
			"expo6": 0.42,
			"expo60": 5.42,
			"expo7": 0.45,
			"newUser": 37216,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-22",
			"expo1": 1.11,
			"expo2": 0.20,
			"expo3": 0.18,
			"expo4": 0.19,
			"expo5": 0.16,
			"expo6": 0.14,
			"expo60": 1.84,
			"expo7": 0.14,
			"newUser": 2582,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-22",
			"expo1": 0.33,
			"expo2": 0.14,
			"expo3": 0.12,
			"expo4": 0.09,
			"expo5": 0.07,
			"expo6": 0.07,
			"expo60": 0.82,
			"expo7": 0.04,
			"newUser": 985,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-22",
			"expo1": 1.48,
			"expo2": 0.65,
			"expo3": 0.57,
			"expo4": 0.51,
			"expo5": 0.53,
			"expo6": 0.48,
			"expo60": 6.49,
			"expo7": 0.47,
			"newUser": 20145,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-22",
			"expo1": 2.23,
			"expo2": 1.19,
			"expo3": 0.94,
			"expo4": 0.90,
			"expo5": 0.92,
			"expo6": 0.90,
			"expo60": 11.30,
			"expo7": 0.81,
			"newUser": 7660,
			"unitPrice": 16.08
		}, {
			"channelName": "appstore",
			"day": "2018-01-23",
			"expo1": 3.51,
			"expo2": 3.05,
			"expo3": 2.91,
			"expo4": 2.48,
			"expo5": 2.35,
			"expo6": 2.36,
			"expo60": 30.40,
			"expo7": 2.24,
			"newUser": 15331,
			"unitPrice": 5.31
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-23",
			"expo1": 0.15,
			"expo2": 0.72,
			"expo3": 0.25,
			"expo4": 0.20,
			"expo5": 0.12,
			"expo6": 0.11,
			"expo60": 1.84,
			"expo7": 0.11,
			"newUser": 37303,
			"unitPrice": 3.29
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-23",
			"expo1": 3.71,
			"expo2": 2.83,
			"expo3": 2.49,
			"expo4": 2.49,
			"expo5": 2.43,
			"expo6": 2.30,
			"expo60": 27.28,
			"expo7": 2.14,
			"newUser": 991,
			"unitPrice": 3.29
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-23",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 8709,
			"unitPrice": 10.29
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-23",
			"expo1": 2.06,
			"expo2": 1.03,
			"expo3": 0.99,
			"expo4": 1.06,
			"expo5": 0.99,
			"expo6": 0.94,
			"expo60": 11.47,
			"expo7": 0.87,
			"newUser": 35597,
			"unitPrice": 14.35
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-23",
			"expo1": 1.90,
			"expo2": 0.69,
			"expo3": 0.58,
			"expo4": 0.60,
			"expo5": 0.51,
			"expo6": 0.50,
			"expo60": 5.98,
			"expo7": 0.44,
			"newUser": 28681,
			"unitPrice": 7.80
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-23",
			"expo1": 1.44,
			"expo2": 0.33,
			"expo3": 0.32,
			"expo4": 0.25,
			"expo5": 0.18,
			"expo6": 0.19,
			"expo60": 2.41,
			"expo7": 0.21,
			"newUser": 9699,
			"unitPrice": 3.23
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-23",
			"expo1": 0.50,
			"expo2": 0.20,
			"expo3": 0.10,
			"expo4": 0.07,
			"expo5": 0.06,
			"expo6": 0.05,
			"expo60": 0.84,
			"expo7": 0.04,
			"newUser": 13453,
			"unitPrice": 7.06
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-23",
			"expo1": 1.39,
			"expo2": 0.57,
			"expo3": 0.52,
			"expo4": 0.56,
			"expo5": 0.50,
			"expo6": 0.49,
			"expo60": 5.58,
			"expo7": 0.41,
			"newUser": 21499,
			"unitPrice": 10.64
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-23",
			"expo1": 2.21,
			"expo2": 1.05,
			"expo3": 0.95,
			"expo4": 0.94,
			"expo5": 0.79,
			"expo6": 0.75,
			"expo60": 9.52,
			"expo7": 0.68,
			"newUser": 7449,
			"unitPrice": 16.08
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-24",
			"expo1": 0.20,
			"expo2": 0.85,
			"expo3": 0.26,
			"expo4": 0.20,
			"expo5": 0.15,
			"expo6": 0.14,
			"expo60": 2.13,
			"expo7": 0.09,
			"newUser": 16966,
			"unitPrice": 2.73
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-24",
			"expo1": 0.00,
			"expo2": 0.01,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.01,
			"expo7": 0.00,
			"newUser": 9134,
			"unitPrice": 9.39
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-24",
			"expo1": 1.91,
			"expo2": 1.03,
			"expo3": 1.06,
			"expo4": 0.97,
			"expo5": 0.89,
			"expo6": 0.85,
			"expo60": 10.11,
			"expo7": 0.86,
			"newUser": 34324,
			"unitPrice": 14.59
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-24",
			"expo1": 2.20,
			"expo2": 0.81,
			"expo3": 0.62,
			"expo4": 0.54,
			"expo5": 0.53,
			"expo6": 0.48,
			"expo60": 5.90,
			"expo7": 0.51,
			"newUser": 30089,
			"unitPrice": 9.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-24",
			"expo1": 1.33,
			"expo2": 0.36,
			"expo3": 0.27,
			"expo4": 0.21,
			"expo5": 0.20,
			"expo6": 0.20,
			"expo60": 2.22,
			"expo7": 0.19,
			"newUser": 6342,
			"unitPrice": 2.89
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-24",
			"expo1": 1.40,
			"expo2": 0.65,
			"expo3": 0.62,
			"expo4": 0.56,
			"expo5": 0.55,
			"expo6": 0.48,
			"expo60": 5.81,
			"expo7": 0.51,
			"newUser": 17862,
			"unitPrice": 14.37
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-24",
			"expo1": 2.19,
			"expo2": 1.10,
			"expo3": 0.99,
			"expo4": 0.85,
			"expo5": 0.84,
			"expo6": 0.68,
			"expo60": 9.08,
			"expo7": 0.72,
			"newUser": 6980,
			"unitPrice": 17.00
		}, {
			"channelName": "appstore",
			"day": "2018-01-24",
			"expo1": 3.35,
			"expo2": 3.09,
			"expo3": 2.68,
			"expo4": 2.48,
			"expo5": 2.46,
			"expo6": 2.31,
			"expo60": 27.90,
			"expo7": 2.21,
			"newUser": 15365,
			"unitPrice": 4.67
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-24",
			"expo1": 3.35,
			"expo2": 2.77,
			"expo3": 2.73,
			"expo4": 2.06,
			"expo5": 2.30,
			"expo6": 1.76,
			"expo60": 23.57,
			"expo7": 1.74,
			"newUser": 997,
			"unitPrice": 2.73
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-24",
			"expo1": 0.55,
			"expo2": 0.15,
			"expo3": 0.09,
			"expo4": 0.07,
			"expo5": 0.06,
			"expo6": 0.05,
			"expo60": 0.76,
			"expo7": 0.06,
			"newUser": 65171,
			"unitPrice": 3.00
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-25",
			"expo1": 1.02,
			"expo2": 0.85,
			"expo3": 0.69,
			"expo4": 0.48,
			"expo5": 0.50,
			"expo6": 0.36,
			"expo60": 5.04,
			"expo7": 0.42,
			"newUser": 1459,
			"unitPrice": 2.73
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-25",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 9130,
			"unitPrice": 9.39
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-25",
			"expo1": 2.00,
			"expo2": 1.18,
			"expo3": 1.02,
			"expo4": 0.95,
			"expo5": 0.85,
			"expo6": 0.84,
			"expo60": 9.41,
			"expo7": 0.78,
			"newUser": 32998,
			"unitPrice": 14.59
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-25",
			"expo1": 2.16,
			"expo2": 0.85,
			"expo3": 0.58,
			"expo4": 0.54,
			"expo5": 0.48,
			"expo6": 0.47,
			"expo60": 5.29,
			"expo7": 0.50,
			"newUser": 32934,
			"unitPrice": 9.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-25",
			"expo1": 1.41,
			"expo2": 0.29,
			"expo3": 0.17,
			"expo4": 0.18,
			"expo5": 0.17,
			"expo6": 0.15,
			"expo60": 1.70,
			"expo7": 0.12,
			"newUser": 4952,
			"unitPrice": 2.89
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-25",
			"expo1": 1.57,
			"expo2": 0.74,
			"expo3": 0.58,
			"expo4": 0.60,
			"expo5": 0.48,
			"expo6": 0.48,
			"expo60": 5.19,
			"expo7": 0.41,
			"newUser": 17295,
			"unitPrice": 14.37
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-25",
			"expo1": 2.30,
			"expo2": 1.25,
			"expo3": 0.92,
			"expo4": 0.85,
			"expo5": 0.73,
			"expo6": 0.76,
			"expo60": 8.30,
			"expo7": 0.71,
			"newUser": 7261,
			"unitPrice": 17.00
		}, {
			"channelName": "appstore",
			"day": "2018-01-25",
			"expo1": 2.98,
			"expo2": 2.48,
			"expo3": 2.24,
			"expo4": 2.14,
			"expo5": 2.00,
			"expo6": 1.97,
			"expo60": 22.01,
			"expo7": 1.94,
			"newUser": 18757,
			"unitPrice": 4.67
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-25",
			"expo1": 3.44,
			"expo2": 2.99,
			"expo3": 2.53,
			"expo4": 2.04,
			"expo5": 1.80,
			"expo6": 1.76,
			"expo60": 20.91,
			"expo7": 1.60,
			"newUser": 1213,
			"unitPrice": 2.73
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-25",
			"expo1": 0.51,
			"expo2": 0.13,
			"expo3": 0.09,
			"expo4": 0.07,
			"expo5": 0.06,
			"expo6": 0.06,
			"expo60": 0.73,
			"expo7": 0.04,
			"newUser": 144802,
			"unitPrice": 3.00
		}, {
			"channelName": "appstore",
			"day": "2018-01-26",
			"expo1": 3.38,
			"expo2": 3.03,
			"expo3": 2.83,
			"expo4": 2.61,
			"expo5": 2.59,
			"expo6": 2.57,
			"expo60": 25.43,
			"expo7": 2.56,
			"newUser": 14363,
			"unitPrice": 4.67
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-26",
			"expo1": 1.21,
			"expo2": 0.18,
			"expo3": 0.14,
			"expo4": 0.13,
			"expo5": 0.13,
			"expo6": 0.11,
			"expo60": 1.24,
			"expo7": 0.12,
			"newUser": 20789,
			"unitPrice": 2.73
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-26",
			"expo1": 0.44,
			"expo2": 0.13,
			"expo3": 0.11,
			"expo4": 0.09,
			"expo5": 0.08,
			"expo6": 0.06,
			"expo60": 0.89,
			"expo7": 0.04,
			"newUser": 82044,
			"unitPrice": 3.00
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-26",
			"expo1": 0.83,
			"expo2": 0.56,
			"expo3": 0.23,
			"expo4": 0.19,
			"expo5": 0.16,
			"expo6": 0.18,
			"expo60": 2.14,
			"expo7": 0.23,
			"newUser": 1259,
			"unitPrice": 2.73
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-26",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 9247,
			"unitPrice": 9.39
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-26",
			"expo1": 2.21,
			"expo2": 1.15,
			"expo3": 1.06,
			"expo4": 0.90,
			"expo5": 0.88,
			"expo6": 0.85,
			"expo60": 8.87,
			"expo7": 0.81,
			"newUser": 32058,
			"unitPrice": 14.59
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-26",
			"expo1": 2.36,
			"expo2": 0.82,
			"expo3": 0.60,
			"expo4": 0.51,
			"expo5": 0.49,
			"expo6": 0.46,
			"expo60": 4.80,
			"expo7": 0.48,
			"newUser": 31133,
			"unitPrice": 9.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-26",
			"expo1": 1.43,
			"expo2": 0.27,
			"expo3": 0.20,
			"expo4": 0.22,
			"expo5": 0.21,
			"expo6": 0.17,
			"expo60": 1.72,
			"expo7": 0.12,
			"newUser": 3474,
			"unitPrice": 2.89
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-26",
			"expo1": 1.77,
			"expo2": 0.74,
			"expo3": 0.65,
			"expo4": 0.53,
			"expo5": 0.53,
			"expo6": 0.47,
			"expo60": 4.91,
			"expo7": 0.40,
			"newUser": 16626,
			"unitPrice": 14.37
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-26",
			"expo1": 2.69,
			"expo2": 1.22,
			"expo3": 1.02,
			"expo4": 0.90,
			"expo5": 0.98,
			"expo6": 0.83,
			"expo60": 8.77,
			"expo7": 0.84,
			"newUser": 7242,
			"unitPrice": 17.00
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-27",
			"expo1": 0.22,
			"expo2": 0.57,
			"expo3": 0.13,
			"expo4": 0.09,
			"expo5": 0.05,
			"expo6": 0.05,
			"expo60": 1.02,
			"expo7": 0.06,
			"newUser": 19610,
			"unitPrice": 2.73
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-27",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 9580,
			"unitPrice": 9.39
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-27",
			"expo1": 2.10,
			"expo2": 1.23,
			"expo3": 1.02,
			"expo4": 0.95,
			"expo5": 0.89,
			"expo6": 0.89,
			"expo60": 8.38,
			"expo7": 0.86,
			"newUser": 33797,
			"unitPrice": 14.59
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-27",
			"expo1": 2.29,
			"expo2": 0.88,
			"expo3": 0.55,
			"expo4": 0.53,
			"expo5": 0.47,
			"expo6": 0.42,
			"expo60": 4.44,
			"expo7": 0.45,
			"newUser": 32582,
			"unitPrice": 9.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-27",
			"expo1": 1.46,
			"expo2": 0.24,
			"expo3": 0.25,
			"expo4": 0.16,
			"expo5": 0.13,
			"expo6": 0.12,
			"expo60": 1.36,
			"expo7": 0.13,
			"newUser": 2701,
			"unitPrice": 2.89
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-27",
			"expo1": 1.70,
			"expo2": 0.78,
			"expo3": 0.61,
			"expo4": 0.61,
			"expo5": 0.51,
			"expo6": 0.47,
			"expo60": 4.88,
			"expo7": 0.46,
			"newUser": 16345,
			"unitPrice": 14.37
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-27",
			"expo1": 2.55,
			"expo2": 1.31,
			"expo3": 0.94,
			"expo4": 0.96,
			"expo5": 0.92,
			"expo6": 0.90,
			"expo60": 8.04,
			"expo7": 0.78,
			"newUser": 7307,
			"unitPrice": 17.00
		}, {
			"channelName": "appstore",
			"day": "2018-01-27",
			"expo1": 3.75,
			"expo2": 3.50,
			"expo3": 2.98,
			"expo4": 2.89,
			"expo5": 2.89,
			"expo6": 2.90,
			"expo60": 25.80,
			"expo7": 2.81,
			"newUser": 14029,
			"unitPrice": 4.67
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-27",
			"expo1": 1.29,
			"expo2": 0.40,
			"expo3": 0.32,
			"expo4": 0.30,
			"expo5": 0.28,
			"expo6": 0.24,
			"expo60": 2.47,
			"expo7": 0.26,
			"newUser": 8253,
			"unitPrice": 2.73
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-27",
			"expo1": 0.39,
			"expo2": 0.14,
			"expo3": 0.12,
			"expo4": 0.11,
			"expo5": 0.08,
			"expo6": 0.05,
			"expo60": 1.02,
			"expo7": 0.09,
			"newUser": 21838,
			"unitPrice": 3.00
		}, {
			"channelName": "appstore",
			"day": "2018-01-28",
			"expo1": 3.54,
			"expo2": 3.19,
			"expo3": 2.98,
			"expo4": 2.85,
			"expo5": 2.90,
			"expo6": 2.71,
			"expo60": 22.33,
			"expo7": 2.57,
			"newUser": 14873,
			"unitPrice": 4.67
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-28",
			"expo1": 0.22,
			"expo2": 0.52,
			"expo3": 0.10,
			"expo4": 0.07,
			"expo5": 0.07,
			"expo6": 0.07,
			"expo60": 0.92,
			"expo7": 0.06,
			"newUser": 23221,
			"unitPrice": 2.73
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-28",
			"expo1": 1.52,
			"expo2": 0.72,
			"expo3": 0.62,
			"expo4": 0.62,
			"expo5": 0.53,
			"expo6": 0.50,
			"expo60": 4.46,
			"expo7": 0.51,
			"newUser": 4571,
			"unitPrice": 2.73
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-28",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.01,
			"expo7": 0.00,
			"newUser": 9662,
			"unitPrice": 9.39
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-28",
			"expo1": 2.16,
			"expo2": 1.10,
			"expo3": 1.02,
			"expo4": 0.93,
			"expo5": 0.92,
			"expo6": 0.88,
			"expo60": 7.43,
			"expo7": 0.83,
			"newUser": 33273,
			"unitPrice": 14.59
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-28",
			"expo1": 2.41,
			"expo2": 0.80,
			"expo3": 0.54,
			"expo4": 0.48,
			"expo5": 0.46,
			"expo6": 0.43,
			"expo60": 3.98,
			"expo7": 0.48,
			"newUser": 32805,
			"unitPrice": 9.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-28",
			"expo1": 1.47,
			"expo2": 0.29,
			"expo3": 0.20,
			"expo4": 0.16,
			"expo5": 0.14,
			"expo6": 0.13,
			"expo60": 1.30,
			"expo7": 0.14,
			"newUser": 2663,
			"unitPrice": 2.89
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-28",
			"expo1": 0.45,
			"expo2": 0.13,
			"expo3": 0.12,
			"expo4": 0.08,
			"expo5": 0.06,
			"expo6": 0.08,
			"expo60": 0.86,
			"expo7": 0.13,
			"newUser": 10559,
			"unitPrice": 3.00
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-28",
			"expo1": 1.87,
			"expo2": 0.70,
			"expo3": 0.72,
			"expo4": 0.62,
			"expo5": 0.54,
			"expo6": 0.47,
			"expo60": 4.42,
			"expo7": 0.45,
			"newUser": 16856,
			"unitPrice": 14.37
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-28",
			"expo1": 2.61,
			"expo2": 1.19,
			"expo3": 1.00,
			"expo4": 0.88,
			"expo5": 0.87,
			"expo6": 0.78,
			"expo60": 6.90,
			"expo7": 0.74,
			"newUser": 6832,
			"unitPrice": 17.00
		}, {
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-29",
			"expo1": 0.22,
			"expo2": 0.35,
			"expo3": 0.08,
			"expo4": 0.07,
			"expo5": 0.07,
			"expo6": 0.08,
			"expo60": 0.70,
			"expo7": 0.02,
			"newUser": 21821,
			"unitPrice": 2.73
		}, {
			"channelName": "baidu_news",
			"day": "2018-01-29",
			"expo1": 0.00,
			"expo2": 0.00,
			"expo3": 0.00,
			"expo4": 0.00,
			"expo5": 0.00,
			"expo6": 0.00,
			"expo60": 0.00,
			"expo7": 0.00,
			"newUser": 9815,
			"unitPrice": 9.39
		}, {
			"channelName": "huawei_news",
			"day": "2018-01-29",
			"expo1": 2.16,
			"expo2": 1.27,
			"expo3": 1.06,
			"expo4": 1.04,
			"expo5": 1.01,
			"expo6": 0.94,
			"expo60": 7.26,
			"expo7": 0.98,
			"newUser": 30388,
			"unitPrice": 14.59
		}, {
			"channelName": "miliao_news",
			"day": "2018-01-29",
			"expo1": 2.32,
			"expo2": 0.85,
			"expo3": 0.56,
			"expo4": 0.48,
			"expo5": 0.45,
			"expo6": 0.42,
			"expo60": 3.73,
			"expo7": 0.52,
			"newUser": 30006,
			"unitPrice": 9.32
		}, {
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-29",
			"expo1": 1.68,
			"expo2": 0.31,
			"expo3": 0.18,
			"expo4": 0.14,
			"expo5": 0.13,
			"expo6": 0.10,
			"expo60": 1.12,
			"expo7": 0.15,
			"newUser": 23421,
			"unitPrice": 2.89
		}, {
			"channelName": "oppo_store2014_news",
			"day": "2018-01-29",
			"expo1": 1.72,
			"expo2": 0.83,
			"expo3": 0.66,
			"expo4": 0.58,
			"expo5": 0.56,
			"expo6": 0.54,
			"expo60": 4.20,
			"expo7": 0.54,
			"newUser": 15126,
			"unitPrice": 14.37
		}, {
			"channelName": "vivo_store2014_news",
			"day": "2018-01-29",
			"expo1": 2.49,
			"expo2": 1.31,
			"expo3": 1.00,
			"expo4": 0.87,
			"expo5": 0.81,
			"expo6": 0.78,
			"expo60": 6.24,
			"expo7": 0.72,
			"newUser": 7304,
			"unitPrice": 17.00
		}, {
			"channelName": "appstore",
			"day": "2018-01-29",
			"expo1": 3.61,
			"expo2": 3.61,
			"expo3": 3.32,
			"expo4": 3.26,
			"expo5": 3.08,
			"expo6": 2.88,
			"expo60": 21.80,
			"expo7": 2.77,
			"newUser": 12648,
			"unitPrice": 4.67
		}, {
			"channelName": "QQ_news_yunying2",
			"day": "2018-01-29",
			"expo1": 1.54,
			"expo2": 0.82,
			"expo3": 0.65,
			"expo4": 0.64,
			"expo5": 0.52,
			"expo6": 0.45,
			"expo60": 4.09,
			"expo7": 0.50,
			"newUser": 4951,
			"unitPrice": 2.73
		}, {
			"channelName": "news_kp_push",
			"day": "2018-01-29",
			"expo1": 0.43,
			"expo2": 0.17,
			"expo3": 0.09,
			"expo4": 0.06,
			"expo5": 0.06,
			"expo6": 0.09,
			"expo60": 0.69,
			"expo7": 0.11,
			"newUser": 8466,
			"unitPrice": 3.00
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/exposure/table.do", "post", {
		"status": true,
		"total": "@natural(1000, 10000)",
		"data|0-10": [{
			"channelName": "@word(6)",
			"day": "@datetime('yyyy-MM-dd')",
			"expo1": "@float(0, 2, 2, 2)",
			"expo2": "@float(0, 0, 2, 2)",
			"expo3": "@float(0, 0, 2, 2)",
			"expo4": "@float(0, 0, 2, 2)",
			"expo5": "@float(0, 0, 2, 2)",
			"expo6": "@float(0, 0, 2, 2)",
			"expo60": "@float(0, 0, 2, 2)",
			"expo7": "@float(0, 0, 2, 2)",
			"newUser": "@natural(1000, 10000)",
			"unitPrice": "@float(0, 0, 2, 2)"
		}],
		"msg": "返回成功"
	});
}

/***/ })

});
//# sourceMappingURL=adImpression.js.map