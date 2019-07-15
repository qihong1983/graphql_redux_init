webpackJsonp([16],{

/***/ 2129:
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

var _channelRoi = __webpack_require__(2220);

var actionCreators = _interopRequireWildcard(_channelRoi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//asdfasd

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

var channelRoi = function (_React$Component) {
	_inherits(channelRoi, _React$Component);

	function channelRoi(props) {
		_classCallCheck(this, channelRoi);

		return _possibleConstructorReturn(this, (channelRoi.__proto__ || Object.getPrototypeOf(channelRoi)).call(this, props));
	}

	_createClass(channelRoi, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_nprogress2.default.start();

			var dataCharts = {
				appCode: this.props.channelRoi.appCode,
				channelName: this.props.channelRoi.channelName,
				endDate: this.props.channelRoi.endDate,
				startDate: this.props.channelRoi.startDate
			};
			this.getCharts(dataCharts);

			var tableData = {
				appCode: this.props.channelRoi.appCode,
				channelName: this.props.channelRoi.channelName,
				endDate: this.props.channelRoi.endDate,
				startDate: this.props.channelRoi.startDate,
				offset: this.props.channelRoi.offset,
				limit: this.props.channelRoi.limit
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
			if (nextProps.channelRoi.excelData != this.props.channelRoi.excelData) {
				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.channelRoi.columns);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.channelRoi.columns);
				var arr = [];
				nextProps.channelRoi.excelData.map(function (v, k) {
					if (v.unitPrice) {
						v.roi = (v.adIncome / v.unitPrice).toFixed(2);
						v.roi = parseFloat(v.roi, 10);
					}
					arr.push(v);
				});

				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(arr, helperColumns);
				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'getTables',
		value: function getTables(data) {
			this.props.getTables(data);
		}

		/**
   * 图表数据解析
   */

	}, {
		key: 'parseData',
		value: function parseData() {

			var db = (0, _taffy2.default)(this.props.channelRoi.chartsData);
			var names = db().distinct("channelName");
			var xAxis = db().distinct("day");

			var series = [];

			names.map(function (v, k) {

				var roi = db({
					"channelName": v
				}).select("roi");

				series.push({
					"name": v,
					"type": "line",
					"stack": v,
					"data": roi
				});
			});
			// });

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

			if (this.props.channelRoi.chartsData.length != 0) {
				var data = this.parseData();
				var myChart = _echarts2.default.init(this.refs.charts);
				var config = (0, _chartConfigs.Line)(data);
				myChart.setOption(config);
				window.onresize = myChart.resize;
			} else {
				if (this.props.channelRoi.chartsNoData) {
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
				channelName: ""
			};

			this.props.changeOs(data);
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
				appCode: this.props.channelRoi.appCode,
				channelCategory: "",
				channelGroup: "",
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

			if (dateString[1] > this.props.channelRoi.maxDate) {

				_antd.notification['error']({
					message: '日期错误',
					description: '超出日期选择范围'
				});
			} else {
				this.props.setDate(dateString);
			}
			// this.props.setDate(this.props.profileList.Param, dateString);
		}
	}, {
		key: 'clickQuery',
		value: function clickQuery() {

			var dataCharts = {
				appCode: this.props.channelRoi.appCode,
				channelName: this.props.channelRoi.channelName,
				endDate: this.props.channelRoi.endDate,
				startDate: this.props.channelRoi.startDate
			};

			this.getCharts(dataCharts);

			var tableData = {
				appCode: this.props.channelRoi.appCode,
				channelName: this.props.channelRoi.channelName,
				endDate: this.props.channelRoi.endDate,
				startDate: this.props.channelRoi.startDate,
				offset: 1,
				limit: this.props.channelRoi.limit
			};

			this.getTables(tableData);
		}
	}, {
		key: 'handleTableChange',
		value: function handleTableChange(pagination, filters, sorter) {

			var tableData = {
				appCode: this.props.channelRoi.appCode,
				channelName: this.props.channelRoi.channelName,
				endDate: this.props.channelRoi.endDate,
				startDate: this.props.channelRoi.startDate,
				offset: pagination.current,
				limit: pagination.pageSize
			};

			this.getTables(tableData);
		}
	}, {
		key: 'getDownloadName',
		value: function getDownloadName(data) {
			var prefix = '渠道ROI-';
			var fileName = '全部';

			if (data.channelName) {
				fileName = data.channelName;
			} else if (data.appCode) {
				fileName = data.appCode == '24' ? 'Android' : 'iOS';
			}

			return prefix + fileName + '-(' + data.startDate + '至' + data.endDate + ')';
		}
	}, {
		key: 'downloadExcel',
		value: function downloadExcel() {
			var data = {
				appCode: this.props.channelRoi.appCode,
				channelName: this.props.channelRoi.channelName,
				endDate: this.props.channelRoi.endDate,
				startDate: this.props.channelRoi.startDate,
				offset: 1,
				limit: -1
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData(data);
		}
	}, {
		key: 'render',
		value: function render() {

			var pagination = {
				current: this.props.channelRoi.offset,
				pageSize: this.props.channelRoi.limit,
				total: this.props.channelRoi.total,
				defaultPageSize: this.props.channelRoi.limit,
				showSizeChanger: true
			};

			(0, _utils.addKey)(this.props.channelRoi.tableData, 'channelRoi' + new Date().getTime());

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
									value: this.props.channelRoi.appCode,
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
									value: this.props.channelRoi.channelName,
									filterOption: false,
									onChange: this.searchChannel.bind(this)
								},
								(0, _utils.getChannelList)(this.props.channelRoi.channelList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(RangePicker, {
								value: [(0, _moment2.default)(this.props.channelRoi.startDate, dateFormat), (0, _moment2.default)(this.props.channelRoi.endDate, dateFormat)],
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
						{ title: '\u65B0\u589E\u7528\u6237Top10\u6E20\u9053\u7684ROI', noHovering: true, style: { minHeight: "380px" } },
						_react2.default.createElement(
							_antd.Spin,
							{ spinning: this.props.channelRoi.chartsLoading },
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
						loading: this.props.channelRoi.tableLoading,
						locale: { "emptyText": "暂无数据" },
						columns: (0, _utils.dealConfigColumns)(this.props.channelRoi.columns),
						dataSource: this.props.channelRoi.tableData,
						pagination: pagination,
						onChange: this.handleTableChange.bind(this)
					})
				)
			);
		}
	}]);

	return channelRoi;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	return {
		channelRoi: state.qReducer.channelRoi
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	//全量
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(channelRoi);

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

/***/ 2220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData = exports.setDate = exports.getTables = exports.getCharts = exports.searchChannel = exports.changeOs = undefined;

__webpack_require__(2147);

__webpack_require__(2244);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _antd = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//todo mock数据
var changeOs = function changeOs(data) {
	return function (dispatch) {
		dispatch({
			type: "CHANNELROI_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "CHANNELROI_CHANNELNAME",
			payload: data.channelName
		});
	};
}; //todo mock数据


var searchChannel = function searchChannel(data) {
	return function (dispatch) {

		// appCode: this.props.channelRoi.appCode,
		// channelCategory: "",
		// channelGroup: "",
		// channelName: value

		dispatch({
			type: "CHANNELROI_CHANNELNAME",
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
					type: "CHANNELROI_CHANNELIST",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '获取渠道列表失败',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var getCharts = function getCharts(data) {
	return function (dispatch) {
		dispatch({
			type: "CHANNELROI_CHARTSLOADING",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/roi/chart.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "CHANNELROI_CHARTSLOADING",
				payload: false
			});

			if (msg.status) {

				if (msg.data.length != 0) {
					dispatch({
						type: "CHANNELROI_CHARTSNODATA",
						payload: false
					});
				} else {
					dispatch({
						type: "CHANNELROI_CHARTSNODATA",
						payload: true
					});
				}

				dispatch({
					type: "CHANNELROI_CHARTSDATA",
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
			type: "CHANNELROI_OFFSET",
			payload: data.offset
		});

		dispatch({
			type: "CHANNELROI_LIMIT",
			payload: data.limit
		});

		dispatch({
			type: "CHANNELROI_TABLESLOADING",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/roi/table.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "CHANNELROI_TABLESLOADING",
				payload: false
			});

			if (msg.status) {

				var arr = [];
				msg.data.map(function (v, k) {
					var obj = {};
					if (v.unitPrice) {
						v.roi = (v.adIncome / v.unitPrice).toFixed(2);
					}
					arr.push(v);
				});

				dispatch({
					type: "CHANNELROI_TABLEDATA",
					payload: arr
				});

				dispatch({
					type: "CHANNELROI_TOTAL",
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

var setDate = function setDate(data) {
	return function (dispatch) {
		dispatch({
			type: "CHANNELROI_STARTDATE",
			payload: data[0]
		});

		dispatch({
			type: "CHANNELROI_ENTDATE",
			payload: data[1]
		});
	};
};

var getDownLoadData = function getDownLoadData(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/roi/table.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {

				dispatch({
					type: "CHANNELROI_EXCELDATA",
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

exports.changeOs = changeOs;
exports.searchChannel = searchChannel;
exports.getCharts = getCharts;
exports.getTables = getTables;
exports.setDate = setDate;
exports.getDownLoadData = getDownLoadData;

/***/ }),

/***/ 2244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	// "channelName": "@word(6)",
	// "day": "@datetime('yyyy-MM-dd')",
	// "expo1": "@float(0, 2, 2, 2)",
	// "expo2": "@float(0, 0, 2, 2)",
	// "expo3": "@float(0, 0, 2, 2)",
	// "expo4": "@float(0, 0, 2, 2)",
	// "expo5": "@float(0, 0, 2, 2)",
	// "expo6": "@float(0, 0, 2, 2)",
	// "expo60": "@float(0, 0, 2, 2)",
	// "expo7": "@float(0, 0, 2, 2)",
	// "newUser": "@natural(1000, 10000)",
	// "unitPrice": "@float(0, 0, 2, 2)"

	_mockjs2.default.mock("/data/roi/chart.do", "post", {
		"status": true,
		"data": [{
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2017-12-31",
			"newUser": 55149,
			"roi": 0.00,
			"unitPrice": 0.95
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2017-12-31",
			"newUser": 12711,
			"roi": 0.00,
			"unitPrice": 5.00
		}, {
			"adIncome": 10.71,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2017-12-31",
			"newUser": 37614,
			"roi": 0.74,
			"unitPrice": 14.44
		}, {
			"adIncome": 2.95,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2017-12-31",
			"newUser": 54867,
			"roi": 0.64,
			"unitPrice": 4.58
		}, {
			"adIncome": 8.34,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2017-12-31",
			"newUser": 721
		}, {
			"adIncome": 1.80,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2017-12-31",
			"newUser": 2539,
			"roi": 0.50,
			"unitPrice": 3.57
		}, {
			"adIncome": 5.50,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2017-12-31",
			"newUser": 10196,
			"roi": 1.83,
			"unitPrice": 3.00
		}, {
			"adIncome": 7.97,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2017-12-31",
			"newUser": 20118,
			"roi": 0.66,
			"unitPrice": 12.01
		}, {
			"adIncome": 6.24,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2017-12-31",
			"newUser": 9140,
			"roi": 0.47,
			"unitPrice": 13.24
		}, {
			"adIncome": 19.92,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2017-12-31",
			"newUser": 14324,
			"roi": 3.76,
			"unitPrice": 5.30
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-01",
			"newUser": 58622,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-01",
			"newUser": 12627,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 10.52,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-01",
			"newUser": 41586,
			"roi": 0.72,
			"unitPrice": 14.60
		}, {
			"adIncome": 3.18,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-01",
			"newUser": 58983,
			"roi": 0.43,
			"unitPrice": 7.32
		}, {
			"adIncome": 4.25,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-01",
			"newUser": 1803
		}, {
			"adIncome": 2.06,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-01",
			"newUser": 2213,
			"roi": 0.45,
			"unitPrice": 4.59
		}, {
			"adIncome": 5.13,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-01",
			"newUser": 7126,
			"roi": 1.52,
			"unitPrice": 3.38
		}, {
			"adIncome": 8.26,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-01",
			"newUser": 20635,
			"roi": 0.71,
			"unitPrice": 11.63
		}, {
			"adIncome": 5.10,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-01",
			"newUser": 13670,
			"roi": 0.41,
			"unitPrice": 12.33
		}, {
			"adIncome": 19.86,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-01",
			"newUser": 16205,
			"roi": 3.28,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-02",
			"newUser": 59378,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.25,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-02",
			"newUser": 12275,
			"roi": 0.03,
			"unitPrice": 8.58
		}, {
			"adIncome": 9.78,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-02",
			"newUser": 39395,
			"roi": 0.67,
			"unitPrice": 14.60
		}, {
			"adIncome": 3.93,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-02",
			"newUser": 54052,
			"roi": 0.54,
			"unitPrice": 7.32
		}, {
			"adIncome": 3.59,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-02",
			"newUser": 1711
		}, {
			"adIncome": 2.04,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-02",
			"newUser": 1669,
			"roi": 0.44,
			"unitPrice": 4.59
		}, {
			"adIncome": 6.21,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-02",
			"newUser": 5646,
			"roi": 1.84,
			"unitPrice": 3.38
		}, {
			"adIncome": 8.31,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-02",
			"newUser": 17379,
			"roi": 0.71,
			"unitPrice": 11.63
		}, {
			"adIncome": 5.87,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-02",
			"newUser": 10485,
			"roi": 0.48,
			"unitPrice": 12.33
		}, {
			"adIncome": 18.68,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-02",
			"newUser": 16108,
			"roi": 3.09,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-03",
			"newUser": 52873,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-03",
			"newUser": 9333,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 7.62,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-03",
			"newUser": 42357,
			"roi": 0.52,
			"unitPrice": 14.60
		}, {
			"adIncome": 1.12,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-03",
			"newUser": 68209,
			"roi": 0.15,
			"unitPrice": 7.32
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-03",
			"newUser": 13449
		}, {
			"adIncome": 5.53,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-03",
			"newUser": 2249,
			"roi": 1.20,
			"unitPrice": 4.59
		}, {
			"adIncome": 8.51,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-03",
			"newUser": 7275,
			"roi": 2.52,
			"unitPrice": 3.38
		}, {
			"adIncome": 9.20,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-03",
			"newUser": 24725,
			"roi": 0.79,
			"unitPrice": 11.63
		}, {
			"adIncome": 6.67,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-03",
			"newUser": 9884,
			"roi": 0.54,
			"unitPrice": 12.33
		}, {
			"adIncome": 17.95,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-03",
			"newUser": 15437,
			"roi": 2.97,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-04",
			"newUser": 79552,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-04",
			"newUser": 5826,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 4.44,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-04",
			"newUser": 43167,
			"roi": 0.30,
			"unitPrice": 14.60
		}, {
			"adIncome": 0.08,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-04",
			"newUser": 79549,
			"roi": 0.01,
			"unitPrice": 7.32
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-04",
			"newUser": 17752
		}, {
			"adIncome": 2.01,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-04",
			"newUser": 2792,
			"roi": 0.44,
			"unitPrice": 4.59
		}, {
			"adIncome": 6.08,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-04",
			"newUser": 4798,
			"roi": 1.80,
			"unitPrice": 3.38
		}, {
			"adIncome": 4.81,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-04",
			"newUser": 19819,
			"roi": 0.41,
			"unitPrice": 11.63
		}, {
			"adIncome": 5.47,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-04",
			"newUser": 9398,
			"roi": 0.44,
			"unitPrice": 12.33
		}, {
			"adIncome": 16.91,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-04",
			"newUser": 15171,
			"roi": 2.80,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-05",
			"newUser": 55522,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-05",
			"newUser": 6242,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 4.55,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-05",
			"newUser": 37230,
			"roi": 0.31,
			"unitPrice": 14.60
		}, {
			"adIncome": 0.03,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-05",
			"newUser": 74258,
			"roi": 0.00,
			"unitPrice": 7.32
		}, {
			"adIncome": 0.03,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-05",
			"newUser": 3472
		}, {
			"adIncome": 1.04,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-05",
			"newUser": 3403,
			"roi": 0.23,
			"unitPrice": 4.59
		}, {
			"adIncome": 3.90,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-05",
			"newUser": 3326,
			"roi": 1.15,
			"unitPrice": 3.38
		}, {
			"adIncome": 4.61,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-05",
			"newUser": 18097,
			"roi": 0.40,
			"unitPrice": 11.63
		}, {
			"adIncome": 4.65,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-05",
			"newUser": 10001,
			"roi": 0.38,
			"unitPrice": 12.33
		}, {
			"adIncome": 15.82,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-05",
			"newUser": 14744,
			"roi": 2.61,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-06",
			"newUser": 66198,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-06",
			"newUser": 6215,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 4.42,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-06",
			"newUser": 39902,
			"roi": 0.30,
			"unitPrice": 14.60
		}, {
			"adIncome": 1.83,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-06",
			"newUser": 39793,
			"roi": 0.25,
			"unitPrice": 7.32
		}, {
			"adIncome": 23.36,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-06",
			"newUser": 171
		}, {
			"adIncome": 1.69,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-06",
			"newUser": 2193,
			"roi": 0.37,
			"unitPrice": 4.59
		}, {
			"adIncome": 3.30,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-06",
			"newUser": 2795,
			"roi": 0.98,
			"unitPrice": 3.38
		}, {
			"adIncome": 4.45,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-06",
			"newUser": 18864,
			"roi": 0.38,
			"unitPrice": 11.63
		}, {
			"adIncome": 5.10,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-06",
			"newUser": 9791,
			"roi": 0.41,
			"unitPrice": 12.33
		}, {
			"adIncome": 15.37,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-06",
			"newUser": 17156,
			"roi": 2.54,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-07",
			"newUser": 75570,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-07",
			"newUser": 6199,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 4.45,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-07",
			"newUser": 39676,
			"roi": 0.30,
			"unitPrice": 14.60
		}, {
			"adIncome": 1.84,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-07",
			"newUser": 38030,
			"roi": 0.25,
			"unitPrice": 7.32
		}, {
			"adIncome": 0.03,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-07",
			"newUser": 3172
		}, {
			"adIncome": 1.37,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-07",
			"newUser": 2080,
			"roi": 0.30,
			"unitPrice": 4.59
		}, {
			"adIncome": 2.75,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-07",
			"newUser": 2365,
			"roi": 0.81,
			"unitPrice": 3.38
		}, {
			"adIncome": 4.10,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-07",
			"newUser": 18599,
			"roi": 0.35,
			"unitPrice": 11.63
		}, {
			"adIncome": 5.07,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-07",
			"newUser": 9000,
			"roi": 0.41,
			"unitPrice": 12.33
		}, {
			"adIncome": 16.48,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-07",
			"newUser": 16677,
			"roi": 2.72,
			"unitPrice": 6.05
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-08",
			"newUser": 50907,
			"roi": 0.00,
			"unitPrice": 3.31
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-08",
			"newUser": 6218,
			"roi": 0.00,
			"unitPrice": 8.58
		}, {
			"adIncome": 4.85,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-08",
			"newUser": 32241,
			"roi": 0.33,
			"unitPrice": 14.60
		}, {
			"adIncome": 1.57,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-08",
			"newUser": 37966,
			"roi": 0.21,
			"unitPrice": 7.32
		}, {
			"adIncome": 0.03,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-08",
			"newUser": 2083
		}, {
			"adIncome": 1.49,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-08",
			"newUser": 1217,
			"roi": 0.32,
			"unitPrice": 4.59
		}, {
			"adIncome": 3.46,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-08",
			"newUser": 2102,
			"roi": 1.02,
			"unitPrice": 3.38
		}, {
			"adIncome": 5.51,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-08",
			"newUser": 19177,
			"roi": 0.47,
			"unitPrice": 11.63
		}, {
			"adIncome": 5.33,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-08",
			"newUser": 7651,
			"roi": 0.43,
			"unitPrice": 12.33
		}, {
			"adIncome": 15.53,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-08",
			"newUser": 15212,
			"roi": 2.57,
			"unitPrice": 6.05
		}, {
			"adIncome": 1.06,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-09",
			"newUser": 25107,
			"roi": 0.32,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-09",
			"newUser": 7322,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 4.87,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-09",
			"newUser": 32716,
			"roi": 0.34,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.41,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-09",
			"newUser": 41470,
			"roi": 0.18,
			"unitPrice": 7.80
		}, {
			"adIncome": 11.34,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-09",
			"newUser": 203
		}, {
			"adIncome": 1.54,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-09",
			"newUser": 2281,
			"roi": 0.48,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.41,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-09",
			"newUser": 1941,
			"roi": 0.48,
			"unitPrice": 7.06
		}, {
			"adIncome": 5.91,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-09",
			"newUser": 25463,
			"roi": 0.56,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.02,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-09",
			"newUser": 10987,
			"roi": 0.31,
			"unitPrice": 16.08
		}, {
			"adIncome": 16.28,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-09",
			"newUser": 14092,
			"roi": 3.07,
			"unitPrice": 5.31
		}, {
			"adIncome": 1.34,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-10",
			"newUser": 16357,
			"roi": 0.41,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-10",
			"newUser": 7528,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 4.64,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-10",
			"newUser": 32914,
			"roi": 0.32,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.55,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-10",
			"newUser": 42111,
			"roi": 0.20,
			"unitPrice": 7.80
		}, {
			"adIncome": 17.97,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-10",
			"newUser": 175
		}, {
			"adIncome": 1.67,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-10",
			"newUser": 1888,
			"roi": 0.52,
			"unitPrice": 3.23
		}, {
			"adIncome": 5.74,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-10",
			"newUser": 2113,
			"roi": 0.81,
			"unitPrice": 7.06
		}, {
			"adIncome": 6.22,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-10",
			"newUser": 25844,
			"roi": 0.58,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.30,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-10",
			"newUser": 8250,
			"roi": 0.33,
			"unitPrice": 16.08
		}, {
			"adIncome": 15.16,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-10",
			"newUser": 14914,
			"roi": 2.85,
			"unitPrice": 5.31
		}, {
			"adIncome": 8.39,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-11",
			"newUser": 3313,
			"roi": 2.55,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-11",
			"newUser": 7377,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 4.64,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-11",
			"newUser": 34845,
			"roi": 0.32,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.74,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-11",
			"newUser": 37826,
			"roi": 0.22,
			"unitPrice": 7.80
		}, {
			"adIncome": 19.24,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-11",
			"newUser": 158
		}, {
			"adIncome": 1.98,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-11",
			"newUser": 1314,
			"roi": 0.61,
			"unitPrice": 3.23
		}, {
			"adIncome": 4.16,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-11",
			"newUser": 1662,
			"roi": 0.59,
			"unitPrice": 7.06
		}, {
			"adIncome": 5.19,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-11",
			"newUser": 20336,
			"roi": 0.49,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.94,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-11",
			"newUser": 7473,
			"roi": 0.37,
			"unitPrice": 16.08
		}, {
			"adIncome": 17.17,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-11",
			"newUser": 13598,
			"roi": 3.23,
			"unitPrice": 5.31
		}, {
			"adIncome": 8.99,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-12",
			"newUser": 2851,
			"roi": 2.73,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-12",
			"newUser": 7253,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 4.99,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-12",
			"newUser": 33792,
			"roi": 0.35,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.44,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-12",
			"newUser": 44022,
			"roi": 0.18,
			"unitPrice": 7.80
		}, {
			"adIncome": 18.92,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-12",
			"newUser": 138
		}, {
			"adIncome": 1.27,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-12",
			"newUser": 19356,
			"roi": 0.39,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.66,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-12",
			"newUser": 1454,
			"roi": 0.52,
			"unitPrice": 7.06
		}, {
			"adIncome": 5.31,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-12",
			"newUser": 18383,
			"roi": 0.50,
			"unitPrice": 10.64
		}, {
			"adIncome": 6.37,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-12",
			"newUser": 7956,
			"roi": 0.40,
			"unitPrice": 16.08
		}, {
			"adIncome": 15.57,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-12",
			"newUser": 13903,
			"roi": 2.93,
			"unitPrice": 5.31
		}, {
			"adIncome": 8.51,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-13",
			"newUser": 3597,
			"roi": 2.59,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-13",
			"newUser": 7289,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 5.45,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-13",
			"newUser": 36329,
			"roi": 0.38,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.43,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-13",
			"newUser": 44998,
			"roi": 0.18,
			"unitPrice": 7.80
		}, {
			"adIncome": 21.56,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-13",
			"newUser": 134
		}, {
			"adIncome": 1.89,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-13",
			"newUser": 8514,
			"roi": 0.59,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.52,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-13",
			"newUser": 1449,
			"roi": 0.50,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.87,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-13",
			"newUser": 18414,
			"roi": 0.46,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.30,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-13",
			"newUser": 7905,
			"roi": 0.33,
			"unitPrice": 16.08
		}, {
			"adIncome": 18.12,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-13",
			"newUser": 13747,
			"roi": 3.41,
			"unitPrice": 5.31
		}, {
			"adIncome": 9.45,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-14",
			"newUser": 3089,
			"roi": 2.87,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-14",
			"newUser": 7497,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 5.93,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-14",
			"newUser": 35945,
			"roi": 0.41,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.66,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-14",
			"newUser": 41735,
			"roi": 0.21,
			"unitPrice": 7.80
		}, {
			"adIncome": 16.48,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-14",
			"newUser": 152
		}, {
			"adIncome": 2.20,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-14",
			"newUser": 5404,
			"roi": 0.68,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.49,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-14",
			"newUser": 1390,
			"roi": 0.49,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.59,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-14",
			"newUser": 17903,
			"roi": 0.43,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.82,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-14",
			"newUser": 7797,
			"roi": 0.36,
			"unitPrice": 16.08
		}, {
			"adIncome": 19.01,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-14",
			"newUser": 13918,
			"roi": 3.58,
			"unitPrice": 5.31
		}, {
			"adIncome": 7.19,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-15",
			"newUser": 4901,
			"roi": 2.19,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-15",
			"newUser": 7507,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 5.94,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-15",
			"newUser": 32692,
			"roi": 0.41,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.21,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-15",
			"newUser": 51017,
			"roi": 0.16,
			"unitPrice": 7.80
		}, {
			"adIncome": 11.75,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-15",
			"newUser": 13569
		}, {
			"adIncome": 2.00,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-15",
			"newUser": 3573,
			"roi": 0.62,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.27,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-15",
			"newUser": 1184,
			"roi": 0.46,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.85,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-15",
			"newUser": 17097,
			"roi": 0.46,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.81,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-15",
			"newUser": 7348,
			"roi": 0.36,
			"unitPrice": 16.08
		}, {
			"adIncome": 16.33,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-15",
			"newUser": 14996,
			"roi": 3.08,
			"unitPrice": 5.31
		}, {
			"adIncome": 4.79,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-16",
			"newUser": 8837,
			"roi": 1.46,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-16",
			"newUser": 7880,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 5.82,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-16",
			"newUser": 32977,
			"roi": 0.41,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.14,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-16",
			"newUser": 58188,
			"roi": 0.15,
			"unitPrice": 7.80
		}, {
			"adIncome": 8.85,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-16",
			"newUser": 74295
		}, {
			"adIncome": 2.47,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-16",
			"newUser": 2606,
			"roi": 0.76,
			"unitPrice": 3.23
		}, {
			"adIncome": 6.94,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-16",
			"newUser": 1683,
			"roi": 0.98,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.82,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-16",
			"newUser": 18758,
			"roi": 0.45,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.81,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-16",
			"newUser": 7647,
			"roi": 0.36,
			"unitPrice": 16.08
		}, {
			"adIncome": 16.97,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-16",
			"newUser": 13087,
			"roi": 3.20,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.99,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-17",
			"newUser": 16113,
			"roi": 1.21,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-17",
			"newUser": 8116,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 5.82,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-17",
			"newUser": 34811,
			"roi": 0.41,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.57,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-17",
			"newUser": 49340,
			"roi": 0.20,
			"unitPrice": 7.80
		}, {
			"adIncome": 9.52,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-17",
			"newUser": 109922
		}, {
			"adIncome": 2.09,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-17",
			"newUser": 13533,
			"roi": 0.65,
			"unitPrice": 3.23
		}, {
			"adIncome": 6.83,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-17",
			"newUser": 1500,
			"roi": 0.97,
			"unitPrice": 7.06
		}, {
			"adIncome": 8.02,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-17",
			"newUser": 27199,
			"roi": 0.75,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.76,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-17",
			"newUser": 7487,
			"roi": 0.36,
			"unitPrice": 16.08
		}, {
			"adIncome": 16.48,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-17",
			"newUser": 13062,
			"roi": 3.10,
			"unitPrice": 5.31
		}, {
			"adIncome": 4.39,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-18",
			"newUser": 23890,
			"roi": 1.33,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-18",
			"newUser": 8056,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 6.73,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-18",
			"newUser": 40039,
			"roi": 0.47,
			"unitPrice": 14.35
		}, {
			"adIncome": 1.90,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-18",
			"newUser": 68712,
			"roi": 0.24,
			"unitPrice": 7.80
		}, {
			"adIncome": 2.21,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-18",
			"newUser": 70280
		}, {
			"adIncome": 2.10,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-18",
			"newUser": 8964,
			"roi": 0.65,
			"unitPrice": 3.23
		}, {
			"adIncome": 4.27,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-18",
			"newUser": 1029,
			"roi": 0.60,
			"unitPrice": 7.06
		}, {
			"adIncome": 6.05,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-18",
			"newUser": 21402,
			"roi": 0.57,
			"unitPrice": 10.64
		}, {
			"adIncome": 7.40,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-18",
			"newUser": 9500,
			"roi": 0.46,
			"unitPrice": 16.08
		}, {
			"adIncome": 15.34,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-18",
			"newUser": 22670,
			"roi": 2.89,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.62,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-19",
			"newUser": 30575,
			"roi": 1.10,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-19",
			"newUser": 8273,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 6.17,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-19",
			"newUser": 37603,
			"roi": 0.43,
			"unitPrice": 14.35
		}, {
			"adIncome": 2.32,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-19",
			"newUser": 44487,
			"roi": 0.30,
			"unitPrice": 7.80
		}, {
			"adIncome": 3.04,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-19",
			"newUser": 106932
		}, {
			"adIncome": 2.00,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-19",
			"newUser": 7490,
			"roi": 0.62,
			"unitPrice": 3.23
		}, {
			"adIncome": 4.35,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-19",
			"newUser": 1059,
			"roi": 0.62,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.96,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-19",
			"newUser": 19294,
			"roi": 0.47,
			"unitPrice": 10.64
		}, {
			"adIncome": 6.42,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-19",
			"newUser": 8380,
			"roi": 0.40,
			"unitPrice": 16.08
		}, {
			"adIncome": 15.17,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-19",
			"newUser": 16765,
			"roi": 2.86,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.46,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-20",
			"newUser": 22383,
			"roi": 1.05,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-20",
			"newUser": 8797,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 6.17,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-20",
			"newUser": 39479,
			"roi": 0.43,
			"unitPrice": 14.35
		}, {
			"adIncome": 3.04,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-20",
			"newUser": 41240,
			"roi": 0.39,
			"unitPrice": 7.80
		}, {
			"adIncome": 0.11,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-20",
			"newUser": 88839
		}, {
			"adIncome": 1.90,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-20",
			"newUser": 3388,
			"roi": 0.59,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.46,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-20",
			"newUser": 1024,
			"roi": 0.49,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.81,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-20",
			"newUser": 21274,
			"roi": 0.45,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.82,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-20",
			"newUser": 8586,
			"roi": 0.36,
			"unitPrice": 16.08
		}, {
			"adIncome": 16.30,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-20",
			"newUser": 16909,
			"roi": 3.07,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.82,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-21",
			"newUser": 29141,
			"roi": 1.16,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-21",
			"newUser": 9027,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 6.22,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-21",
			"newUser": 40195,
			"roi": 0.43,
			"unitPrice": 14.35
		}, {
			"adIncome": 3.24,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-21",
			"newUser": 39930,
			"roi": 0.42,
			"unitPrice": 7.80
		}, {
			"adIncome": 0.11,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-21",
			"newUser": 57063
		}, {
			"adIncome": 1.60,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-21",
			"newUser": 4771,
			"roi": 0.50,
			"unitPrice": 3.23
		}, {
			"adIncome": 3.38,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-21",
			"newUser": 1012,
			"roi": 0.48,
			"unitPrice": 7.06
		}, {
			"adIncome": 4.62,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-21",
			"newUser": 18658,
			"roi": 0.43,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.59,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-21",
			"newUser": 8177,
			"roi": 0.35,
			"unitPrice": 16.08
		}, {
			"adIncome": 15.36,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-21",
			"newUser": 18760,
			"roi": 2.89,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.32,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-22",
			"newUser": 22821,
			"roi": 1.01,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-22",
			"newUser": 8878,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 6.60,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-22",
			"newUser": 34231,
			"roi": 0.46,
			"unitPrice": 14.35
		}, {
			"adIncome": 3.15,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-22",
			"newUser": 37216,
			"roi": 0.40,
			"unitPrice": 7.80
		}, {
			"adIncome": 0.09,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-22",
			"newUser": 33212
		}, {
			"adIncome": 2.23,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-22",
			"newUser": 2582,
			"roi": 0.69,
			"unitPrice": 3.23
		}, {
			"adIncome": 4.82,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-22",
			"newUser": 985,
			"roi": 0.68,
			"unitPrice": 7.06
		}, {
			"adIncome": 5.79,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-22",
			"newUser": 20146,
			"roi": 0.54,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.91,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-22",
			"newUser": 7660,
			"roi": 0.37,
			"unitPrice": 16.08
		}, {
			"adIncome": 17.00,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-22",
			"newUser": 15250,
			"roi": 3.20,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.43,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-23",
			"newUser": 37303,
			"roi": 1.04,
			"unitPrice": 3.29
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-23",
			"newUser": 8709,
			"roi": 0.00,
			"unitPrice": 10.29
		}, {
			"adIncome": 6.40,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-23",
			"newUser": 35597,
			"roi": 0.45,
			"unitPrice": 14.35
		}, {
			"adIncome": 3.84,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-23",
			"newUser": 28681,
			"roi": 0.49,
			"unitPrice": 7.80
		}, {
			"adIncome": 0.03,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-23",
			"newUser": 23711
		}, {
			"adIncome": 2.37,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-23",
			"newUser": 9699,
			"roi": 0.73,
			"unitPrice": 3.23
		}, {
			"adIncome": 2.43,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-23",
			"newUser": 13453,
			"roi": 0.34,
			"unitPrice": 7.06
		}, {
			"adIncome": 6.17,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-23",
			"newUser": 21498,
			"roi": 0.58,
			"unitPrice": 10.64
		}, {
			"adIncome": 5.70,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-23",
			"newUser": 7450,
			"roi": 0.35,
			"unitPrice": 16.08
		}, {
			"adIncome": 15.30,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-23",
			"newUser": 15320,
			"roi": 2.88,
			"unitPrice": 5.31
		}, {
			"adIncome": 3.64,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-24",
			"newUser": 16966,
			"roi": 1.33,
			"unitPrice": 2.73
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-24",
			"newUser": 9134,
			"roi": 0.00,
			"unitPrice": 9.39
		}, {
			"adIncome": 5.96,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-24",
			"newUser": 34324,
			"roi": 0.41,
			"unitPrice": 14.59
		}, {
			"adIncome": 3.61,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-24",
			"newUser": 30089,
			"roi": 0.39,
			"unitPrice": 9.32
		}, {
			"adIncome": 0.03,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-24",
			"newUser": 29505
		}, {
			"adIncome": 2.38,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-24",
			"newUser": 6342,
			"roi": 0.82,
			"unitPrice": 2.89
		}, {
			"adIncome": 2.20,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-24",
			"newUser": 65171,
			"roi": 0.73,
			"unitPrice": 3.00
		}, {
			"adIncome": 5.04,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-24",
			"newUser": 17862,
			"roi": 0.35,
			"unitPrice": 14.37
		}, {
			"adIncome": 5.28,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-24",
			"newUser": 6980,
			"roi": 0.31,
			"unitPrice": 17.00
		}, {
			"adIncome": 14.84,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-24",
			"newUser": 15355,
			"roi": 3.18,
			"unitPrice": 4.67
		}, {
			"adIncome": 4.41,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-25",
			"newUser": 1459,
			"roi": 1.62,
			"unitPrice": 2.73
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-25",
			"newUser": 9130,
			"roi": 0.00,
			"unitPrice": 9.39
		}, {
			"adIncome": 5.87,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-25",
			"newUser": 32998,
			"roi": 0.40,
			"unitPrice": 14.59
		}, {
			"adIncome": 3.33,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-25",
			"newUser": 32934,
			"roi": 0.36,
			"unitPrice": 9.32
		}, {
			"adIncome": 0.05,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-25",
			"newUser": 57359
		}, {
			"adIncome": 1.70,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-25",
			"newUser": 4952,
			"roi": 0.59,
			"unitPrice": 2.89
		}, {
			"adIncome": 1.92,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-25",
			"newUser": 144802,
			"roi": 0.64,
			"unitPrice": 3.00
		}, {
			"adIncome": 4.73,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-25",
			"newUser": 17295,
			"roi": 0.33,
			"unitPrice": 14.37
		}, {
			"adIncome": 5.76,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-25",
			"newUser": 7261,
			"roi": 0.34,
			"unitPrice": 17.00
		}, {
			"adIncome": 12.12,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-25",
			"newUser": 18754,
			"roi": 2.60,
			"unitPrice": 4.67
		}, {
			"adIncome": 3.32,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-28",
			"newUser": 23221,
			"roi": 1.22,
			"unitPrice": 2.73
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-28",
			"newUser": 9662,
			"roi": 0.00,
			"unitPrice": 9.39
		}, {
			"adIncome": 5.97,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-28",
			"newUser": 33273,
			"roi": 0.41,
			"unitPrice": 14.59
		}, {
			"adIncome": 3.13,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-28",
			"newUser": 32804,
			"roi": 0.34,
			"unitPrice": 9.32
		}, {
			"adIncome": 3.01,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-28",
			"newUser": 23353
		}, {
			"adIncome": 1.66,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-28",
			"newUser": 2663,
			"roi": 0.57,
			"unitPrice": 2.89
		}, {
			"adIncome": 3.03,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-28",
			"newUser": 10559,
			"roi": 1.01,
			"unitPrice": 3.00
		}, {
			"adIncome": 4.24,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-28",
			"newUser": 16856,
			"roi": 0.30,
			"unitPrice": 14.37
		}, {
			"adIncome": 5.31,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-28",
			"newUser": 6832,
			"roi": 0.31,
			"unitPrice": 17.00
		}, {
			"adIncome": 16.00,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-28",
			"newUser": 14871,
			"roi": 3.43,
			"unitPrice": 4.67
		}, {
			"adIncome": 2.86,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-29",
			"newUser": 21821,
			"roi": 1.05,
			"unitPrice": 2.73
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-29",
			"newUser": 9815,
			"roi": 0.00,
			"unitPrice": 9.39
		}, {
			"adIncome": 6.45,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-29",
			"newUser": 30388,
			"roi": 0.44,
			"unitPrice": 14.59
		}, {
			"adIncome": 3.18,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-29",
			"newUser": 30006,
			"roi": 0.34,
			"unitPrice": 9.32
		}, {
			"adIncome": 0.02,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-29",
			"newUser": 96534
		}, {
			"adIncome": 1.34,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-29",
			"newUser": 23421,
			"roi": 0.46,
			"unitPrice": 2.89
		}, {
			"adIncome": 2.58,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-29",
			"newUser": 8466,
			"roi": 0.86,
			"unitPrice": 3.00
		}, {
			"adIncome": 4.33,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-29",
			"newUser": 15126,
			"roi": 0.30,
			"unitPrice": 14.37
		}, {
			"adIncome": 5.59,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-29",
			"newUser": 7304,
			"roi": 0.33,
			"unitPrice": 17.00
		}, {
			"adIncome": 18.17,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-29",
			"newUser": 12641,
			"roi": 3.89,
			"unitPrice": 4.67
		}, {
			"adIncome": 2.72,
			"appCode": 0,
			"channelName": "QQ_news_yunying1",
			"day": "2018-01-30",
			"newUser": 19241,
			"roi": 1.00,
			"unitPrice": 2.73
		}, {
			"adIncome": 0.00,
			"appCode": 0,
			"channelName": "baidu_news",
			"day": "2018-01-30",
			"newUser": 10287,
			"roi": 0.00,
			"unitPrice": 9.39
		}, {
			"adIncome": 6.57,
			"appCode": 0,
			"channelName": "huawei_news",
			"day": "2018-01-30",
			"newUser": 29581,
			"roi": 0.45,
			"unitPrice": 14.59
		}, {
			"adIncome": 2.98,
			"appCode": 0,
			"channelName": "miliao_news",
			"day": "2018-01-30",
			"newUser": 29531,
			"roi": 0.32,
			"unitPrice": 9.32
		}, {
			"adIncome": 0.02,
			"appCode": 0,
			"channelName": "netease_gw",
			"day": "2018-01-30",
			"newUser": 134961
		}, {
			"adIncome": 1.70,
			"appCode": 0,
			"channelName": "news_jinlifb_2017",
			"day": "2018-01-30",
			"newUser": 9435,
			"roi": 0.59,
			"unitPrice": 2.89
		}, {
			"adIncome": 4.21,
			"appCode": 0,
			"channelName": "news_kp_push",
			"day": "2018-01-30",
			"newUser": 6984,
			"roi": 1.40,
			"unitPrice": 3.00
		}, {
			"adIncome": 5.24,
			"appCode": 0,
			"channelName": "oppo_store2014_news",
			"day": "2018-01-30",
			"newUser": 17891,
			"roi": 0.36,
			"unitPrice": 14.37
		}, {
			"adIncome": 6.16,
			"appCode": 0,
			"channelName": "vivo_store2014_news",
			"day": "2018-01-30",
			"newUser": 6534,
			"roi": 0.36,
			"unitPrice": 17.00
		}, {
			"adIncome": 11.43,
			"appCode": 0,
			"channelName": "appstore",
			"day": "2018-01-30",
			"newUser": 18273,
			"roi": 2.45,
			"unitPrice": 4.67
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/roi/table.do", "post", {
		"status": true,
		"total": "@natural(1000, 10000)",
		"data|0-10": [{
			"adIncome": "@float(1, 6, 2, 2)",
			"appCode": 0,
			"channelName": "@word(6)",
			"day": "@datetime('yyyy-MM-dd')",
			"newUser": "@natural(1000, 10000)",
			"unitPrice": "@float(1, 14, 2, 2)"
		}],
		"msg": "返回成功"
	});
}

/***/ })

});
//# sourceMappingURL=channelRoi.js.map