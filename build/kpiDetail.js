webpackJsonp([0],{

/***/ 2120:
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

var _allTrend = __webpack_require__(2217);

var actionCreators = _interopRequireWildcard(_allTrend);

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

var AllTrend = function (_React$Component) {
	_inherits(AllTrend, _React$Component);

	function AllTrend(props) {
		_classCallCheck(this, AllTrend);

		var _this = _possibleConstructorReturn(this, (AllTrend.__proto__ || Object.getPrototypeOf(AllTrend)).call(this, props));

		_this.state = {
			isQuery: true
		};

		return _this;
	}

	_createClass(AllTrend, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			_nprogress2.default.start();
			this.getCharts1();

			this.getCharts2();

			this.getCharts3();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {

			this.getChartShow1();
			this.getChartShow2();
			this.getChartShow3();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_nprogress2.default.done();

			this.myChart1 = _echarts2.default.init(this.refs.charts1);
			this.myChart2 = _echarts2.default.init(this.refs.charts2);
			this.myChart3 = _echarts2.default.init(this.refs.charts3);

			window.onresize = function () {
				this.myChart1.resize();

				this.myChart2.resize();

				this.myChart3.resize();
			}.bind(this);
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps) {

			if (nextProps.allTrend.excelData1 != this.props.allTrend.excelData1) {
				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.allTrend.columns1);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.allTrend.columns1);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.allTrend.excelData1, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}

			if (nextProps.allTrend.excelData2 != this.props.allTrend.excelData2) {
				var _downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.allTrend.columns2);
				var _helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.allTrend.columns2);
				var _downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.allTrend.excelData2, _helperColumns);

				(0, _channelManagerUtil.downloadExcle)(_downloadDatas, _downloadTitles, this.fileName);
			}

			if (nextProps.allTrend.excelData3 != this.props.allTrend.excelData3) {
				var _downloadTitles2 = (0, _channelManagerUtil.dealDownloadTitle)(this.props.allTrend.columns3);
				var _helperColumns2 = (0, _channelManagerUtil.dealDownloadColumns)(this.props.allTrend.columns3);
				var _downloadDatas2 = (0, _channelManagerUtil.dealDownloadData)(nextProps.allTrend.excelData3, _helperColumns2);

				(0, _channelManagerUtil.downloadExcle)(_downloadDatas2, _downloadTitles2, this.fileName);
			}
		}
	}, {
		key: 'getChartShow1',
		value: function getChartShow1() {

			if (this.props.allTrend.chartsResult1.length != 0) {
				var series = [];
				var names = [];
				this.props.allTrend.chartsResult1.map(function (v, k) {

					series.push({
						"name": v.name,
						"type": "line",
						"stack": v.name,
						"data": v.value
					});

					names.push(v.name);
				});

				var xAxis = this.props.allTrend.chartsResult1[0].key;

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Line)(data);
				this.myChart1.setOption(config);

				this.myChart1.resize();
			} else {
				if (this.props.allTrend.chartsResultNoData1) {
					this.refs.charts1.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow2',
		value: function getChartShow2() {

			if (this.props.allTrend.chartsResult2.length != 0) {
				var series = [];
				var names = [];
				this.props.allTrend.chartsResult2.map(function (v, k) {

					series.push({
						"name": v.name,
						"type": "line",
						"stack": v.name,
						"data": v.value
					});

					names.push(v.name);
				});

				var xAxis = this.props.allTrend.chartsResult2[0].key;

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Line)(data);
				this.myChart2.setOption(config);

				this.myChart2.resize();
			} else {
				if (this.props.allTrend.chartsResultNoData2) {
					this.refs.charts2.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow3',
		value: function getChartShow3() {

			if (this.props.allTrend.chartsResult3.length != 0) {
				var series = [];
				var names = [];
				this.props.allTrend.chartsResult3.map(function (v, k) {

					series.push({
						"name": v.name,
						"type": "line",
						"stack": v.name,
						"data": v.value
					});

					names.push(v.name);
				});

				var xAxis = this.props.allTrend.chartsResult3[0].key;

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Line)(data);
				this.myChart3.setOption(config);

				this.myChart3.resize();
			} else {
				if (this.props.allTrend.chartsResultNoData3) {
					this.refs.charts3.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getCharts1',
		value: function getCharts1() {
			var data1 = {
				appCode: this.props.allTrend.appCode,
				channelCategory: this.props.allTrend.channelCategory,
				top: this.props.allTrend.top,
				startDate: this.props.allTrend.startDate,
				endDate: this.props.allTrend.endDate,
				tab: 1
			};

			this.props.getCharts1(data1);
		}
	}, {
		key: 'getCharts2',
		value: function getCharts2() {
			var data2 = {
				appCode: this.props.allTrend.appCode,
				channelCategory: this.props.allTrend.channelCategory,
				top: this.props.allTrend.top,
				startDate: this.props.allTrend.startDate,
				endDate: this.props.allTrend.endDate,
				tab: 2
			};

			this.props.getCharts2(data2);
		}
	}, {
		key: 'getCharts3',
		value: function getCharts3() {
			var data3 = {
				appCode: this.props.allTrend.appCode,
				channelCategory: this.props.allTrend.channelCategory,
				top: this.props.allTrend.top,
				startDate: this.props.allTrend.startDate,
				endDate: this.props.allTrend.endDate,
				tab: 3
			};

			this.props.getCharts3(data3);
		}
	}, {
		key: 'changeOs',
		value: function changeOs(e) {

			this.props.changeOs(e);
		}
	}, {
		key: 'changeChannelCategory',
		value: function changeChannelCategory(e) {
			this.props.changeChannelCategory(e);
		}
	}, {
		key: 'changeDate',
		value: function changeDate(value, dateString) {

			if (dateString[1] > this.props.allTrend.maxDate) {
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

			if (this.state.isQuery) {

				this.setState({
					isQuery: false
				}, function () {
					this.getCharts1();

					this.getCharts2();

					this.getCharts3();

					setTimeout(function () {
						this.setState({
							isQuery: true
						});
					}.bind(this), 3000);
				}.bind(this));
			}
		}
	}, {
		key: 'downloadExcel',
		value: function downloadExcel(e) {

			// var data = {
			// 	appCode: this.props.allTrend.appCode,
			// 	channelCategory: this.props.allTrend.channelCategory,
			// 	top: this.props.allTrend.top,
			// 	startDate: this.props.allTrend.startDate,
			// 	endDate: this.props.allTrend.endDate
			// }

			// if (e.currentTarget.dataset == "1") {
			// 	data.tab = 1;
			// } else if (e.currentTarget.dataset == "2") {
			// 	data.tab = 2;
			// } else {
			// 	data.tab = 3;
			// }

			// this.props.downloadExcel();
		}
	}, {
		key: 'getDownloadName',
		value: function getDownloadName(data) {
			var prefix = '整体趋势-';
			var fileName = '新增用户';

			if (data.tab == "1") {
				fileName = '新增用户';
			} else if (data.tab == "2") {
				fileName = '次日留存率';
			} else {
				fileName = '7日留存率';
			}

			return prefix + fileName + '-(' + data.startDate + '至' + data.endDate + ').xlsx';
		}
	}, {
		key: 'downloadNewUserExcel',
		value: function downloadNewUserExcel(e) {

			var data = {
				appCode: this.props.allTrend.appCode,
				channelCategory: this.props.allTrend.channelCategory,
				top: this.props.allTrend.top,
				startDate: this.props.allTrend.startDate,
				endDate: this.props.allTrend.endDate,
				tab: e.currentTarget.dataset.id,
				limit: "",
				offset: 1
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData(data);
		}
	}, {
		key: 'downloadSecondDayExcel',
		value: function downloadSecondDayExcel(e) {
			var data = {
				appCode: this.props.allTrend.appCode,
				channelCategory: this.props.allTrend.channelCategory,
				top: this.props.allTrend.top,
				startDate: this.props.allTrend.startDate,
				endDate: this.props.allTrend.endDate,
				tab: e.currentTarget.dataset.id,
				limit: "",
				offset: 1
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData(data);
		}
	}, {
		key: 'downloadSevenExcel',
		value: function downloadSevenExcel(e) {
			var data = {
				appCode: this.props.allTrend.appCode,
				channelCategory: this.props.allTrend.channelCategory,
				top: this.props.allTrend.top,
				startDate: this.props.allTrend.startDate,
				endDate: this.props.allTrend.endDate,
				tab: e.currentTarget.dataset.id,
				limit: "",
				offset: 1
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData(data);
		}
	}, {
		key: 'render',
		value: function render() {
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
									value: this.props.allTrend.appCode,
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
									value: this.props.allTrend.channelCategory,
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
							{ label: '' },
							_react2.default.createElement(RangePicker, {
								value: [(0, _moment2.default)(this.props.allTrend.startDate, dateFormat), (0, _moment2.default)(this.props.allTrend.endDate, dateFormat)],
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
						{ title: '\u65B0\u589E\u7528\u6237', extra: _react2.default.createElement(
								_antd.Button,
								{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadNewUserExcel.bind(this) },
								'\u4E0B\u8F7D'
							), style: { minHeight: "380px" } },
						_react2.default.createElement(
							_antd.Spin,
							{ spinning: this.props.allTrend.chartsLoading1 },
							_react2.default.createElement(
								'div',
								{ ref: 'charts1', style: { width: "100%", minHeight: "300px" } },
								'\u65B0\u589E\u7528\u6237'
							)
						)
					)
				),
				_react2.default.createElement(
					Content,
					{ className: 'channel_charts' },
					_react2.default.createElement(
						_antd.Card,
						{ title: '\u6B21\u65E5\u7559\u5B58\u7387', extra: _react2.default.createElement(
								_antd.Button,
								{ type: 'primary', 'data-id': '2', onClick: this.downloadSecondDayExcel.bind(this), icon: 'download' },
								'\u4E0B\u8F7D'
							), style: { minHeight: "380px" } },
						_react2.default.createElement(
							_antd.Spin,
							{ spinning: this.props.allTrend.chartsLoading2 },
							_react2.default.createElement(
								'div',
								{ ref: 'charts2', style: { width: "100%", minHeight: "300px" } },
								'\u6B21\u65E5\u7559\u5B58\u7387'
							)
						)
					)
				),
				_react2.default.createElement(
					Content,
					{ className: 'channel_charts' },
					_react2.default.createElement(
						_antd.Card,
						{ title: '7\u65E5\u7559\u5B58\u7387', extra: _react2.default.createElement(
								_antd.Button,
								{ type: 'primary', 'data-id': '3', onClick: this.downloadSevenExcel.bind(this), icon: 'download' },
								'\u4E0B\u8F7D'
							), style: { minHeight: "380px" } },
						_react2.default.createElement(
							_antd.Spin,
							{ spinning: this.props.allTrend.chartsLoading3 },
							_react2.default.createElement(
								'div',
								{ ref: 'charts3', style: { width: "100%", minHeight: "300px" } },
								'7\u65E5\u7559\u5B58\u7387'
							)
						)
					)
				)
			);
		}
	}]);

	return AllTrend;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	return {
		allTrend: state.Reducer.allTrend
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	//全量
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AllTrend);

/***/ }),

/***/ 2131:
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

var _antd = __webpack_require__(110);

var _channelManagerUtil = __webpack_require__(2151);

var _utils = __webpack_require__(2150);

var _downloadFile = __webpack_require__(2209);

var downloadFile = _interopRequireWildcard(_downloadFile);

var _echarts = __webpack_require__(428);

var _echarts2 = _interopRequireDefault(_echarts);

var _chartConfigs = __webpack_require__(2152);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _nprogress = __webpack_require__(2148);

var _nprogress2 = _interopRequireDefault(_nprogress);

__webpack_require__(2213);

var _kpi = __webpack_require__(2222);

var actionCreators = _interopRequireWildcard(_kpi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import zhCN from 'antd/lib/locale-provider/zh_CN';

//用户权限列表


//下载相关的数据


var ButtonGroup = _antd.Button.Group;

var TabPane = _antd.Tabs.TabPane;

// //Echarts 组件
var SubMenu = _antd.Menu.SubMenu;
var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Sider = _antd.Layout.Sider;


var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;

var thunk = __webpack_require__(281).default;

var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;


var dateFormat = 'YYYY-MM-DD';
var monthFormat = 'YYYY-MM';

//todo import 别名

var kpiDetail = function (_React$Component) {
  _inherits(kpiDetail, _React$Component);

  function kpiDetail(props) {
    _classCallCheck(this, kpiDetail);

    return _possibleConstructorReturn(this, (kpiDetail.__proto__ || Object.getPrototypeOf(kpiDetail)).call(this, props));
  }

  _createClass(kpiDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _nprogress2.default.start();
      // this.props.getTable(this.props.profileList.Param);
      //获取渠道组
      this.getChannelGroup();

      //获取getCharts
      this.getCharts();

      //获取表格数据
      this.getTables();
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
      if (nextProps.kpi.Result.excelData != this.props.kpi.Result.excelData) {

        var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.kpi.Param.columns);
        var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.kpi.Param.columns);
        var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.kpi.Result.excelData, helperColumns);

        (0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
      }
    }
  }, {
    key: 'getTables',
    value: function getTables() {
      var data = {
        channelGroup: this.props.kpi.Param.channelGroup,
        dateType: this.props.kpi.Param.dateType,
        startDate: this.props.kpi.Param.startDate,
        endDate: this.props.kpi.Param.endDate,
        offset: this.props.kpi.Param.offset,
        limit: this.props.kpi.Param.limit
      };

      this.props.getTables(data);
    }

    /**
     * 显示哪个tab数据
     * @method getChartShow
     */

  }, {
    key: 'getChartShow',
    value: function getChartShow() {

      var tabId = this.props.kpi.Param.tab;

      var name = "全部";
      if (this.props.kpi.Param.channelGroupResultName == "") {
        name = "全部";
      } else {
        name = this.props.kpi.Param.channelGroupResultName;
      }

      // if (tabId == '1') {
      //   name = '新增用户';
      // } else if (tabId == '2') {
      //   name = '付费新增';
      // } else if (tabId == '3') {
      //   name = '免新新增';
      // } else if (tabId == '4') {
      //   name = '用户质量';
      // } else if (tabId == '5') {
      //   name = '次日留存率';
      // } else if (tabId == '6') {
      //   name = '7日留存率';
      // }


      if (this.props.kpi.Result.chartsResult[0] != undefined && this.props.kpi.Result.chartsResult[0].key.length != 0) {
        var series = [];
        series.push({
          "name": name,
          "type": "line",
          "stack": name,
          "data": this.props.kpi.Result.chartsResult[0].value
        });

        var data = {
          "names": [name],
          "xAxis": this.props.kpi.Result.chartsResult[0].key,
          "series": series

          //todo initToinit  EchartUpdate

        };var myChart = _echarts2.default.init(this.refs['charts' + tabId]);
        var config = (0, _chartConfigs.Line)(data);
        myChart.setOption(config);
        window.onresize = myChart.resize;
      } else {

        if (this.props.kpi.Param.chartsNoData) {
          this.refs['charts' + tabId].innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
        }
      }
    }
  }, {
    key: 'getCharts',
    value: function getCharts() {
      var data = {
        channelGroup: this.props.kpi.Param.channelGroup,
        dateType: this.props.kpi.Param.dateType,
        tab: this.props.kpi.Param.tab,
        startDate: this.props.kpi.Param.startDate,
        endDate: this.props.kpi.Param.endDate
      };

      this.props.getCharts(data);
    }

    //获取渠道组

  }, {
    key: 'getChannelGroup',
    value: function getChannelGroup() {
      var data = {
        cppCode: "",
        channelCategory: ""
      };

      this.props.getChannelGroup(data);
    }
  }, {
    key: 'handleChangeGroup',
    value: function handleChangeGroup(value) {
      this.props.changeGroup(value);
    }
  }, {
    key: 'changeTab',
    value: function changeTab(id) {
      //todo 缓存
      var data = {
        channelGroup: this.props.kpi.Param.channelGroup,
        dateType: this.props.kpi.Param.dateType,
        tab: parseInt(id, 10),
        startDate: this.props.kpi.Param.startDate,
        endDate: this.props.kpi.Param.endDate
      };

      this.props.getCharts(data);
    }
  }, {
    key: 'clickDateType',
    value: function clickDateType(e) {

      var data = {
        dateType: parseInt(e.currentTarget.dataset.id, 10)
      };

      this.updateDateType(data);
    }
  }, {
    key: 'updateDateType',
    value: function updateDateType(data) {
      this.props.updateDateType(data);
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

      if (dateString[1] > this.props.kpi.Param.maxDate) {

        _antd.notification['error']({
          message: '日期错误',
          description: '超出日期选择范围'
        });
      } else {
        this.props.setDate(dateString);
      }
    }
  }, {
    key: 'weekMonthList',
    value: function weekMonthList() {
      //todo优化
      var button = null;
      if (this.props.kpi.Param.dateType == 1) {
        button = _react2.default.createElement(
          ButtonGroup,
          null,
          _react2.default.createElement(
            _antd.Button,
            { type: 'primary' },
            '\u5468'
          ),
          _react2.default.createElement(
            _antd.Button,
            { 'data-id': 2, onClick: this.clickDateType.bind(this) },
            '\u6708'
          ),
          _react2.default.createElement(
            _antd.Button,
            { 'data-id': 3, onClick: this.clickDateType.bind(this) },
            '\u5B63\u5EA6'
          )
        );
      } else if (this.props.kpi.Param.dateType == 2) {
        button = _react2.default.createElement(
          ButtonGroup,
          null,
          _react2.default.createElement(
            _antd.Button,
            { 'data-id': 1, onClick: this.clickDateType.bind(this) },
            '\u5468'
          ),
          _react2.default.createElement(
            _antd.Button,
            { type: 'primary' },
            '\u6708'
          ),
          _react2.default.createElement(
            _antd.Button,
            { 'data-id': 3, onClick: this.clickDateType.bind(this) },
            '\u5B63\u5EA6'
          )
        );
      } else {
        button = _react2.default.createElement(
          ButtonGroup,
          null,
          _react2.default.createElement(
            _antd.Button,
            { 'data-id': 1, onClick: this.clickDateType.bind(this) },
            '\u5468'
          ),
          _react2.default.createElement(
            _antd.Button,
            { 'data-id': 2, onClick: this.clickDateType.bind(this) },
            '\u6708'
          ),
          _react2.default.createElement(
            _antd.Button,
            { type: 'primary' },
            '\u5B63\u5EA6'
          )
        );
      }

      return button;
    }
  }, {
    key: 'clickQuery',
    value: function clickQuery() {
      //todo query
      var data = {
        channelGroup: this.props.kpi.Param.channelGroup,
        dateType: this.props.kpi.Param.dateType,
        tab: this.props.kpi.Param.tab,
        startDate: this.props.kpi.Param.startDate,
        endDate: this.props.kpi.Param.endDate
      };

      this.props.getCharts(data);

      //表格数据
      var data = {
        channelGroup: this.props.kpi.Param.channelGroup,
        dateType: this.props.kpi.Param.dateType,
        startDate: this.props.kpi.Param.startDate,
        endDate: this.props.kpi.Param.endDate,
        offset: 1,
        limit: this.props.kpi.Param.limit
      };

      this.props.getTables(data);
    }
  }, {
    key: 'getDownloadName',
    value: function getDownloadName(data) {
      var prefix = 'KPI报表-';
      var fileName = '全部';

      var date = "周";

      if (data.channelName) {
        fileName = data.channelName;
      } else if (data.channelGroup) {
        fileName = data.channelGroup;
      } else if (data.channelCategory) {
        fileName = data.channelCategory == '1' ? '线上' : '线下';
      } else if (data.appCode) {
        fileName = data.appCode == '24' ? 'Android' : 'iOS';
      }

      return prefix + fileName + '-(' + data.startDate + '至' + data.endDate + ').xlsx';
    }
  }, {
    key: 'clickDownload',
    value: function clickDownload() {
      // var xlsxName = downloadFile.getXlsxName();
      // var responseData = "";
      // var downloadData = downloadFile.formatData(responseData);
      // downloadFile.toXlsx(downloadData, xlsxName, "sheet1");


      var data = {
        appCode: this.props.kpi.Param.appCode,
        channelName: this.props.kpi.Param.channelName,
        endDate: this.props.kpi.Param.endDate,
        startDate: this.props.kpi.Param.startDate,
        offset: 1,
        limit: -1
      };

      this.fileName = this.getDownloadName(data);

      // var downExcelData = {
      //   appCode: this.props.profileList.Param.appCode,
      //   channelGroup: this.props.profileList.Param.channelGroup,
      //   channelName: this.props.profileList.Param.channelName,
      //   startDate: this.props.profileList.Param.startDate,
      //   endDate: this.props.profileList.Param.endDate,
      //   channelCategory: this.props.profileList.Param.channelCategory,
      //   offset: this.props.profileList.Pagination.current,
      //   limit: this.props.profileList.Pagination.pageSize,
      //   type: this.props.profileList.Param.type
      // }

      this.props.getDownLoadData(data);
    }
  }, {
    key: 'handleTableChange',
    value: function handleTableChange(pagination, filters, sorter) {

      var data = {
        channelGroup: this.props.kpi.Param.channelGroup,
        dateType: this.props.kpi.Param.dateType,
        startDate: this.props.kpi.Param.startDate,
        endDate: this.props.kpi.Param.endDate,
        offset: pagination.current,
        limit: pagination.pageSize
      };

      this.props.getTables(data);
    }
  }, {
    key: 'getDataSource',
    value: function getDataSource() {
      var arr = [];

      arr = (0, _utils.addKey)(this.props.kpi.Result.tableResult, 'TableKpi' + new Date().getTime());
      return arr;
    }
  }, {
    key: 'render',
    value: function render() {

      var searchData = [{
        value: 1,
        text: "qihong1"
      }, {
        value: 2,
        text: "qihong2"
      }];

      var fetching = false;

      var options = searchData.map(function (d) {
        return _react2.default.createElement(
          Option,
          { key: d.text },
          d.text
        );
      });

      var pagination = {
        current: this.props.kpi.Param.offset,
        pageSize: this.props.kpi.Param.limit,
        total: this.props.kpi.Result.total,
        defaultPageSize: this.props.kpi.Param.limit,
        showSizeChanger: true
      };

      var dataSource = this.getDataSource();

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
              { label: '\u6E20\u9053\u7EC4' },
              _react2.default.createElement(
                _antd.Select,
                {
                  showSearch: true,
                  placeholder: '\u641C\u7D22\u6E20\u9053\u7EC4',
                  dropdownMatchSelectWidth: true,
                  value: this.props.kpi.Param.channelGroup,
                  className: 'channelGroup',
                  optionFilterProp: 'children',
                  onChange: this.handleChangeGroup.bind(this) },
                _react2.default.createElement(
                  Option,
                  { value: '' },
                  '\u5168\u90E8'
                ),
                (0, _utils.renderGroupList)(this.props.kpi.Param.groupList)
              )
            ),
            _react2.default.createElement(
              FormItem,
              { label: '' },
              this.weekMonthList()
            ),
            _react2.default.createElement(
              FormItem,
              { label: '' },
              _react2.default.createElement(RangePicker, {
                value: [(0, _moment2.default)(this.props.kpi.Param.startDate, dateFormat), (0, _moment2.default)(this.props.kpi.Param.endDate, dateFormat)],
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
            _antd.Tabs,
            { onChange: this.changeTab.bind(this), type: 'card', activeKey: this.props.kpi.Param.tab + '' },
            _react2.default.createElement(
              TabPane,
              { tab: '\u65B0\u589E\u7528\u6237', key: '1' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.kpi.Param.chartLoading },
                _react2.default.createElement('div', { id: 'chart1', ref: 'charts1', style: { width: "100%", minHeight: "300px" } })
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u4ED8\u8D39\u65B0\u589E', key: '2' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.kpi.Param.chartLoading },
                _react2.default.createElement('div', { id: 'chart2', ref: 'charts2', style: { width: "100%", minHeight: "300px" } })
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u514D\u8D39\u65B0\u589E', key: '3' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.kpi.Param.chartLoading },
                _react2.default.createElement('div', { id: 'chart2', ref: 'charts3', style: { width: "100%", minHeight: "300px" } })
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u7528\u6237\u8D28\u91CF', key: '4' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.kpi.Param.chartLoading },
                _react2.default.createElement('div', { id: 'chart2', ref: 'charts4', style: { width: "100%", minHeight: "300px" } })
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u6B21\u65E5\u7559\u5B58\u7387', key: '5' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.kpi.Param.chartLoading },
                _react2.default.createElement('div', { id: 'chart2', ref: 'charts5', style: { width: "100%", minHeight: "300px" } })
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '7\u65E5\u7559\u5B58\u7387', key: '6' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.kpi.Param.chartLoading },
                _react2.default.createElement('div', { id: 'chart2', ref: 'charts6', style: { width: "100%", minHeight: "300px" } })
              )
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
              { type: 'primary', style: { float: "right" }, icon: 'download', onClick: this.clickDownload.bind(this) },
              '\u4E0B\u8F7D'
            )
          ),
          _react2.default.createElement(_antd.Table, {
            loading: this.props.kpi.Param.tableLoading,
            locale: { "emptyText": "暂无数据" },
            columns: (0, _utils.dealConfigColumns)(this.props.kpi.Param.columns),
            dataSource: dataSource,
            pagination: pagination,
            onChange: this.handleTableChange.bind(this)
          })
        )
      );
    }
  }]);

  return kpiDetail;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
  return {
    kpi: state.Reducer.Kpi
  };
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

  //全量
  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(kpiDetail);

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

