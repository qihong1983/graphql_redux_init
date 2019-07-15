webpackJsonp([11],{

/***/ 2130:
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

var _flowDistribution = __webpack_require__(2221);

var actionCreators = _interopRequireWildcard(_flowDistribution);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//asdfasd

var ButtonGroup = _antd.Button.Group;
var TabPane = _antd.Tabs.TabPane;

// //Echarts 组件


//引入chart
__webpack_require__(853);
__webpack_require__(2253);

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

var flowDistribution = function (_React$Component) {
	_inherits(flowDistribution, _React$Component);

	function flowDistribution(props) {
		_classCallCheck(this, flowDistribution);

		return _possibleConstructorReturn(this, (flowDistribution.__proto__ || Object.getPrototypeOf(flowDistribution)).call(this, props));
	}

	_createClass(flowDistribution, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			_nprogress2.default.start();
			this.globalGet();
		}
	}, {
		key: 'globalGet',
		value: function globalGet() {
			var groupListParam = {
				appCode: this.props.flowDistribution.appCode,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelCategory: this.props.flowDistribution.channelCategory
			};

			this.getChannelGroup(groupListParam);

			var hoverParam = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate
			};

			this.getHour(hoverParam);

			var newModalData = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate
			};
			this.newModal(newModalData);

			var activeModalData = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate
			};

			this.activeModal(newModalData);

			var netNewUserData = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate
			};

			this.netNewUser(netNewUserData);

			var areaParam = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate
			};

			this.getArea(areaParam);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.getChartShow1();
			this.getChartShow2();

			this.getChartShow3();

			this.getChartShow4();

			this.getChartShow5();

			this.getChartShow6();

			this.getChartShow7();

			this.getChartShow8();

			// newUserModel
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_nprogress2.default.done();

			this.myChart1 = _echarts2.default.init(this.refs.charts1);
			this.myChart2 = _echarts2.default.init(this.refs.charts2);
			this.myChart3 = _echarts2.default.init(this.refs.charts3);
			this.myChart4 = _echarts2.default.init(this.refs.charts4);
			this.myChart5 = _echarts2.default.init(this.refs.charts5);
			this.myChart6 = _echarts2.default.init(this.refs.charts6);
			this.myChart7 = _echarts2.default.init(this.refs.charts7);
			this.myChart8 = _echarts2.default.init(this.refs.charts8);

			window.onresize = function () {
				this.myChart1.resize();
				this.myChart2.resize();
				this.myChart3.resize();
				this.myChart4.resize();
				this.myChart5.resize();
				this.myChart6.resize();
				this.myChart7.resize();
				this.myChart8.resize();
			}.bind(this);
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate(nextProps) {

			this.downExcel1(nextProps);

			this.downExcel2(nextProps);

			this.downExcel3(nextProps);

			this.downExcel4(nextProps);
			this.downExcel5(nextProps);
			this.downExcel6(nextProps);
			this.downExcel7(nextProps);
			this.downExcel8(nextProps);

			// if (nextProps.profileList.Result.excelData != this.props.profileList.Result.excelData) {
			// 	let downloadTitles = dealDownloadTitle(this.props.profileList.TableColumns.tableColumns);
			// 	let helperColumns = dealDownloadColumns(this.props.profileList.TableColumns.tableColumns);
			// 	let downloadDatas = dealDownloadData(nextProps.profileList.Result.excelData, helperColumns);

			// 	downloadExcle(downloadDatas, downloadTitles, this.fileName);
			// }
		}
	}, {
		key: 'downExcel1',
		value: function downExcel1(nextProps) {
			if (nextProps.flowDistribution.excel1 != this.props.flowDistribution.excel1) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead1);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead1);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel1, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel2',
		value: function downExcel2(nextProps) {
			if (nextProps.flowDistribution.excel2 != this.props.flowDistribution.excel2) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead2);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead2);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel2, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel3',
		value: function downExcel3(nextProps) {
			if (nextProps.flowDistribution.excel3 != this.props.flowDistribution.excel3) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead3);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead3);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel3, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel4',
		value: function downExcel4(nextProps) {
			if (nextProps.flowDistribution.excel4 != this.props.flowDistribution.excel4) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead4);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead4);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel4, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel5',
		value: function downExcel5(nextProps) {
			if (nextProps.flowDistribution.excel5 != this.props.flowDistribution.excel5) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead5);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead5);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel5, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel6',
		value: function downExcel6(nextProps) {
			if (nextProps.flowDistribution.excel6 != this.props.flowDistribution.excel6) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead6);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead6);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel6, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel7',
		value: function downExcel7(nextProps) {
			if (nextProps.flowDistribution.excel7 != this.props.flowDistribution.excel7) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead7);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead7);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel7, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'downExcel8',
		value: function downExcel8(nextProps) {
			if (nextProps.flowDistribution.excel8 != this.props.flowDistribution.excel8) {

				var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.flowDistribution.excelHead8);
				var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.flowDistribution.excelHead8);
				var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.flowDistribution.excel8, helperColumns);

				(0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
			}
		}
	}, {
		key: 'getArea',
		value: function getArea(data) {
			this.props.getArea(data);
		}
	}, {
		key: 'netNewUser',
		value: function netNewUser(data) {
			this.props.netNewUser(data);
		}
	}, {
		key: 'newModal',
		value: function newModal(data) {
			this.props.newModal(data);
		}
	}, {
		key: 'activeModal',
		value: function activeModal(data) {
			this.props.activeModal(data);
		}
	}, {
		key: 'getHour',
		value: function getHour(hoverParam) {
			this.props.getHour(hoverParam);
		}
	}, {
		key: 'hourFormat',
		value: function hourFormat(data) {
			var arr = [];

			data.map(function (v, k) {
				if (v < 10) {
					arr.push(v + ":00");
				} else {
					arr.push(v + ":00");
				}
			});

			return arr;
		}
	}, {
		key: 'getChartShow8',
		value: function getChartShow8() {

			if (this.props.flowDistribution.activeUserArea.length != 0) {
				var db = (0, _taffy2.default)(this.props.flowDistribution.activeUserArea);
				var max = db().max("value");

				var obj = {};
				obj.max = max;
				obj.color = ['#c7abfe', '#ddccff', '#fff'];
				obj.areaData = this.props.flowDistribution.activeUserArea;

				var config = (0, _chartConfigs.Map)(obj);

				this.myChart8.setOption(config);

				this.myChart8.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData8) {
					this.refs.charts8.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow7',
		value: function getChartShow7() {

			if (this.props.flowDistribution.newUserArea.length != 0) {
				var db = (0, _taffy2.default)(this.props.flowDistribution.newUserArea);
				var max = db().max("value");

				var obj = {};
				obj.max = max;
				obj.color = ['#82aeff', '#c1f1fe', '#fff'];
				obj.areaData = this.props.flowDistribution.newUserArea;

				var config = (0, _chartConfigs.Map)(obj);
				this.myChart7.setOption(config);
				this.myChart7.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData7) {
					this.refs.charts7.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow6',
		value: function getChartShow6() {
			if (this.props.flowDistribution.activeUserNetType.length != 0) {
				var obj = {};

				obj.name = "活跃用户联网方式";
				obj.list = this.props.flowDistribution.activeUserNetType;

				var config = (0, _chartConfigs.Pie)(obj);
				this.myChart6.setOption(config);
				this.myChart6.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData6) {
					this.refs.charts6.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow5',
		value: function getChartShow5() {
			if (this.props.flowDistribution.newUserNetType.length != 0) {
				var obj = {};

				obj.name = "新增用户联网方式";
				obj.list = this.props.flowDistribution.newUserNetType;

				var config = (0, _chartConfigs.Pie)(obj);
				this.myChart5.setOption(config);
				this.myChart5.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData5) {
					this.refs.charts5.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow4',
		value: function getChartShow4() {

			if (this.props.flowDistribution.activeUserModel.length != 0) {
				var series = [];
				var names = [];
				this.props.flowDistribution.activeUserModel.map(function (v, k) {

					series.push({
						"name": v.name,
						"type": "bar",
						"stack": v.name,
						"data": v.yAxis
					});

					names.push(v.name);
				});

				var xAxisGet = this.getXAxis(this.props.flowDistribution.activeUserModel);

				if (xAxisGet.length == 0) {
					this.refs.charts4.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
					return false;
				}
				var xAxis = xAxisGet;

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Bar)(data);
				this.myChart4.setOption(config);
				this.myChart4.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData4) {
					this.refs.charts4.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow3',
		value: function getChartShow3() {
			if (this.props.flowDistribution.newUserModel.length != 0) {
				var series = [];
				var names = [];
				this.props.flowDistribution.newUserModel.map(function (v, k) {

					series.push({
						"name": v.name,
						"type": "bar",
						"stack": v.name,
						"data": v.yAxis
					});

					names.push(v.name);
				});

				var xAxisGet = this.getXAxis(this.props.flowDistribution.newUserModel);

				if (xAxisGet.length == 0) {
					this.refs.charts3.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
					return false;
				}

				var xAxis = xAxisGet;

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Bar)(data);
				this.myChart3.setOption(config);
				this.myChart3.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData3) {
					this.refs.charts3.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow2',
		value: function getChartShow2() {
			if (this.props.flowDistribution.activeUserStartTime.length != 0) {
				var series = [];
				var names = [];
				this.props.flowDistribution.activeUserStartTime.map(function (v, k) {

					series.push({
						"name": v.name,
						"type": "line",
						"stack": v.name,
						"data": v.yAxis
					});

					names.push(v.name);
				});

				var xAxisGet = this.getXAxis(this.props.flowDistribution.activeUserStartTime);

				if (xAxisGet.length == 0) {
					this.refs.charts2.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
					return false;
				}
				var xAxis = this.hourFormat(xAxisGet);

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Line)(data);
				this.myChart2.setOption(config);
				this.myChart2.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData2) {
					this.refs.charts2.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getChartShow1',
		value: function getChartShow1() {
			if (this.props.flowDistribution.newUserActiveTime.length != 0) {
				var series = [];
				var names = [];
				this.props.flowDistribution.newUserActiveTime.map(function (v, k) {
					series.push({
						"name": v.name,
						"type": "line",
						"stack": v.name,
						"data": v.yAxis
					});

					names.push(v.name);
				});

				var xAxisGet = this.getXAxis(this.props.flowDistribution.newUserActiveTime);

				if (xAxisGet.length == 0) {
					this.refs.charts1.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
					return false;
				}

				var xAxis = this.hourFormat(xAxisGet);

				var data = {
					"names": names,
					"xAxis": xAxis,
					"series": series
				};

				var config = (0, _chartConfigs.Line)(data);
				this.myChart1.setOption(config);
				this.myChart1.resize();
			} else {
				if (this.props.flowDistribution.chartsNoData1) {
					this.refs.charts1.innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
				}
			}
		}
	}, {
		key: 'getXAxis',
		value: function getXAxis(data) {
			var arr = [];

			data.map(function (v, k) {

				if (v.xAxis.length != 0) {
					arr = v.xAxis;
				}
			});

			return arr;
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

			this.props.changeOs(data, this.getChannelGroup.bind(this));
		}
	}, {
		key: 'getChannelGroup',
		value: function getChannelGroup(data) {

			this.props.getChannelGroup(data);
		}
	}, {
		key: 'changeChannelCategory',
		value: function changeChannelCategory(value) {

			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelGroup: "",
				channelCategory: value,
				channelName: this.props.flowDistribution.channelName
			};

			this.props.changeChannelCategory(data, this.getChannelGroup.bind(this));
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
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
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

			if (dateString > this.props.flowDistribution.maxDate) {
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

			this.globalGet();
		}
	}, {
		key: 'getDownloadName',
		value: function getDownloadName(data) {
			// let prefix = '用户概况-';
			var prefix = data.excelName;
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

			return prefix + fileName + '-(' + data.endDate + ')';
		}
	}, {
		key: 'downloadExcel1',
		value: function downloadExcel1() {

			var data1 = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-新增用户激活时间分布-'
			};

			this.fileName = this.getDownloadName(data1);
			this.props.getDownLoadData1(data1);
		}
	}, {
		key: 'downloadExcel2',
		value: function downloadExcel2() {

			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-新增用户启动时间分布-'
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData2(data);
		}
	}, {
		key: 'downloadExcel3',
		value: function downloadExcel3() {

			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-新增用户机型分布-'
			};

			this.fileName = this.getDownloadName(data);

			this.props.getDownLoadData3(data);
		}
	}, {
		key: 'downloadExcel4',
		value: function downloadExcel4() {
			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-活跃用户机型分布-'
			};

			this.fileName = this.getDownloadName(data);
			this.props.getDownLoadData4(data);
		}
	}, {
		key: 'downloadExcel5',
		value: function downloadExcel5() {
			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-新增用户联网方式-'
			};

			this.fileName = this.getDownloadName(data);
			this.props.getDownLoadData5(data);
		}
	}, {
		key: 'downloadExcel6',
		value: function downloadExcel6() {
			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-活跃用户联网方式-'
			};

			this.fileName = this.getDownloadName(data);
			this.props.getDownLoadData6(data);
		}
	}, {
		key: 'downloadExcel7',
		value: function downloadExcel7() {
			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-新增用户地域分布-'
			};

			this.fileName = this.getDownloadName(data);
			this.props.getDownLoadData7(data);
		}
	}, {
		key: 'downloadExcel8',
		value: function downloadExcel8() {
			var data = {
				appCode: this.props.flowDistribution.appCode,
				channelCategory: this.props.flowDistribution.channelCategory,
				channelGroup: this.props.flowDistribution.channelGroup,
				channelName: this.props.flowDistribution.channelName,
				endDate: this.props.flowDistribution.endDate,
				excelName: '流量分布-活跃用户地域分布-'
			};

			this.fileName = this.getDownloadName(data);
			this.props.getDownLoadData8(data);
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
									value: this.props.flowDistribution.appCode,
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
									value: this.props.flowDistribution.channelCategory,
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
									value: this.props.flowDistribution.channelGroup,
									className: 'channelGroup',
									optionFilterProp: 'children',
									onChange: this.handleChange.bind(this) },
								_react2.default.createElement(
									Option,
									{ value: '' },
									'\u5168\u90E8'
								),
								(0, _utils.renderGroupList)(this.props.flowDistribution.channelGroupList)
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
									value: this.props.flowDistribution.channelName,
									filterOption: false,
									onChange: this.searchChannel.bind(this)
								},
								(0, _utils.getChannelList)(this.props.flowDistribution.channelList)
							)
						),
						_react2.default.createElement(
							FormItem,
							{ label: '' },
							_react2.default.createElement(_antd.DatePicker, {
								value: (0, _moment2.default)(this.props.flowDistribution.endDate, dateFormat),
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
						_antd.Row,
						{ gutter: 24 },
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u65B0\u589E\u7528\u6237\u6FC0\u6D3B\u65F6\u95F4\u5206\u5E03', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel1.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading1 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts1', style: { width: "100%", minHeight: "300px" } },
										'\u65B0\u589E\u7528\u6237\u6FC0\u6D3B\u65F6\u95F4\u5206\u5E03'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u65B0\u589E\u7528\u6237\u542F\u52A8\u65F6\u95F4\u5206\u5E03', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel2.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading1 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts2', style: { width: "100%", minHeight: "300px" } },
										'\u65B0\u589E\u7528\u6237\u542F\u52A8\u65F6\u95F4\u5206\u5E03'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u65B0\u589E\u7528\u6237\u673A\u578B\u5206\u5E03', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel3.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading3 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts3', style: { width: "100%", minHeight: "300px" } },
										'\u65B0\u589E\u7528\u6237\u673A\u578B\u5206\u5E03'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u6D3B\u8DC3\u7528\u6237\u673A\u578B\u5206\u5E03', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel4.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading4 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts4', style: { width: "100%", minHeight: "300px" } },
										'\u6D3B\u8DC3\u7528\u6237\u673A\u578B\u5206\u5E03'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u65B0\u589E\u7528\u6237\u8054\u7F51\u65B9\u5F0F', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel5.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading5 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts5', style: { width: "100%", minHeight: "300px" } },
										'\u65B0\u589E\u7528\u6237\u8054\u7F51\u65B9\u5F0F'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u6D3B\u8DC3\u7528\u6237\u8054\u7F51\u65B9\u5F0F', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel6.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading5 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts6', style: { width: "100%", minHeight: "300px" } },
										'\u6D3B\u8DC3\u7528\u6237\u8054\u7F51\u65B9\u5F0F'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u65B0\u589E\u7528\u6237\u5730\u57DF\u5206\u5E03', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel7.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading7 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts7', style: { width: "100%", minHeight: "300px" } },
										'\u65B0\u589E\u7528\u6237\u5730\u57DF\u5206\u5E03'
									)
								)
							)
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 12 },
							_react2.default.createElement(
								_antd.Card,
								{ title: '\u6D3B\u8DC3\u7528\u6237\u5730\u57DF\u5206\u5E03', extra: _react2.default.createElement(
										_antd.Button,
										{ type: 'primary', icon: 'download', 'data-id': '1', onClick: this.downloadExcel8.bind(this) },
										'\u4E0B\u8F7D'
									), noHovering: true, style: { minHeight: "380px", marginBottom: "24px" } },
								_react2.default.createElement(
									_antd.Spin,
									{ spinning: this.props.flowDistribution.chartsDataloading7 },
									_react2.default.createElement(
										'div',
										{ ref: 'charts8', style: { width: "100%", minHeight: "300px" } },
										'\u6D3B\u8DC3\u7528\u6237\u5730\u57DF\u5206\u5E03'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return flowDistribution;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	return {
		flowDistribution: state.qReducer.flowDistribution
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	//全量
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(flowDistribution);

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

/***/ 2221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData8 = exports.getDownLoadData7 = exports.getDownLoadData6 = exports.getDownLoadData5 = exports.getDownLoadData4 = exports.getDownLoadData3 = exports.getDownLoadData2 = exports.getDownLoadData1 = exports.getArea = exports.netNewUser = exports.activeModal = exports.newModal = exports.getHour = exports.setDate = exports.searchChannel = exports.changeChannelGroup = exports.changeChannelCategory = exports.getChannelGroup = exports.changeOs = exports.test = undefined;

__webpack_require__(2147);

__webpack_require__(2245);

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
var changeOs = function changeOs(data, callback) {
	return function (dispatch) {
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		var params = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory
		};
		callback(params);
	};
};

var changeChannelCategory = function changeChannelCategory(data, callback) {
	return function (dispatch) {
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		var params = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory
		};
		callback(params);
	};
};

var getChannelGroup = function getChannelGroup(data) {
	return function (dispatch) {
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channelGroup.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {

			if (msg.status) {

				dispatch({
					type: "FLOWDISTRIBUTION_CHANNELGROUPLIST",
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

var changeChannelGroup = function changeChannelGroup(data) {
	return function (dispatch) {
		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});
	};
};

var searchChannel = function searchChannel(data) {
	return function (dispatch) {
		// appCode: this.props.flowDistribution.appCode,
		// channelCategory: this.props.flowDistribution.channelCategory,
		// channelGroup: this.props.flowDistribution.channelGroup,
		// channelName: value
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

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
					type: "FLOWDISTRIBUTION_CHANNELLIST",
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

var setDate = function setDate(data) {
	return function (dispatch) {

		dispatch({
			type: "FLOWDISTRIBUTION_ENDDATE",
			payload: data
		});
	};
};

var getHour = function getHour(data) {
	return function (dispatch) {
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "FLOWDISTRIBUTION_ENDDATE",
			payload: data.endDate
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSDATALOADING1",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/hour.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			dispatch({
				type: "FLOWDISTRIBUTION_CHARTSDATALOADING1",
				payload: false
			});

			if (msg.status) {
				hoverNoData1(msg.data.NewUserActiveTime, dispatch);

				dispatch({
					type: "FLOWDISTRIBUTION_NEWUSERACTIVETIME",
					payload: msg.data.NewUserActiveTime
				});

				hoverNoData2(msg.data.activeUserStartTime, dispatch);

				dispatch({
					type: "FLOWDISTRIBUTION_ACTIVEUSERSTARTTIME",
					payload: msg.data.activeUserStartTime
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

var newModal = function newModal(data) {
	return function (dispatch) {

		// endDate: this.props.flowDistribution.endDate
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "FLOWDISTRIBUTION_ENDDATE",
			payload: data.endDate
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSDATALOADING3",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/deviceModel/new.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			dispatch({
				type: "FLOWDISTRIBUTION_CHARTSDATALOADING3",
				payload: false
			});

			if (msg.status) {

				hoverNoData3(msg.data.newUserModel, dispatch);

				dispatch({
					type: "FLOWDISTRIBUTION_NEWUSERMODEL",
					payload: msg.data.newUserModel
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

var activeModal = function activeModal(data) {
	return function (dispatch) {
		// appCode: this.props.flowDistribution.appCode,
		// channelCategory: this.props.flowDistribution.channelCategory,
		// channelGroup: this.props.flowDistribution.channelGroup,
		// channelName: this.props.flowDistribution.channelName,
		// endDate: this.props.flowDistribution.endDate
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "FLOWDISTRIBUTION_ENDDATE",
			payload: data.endDate
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSDATALOADING4",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/deviceModel/active.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			dispatch({
				type: "FLOWDISTRIBUTION_CHARTSDATALOADING4",
				payload: false
			});

			if (msg.status) {

				hoverNoData4(msg.data.activeUserModel, dispatch);

				dispatch({
					type: "FLOWDISTRIBUTION_ACTIVEUSERMODEL",
					payload: msg.data.activeUserModel
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

var netNewUser = function netNewUser(data) {
	return function (dispatch) {

		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "FLOWDISTRIBUTION_ENDDATE",
			payload: data.endDate
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSDATALOADING5",
			payload: true
		});

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/net.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			dispatch({
				type: "FLOWDISTRIBUTION_CHARTSDATALOADING5",
				payload: false
			});

			if (msg.status) {

				var arr1 = netNewFormat(msg.data.newUserNetType);

				var arr2Active = activeFormat(msg.data.activeUserNetType);

				if (msg.data.newUserNetType.length == 0) {

					dispatch({
						type: "FLOWDISTRIBUTION_CHARTSNODATA5",
						payload: true
					});
				}

				if (msg.data.activeUserNetType.length == 0) {

					dispatch({
						type: "FLOWDISTRIBUTION_CHARTSNODATA6",
						payload: true
					});
				}

				dispatch({
					type: "FLOWDISTRIBUTION_NEWUSERNETTYPE",
					payload: arr1
				});

				dispatch({
					type: "FLOWDISTRIBUTION_ACTIVEUSERNETTYPE",
					payload: arr2Active
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

var getArea = function getArea(data) {
	return function (dispatch) {
		dispatch({
			type: "FLOWDISTRIBUTION_APPCODE",
			payload: data.appCode
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELGROUP",
			payload: data.channelGroup
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHANNELNAME",
			payload: data.channelName
		});

		dispatch({
			type: "FLOWDISTRIBUTION_ENDDATE",
			payload: data.endDate
		});

		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSDATALOADING7",
			payload: true
		});
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/area.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			dispatch({
				type: "FLOWDISTRIBUTION_CHARTSDATALOADING7",
				payload: false
			});

			if (msg.status) {

				var arr1 = areaNewFormat(msg.data);

				var arr2 = areaActiveFormat(msg.data);

				if (arr1.length == 0) {
					dispatch({
						type: "FLOWDISTRIBUTION_CHARTSNODATA7",
						payload: true
					});
				}

				if (arr2.length == 0) {
					dispatch({
						type: "FLOWDISTRIBUTION_CHARTSNODATA8",
						payload: true
					});
				}

				dispatch({
					type: "FLOWDISTRIBUTION_NEWUSERAREA",
					payload: arr1
				});

				dispatch({
					type: "FLOWDISTRIBUTION_ACTIVEUSERAREA",
					payload: arr2
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

var areaNewFormat = function areaNewFormat(data) {
	var arr = [];

	data.map(function (v, k) {
		arr.push({
			name: v.province,
			value: v.newUser
		});
	});

	return arr;
};

var areaActiveFormat = function areaActiveFormat(data) {
	var arr = [];

	data.map(function (v, k) {
		arr.push({
			name: v.province,
			value: v.activeUser
		});
	});

	return arr;
};

var netNewFormat = function netNewFormat(data) {
	var arr = [];
	data.map(function (v, k) {
		arr.push({
			value: v.newUser,
			name: v.netType
		});
	});

	return arr;
};

var activeFormat = function activeFormat(data) {
	var arr = [];
	data.map(function (v, k) {
		arr.push({
			value: v.activeUser,
			name: v.netType
		});
	});

	return arr;
};

var hoverNoData1 = function hoverNoData1(data, dispatch) {
	var isNoData = false;
	data.map(function (v, k) {
		if (v.yAxis.length != 0) {
			isNoData = true;
		}
	});
	if (!isNoData) {
		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSNODATA1",
			payload: true
		});
	}
};

var hoverNoData2 = function hoverNoData2(data, dispatch) {

	var isNoData = false;
	data.map(function (v, k) {
		if (v.yAxis.length != 0) {
			isNoData = true;
		}
	});
	if (!isNoData) {
		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSNODATA2",
			payload: true
		});
	}
};

var hoverNoData3 = function hoverNoData3(data, dispatch) {

	var isNoData = false;
	data.map(function (v, k) {
		if (v.yAxis.length != 0) {
			isNoData = true;
		}
	});
	if (!isNoData) {
		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSNODATA3",
			payload: true
		});
	}
};

var hoverNoData4 = function hoverNoData4(data, dispatch) {

	var isNoData = false;
	data.map(function (v, k) {
		if (v.yAxis.length != 0) {
			isNoData = true;
		}
	});
	if (!isNoData) {
		dispatch({
			type: "FLOWDISTRIBUTION_CHARTSNODATA4",
			payload: true
		});
	}
};

var getDownLoadData1 = function getDownLoadData1(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/hour/down.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				var arr = [];

				msg.data.map(function (v, k) {
					v.hour = v.hour + ":00";
					arr.push(v);
				});

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL1",
					payload: arr
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

var getDownLoadData2 = function getDownLoadData2(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/hour/down.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				var arr = [];

				msg.data.map(function (v, k) {
					v.hour = v.hour + ":00";
					arr.push(v);
				});

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL2",
					payload: arr
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

var getDownLoadData3 = function getDownLoadData3(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/deviceModel/down.do?type=1',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL3",
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

var getDownLoadData4 = function getDownLoadData4(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/deviceModel/down.do?type=2',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {
				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL4",
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

var getDownLoadData5 = function getDownLoadData5(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/net/down.do?type=1',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL5",
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

var getDownLoadData6 = function getDownLoadData6(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/net/down.do?type=2',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL6",
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

var getDownLoadData7 = function getDownLoadData7(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/area/down.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL7",
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

var getDownLoadData8 = function getDownLoadData8(data) {
	return function (dispatch) {
		//发送请求
		(0, _reqwest2.default)({
			url: '/data/flow/area/down.do',
			method: 'post',
			data: data,
			type: 'json',
			cache: true
		}).then(function (msg) {
			if (msg.status) {

				dispatch({
					type: "FLOWDISTRIBUTION_EXCEL8",
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
exports.getChannelGroup = getChannelGroup;
exports.changeChannelCategory = changeChannelCategory;
exports.changeChannelGroup = changeChannelGroup;
exports.searchChannel = searchChannel;
exports.setDate = setDate;
exports.getHour = getHour;
exports.newModal = newModal;
exports.activeModal = activeModal;
exports.netNewUser = netNewUser;
exports.getArea = getArea;
exports.getDownLoadData1 = getDownLoadData1;
exports.getDownLoadData2 = getDownLoadData2;
exports.getDownLoadData3 = getDownLoadData3;
exports.getDownLoadData4 = getDownLoadData4;
exports.getDownLoadData5 = getDownLoadData5;
exports.getDownLoadData6 = getDownLoadData6;
exports.getDownLoadData7 = getDownLoadData7;
exports.getDownLoadData8 = getDownLoadData8;

/***/ }),

/***/ 2245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	_mockjs2.default.mock("/data/flow/hour.do", "post", {
		"status": true,
		"data": {
			"activeUserStartTime": [{
				"yAxis": [11080, 6334, 3768, 2851, 2723, 3602, 5403, 10537, 14327, 13455, 15513, 16343, 16308, 18106, 15857, 14502, 14225, 13883, 16136, 17081, 17708, 15343, 12308, 7734],
				"name": "2018-02-10",
				"xAxis": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
			}, {
				"yAxis": [11629, 6194, 4162, 3399, 2855, 3634, 6645, 12436, 14126, 15959, 17546, 18700, 20480, 20501, 16277, 15998, 15206, 14309, 13949, 15213, 17600, 15002, 11821, 7974],
				"name": "2018-02-09",
				"xAxis": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
			}, {
				"yAxis": [11568, 6061, 3509, 2790, 2667, 3257, 5921, 9427, 15372, 15914, 15878, 18763, 19914, 27580, 17555, 17726, 18077, 18118, 17066, 20528, 21789, 17852, 13381, 8000],
				"name": "2018-02-03",
				"xAxis": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
			}],
			"NewUserActiveTime": [{
				"yAxis": [3489, 2059, 1255, 908, 909, 1134, 2005, 3712, 5042, 5104, 5883, 6082, 6259, 7002, 6378, 5823, 5865, 5870, 7035, 7848, 8534, 7925, 6715, 4788],
				"name": "2018-02-10",
				"xAxis": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
			}, {
				"yAxis": [3462, 2119, 1435, 1104, 1057, 1409, 2553, 4541, 5448, 6062, 6363, 7270, 7781, 8286, 6919, 6594, 6538, 6117, 6015, 6915, 8498, 7622, 6532, 4965],
				"name": "2018-02-09",
				"xAxis": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
			}, {
				"yAxis": [3406, 2072, 1251, 988, 943, 1237, 2270, 3531, 5688, 6024, 6292, 7341, 7801, 10487, 7349, 7198, 7618, 7549, 7692, 9555, 10875, 9482, 7377, 5139],
				"name": "2018-02-03",
				"xAxis": ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
			}]
		},
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/deviceModel/new.do", "post", {
		"status": true,
		"data": {
			"newUserModel": [{
				"yAxis": [2828, 2713, 2691, 2318, 2213, 2099, 1929, 1869, 1862, 1589],
				"name": "2018-02-10",
				"xAxis": ["MI 5X", "HUAWEI MLA-AL10", "WAS-AL00", "HUAWEI NXT-AL10", "OPPO A33", "EVA-AL10", "MI 6", "DIG-AL00", "HUAWEI CAZ-AL10", "OPPO A33m"]
			}, {
				"yAxis": [2831, 2580, 2578, 2257, 1889, 1818, 1817, 1773, 1547, 1491],
				"name": "2018-02-09",
				"xAxis": ["MI 5X", "WAS-AL00", "HUAWEI MLA-AL10", "OPPO A33", "EVA-AL10", "HUAWEI CAZ-AL10", "DIG-AL00", "OPPO A33m", "MI 6", "iPhone7,2"]
			}, {
				"yAxis": [3066, 2901, 2870, 2554, 2386, 2063, 2035, 1979, 1955, 1784],
				"name": "2018-02-03",
				"xAxis": ["HUAWEI MLA-AL10", "MI 5X", "WAS-AL00", "HUAWEI NXT-AL10", "OPPO A33", "HUAWEI CAZ-AL10", "Redmi 4A", "Redmi Note 4X", "DIG-AL00", "OPPO A33m"]
			}],
			"activeUserModel": [{
				"yAxis": [31700, 84008, 55381, 118965, 304086, 113590, 55601, 25590, 63776, 141147],
				"name": "2018-02-10",
				"xAxis": ["MI 5X", "HUAWEI MLA-AL10", "WAS-AL00", "HUAWEI NXT-AL10", "OPPO A33", "EVA-AL10", "MI 6", "DIG-AL00", "HUAWEI CAZ-AL10", "OPPO A33m"]
			}, {
				"yAxis": [33083, 55221, 85085, 316907, 116251, 64499, 25974, 147144, 9790, 480593],
				"name": "2018-02-09",
				"xAxis": ["MI 5X", "WAS-AL00", "HUAWEI MLA-AL10", "OPPO A33", "EVA-AL10", "HUAWEI CAZ-AL10", "DIG-AL00", "OPPO A33m", "MI 6", "iPhone7,2"]
			}, {
				"yAxis": [86584, 31481, 56247, 121530, 303216, 64775, 23924, 57903, 26687, 143589],
				"name": "2018-02-03",
				"xAxis": ["HUAWEI MLA-AL10", "MI 5X", "WAS-AL00", "HUAWEI NXT-AL10", "OPPO A33", "HUAWEI CAZ-AL10", "Redmi 4A", "Redmi Note 4X", "DIG-AL00", "OPPO A33m"]
			}]
		},
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/net.do", "post", {
		"status": true,
		"data": {
			"newUserNetType": [{
				"activeUser": 4018914,
				"netType": "WIFI",
				"newUser": 81507
			}, {
				"activeUser": 3384584,
				"netType": "LTE",
				"newUser": 27765
			}, {
				"activeUser": 453445,
				"netType": "UNKNOWN",
				"newUser": 7082
			}, {
				"activeUser": 72810,
				"netType": "EDGE",
				"newUser": 808
			}, {
				"activeUser": 10371,
				"netType": "CDMA - EVDO REV. A",
				"newUser": 233
			}, {
				"activeUser": 140,
				"netType": "CDMA",
				"newUser": 87
			}, {
				"activeUser": 1491,
				"netType": "GSM",
				"newUser": 42
			}, {
				"activeUser": 10545,
				"netType": "CDMAEVDOREVA",
				"newUser": 32
			}, {
				"activeUser": 9012,
				"netType": "WCDMA",
				"newUser": 30
			}, {
				"activeUser": 1253,
				"netType": "CDMA EVDO",
				"newUser": 20
			}],
			"activeUserNetType": [{
				"activeUser": 4018914,
				"netType": "WIFI",
				"newUser": 81507
			}, {
				"activeUser": 3384584,
				"netType": "LTE",
				"newUser": 27765
			}, {
				"activeUser": 453445,
				"netType": "UNKNOWN",
				"newUser": 7082
			}, {
				"activeUser": 72810,
				"netType": "EDGE",
				"newUser": 808
			}, {
				"activeUser": 10545,
				"netType": "CDMAEVDOREVA",
				"newUser": 32
			}, {
				"activeUser": 10371,
				"netType": "CDMA - EVDO REV. A",
				"newUser": 233
			}, {
				"activeUser": 9012,
				"netType": "WCDMA",
				"newUser": 30
			}, {
				"activeUser": 1568,
				"netType": "TD-SCDMA",
				"newUser": 15
			}, {
				"activeUser": 1491,
				"netType": "GSM",
				"newUser": 42
			}, {
				"activeUser": 1253,
				"netType": "CDMA EVDO",
				"newUser": 20
			}]
		},
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/area.do", "post", {
		"status": true,
		"data": [{
			"activeUser": 0,
			"newUser": 0,
			"province": ""
		}, {
			"activeUser": 283533,
			"newUser": 3196,
			"province": "上海"
		}, {
			"activeUser": 166486,
			"newUser": 2395,
			"province": "云南"
		}, {
			"activeUser": 904712,
			"newUser": 12576,
			"province": "其他"
		}, {
			"activeUser": 122998,
			"newUser": 1974,
			"province": "内蒙古"
		}, {
			"activeUser": 282984,
			"newUser": 3798,
			"province": "北京"
		}, {
			"activeUser": 4113,
			"newUser": 47,
			"province": "台湾"
		}, {
			"activeUser": 118503,
			"newUser": 1950,
			"province": "吉林"
		}, {
			"activeUser": 376008,
			"newUser": 5942,
			"province": "四川"
		}, {
			"activeUser": 86911,
			"newUser": 1177,
			"province": "天津"
		}, {
			"activeUser": 29877,
			"newUser": 485,
			"province": "宁夏"
		}, {
			"activeUser": 201751,
			"newUser": 3114,
			"province": "安徽"
		}, {
			"activeUser": 442202,
			"newUser": 7008,
			"province": "山东"
		}, {
			"activeUser": 159617,
			"newUser": 2611,
			"province": "山西"
		}, {
			"activeUser": 758906,
			"newUser": 11617,
			"province": "广东"
		}, {
			"activeUser": 163109,
			"newUser": 3062,
			"province": "广西"
		}, {
			"activeUser": 76098,
			"newUser": 1415,
			"province": "新疆"
		}, {
			"activeUser": 638960,
			"newUser": 7348,
			"province": "江苏"
		}, {
			"activeUser": 163269,
			"newUser": 2702,
			"province": "江西"
		}, {
			"activeUser": 263803,
			"newUser": 5064,
			"province": "河北"
		}, {
			"activeUser": 350414,
			"newUser": 6340,
			"province": "河南"
		}, {
			"activeUser": 533051,
			"newUser": 6574,
			"province": "浙江"
		}, {
			"activeUser": 60515,
			"newUser": 788,
			"province": "海南"
		}, {
			"activeUser": 283646,
			"newUser": 4001,
			"province": "湖北"
		}, {
			"activeUser": 275608,
			"newUser": 4376,
			"province": "湖南"
		}, {
			"activeUser": 2629,
			"newUser": 25,
			"province": "澳门"
		}, {
			"activeUser": 79849,
			"newUser": 1238,
			"province": "甘肃"
		}, {
			"activeUser": 246602,
			"newUser": 3186,
			"province": "福建"
		}, {
			"activeUser": 5253,
			"newUser": 143,
			"province": "西藏"
		}, {
			"activeUser": 104524,
			"newUser": 2097,
			"province": "贵州"
		}, {
			"activeUser": 207447,
			"newUser": 2888,
			"province": "辽宁"
		}, {
			"activeUser": 137399,
			"newUser": 2159,
			"province": "重庆"
		}, {
			"activeUser": 213932,
			"newUser": 2834,
			"province": "陕西"
		}, {
			"activeUser": 39098,
			"newUser": 667,
			"province": "青海"
		}, {
			"activeUser": 12504,
			"newUser": 131,
			"province": "香港"
		}, {
			"activeUser": 168075,
			"newUser": 2697,
			"province": "黑龙江"
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/deviceModel/active.do", "post", {
		"status": true,
		"data": {
			"newUserModel": [{
				"yAxis": [1488, 1036, 1324, 922, 1088, 1002, 2213, 1589, 2318, 231],
				"name": "2018-02-10",
				"xAxis": ["iPhone7,2", "iPhone8,1", "iPhone9,2", "iPhone7,1", "iPhone9,1", "iPhone8,2", "OPPO A33", "OPPO A33m", "HUAWEI NXT-AL10", "OPPO R7s"]
			}, {
				"yAxis": [1491, 1042, 1279, 883, 1128, 1003, 2257, 1773, 245, 1889],
				"name": "2018-02-09",
				"xAxis": ["iPhone7,2", "iPhone8,1", "iPhone9,2", "iPhone7,1", "iPhone9,1", "iPhone8,2", "OPPO A33", "OPPO A33m", "OPPO R7s", "EVA-AL10"]
			}, {
				"yAxis": [1622, 1278, 1391, 1012, 1144, 1061, 2386, 1784, 2554, 272],
				"name": "2018-02-03",
				"xAxis": ["iPhone7,2", "iPhone8,1", "iPhone9,2", "iPhone7,1", "iPhone9,1", "iPhone8,2", "OPPO A33", "OPPO A33m", "HUAWEI NXT-AL10", "OPPO R7s"]
			}],
			"activeUserModel": [{
				"yAxis": [466021, 383936, 373345, 320205, 316241, 308651, 304086, 141147, 118965, 117891],
				"name": "2018-02-10",
				"xAxis": ["iPhone7,2", "iPhone8,1", "iPhone9,2", "iPhone7,1", "iPhone9,1", "iPhone8,2", "OPPO A33", "OPPO A33m", "HUAWEI NXT-AL10", "OPPO R7s"]
			}, {
				"yAxis": [480593, 397805, 387800, 330261, 327846, 319744, 316907, 147144, 123127, 116251],
				"name": "2018-02-09",
				"xAxis": ["iPhone7,2", "iPhone8,1", "iPhone9,2", "iPhone7,1", "iPhone9,1", "iPhone8,2", "OPPO A33", "OPPO A33m", "OPPO R7s", "EVA-AL10"]
			}, {
				"yAxis": [472718, 389301, 375832, 324084, 318304, 311287, 303216, 143589, 121530, 120214],
				"name": "2018-02-03",
				"xAxis": ["iPhone7,2", "iPhone8,1", "iPhone9,2", "iPhone7,1", "iPhone9,1", "iPhone8,2", "OPPO A33", "OPPO A33m", "HUAWEI NXT-AL10", "OPPO R7s"]
			}]
		},
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/hour/down.do", "post", {
		"status": true,
		"data": [{
			"bootTimes": 11080,
			"day": "2018-02-10",
			"hour": "00",
			"newUser": 3489
		}, {
			"bootTimes": 6334,
			"day": "2018-02-10",
			"hour": "01",
			"newUser": 2059
		}, {
			"bootTimes": 3768,
			"day": "2018-02-10",
			"hour": "02",
			"newUser": 1255
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/deviceModel/down.do?type=1", "post", {
		"status": true,
		"data": [{
			"activeUser": 251968,
			"day": "2018-02-23",
			"deviceModel": "OPPO A33",
			"newUser": 2971
		}, {
			"activeUser": 34847,
			"day": "2018-02-23",
			"deviceModel": "MI 5X",
			"newUser": 2801
		}, {
			"activeUser": 89436,
			"day": "2018-02-23",
			"deviceModel": "HUAWEI MLA-AL10",
			"newUser": 2720
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/deviceModel/down.do?type=2", "post", {
		"status": true,
		"data": [{
			"activeUser": 251968,
			"day": "2018-02-23",
			"deviceModel": "OPPO A33",
			"newUser": 2971
		}, {
			"activeUser": 34847,
			"day": "2018-02-23",
			"deviceModel": "MI 5X",
			"newUser": 2801
		}, {
			"activeUser": 89436,
			"day": "2018-02-23",
			"deviceModel": "HUAWEI MLA-AL10",
			"newUser": 2720
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/net/down.do?type=1", "post", {
		"status": true,
		"data": [{
			"activeUser": 3646704,
			"netType": "WIFI",
			"newUser": 67928
		}, {
			"activeUser": 3369268,
			"netType": "LTE",
			"newUser": 25405
		}, {
			"activeUser": 437159,
			"netType": "UNKNOWN",
			"newUser": 6258
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/net/down.do?type=2", "post", {
		"status": true,
		"data": [{
			"activeUser": 3646704,
			"netType": "WIFI",
			"newUser": 67928
		}, {
			"activeUser": 3369268,
			"netType": "LTE",
			"newUser": 25405
		}, {
			"activeUser": 437159,
			"netType": "UNKNOWN",
			"newUser": 6258
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/deviceModel/down.do", "post", {
		"status": true,
		"data": [{
			"activeUser": 4018914,
			"netType": "WIFI",
			"newUser": 81507
		}, {
			"activeUser": 3384584,
			"netType": "LTE",
			"newUser": 27765
		}, {
			"activeUser": 453445,
			"netType": "UNKNOWN",
			"newUser": 7082
		}],
		"msg": ""
	});

	_mockjs2.default.mock("/data/flow/area/down.do", "post", {
		"status": true,
		"data": [{
			"activeUser": 0,
			"city": "",
			"newUser": 0,
			"province": ""
		}, {
			"activeUser": 5672,
			"city": "其他",
			"newUser": 68,
			"province": "上海"
		}, {
			"activeUser": 599,
			"city": "南汇区",
			"newUser": 7,
			"province": "上海"
		}],
		"msg": ""
	});
}

/***/ }),

/***/ 2253:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(428)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('china', {"type":"FeatureCollection","features":[{"id":"710000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@°Ü¯Û"],["@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿@ăƑ¥ĘWǬÏĶŁâ"],["@@\\p|WoYG¿¥Ij@¢"],["@@¡@V^RqBbAnTXeRz¤L«³I"],["@@ÆEEkWqë @"],["@@fced"]],"encodeOffsets":[[[122886,24033]],[[123335,22980]],[[122375,24193]],[[122518,24117]],[[124427,22618]],[[124862,26043]]]},"properties":{"cp":[121.509062,25.044332],"name":"台湾","childNum":6}},{"id":"130000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@o~Z]ªrºc_ħ²G¼s`jÎŸnüsÂłNX_M`Ç½ÓnUKĜēs¤­©yrý§uģcJe"],["@@U`Ts¿mÂ"],["@@oºƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäìë|³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝlNd®²Ğ ǆiGĘJ¼lr}~K¨ŸƐÌWöÆzR¤lêmĞLÎ@¡|q]SvKÑcwpÏÏĿćènĪWlĄkT}J¤~ÈTdpddʾĬBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âDùyŜŲIÄuĐ¨D¸dɂFOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ȭµu¯b{ÍDěïÿȧuT£ġěŗƃĝQ¨fVƋƅn­a@³@ďyÃ½IĹÊKŭfċŰóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏlTíb ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±´°^[À|ĠO@ÆxO\\ta\\tĕtû{ġȧXýĪÓjùÎRb^ÎfK[ÝděYfíÙTyuUSyŌŏů@Oi½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒ¾ùƀ^juųœK­UFyƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qáµ§g¤o^á¾ZE¤i`ĳ{nOl»WÝĔįhgF[¿¡ßkOüš_ūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{Ãmï"]],"encodeOffsets":[[[119712,40641]],[[121616,39981]],[[116462,37237]]]},"properties":{"cp":[114.502461,38.045474],"name":"河北","childNum":3}},{"id":"140000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ÞĩÒSra}ÁyWix±Üe´lèßÓǏokćiµVZģ¡coTSË¹ĪmnÕńehZg{gtwªpXaĚThȑp{¶Eh®RćƑP¿£Pmc¸mQÝWďȥoÅîɡųAďä³aÏJ½¥PG­ąSM­EÅruµéYÓŌ_dĒCo­Èµ]¯_²ÕjāK~©ÅØ^ÔkïçămÏk]­±cÝ¯ÑÃmQÍ~_apm~ç¡qu{JÅŧ·Ls}EyÁÆcI{¤IiCfUcƌÃp§]ě«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ·Wµ|¡¥ăFÏs×¥ŅxÊdÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGR° ƬDj¬¸|CĞKqºfƐiĺ©ª~ĆOQª ¤@ìǦɌ²æBÊTŸʂōĖĴŞȀÆÿȄlŤĒötÎ½î¼ĨXh|ªM¤Ðz"],"encodeOffsets":[[116874,41716]]},"properties":{"cp":[112.549248,37.857014],"name":"山西","childNum":1}},{"id":"150000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@Č^â£ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\̀ʉÌÛMĀ[bÓEn}¶Vcês¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARëśĳĘů`çõh]y»ǃǛҤxÒm~zf}pf|ÜroÈzrKÈĵSƧż؜Ġu¦ö"],["@@sKCGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯YȵƓñǙµïċĻ|Düȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmǐnǔĎȆÞǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂc|ÀtƐK f{ĘFĒƌXƲąo½Ę\\¥o}Ûu£ç­kX{uĩ«āíÓUŅßŢqŤ¥lyň[oi{¦LńðFȪȖĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ż؛Ç@Vu»Aylßí¹ĵêÝlISò³C¹Ìâ²i¶Ìoú^H²CǜңǄ z¼g^èöŰ_Ĳĕê}gÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉ³MEĸÅĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYLq§IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃOrÍdÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUiñiWsɁ·cCÕk]wȑ|ća}wVaĚá G°ùnM¬¯{ÈÐÆA¥ÄêJxÙ¢hP¢ÛºµwWOóFÁz^ÀŗÎú´§¢T¤ǻƺSėǵhÝÅQgvBHouʝl_o¿Ga{ïq{¥|ſĿHĂ÷aĝÇqZñiñC³ª»E`¨åXēÕqÉû[l}ç@čƘóO¿¡FUsAʽīccocÇS}£IS~ălkĩXçmĈŀÐoÐdxÒuL^T{r@¢ÍĝKén£kQyÅõËXŷƏL§~}kq»IHėǅjĝ»ÑÞoå°qTt|r©ÏS¯·eŨĕx«È[eM¿yupN~¹ÏyN£{©għWí»Í¾səšǅ_ÃĀɗ±ąĳĉʍŌŷSÉA±åǥɋ@ë£R©ąP©}ĹªƏj¹erLDĝ·{i«ƫC£µ"]],"encodeOffsets":[[[127444,52594]],[[113793,40312]]]},"properties":{"cp":[111.670801,40.818311],"name":"内蒙古","childNum":2}},{"id":"210000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@L@@sa"],["@@MnNm"],["@@dc"],["@@eÀC@b"],["@@fXwkbrÄ`qg"],["@@^jtWQ"],["@@~ Y]c"],["@@G`ĔN^_¿ZÃM"],["@@iX¶BY"],["@@YZ"],["@@L_{Epf"],["@@^WqCT\\"],["@@\\[§t|¤_"],["@@m`n_"],["@@Ïxǌ{q_×^Giip"],["@@@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅÎcPqńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCN¤ EhæmsHy¨SðÑÌ\\\\ĐRZk°IS§fqŒßýáĞÙÉÖ[^¯ǤŲê´\\¦¬ĆPM¯£»uïpùzExanµyoluqe¦W^£ÊL}ñrkqWňûPUP¡ôJoo·U}£[·¨@XĸDXm­ÛÝºGUCÁª½{íĂ^cjk¶Ã[q¤LÉö³cux«zZf²BWÇ®Yß½ve±ÃCý£W{Ú^q^sÑ·¨ÍOt¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ģÁFıĉĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EżĀdQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|Əlĳ¥ãn·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÃA"]],"encodeOffsets":[[[123686,41445]],[[126019,40435]],[[124393,40128]],[[126117,39963]],[[125322,40140]],[[126686,40700]],[[126041,40374]],[[125584,40168]],[[125453,40165]],[[125362,40214]],[[125280,40291]],[[125774,39997]],[[125976,40496]],[[125822,39993]],[[125509,40217]],[[122731,40949]]]},"properties":{"cp":[123.429096,41.796767],"name":"辽宁","childNum":16}},{"id":"220000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@pä³PClFbbÍzwBGĭZÅi»lY­ċ²SgkÇ£^Sqd¯R©é£¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏ©¤ÛmTþ¤D²ÄufàÀ­XXÈ±AeyYw¬dvõ´KÊ£\\rµÄlidā]|î©¾DÂVH¹Þ®ÜWnCķ W§@\\¸~¤Vp¸póIO¢VOŇürXql~òÉK]¤¥Xrfkvzpm¶bwyFoúvð¼¤ N°ąO¥«³[éǡű_°Õ\\ÚÊĝþâőàerR¨­JYlďQ[ ÏYëÐ§TGztnß¡gFkMāGÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUuP@vRY¾\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðævxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ă¼Ŵ¡jlºWvÐzƦZÐ²CH AxiukdGgetqmcÛ£Ozy¥cE}|¾cZk¿uŐã[oxGikfeäT@SUwpiÚFM©£è^Ú`@v¶eňf heP¶täOlÃUgÞzŸU`l}ÔÆUvØ_Ō¬Öi^ĉi§²ÃB~¡ĈÚEgc|DC_Ȧm²rBx¼MÔ¦ŮdĨÃâYxƘDVÇĺĿg¿cwÅ\\¹¥Yĭl¤OvLjM_a W`zļMž·\\swqÝSAqŚĳ¯°kRē°wx^ĐkǂÒ\\]nrĂ}²ĊŲÒøãh·M{yMzysěnĒġV·°G³¼XÀ¤¹i´o¤ŃÈ`ÌǲÄUĞd\\iÖmÈBĤÜɲDEh LG¾ƀÄ¾{WaYÍÈĢĘÔRîĐj}ÇccjoUb½{h§Ǿ{KƖµÎ÷GĀÖŠåưÎs­lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFK¥ÚíÁbX³ÌQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GMehccďÏd©ÑW_ÏYƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ýqT^rme\\PpZZbyuybQefµ]UhĿDCmûvaÙNSkCwncćfv~YÇG"],"encodeOffsets":[[130196,42528]]},"properties":{"cp":[125.3245,43.886841],"name":"吉林","childNum":1}},{"id":"230000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@ƨĶTLÇyqpÇÛqe{~oyen}s`qiXGù]Ëp½©lÉÁp]Þñ´FĂ^fäîºkàz¼BUvÈ@"],["@@UµNÿ¥īèçHÍøƕ¶Lǽ|g¨|a¾pVidd~ÈiíďÓQġėÇZÎXb½|ſÃH½KFgɱCģÛÇAnjÕc[VĝǱÃËÇ_ £ń³pj£º¿»WH´¯U¸đĢmtĜyzzNN|g¸÷äűÑ±ĉā~mq^[ǁÑďlw]¯xQĔ¯l°řĴrBÞTxr[tŽ¸ĻN_yX`biNKuP£kZĮ¦[ºxÆÀdhĹŀUÈƗCwáZħÄŭcÓ¥»NAw±qȥnD`{ChdÙFć}¢A±Äj¨]ĊÕjŋ«×`VuÓÅ~_kŷVÝyhVkÄãPsOµfgeŇµf@u_Ù ÙcªNªÙEojVxT@ãSefjlwH\\pŏäÀvlY½d{F~¦dyz¤PÜndsrhfHcvlwjF£G±DÏƥYyÏu¹XikĿ¦ÏqƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|ĔĕsķÆF´N}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Þ]"]],"encodeOffsets":[[[127123,51780]],[[134456,44547]]]},"properties":{"cp":[126.642464,45.756967],"name":"黑龙江","childNum":2}},{"id":"320000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@cþÅPi`ZRu¥É\\]~°Y`µÓ^phÁbnÀşúòaĬºTÖŒbe¦¦{¸ZâćNp©Hr|^mjhSEb\\afv`sz^lkljÄtg¤D­¾X¿À|ĐiZȀåB·î}GL¢õcßjayBFµÏC^ĭcÙt¿sğH]j{s©HM¢QnDÀ©DaÜÞ·jgàiDbPufjDk`dPOîhw¡ĥ¥GP²ĐobºrYî¶aHŢ´ ]´rılw³r_{£DB_Ûdåuk|Ũ¯F Cºyr{XFye³Þċ¿ÂkĭB¿MvÛpm`rÚã@Ę¹hågËÖƿxnlč¶Åì½Ot¾dJlVJĂǀŞqvnO^JZż·Q}êÍÅmµÒ]ƍ¦Dq}¬R^èĂ´ŀĻĊIÔtĲyQŐĠMNtR®òLhĚs©»}OÓGZz¶A\\jĨFäOĤHYJvÞHNiÜaĎÉnFQlNM¤B´ĄNöɂtpŬdfåqm¿QûùŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yxcitğ®jű¢KOķCoy`å®VTa­_Ā]ŐÝɞï²ʯÊ^]afYǸÃĆēĪȣJđ͍ôƋÄÄÍīçÛɈǥ£­ÛmY`ó£Z«§°Ó³QafusNıǅ_k}¢m[ÝóDµ¡RLčiXyÅNïă¡¸iĔÏNÌŕoēdōîåŤûHcs}~Ûwbù¹£¦ÓCtOPrE^ÒogĉIµÛÅʹK¤½phMü`oæŀ"],"encodeOffsets":[[121740,32276]]},"properties":{"cp":[118.767413,32.041544],"name":"江苏","childNum":1}},{"id":"330000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@E^dQ]K"],["@@jX^j"],["@@sfbU"],["@@qP\\xz[ck"],["@@R¢FX}°[s_"],["@@Cb\\}"],["@@e|v\\la{u"],["@@v~u}"],["@@QxÂF¯}"],["@@¹nvÞs¯o"],["@@rSkUEj"],["@@bi­ZP"],["@@p[}INf"],["@@À¿"],["@@¹dnb"],["@@rSBnR"],["@@g~h}"],["@@FlEk"],["@@OdPc"],["@@v[u\\"],["@@FjâL~wyoo~sµL\\"],["@@¬e¹aN"],["@@\\nÔ¡q]L³ë\\ÿ®QÖ"],["@@ÊA­©[¬"],["@@Kxv­"],["@@@hlIk]"],["@@pW{o||j"],["@@Md|_mC"],["@@¢X£ÏylD¼XtH"],["@@hlÜ[LykAvyfw^E¤"],["@@fp¤MusR"],["@@®_ma~LÁ¬Z"],["@@iMxZ"],["@@ZcYd"],["@@Z~dOSo|A¿qZv"],["@@@`EN¡v"],["@@|TY{"],["@@@n@m"],["@@XWkCT\\"],["@@ºwZRkĕWO¢"],["@@X®±GrÆª\\ÔáXq{"],["@@ůTG°ĄLHm°UC"],["@@¤aÜx~}dtüGæţŎíĔcŖpMËÐjē¢·ðĄÆMzjWKĎ¢Q¶À_ê_Bıi«pZgf¤Nrq]§ĂN®«H±yƳí¾×ŸīàLłčŴǝĂíÀBŖÕªÁŖHŗŉåqûõi¨hÜ·ñt»¹ýv_[«¸mYL¯QªmĉÅdMgÇjcº«ę¬­K­´B«Âącoċ\\xKd¡gěŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfåÂŧįƋǝÊĕġć£g³ne­ą»@­¦S®\\ßðChiqªĭiAuA­µ_W¥ƣO\\lċĢttC¨£t`PZäuXßBsĻyekOđġĵHuXBµ]×­­\\°®¬F¢¾pµ¼kŘó¬Wät¸|@L¨¸µrºù³Ù~§WIZW®±Ð¨ÒÉx`²pĜrOògtÁZ}þÙ]¡FKwsPlU[}¦Rvn`hq¬\\nQ´ĘRWb_ rtČFIÖkĦPJ¶ÖÀÖJĈĄTĚòC ²@PúØz©Pî¢£CÈÚĒ±hŖl¬â~nm¨f©iļ«mntuÖZÜÄjL®EÌFª²iÊxØ¨IÈhhst"],["@@o\\VzRZ}y"],["@@@°¡mÛGĕ¨§Ianá[ýƤjfæØLäGr"]],"encodeOffsets":[[[125592,31553]],[[125785,31436]],[[125729,31431]],[[125513,31380]],[[125223,30438]],[[125115,30114]],[[124815,29155]],[[124419,28746]],[[124095,28635]],[[124005,28609]],[[125000,30713]],[[125111,30698]],[[125078,30682]],[[125150,30684]],[[124014,28103]],[[125008,31331]],[[125411,31468]],[[125329,31479]],[[125626,30916]],[[125417,30956]],[[125254,30976]],[[125199,30997]],[[125095,31058]],[[125083,30915]],[[124885,31015]],[[125218,30798]],[[124867,30838]],[[124755,30788]],[[124802,30809]],[[125267,30657]],[[125218,30578]],[[125200,30562]],[[124968,30474]],[[125167,30396]],[[124955,29879]],[[124714,29781]],[[124762,29462]],[[124325,28754]],[[123990,28459]],[[125366,31477]],[[125115,30363]],[[125369,31139]],[[122495,31878]],[[125329,30690]],[[125192,30787]]]},"properties":{"cp":[120.153576,30.287459],"name":"浙江","childNum":45}},{"id":"340000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@^iuLX^"],["@@e©Ehl"],["@@°ZÆëĎµmkǀwÌÕæhºgBĝâqÙĊzÖgņtÀÁĂÆáhEz|WzqD¹°Eŧl{ævÜcA`¤C`|´qxĲkq^³³GšµbíZ¹qpa±ď OH¦Ħx¢gPícOl_iCveaOjChß¸iÝbÛªCC¿mRV§¢A|t^iĠGÀtÚsd]ĮÐDE¶zAb àiödK¡~H¸íæAǿYj{ď¿À½W®£ChÃsikkly]_teu[bFaTign{]GqªoĈMYá|·¥f¥őaSÕėNµñĞ«Im_m¿Âa]uĜp Z_§{Cäg¤°r[_YjÆOdý[I[á·¥Q_nùgL¾mvˊBÜÆ¶ĊJhpc¹O]iŠ]¥ jtsggJÇ§w×jÉ©±EFË­KiÛÃÕYvsm¬njĻª§emná}k«ŕgđ²ÙDÇ¤í¡ªOy×Où±@DñSęćăÕIÕ¿IµĥOjNÕËT¡¿tNæŇàåyķrĕq§ÄĩsWÆßF¶X®¿mwRIÞfßoG³¾©uyHį{Ɓħ¯AFnuPÍÔzVdàôº^Ðæd´oG¤{S¬ćxã}ŧ×Kǥĩ«ÕOEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏFlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbtHĔ~BmlRV_ħTLnñH±DL¼Lªl§Ťa¸ĚlK²\\RòvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóZ ň¶vHrľ\\ÊJuxAT|dmÀO[ÃÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálwKhïgA¢ųÆ©Þ¤OÈm°K´"]],"encodeOffsets":[[[121722,32278]],[[119475,30423]],[[119168,35472]]]},"properties":{"cp":[117.283042,31.86119],"name":"安徽","childNum":3}},{"id":"350000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@zht´]"],["@@aj^~ĆG©O"],["@@ed¨C}}i"],["@@@vPGsQ"],["@@sBzddW]Q"],["@@S¨Q{"],["@@NVucW"],["@@qptBAq"],["@@¸[mu"],["@@Q\\pD]_"],["@@jSwUadpF"],["@@eXª~"],["@@AjvFso"],["@@fT_Çí\\v|ba¦jZÆy°"],["@@IjJi"],["@@wJIx«¼AoNe{M­"],["@@K±¡ÓČäeZ"],["@@k¡¹Eh~c®wBkUplÀ¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧSW¥Qûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġfZda©º²z£NjD°Ötj¶¬ZSÎ~¾c°¶ÐmxO¸¢Pl´SL|¥AȪĖMņĲg®áIJČĒü` QF¬h|ĂJ@zµ |ê³È ¸UÖŬŬÀEttĸr]ðM¤ĶĲHtÏ AĬkvsq^aÎbvdfÊòSD´Z^xPsĂrvƞŀjJd×ŘÉ ®AÎ¦ĤdxĆqAZRÀMźnĊ»İÐZ YXæJyĊ²·¶q§·K@·{sXãô«lŗ¶»o½E¡­«¢±¨Y®Ø¶^AvWĶGĒĢPlzfļtàAvWYãO_¤sD§ssČġ[kƤPX¦`¶®BBvĪjv©jx[L¥àï[F¼ÍË»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³ÁÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮck\\_"]],"encodeOffsets":[[[123250,27563]],[[122541,27268]],[[123020,27189]],[[122916,27125]],[[122887,26845]],[[122808,26762]],[[122568,25912]],[[122778,26197]],[[122515,26757]],[[122816,26587]],[[123388,27005]],[[122450,26243]],[[122578,25962]],[[121255,25103]],[[120987,24903]],[[122339,25802]],[[121042,25093]],[[122439,26024]]]},"properties":{"cp":[119.306239,26.075302],"name":"福建","childNum":18}},{"id":"360000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ĢĨƐgļ¼ÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢûXD®QgÄWiØPÞìºr¤ǆNĠ¢lĄtZoCƞÔºCxrpĠV®Ê{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwȠĚ¦G®ǒĤäTŠÆ~Ħw«|TF¡nc³Ïå¹]ĉđxe{ÎÓvOEm°BƂĨİ|Gvz½ª´HàpeJÝQxnÀW­EµàXÅĪt¨ÃĖrÄwÀFÎ|ňÓMå¼ibµ¯»åDT±m[r«_gmQu~¥V\\OkxtL E¢Ú^~ýêPóqoě±_Êw§ÑªåƗā¼mĉŹ¿NQYBąrwģcÍ¥B­ŗÊcØiIƝĿuqtāwO]³YCñTeÉcaubÍ]trluīBÐGsĵıN£ï^ķqss¿FūūVÕ·´Ç{éĈýÿOER_đûIċâJh­ŅıNȩĕB¦K{Tk³¡OP·wnµÏd¯}½TÍ«YiµÕsC¯iM¤­¦¯P|ÿUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[×zkKN¶Õ»lčÓ{XSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyáV¼Ã~­`gsÙfIƋlę¹e|~udjuTlXµf`¿Jd[\\L²"],"encodeOffsets":[[116689,26234]]},"properties":{"cp":[115.892151,28.676493],"name":"江西","childNum":1}},{"id":"370000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@Xjd]{K"],["@@itbFHy"],["@@HlGk"],["@@TGy"],["@@K¬U"],["@@WdXc"],["@@PtOs"],["@@LnXhc"],["@@ppVu]Or"],["@@cdzAUa"],["@@udRhnCI"],["@@oIpR"],["@@Ľč{fzƤîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞEzVL®öØBkŖÝĐĖ¹ŧ̄±ÀbÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµ¾Z|ZWyFY¨Mf~C¿`à_RÇzwƌfQnny´INoƬèôº|sTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ïWuøCǷë¡ąuhÛ¡^KxC`C\\bÅxì²ĝÝ¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£Č×GDyÃ¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gTğwoɁsMõ³ăAN£MRkmEÊčÛbMjÝGuIZGPģãħE[iµBEuDPÔ~ª¼ęt]ûG§¡QMsğNPŏįzs£Ug{đJĿļā³]ç«Qr~¥CƎÑ^n¶ÆéÎR~Ż¸YI] PumŝrƿIā[xeÇ³L¯v¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛWp["]],"encodeOffsets":[[[123806,39303]],[[123821,39266]],[[123742,39256]],[[123702,39203]],[[123649,39066]],[[123847,38933]],[[123580,38839]],[[123894,37288]],[[123043,36624]],[[123344,38676]],[[123522,38857]],[[123628,38858]],[[118260,36742]]]},"properties":{"cp":[117.000923,36.675807],"name":"山东","childNum":13}},{"id":"410000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ýLùµP³swIÓxcŢĞð´E®ÚPtĴXØxÂ¶@«ŕŕQGYfa[şußǩđš_X³ĳÕčC]kbc¥CS¯ëÍB©÷³­Si_}mYTt³xlàcČzÀD}ÂOQ³ÐTĨ¯ƗòËŖ[hłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`Ƴĕg}V¡om½faÇo³TTj¥tĠRyK{ùÓjuµ{t}uËRivGçJFjµÍyqÎàQÂFewixGw½Yŷpµú³XU½ġyłåkÚwZX·l¢Á¢KzOÎÎjc¼htoDHr|­J½}JZ_¯iPq{tę½ĕ¦Zpĵø«kQĹ¤]MÛfaQpě±ǽ¾]u­Fu÷nčÄ¯ADp}AjmcEÇaª³o³ÆÍSƇĈÙDIzËčľ^KLiÞñ[aA²zzÌ÷D|[íÄ³gfÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÀ«ìUMhTº¨¸ǡîSÔDruÂÇZÖEvPZW~ØÐtĄE¢¦Ðy¸bô´oŬ¬²Ês~]®tªapŎJ¨Öº_Ŕ`Ŗ^Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lGlRjsp¢ED}Fio~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼Pk|m"],"encodeOffsets":[[118256,37017]]},"properties":{"cp":[113.665412,34.757975],"name":"河南","childNum":1}},{"id":"420000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@AB"],["@@lskt"],["@@¾«}{ra®pîÃ\\{øCËyyB±b\\òÝjKL ]ĎĽÌJyÚCƈćÎT´Å´pb©ÈdFin~BCo°BĎÃømv®E^vǾ½Ĝ²RobÜeN^ĺ£R¬lĶ÷YoĖ¥Ě¾|sOr°jY`~I¾®I{GqpCgyl{£ÍÍyPLÂ¡¡¸kWxYlÙæŁĢz¾V´W¶ùŸo¾ZHxjwfxGNÁ³Xéæl¶EièIH ujÌQ~v|sv¶Ôi|ú¢FhQsğ¦SiŠBgÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§cY§HK«Qy]¢wwö¸ïx¼ņ¾Xv®ÇÀµRĠÐHM±cÏdƒǍũȅȷ±DSyúĝ£ŤĀàtÖÿï[îb\\}pĭÉI±Ñy¿³x¯No|¹HÏÛmjúË~TuęjCöAwě¬Rđl¯ Ñb­ŇTĿ_[IčĄʿnM¦ğ\\É[T·k¹©oĕ@A¾wya¥Y\\¥Âaz¯ãÁ¡k¥ne£ÛwE©Êō¶˓uoj_U¡cF¹­[WvP©whuÕyBF`RqJUw\\i¡{jEPïÿ½fćQÑÀQ{°fLÔ~wXgītêÝ¾ĺHd³fJd]HJ²EoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤"]],"encodeOffsets":[[[113712,34000]],[[115612,30507]],[[113649,34054]]]},"properties":{"cp":[114.298572,30.584355],"name":"湖北","childNum":3}},{"id":"430000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@nFTs"],["@@ßÅÆá½ÔXrCOËRïÿĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_U}Ċ}¢pczfþg¤ÇòAVM"],["@@©KA·³CQ±Á«³BUƑ¹AtćOwD]JiØSm¯b£ylXHËÑ±H«C^õľAÅ§¤É¥ïyuǙuA¢^{ÌC´­¦ŷJ£^[ª¿ĕ~ƇN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąMąıuZmZcÒ ĲĪ²SÊǄŶ¨ƚCÖŎªQØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕƪ`PDiÛU¾ÅâìUñBÈ£ýhedy¡oċ`pfmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐ¨XeĈĀ¾Oð Fi ¢|[jVxrIQ_EzAN¦zLU`cªxOTu RLÄ¢dVi`p˔vŎµªÉF~Ød¢ºgİàw¸Áb[¦Zb¦z½xBĖ@ªpºlS¸Ö\\Ĕ[N¥ˀmĎăJ\\ŀ`ňSÚĖÁĐiOĜ«BxDõĚivSÌ}iùÜnÐºG{p°M´wÀÒzJ²ò¨ oTçüöoÛÿñőĞ¤ùTz²CȆȸǎŪƑÐc°dPÎğË¶[È½u¯½WM¡­ÉB·rínZÒ `¨GA¾\\pēXhÃRC­üWGġuTé§ŎÑ©ò³I±³}_EÃħg®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþ¨[]f]Ņ©C}ÁN»hĻħƏĩ"]],"encodeOffsets":[[[115640,30489]],[[112543,27312]],[[116690,26230]]]},"properties":{"cp":[112.982279,28.19409],"name":"湖南","childNum":3}},{"id":"440000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@QdAua"],["@@lxDLo"],["@@sbhNLo"],["@@Ă ā"],["@@WltO[["],["@@Kr]S"],["@@eI]y"],["@@I|Mym"],["@@Û³LS¼Y"],["@@nvºBëui©`¾"],["@@zdÛJw®"],["@@°¯"],["@@a yAª¸ËJIxØ@ĀHAmÃV¡ofuo"],["@@sŗÃÔėAƁZÄ ~°ČPäh"],["@@¶ÝÌvmĞh­ıQ"],["@@HdSjĒ¢D}waru«ZqadYM"],["@@el\\LqqU"],["@@~rMo\\"],["@@f^C"],["@@øPªoj÷ÍÝħXČx°Q¨ıXNv"],["@@gÇƳo[~tly"],["@@EÆC¿"],["@@OP"],["@@wđógĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGO|KPȏŹãŝIŕŭŕ@Óoo¿ē±ß}ŭĲWÈCőâUâǙIğŉ©IĳE×Á³AówXJþ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƂªFbwEÀ©\\¤]ŸI®¥D³|Ë]CöAŤ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºV¸@¾ªR²ĨN]´_eavSivc}p}Đ¼ƌkJÚe th_¸ ºx±ò_xNË²@ă¡ßH©Ùñ}wkNÕ¹ÇO½¿£ĕ]ly_WìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƞV}³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAx»HO£|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEá²\\ķÍ}jYàÙÆſ¿Çdğ·ùTßÇţʄ¡XgWÀǇğ·¿ÃOj YÇ÷Qěi"]],"encodeOffsets":[[[117381,22988]],[[116552,22934]],[[116790,22617]],[[116973,22545]],[[116444,22536]],[[116931,22515]],[[116496,22490]],[[116453,22449]],[[113301,21439]],[[118726,21604]],[[118709,21486]],[[113210,20816]],[[115482,22082]],[[113171,21585]],[[113199,21590]],[[115232,22102]],[[115739,22373]],[[115134,22184]],[[113056,21175]],[[119573,21271]],[[119957,24020]],[[115859,22356]],[[116561,22649]],[[116285,22746]]]},"properties":{"cp":[113.280637,23.125178],"name":"广东","childNum":24}},{"id":"450000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@H TQ§A"],["@@ĨÊªLƊDÎĹĐCǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVlo¤ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³ºDÎńĀìCĜº¦Ċ~nS|gźvZkCÆj°zVÈÁƔ]LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucà÷gÕuíÙćĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűmcih³K~µh¯e]lµélEģEďsmÇŧē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡y¦CezYwa[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ¯TbÜÈk¡ĠvàhÂƄ¢Jî¶²"]],"encodeOffsets":[[[111707,21520]],[[107619,25527]]]},"properties":{"cp":[108.320004,22.82402],"name":"广西","childNum":2}},{"id":"460000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐŘÎ°H¨Ƣb²_Ġ "],"encodeOffsets":[[112750,20508]]},"properties":{"cp":[110.33119,20.031971],"name":"海南","childNum":1}},{"id":"510000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@LqKr"],["@@[ĻéV£_ţġñpG réÏ·~ąSfy×Í·ºſƽiÍıƣıĻmHH}siaX@iÇ°ÁÃ×t«­T¤JJJyJÈ`Ohß¦¡uËhIyCjmÿwZGTiSsOB²fNmsPa{M{õE^Hj}gYpaeu¯oáwHjÁ½M¡pMuåmni{fk\\oÎqCwEZ¼KĝAy{m÷LwO×SimRI¯rKõBS«sFe]fµ¢óY_ÆPRcue°Cbo×bd£ŌIHgtrnyPt¦foaXďxlBowz_{ÊéWiêEGhÜ¸ºuFĈIxf®Y½ĀǙ]¤EyF²ċw¸¿@g¢§RGv»áW`ÃĵJwi]t¥wO­½a[×]`Ãi­üL¦LabbTÀåc}ÍhÆh®BHî|îºÉk­¤Sy£ia©taį·Ɖ`ō¥UhOĝLk}©Fos´JmµlŁuønÑJWÎªYÀïAetTŅÓGË«bo{ıwodƟ½OġÜÂµxàNÖ¾P²§HKv¾]|BÆåoZ`¡Ø`ÀmºĠ~ÌÐ§nÇ¿¤]wğ@srğu~Io[é±¹ ¿ſđÓ@qg¹zƱřaí°KtÇ¤V»Ã[ĩǭƑ^ÇÓ@áťsZÏÅĭƋěpwDóÖáŻneQËq·GCœýS]x·ýq³OÕ¶Qzßti{řáÍÇWŝŭñzÇWpç¿JXĩè½cFÂLiVjx}\\NŇĖ¥GeJA¼ÄHfÈu~¸Æ«dE³ÉMA|bÒćhG¬CMõƤąAvüVéŀ_VÌ³ĐwQj´·ZeÈÁ¨X´Æ¡Qu·»ÕZ³ġqDoy`L¬gdp°şp¦ėìÅĮZ°Iähzĵf²å ĚÑKpIN|Ñz]ń·FU×é»R³MÉ»GM«kiér}Ã`¹ăÞmÈnÁîRǀ³ĜoİzŔwǶVÚ£À]ɜ»ĆlƂ²ĠþTº·àUȞÏʦ¶I«dĽĢdĬ¿»Ĕ×h\\c¬ä²GêëĤł¥ÀǿżÃÆMº}BÕĢyFVvwxBèĻĒ©ĈtCĢɽŠȣ¦āæ·HĽîôNÔ~^¤Ɗu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞŒQìÛÐ@ĞǎRS¤Á§di´ezÝúØã]HqkIþËQÇ¦ÃsÇ¤[E¬ÉŪÍxXƒ·ÖƁİlƞ¹ª¹|XÊwnÆƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§áCNęÎ[ĀÕĪgÖÉªXøx¬½Ů¦¦[NÎLÜUÖ´òrÙŠxR^JkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmDŝuäđđEbee_v¡}ìęǊē}qÉåT¯µRs¡M@}ůaa­¯wvƉåZw\\Z{åû^"]],"encodeOffsets":[[[108815,30935]],[[110617,31811]]]},"properties":{"cp":[104.065735,30.659462],"name":"四川","childNum":2}},{"id":"520000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@G\\lY£in"],["@@q|mc¯tÏVSÎ"],["@@hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǗĦTèƤƺ{¶ÉHÎd¾ŚÊ·OÐjXWrãLyzÉAL¾ę¢bĶėy_qMĔąro¼hĊw¶øV¤w²Ĉ]ÊKx|`ź¦ÂÈdrcÈbe¸`I¼čTF´¼Óýȃr¹ÍJ©k_șl³´_pĐ`oÒh¶pa^ÓĔ}D»^Xy`d[KvJPhèhCrĂĚÂ^Êƌ wZL­Ġ£ÁbrzOIlMMĪŐžËr×ÎeŦtw|¢mKjSǘňĂStÎŦEtqFT¾Eì¬¬ôxÌO¢ K³ŀºäYPVgŎ¦ŊmŞ¼VZwVlz¤£Tl®ctĽÚó{G­AÇge~Îd¿æaSba¥KKûj®_Ä^\\Ø¾bP®¦x^sxjĶI_Ä Xâ¼Hu¨Qh¡À@Ëô}±GNìĎlT¸`V~R°tbÕĊ`¸úÛtÏFDu[MfqGH·¥yAztMFe|R_GkChZeÚ°tov`xbDnÐ{E}ZèxNEÞREn[Pv@{~rĆAB§EO¿|UZ~ìUf¨J²ĂÝÆsªB`s¶fvö¦Õ~dÔq¨¸º»uù[[§´sb¤¢zþF¢ÆÀhÂW\\ıËIÝo±ĭŠ£þÊs}¡R]ěDg´VG¢j±®èºÃmpU[Áëº°rÜbNu¸}º¼`niºÔXĄ¤¼ÔdaµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxŪÒ¢@£ÀEîôruńb[§nWuMÆLl¿]x}ĳ­½"]],"encodeOffsets":[[[112158,27383]],[[112105,27474]],[[112095,27476]]]},"properties":{"cp":[106.713478,26.578343],"name":"贵州","childNum":3}},{"id":"530000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞklD¤øz½ĜàĂŧMÅ|áƆàÊcðÂFÜáŢ¥\\\\ºİøÒÐJĴîD¦zK²ǏÎEh~CD­hMn^ÌöÄ©ČZÀaüfɭyœpį´ěFűk]Ôě¢qlÅĆÙa¶~ÄqêljN¬¼HÊNQ´ê¼VØ¸E^ŃÒyM{JLoÒęæe±Ķygã¯JYÆĭĘëo¥Šo¯hcK«z_prC´ĢÖY¼ v¸¢RÅW³Â§fÇ¸Yi³xR´ďUË`êĿUûuĆBƣöNDH«ĈgÑaB{ÊNF´¬c·Åv}eÇÃGB»If¦HňĕM~[iwjUÁKE¾dĪçWIèÀoÈXòyŞŮÈXâÎŚj|àsRyµÖPr´þ ¸^wþTDŔHr¸RÌmfżÕâCôoxĜƌÆĮÐYtâŦÔ@]ÈǮƒ\\Ī¼Ä£UsÈ¯LbîƲŚºyhr@ĒÔƀÀ²º\\êpJ}ĠvqtĠ@^xÀ£È¨mËÏğ}n¹_¿¢×Y_æpÅA^{½Lu¨GO±Õ½ßM¶wÁĢÛPƢ¼pcĲx|apÌ¬HÐŊSfsðBZ¿©XÏÒKk÷Eû¿SrEFsÕūkóVǥŉiTL¡n{uxţÏhôŝ¬ğōNNJkyPaqÂğ¤K®YxÉƋÁ]āęDqçgOgILu\\_gz]W¼~CÔē]bµogpÑ_oď`´³Țkl`IªºÎȄqÔþ»E³ĎSJ»_f·adÇqÇc¥Á_Źw{L^É±ćxU£µ÷xgĉp»ĆqNē`rĘzaĵĚ¡K½ÊBzyäKXqiWPÏÉ¸½řÍcÊG|µƕƣGË÷k°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ë}ǝeďºȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZï`"],"encodeOffsets":[[104636,22969]]},"properties":{"cp":[102.712251,25.040609],"name":"云南","childNum":1}},{"id":"540000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥cc¡ÙaSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó´ÇĊµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eȤJ¤}Ǿ¡°§¤AÐlc@ĝsªćļđAçwxUuzEÖġ~AN¹ÄÅȀŻ¦¿ģŁéì±Hãd«g[Ø¼ēÀcīľġ¬cJµÐʥVȝ¸ßS¹ý±ğkƁ¼ą^ɛ¤Ûÿb[}¬ōõÃ]ËNm®g@Bg}ÍF±ǐyL¥íCIĳÏ÷Ñį[¹¦[âšEÛïÁÉdƅß{âNÆāŨß¾ě÷yC£k­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©"],"encodeOffsets":[[90849,37210]]},"properties":{"cp":[91.132212,29.660361],"name":"西藏","childNum":1}},{"id":"610000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@p¢ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYǠȰÌTÎ¨ÂW|fcă§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷY¹W@µ÷Kãï³ÛIcñ·VȋÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ċcEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOÿEËßŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ßå¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙgBƕŀrÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|§hoĕ@E±iYd¥OĻ¹S|}F@¾oAO²{tfÜ¢FǂÒW²°BĤh^Wx{@¬­F¸¡ķn£P|ªĴ@^ĠĈæbÔc¶lYi^MicĎ°Â[ävï¶gv@ÀĬ·lJ¸sn|¼u~a]ÆÈtŌºJpþ£KKf~¦UbyäIĺãnÔ¿^­ŵMThĠÜ¤ko¼Ŏìąǜh`[tRd²Ĳ_XPrɲlXiL§à¹H°Ȧqº®QCbAŌJ¸ĕÚ³ĺ§ `d¨YjiZvRĺ±öVKkjGȊÄePĞZmļKÀ[`ösìhïÎoĬdtKÞ{¬èÒÒBÔpĲÇĬJŊ¦±J«Y§@·pHµàåVKepWftsAÅqC·¬ko«pHÆuK@oHĆÛķhxenS³àǍrqƶRbzy¸ËÐl¼EºpĤ¼x¼½~Ğà@ÚüdK^mÌSj"],"encodeOffsets":[[110234,38774]]},"properties":{"cp":[108.948024,34.263161],"name":"陕西","childNum":1}},{"id":"620000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@VuUv"],["@@ũEĠtt~nkh`Q¦ÅÄÜdwAb×ĠąJ¤DüègĺqBqj°lI¡ĨÒ¤úSHbjÎB°aZ¢KJO[|A£Dx}NĂ¬HUnrk kp¼Y kMJn[aGáÚÏ[½rc}aQxOgsPMnUsncZsKúvAtÞġ£®ĀYKdnFw¢JE°Latf`¼h¬we|Æbj}GA·~W`¢MC¤tL©Ĳ°qdfObÞĬ¹ttu`^ZúE`[@Æsîz®¡CƳƜG²R¢RmfwĸgÜą G@pzJM½mhVy¸uÈÔO±¨{LfæU¶ßGĂq\\ª¬²I¥IŉÈīoıÓÑAçÑ|«LÝcspīðÍgtë_õ\\ĉñLYnĝgRǡÁiHLlõUĹ²uQjYi§Z_c¨´ĹĖÙ·ŋIaBD­R¹ȥr¯GºßK¨jWkɱOqWĳ\\a­Q\\sg_ĆǛōëp»£lğÛgSŶN®À]ÓämĹãJaz¥V}Le¤Lýo¹IsŋÅÇ^bz³tmEÁ´a¹cčecÇNĊãÁ\\č¯dNj]jZµkÓdaćå]ğĳ@ ©O{¤ĸm¢E·®«|@Xwg]Aģ±¯XǁÑǳªcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹čIoľu¶uI]vģSQ{UŻÅ}QÂ|Ì°ƅ¤ĩŪU ęĄÌZÒ\\v²PĔ»ƢNHĂyAmƂwVm`]ÈbH`Ì¢²ILvĜH®¤Dlt_¢JJÄämèÔDëþgºƫaʎÌrêYi~ Îİ¤NpÀA¾Ĕ¼bð÷®üszMzÖĖQdȨýv§Tè|ªHÃ¾a¸|Ð ƒwKĢx¦ivr^ÿ ¸l öæfƟĴ·PJv}n\\h¹¶v·À|\\ƁĚN´ĜçèÁz]ġ¤²¨QÒŨTIlªťØ}¼˗ƦvÄùØEÂ«FïËIqōTvāÜŏíÛßÛVj³âwGăÂíNOPìyV³ŉĖýZso§HÑiYw[ß\\X¦¥c]ÔƩÜ·«jÐqvÁ¦m^ċ±R¦΋ƈťĚgÀ»IïĨʗƮ°ƝĻþÍAƉſ±tÍEÕÞāNUÍ¡\\ſčåÒʻĘm ƭÌŹöʥëQ¤µ­ÇcƕªoIýIÉ_mkl³ăƓ¦j¡YzŇi}Msßõīʋ }ÁVm_[n}eı­Uĥ¼ªI{Î§DÓƻėojqYhĹT©oūĶ£]ďxĩǑMĝq`B´ƃ˺Чç~²ņj@¥@đ´ί}ĥtPńÇ¾V¬ufÓÉCtÓ̻¹£G³]ƖƾŎĪŪĘ̖¨ʈĢƂlɘ۪üºňUðǜȢƢż̌ȦǼĤŊɲĖÂ­Kq´ï¦ºĒǲņɾªǀÞĈĂD½ĄĎÌŗĞrôñnN¼â¾ʄľԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpäWÐxnsÀ^ƆwW©¦cÅ¡Ji§vúF¶¨c~c¼īeXǚ\\đ¾JwÀďksãAfÕ¦L}waoZD½Ml«]eÒÅaÉ²áo½FõÛ]ĻÒ¡wYR£¢rvÓ®y®LFLzĈôe]gx}|KK}xklL]c¦£fRtív¦PĤoH{tK"]],"encodeOffsets":[[[108619,36299]],[[108589,36341]]]},"properties":{"cp":[103.823557,36.058039],"name":"甘肃","childNum":2}},{"id":"630000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@InJm"],["@@CÆ½OŃĦsΰ~Ē³¦@@Ņi±è}ШƄ˹A³r_ĞǒNĪĐw¤^ŬĵªpĺSZgrpiƼĘÔ¨C|ÍJ©Ħ»®VĲ~f\\m `UnÂ~ʌĬàöNt~ňjy¢ZiƔ¥Ąk´nl`JÊJþ©pdƖ®È£¶ìRʦźõƮËnʼėæÑƀĎ[¢VÎĂMÖÝÎF²sƊƀÎBļýƞ¯ʘƭðħ¼Jh¿ŦęΌƇ¥²Q]Č¥nuÂÏri¸¬ƪÛ^Ó¦d¥[Wàx\\ZjÒ¨GtpþYŊĕ´zUOëPîMĄÁxH´áiÜUàîÜŐĂÛSuŎrJðÌ¬EFÁú×uÃÎkrĒ{V}İ«O_ÌËĬ©ÓŧSRÑ±§Ģ£^ÂyèçěM³Ƃę{[¸¿uºµ[gt£¸OƤĿéYõ·kĀq]juw¥DĩƍõÇPéÄ½G©ã¤GuȧþRcÕĕNyyût­øï»a½ē¿BMoį£Íj}éZËqbʍƬh¹ìÿÓAçãnIÃ¡I`ks£CG­ěUy×Cy@¶ʡÊBnāzGơMē¼±O÷õJËĚăVĪũƆ£¯{ËL½ÌzżVR|ĠTbuvJvµhĻĖHAëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qĉ¶³ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbĚ°ªiƶGQ¾²x¦PmlŜ[Ĥ¡ΞsĦÔÏâ\\ªÚŒU\\f¢N²§x|¤§xĔsZPòʛ²SÐqF`ªVÞŜĶƨVZÌL`¢dŐIqr\\oäõFÎ·¤»Ŷ×h¹]ClÙ\\¦ďÌį¬řtTӺƙgQÇÓHţĒ´ÃbEÄlbʔC|CŮkƮ[ʼ¬ň´KŮÈΰÌĪ¶ƶlðļATUvdTGº̼ÔsÊDÔveOg"]],"encodeOffsets":[[[105308,37219]],[[95370,40081]]]},"properties":{"cp":[101.778916,36.623178],"name":"青海","childNum":2}},{"id":"640000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@KëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčËnL]ûcÙß@ĝ¾}w»»oģF¹»kÌÏ·{zP§B­¢íyÅt@@á]Yv_ssģ¼ißĻL¾ġsKD£¡N_X¸}B~HaiÅf{«x»ge_bsKF¯¡IxmELcÿZ¤­ĢÝsuBLùtYdmVtNmtOPhRw~bd¾qÐ\\âÙH\\bImlNZ»loqlVmGā§~QCw¤{A\\PKNY¯bFkC¥sks_Ã\\ă«¢ħkJi¯rrAhĹûç£CUĕĊ_ÔBixÅÙĄnªÑaM~ħpOu¥sîeQ¥¤^dkKwlL~{L~hw^ófćKyE­K­zuÔ¡qQ¤xZÑ¢^ļöÜ¾Ep±âbÊÑÆ^fk¬NC¾YpxbK~¥eÖäBlt¿Đx½I[ĒǙWf»Ĭ}d§dµùEuj¨IÆ¢¥dXªƅx¿]mtÏwßRĶX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjÕ"],["@@mfwěwMrŢªv@G"]],"encodeOffsets":[[[109366,40242]],[[108600,36303]]]},"properties":{"cp":[106.278179,38.46637],"name":"宁夏","childNum":2}},{"id":"650000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@QØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơʃĽá½M»òmqóŘĝčË¾ăCćāƿÝɽ©ǱŅ¹đ¥³ðLrÁ®ɱĕģŉǻ̋ȥơŻǛȡVï¹Ň۩ûkɗġƁ§ʇė̕ĩũƽō^ƕUv£ƁQïƵkŏ½ΉÃŭÇ³LŇʻ«ƭ\\lŭD{ʓDkaFÃÄa³ŤđÔGRÈƚhSӹŚsİ«ĐË[¥ÚDkº^Øg¼ŵ¸£EÍöůŉT¡c_ËKYƧUśĵÝU_©rETÏʜ±OñtYwē¨{£¨uM³x½şL©Ùá[ÓÐĥ Νtģ¢\\śnkOw¥±T»ƷFɯàĩÞáB¹ÆÑUwŕĽw[mG½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³àjĨoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãØ"],"encodeOffsets":[[88824,50096]]},"properties":{"cp":[87.617733,43.792818],"name":"新疆","childNum":1}},{"id":"110000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ĽOÁûtŷmiÍt_H»Ĩ±d`¹­{bwYr³S]§§o¹qGtm_SŧoaFLgQN_dV@Zom_ć\\ßcÂ±x¯oœRcfe£o§ËgToÛJíĔóu|wP¤XnO¢ÉŦ¯rNÄā¤zâŖÈRpŢZÚ{GrFt¦Òx§ø¹RóäV¤XdżâºWbwŚ¨Ud®bêņ¾jnŎGŃŶnzÚSeîĜZczî¾i]ÍQaúÍÔiþĩȨWĢü|Ėu[qb[swP@ÅğP¿{\\¥A¨ÏÑ¨j¯X\\¯MKpA³[Hīu}}"],"encodeOffsets":[[120023,41045]]},"properties":{"cp":[116.405285,39.904989],"name":"北京","childNum":1}},{"id":"120000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ŬgX§Ü«E¶FÌ¬O_ïlÁgz±AXeµÄĵ{¶]gitgIj·¥îakS¨ÐƎk}ĕ{gBqGf{¿aU^fIư³õ{YıëNĿk©ïËZŏR§òoY×Ógcĥs¡bġ«@dekąI[nlPqCnp{ō³°`{PNdƗqSÄĻNNâyj]äÒD ĬH°Æ]~¡HO¾X}ÐxgpgWrDGpù^LrzWxZ^¨´T\\|~@IzbĤjeĊªz£®ĔvěLmV¾Ô_ÈNW~zbĬvG²ZmDM~~"],"encodeOffsets":[[120237,41215]]},"properties":{"cp":[117.190182,39.125596],"name":"天津","childNum":1}},{"id":"310000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@ɧư¬EpƸÁxc"],["@@©ª"],["@@MA"],["@@QpİE§ÉC¾"],["@@bŝÕÕEȣÚƥêImɇǦèÜĠÚÃƌÃ͎ó"],["@@ǜûȬɋŭ×^sYɍDŋŽąñCG²«ªč@h_p¯A{oloY¬j@Ĳ`gQÚhr|ǀ^MĲvtbe´R¯Ô¬¨Yô¤r]ìƬį"]],"encodeOffsets":[[[124702,32062]],[[124547,32200]],[[124808,31991]],[[124726,32110]],[[124903,32376]],[[124438,32149]]]},"properties":{"cp":[121.472644,31.231706],"name":"上海","childNum":6}},{"id":"500000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@vjG~nGŘŬĶȂƀƾ¹¸ØÎezĆT¸}êÐqHðqĖä¥^CÆIj²p\\_ æüY|[YxƊæu°xb®Űb@~¢NQt°¶Sæ Ê~rǉĔëĚ¢~uf`faĔJåĊnÖ]jƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMûƱ½~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƅġ^ÖÛbÙŽŏml½SêqDu[RãË»ÿw`»y¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg`d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVFI±G^Ic´ecGĹÞ½sëĬhxW}KÓe­XsbkF¦LØgTkïƵNï¶}Gyw\\oñ¡nmĈzj@Óc£»Wă¹Ój_m»¹·~MvÛaq»­ê\\ÂoVnÓØÍ²«bq¿efE Ĝ^Q~ Évýş¤²ĮpEİ}zcĺL½¿gÅ¡ýE¡ya£³t\\¨\\vú»¼§·Ñr_oÒý¥u_n»_At©ÞÅ±ā§IVeëY}{VPÀFA¨ąB}q@|Ou\\FmQFÝMwå}]|FmÏCawu_p¯sfÙgYDHl`{QEfNysB¦zG¸rHeN\\CvEsÐùÜ_·ÖĉsaQ¯}_UxÃđqNH¬Äd^ÝŰR¬ã°wećJE·vÝ·HgéFXjÉê`|ypxkAwWĐpb¥eOsmzwqChóUQl¥F^lafanòsrEvfQdÁUVfÎvÜ^eftET¬ôA\\¢sJnQTjPØxøK|nBzĞ»LYFDxÓvr[ehľvN¢o¾NiÂxGpâ¬zbfZo~hGi]öF||NbtOMn eA±tPTLjpYQ|SHYĀxinzDJÌg¢và¥Pg_ÇzIIII£®S¬ØsÎ¼£N"],["@@ifjN@s"]],"encodeOffsets":[[[109628,30765]],[[111725,31320]]]},"properties":{"cp":[106.504962,29.533155],"name":"重庆","childNum":2}},{"id":"810000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@AlBk"],["@@mn"],["@@EpFo"],["@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÈc"],["@@rMUwAS®e"]],"encodeOffsets":[[[117111,23002]],[[117072,22876]],[[117045,22887]],[[116975,23082]],[[116882,22747]]]},"properties":{"cp":[114.173355,22.320048],"name":"香港","childNum":5}},{"id":"820000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@kÊd°å§s"],"encodeOffsets":[[116279,22639]]},"properties":{"cp":[113.54909,22.198951],"name":"澳门","childNum":1}}],"UTF8Encoding":true});
}));

/***/ })

});
//# sourceMappingURL=flowDistribution.js.map