/***/ 2209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// parse data，改变数据格式
function sheetFromArrayOfArrays(data, opts) {
  var ws = {};
  var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      var cell = { v: data[R][C] };
      if (cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
      if (typeof cell.v === 'number') cell.t = 'n';else if (typeof cell.v === 'boolean') cell.t = 'b';else cell.t = 's';
      ws[cell_ref] = cell;
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

/*
 * ws的构造函数
 */

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

/*
 * 校验sheetName的重复性
 */
var allSheetNames = [];
var checkSheetName = function checkSheetName(name) {
  if (!name) name = "new";
  if (allSheetNames.indexOf(name) == -1) {
    allSheetNames.push(name);
    return name;
  } else {
    return checkSheetName(name += "_new");
  }
};

/*
 * 数据转换
 */
function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xFF;
  }return buf;
}

// 导出数据格式为数组元素为数据;eg:[[], [], []];
// wb.SheetNames 为 Array，存放sheet数据; eg:["sheet1", "sheet2"];
// wb.Sheets 为JSON，存放以sheetName和data为键值对的数据; eg:
/*
 * {
 *      "sheet1": xxx,// xxx is sheetFromArrayOfArrays(data)
 *      "sheet2": xxx
 * }
 */

function toXlsx(data, wb_name, ws_name) {
  if (arguments.length < 3) {
    //console.error("参数错误");)
    return false;
  }
  var wb = new Workbook();
  var ws = sheetFromArrayOfArrays(data); // Excel data
  var ws_name = checkSheetName(ws_name);
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;
  var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
  saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), wb_name);
}

/*
 * ajax数据到下载数据的转换
 */
function formatData(data) {
  var result = data || [[1, 2, 3], [true, false, "sheetjs"], ["foo", "bar", "0.3"], ["baz", null, "qux"]];
  // data-->result = [[1,2,3],[true, false, "sheetjs"],["foo","bar","0.3"], ["baz", null, "qux"]];
  return result;
}

/*
 * 根据页面元素及规则获取下载文件的名称
 */
function getXlsxName() {
  var result = "test.xlsx";
  return result;
}

exports.toXlsx = toXlsx;
exports.formatData = formatData;
exports.getXlsxName = getXlsxName;

/***/ }),

/***/ 2212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2117)();
// imports


// module
exports.push([module.i, ".ant-tabs-tab-prev {\n\tdisplay: none;\n}\n.ant-tabs-tab-next {\n\tdisplay: none;\n}", ""]);

// exports


/***/ }),

/***/ 2213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2212);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2118)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./profile.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./profile.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData = exports.setDate = exports.changeChannelCategory = exports.changeOs = exports.getCharts3 = exports.getCharts2 = exports.getCharts1 = undefined;

__webpack_require__(2147);

__webpack_require__(2241);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _antd = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//todo mock数据
var getCharts1 = function getCharts1(data) {
	return function (dispatch) {

		dispatch({
			type: "ALLTREND_CHARTSLOADING1",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/trend/chart.do',
			method: 'post',
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "ALLTREND_CHARTSLOADING1",
				payload: false
			});

			if (msg.status) {

				if (msg.data.length != 0) {
					dispatch({
						type: "ALLTREND_CHARTSRESULTNODATA1",
						payload: false
					});
				} else {
					dispatch({
						type: "ALLTREND_CHARTSRESULTNODATA1",
						payload: true
					});
				}

				dispatch({
					type: "ALLTREND_CHARTSRESULT1",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '用户新增数据',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
}; //todo mock数据


var getCharts2 = function getCharts2(data) {
	return function (dispatch) {

		dispatch({
			type: "ALLTREND_CHARTSLOADING2",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/trend/chart.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "ALLTREND_CHARTSLOADING2",
				payload: false
			});

			if (msg.status) {

				if (msg.data.length != 0) {
					dispatch({
						type: "ALLTREND_CHARTSRESULTNODATA2",
						payload: false
					});
				} else {
					dispatch({
						type: "ALLTREND_CHARTSRESULTNODATA2",
						payload: true
					});
				}

				dispatch({
					type: "ALLTREND_CHARTSRESULT2",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '用户新增数据',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var getCharts3 = function getCharts3(data) {
	return function (dispatch) {

		dispatch({
			type: "ALLTREND_CHARTSLOADING3",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/trend/chart.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "ALLTREND_CHARTSLOADING3",
				payload: false
			});

			if (msg.status) {

				if (msg.data.length != 0) {
					dispatch({
						type: "ALLTREND_CHARTSRESULTNODATA3",
						payload: false
					});
				} else {
					dispatch({
						type: "ALLTREND_CHARTSRESULTNODATA3",
						payload: true
					});
				}

				dispatch({
					type: "ALLTREND_CHARTSRESULT3",
					payload: msg.data
				});
			} else {
				_antd.notification['error']({
					message: '用户新增数据',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

var changeOs = function changeOs(data) {
	return function (dispatch) {
		dispatch({
			type: "ALLTREND_APPCODE",
			payload: data
		});
	};
};

var changeChannelCategory = function changeChannelCategory(data) {
	return function (dispatch) {
		dispatch({
			type: "ALLTREND_CHANNELCATEGORY",
			payload: data
		});
	};
};

var setDate = function setDate(data) {
	return function (dispatch) {
		dispatch({
			type: "ALLTREND_STARTDATE",
			payload: data[0]
		});

		dispatch({
			type: "ALLTREND_ENTDATE",
			payload: data[1]
		});
	};
};

var getDownLoadData = function getDownLoadData(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/trend/table.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			var excelData = function excelData(ex) {

				if (data.tab == '1') {

					dispatch({
						type: "ALLTREND_TAB",
						payload: data.tab
					});

					dispatch({
						type: "ALLTREND_EXCELDATA1",
						payload: ex
					});
				} else if (data.tab == '2') {

					dispatch({
						type: "ALLTREND_TAB",
						payload: data.tab
					});

					dispatch({
						type: "ALLTREND_EXCELDATA2",
						payload: ex
					});
				} else {
					dispatch({
						type: "ALLTREND_TAB",
						payload: data.tab
					});
					dispatch({
						type: "ALLTREND_EXCELDATA3",
						payload: ex
					});
				}
			};

			if (msg.status) {

				excelData(msg.data);
			} else {
				_antd.notification['error']({
					message: '用户新增数据',
					description: msg.msg
				});
			}

			if (msg.code == -1) {
				window.location.href = "/";
			}
		});
	};
};

exports.getCharts1 = getCharts1;
exports.getCharts2 = getCharts2;
exports.getCharts3 = getCharts3;
exports.changeOs = changeOs;
exports.changeChannelCategory = changeChannelCategory;
exports.setDate = setDate;
exports.getDownLoadData = getDownLoadData;

/***/ }),

/***/ 2222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData = exports.getTables = exports.getCharts = exports.setDate = exports.updateDateType = exports.changeGroup = exports.getChannelGroup = undefined;

__webpack_require__(2147);

__webpack_require__(2246);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _antd = __webpack_require__(110);

var _utils = __webpack_require__(2150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//todo mock数据
var getChannelGroup = function getChannelGroup(data) {
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
					type: "KPI_GROUPLIST",
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

//todo mock数据


var setDate = function setDate(arr) {
	return function (dispatch) {
		dispatch({
			type: "KPI_STARTDATE",
			payload: arr[0]
		});

		dispatch({
			type: "KPI_ENTDATE",
			payload: arr[1]
		});
	};
};

var changeGroup = function changeGroup(data) {
	return function (dispatch) {
		;
		dispatch({
			type: "KPI_CHANNELGROUP",
			payload: data
		});
	};
};

var updateDateType = function updateDateType(data) {
	return function (dispatch) {
		dispatch({
			type: "KPI_DATETYPE",
			payload: data.dateType
		});
	};
};

var getCharts = function getCharts(data) {

	return function (dispatch) {

		dispatch({
			type: "KPI_CHART_LOADING",
			payload: true
		});

		//参数更新
		dispatch({
			type: "KPI_CHANNELGROUP",
			payload: data.channelGroup
		});

		//getCharts

		dispatch({
			type: "KPI_DATETYPE",
			payload: data.dateType
		});

		dispatch({
			type: "KPI_TAB",
			payload: data.tab
		});

		dispatch({
			type: "KPI_STARTDATE",
			payload: data.startDate
		});

		dispatch({
			type: "KPI_ENTDATE",
			payload: data.endDate
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/kpi/chart.do',
			// url: '../../mock/userList/systemUser.json',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "KPI_CHART_LOADING",
				payload: false
			});

			if (msg.status) {

				if (msg.data[0] != undefined && msg.data[0].key.length != 0) {
					dispatch({
						type: "KPI_CHARTS_NODATA",
						payload: false
					});
				} else {
					dispatch({
						type: "KPI_CHARTS_NODATA",
						payload: true
					});
				}

				dispatch({
					type: "KPI_CHARTSRESULT",
					payload: msg.data
				});

				dispatch({
					type: "KPI_CHARTS_CHANNELGROUPRESULTNAME",
					payload: data.channelGroup
				});
			} else {

				_antd.notification['error']({
					message: '获取图表数据失败',
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
			type: "KPI_TABLE_LOADING",
			payload: true
		});

		dispatch({
			type: "KPI_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "KPI_DATETYPE",
			payload: data.dateType
		});

		dispatch({
			type: "KPI_STARTDATE",
			payload: data.startDate
		});

		dispatch({
			type: "KPI_ENDDATE",
			payload: data.endDate
		});

		dispatch({
			type: "KPI_OFFSET",
			payload: data.offset
		});

		dispatch({
			type: "KPI_LIMIT",
			payload: data.limit
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/kpi/list.do',
			// url: '../../mock/userList/systemUser.json',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			dispatch({
				type: "KPI_TABLE_LOADING",
				payload: false
			});

			if (msg.status) {

				var arr = [];
				msg.data.map(function (v, k) {
					// v.newUser = format2quartile(v.newUser);
					// v.feeUser = format2quartile(v.feeUser);
					// v.freeUser = format2quartile(v.freeUser);
					arr.push(v);
					// v.newUser
				});

				dispatch({
					type: "KPI_TABLERESULT",
					payload: arr
				});

				dispatch({
					type: "KPI_TABLETOTAL",
					payload: msg.total
				});
			}
		});
	};
};

var getDownLoadData = function getDownLoadData(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/kpi/list.do',
			// url: '../../mock/userList/systemUser.json',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {
				dispatch({
					type: "KPI_EXCELDATA",
					payload: msg.data
				});
			}
		});
	};
};

exports.getChannelGroup = getChannelGroup;
exports.changeGroup = changeGroup;
exports.updateDateType = updateDateType;
exports.setDate = setDate;
exports.getCharts = getCharts;
exports.getTables = getTables;
exports.getDownLoadData = getDownLoadData;

/***/ }),

/***/ 2241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	_mockjs2.default.mock("/data/trend/chart.do", "post", {
		"total": "@natural(1000, 10000)",
		"status": true,
		"data|1-10": [{
			"name": "@word(6)",
			"value|10": ["@natural(1000, 10000)"],
			"key|10": ["@datetime('yyyy-MM-dd')"]
		}],
		"msg": "返回成功"
	});

	//只用于Excel下载
	_mockjs2.default.mock("/data/trend/table.do", "post", {
		"status": true,
		"data|0-10": [{
			"appCode": 24,
			"channelGroup": "@word(6)",
			"day": "@datetime('yyyy-MM-dd')",
			"dayLeftRate": "@float(0, 0, 4, 4)",
			"dayLeftUser": "@natural(1000, 10000)",
			"newUser": "@natural(1000, 10000)",
			"sevenLeftRate": "@float(0, 0, 4, 4)",
			"sevenLeftUser": "@natural(1000, 10000)"
		}],
		"msg": "返回成功"
	});
}

/***/ }),

/***/ 2246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	/*
 channelGroup:
 dateType:1
 tab:1
 startDate:2017-12-04
 endDate:2018-02-01
 	*/
	_mockjs2.default.mock("/data/kpi/chart.do", "post", {
		"data": [{
			"key|10": ["@datetime('yyyy-MM-dd')"],
			"value|10": ["@natural(1000, 10000)"]
		}],
		"msg": "参数不对",
		"status": true
	});

	/*
 channelGroup:
 dateType:1
 startDate:2017-12-04
 endDate:2018-02-01
 offset:1
 limit:10
 */
	_mockjs2.default.mock("/data/kpi/list.do", "post", {
		"total": "@natural(1000, 10000)",
		"status": true,
		"data|0-10": [{
			"appCode": 0,
			"day": "@datetime('yyyy-MM-dd')",
			"dayLeftRate": "@float(0, 0, 4, 4)",
			"dayLeftUser": "@natural(1000, 10000)",
			"feeUser": "@natural(1000, 10000)",
			"freeUser": "@natural(1000, 10000)",
			"newUser": "@natural(1000, 10000)",
			"newUserQuality": "@natural(1000, 10000)",
			"newUserVer17": "@natural(1000, 10000)",
			"qualityPer": "@float(0, 0, 4, 4)",
			"sevenLeftRate": "@float(0, 0, 4, 4)"
		}],
		"msg": "返回成功"
	});
}

/***/ })

});
//# sourceMappingURL=kpiDetail.js.map