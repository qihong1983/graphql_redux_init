webpackJsonp([1],{

/***/ 2136:
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

var _echarts = __webpack_require__(428);

var _echarts2 = _interopRequireDefault(_echarts);

var _chartConfigs = __webpack_require__(2152);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(429);

var _nprogress = __webpack_require__(2148);

var _nprogress2 = _interopRequireDefault(_nprogress);

__webpack_require__(2213);

var _profileList = __webpack_require__(2231);

var actionCreators = _interopRequireWildcard(_profileList);

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

/**
 * 用户概况列表页
 * @class ProfileList
 * @constructor
 */
var ProfileList = function (_React$Component) {
  _inherits(ProfileList, _React$Component);

  function ProfileList(props) {
    _classCallCheck(this, ProfileList);

    var _this = _possibleConstructorReturn(this, (ProfileList.__proto__ || Object.getPrototypeOf(ProfileList)).call(this, props));

    _this.state = {
      visible: false
    };

    return _this;
  }

  _createClass(ProfileList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      // this.props.router.push('/user/list');


      _nprogress2.default.start();

      //获取渠道组列表
      this.getGroupList();

      //获取渠道列表
      this.setChannelList();

      //获取表格数据
      this.setTable();

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelCategory: this.props.profileList.Param.channelCategory,
        channelName: this.props.profileList.Param.channelName,
        tab: this.props.profileList.ClickTab.clickTab,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate
      };

      this.props.clickTab(data);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _nprogress2.default.done();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps) {

      this.getChartShow();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.profileList.Result.excelData != this.props.profileList.Result.excelData) {
        var downloadTitles = (0, _channelManagerUtil.dealDownloadTitle)(this.props.profileList.TableColumns.tableColumns);
        var helperColumns = (0, _channelManagerUtil.dealDownloadColumns)(this.props.profileList.TableColumns.tableColumns);
        var downloadDatas = (0, _channelManagerUtil.dealDownloadData)(nextProps.profileList.Result.excelData, helperColumns);

        (0, _channelManagerUtil.downloadExcle)(downloadDatas, downloadTitles, this.fileName);
      }
    }

    /**
     * 获取表格数据
     * @method setTable
     */

  }, {
    key: 'setTable',
    value: function setTable() {

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelName: this.props.profileList.Param.channelName,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate,
        channelCategory: this.props.profileList.Param.channelCategory,
        offset: this.props.profileList.Pagination.current,
        limit: this.props.profileList.Pagination.pageSize,
        type: this.props.profileList.Param.type
      };

      this.props.getTable(data);
    }

    /**
     * 获取渠道列表
     * @method getChannelList
     */

  }, {
    key: 'setChannelList',
    value: function setChannelList() {

      var channelListData = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelCategory: this.props.profileList.Param.channelCategory,
        channelName: this.props.profileList.Param.channelName
      };

      this.props.getChannelList(channelListData);
    }

    /**
     * 获取渠道组
     * @method getGroupList
     */

  }, {
    key: 'getGroupList',
    value: function getGroupList() {
      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelCategory: this.props.profileList.Param.channelCategory
      };

      this.props.getGroupList(data);
    }

    /**
     * Table 回调方法
     * @method handleTableChange
     * @param pagination {Object} 分页信息
     * @param filters {Object} 搜索信息
     * @param sorter {Object} 排序信息
     */

  }, {
    key: 'handleTableChange',
    value: function handleTableChange(pagination, filters, sorter) {

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelName: this.props.profileList.Param.channelName,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate,
        channelCategory: this.props.profileList.Param.channelCategory,
        offset: pagination.current,
        limit: pagination.pageSize,
        type: this.props.profileList.Param.type,
        channel: this.props.profileList.Channel.channel

        //设置分页
      };this.props.setPagination(data);
      // }
    }

    /**
     * 对比弹出层
     * @method showModal
     */

  }, {
    key: 'showModal',
    value: function showModal(e) {
      this.setState({
        visible: true
      });
    }

    /**
     * 对比弹出层确认添加
     * @method handleOk
     */

  }, {
    key: 'handleOk',
    value: function handleOk(e) {

      this.setState({
        visible: false
      });
    }
    /**
     * 对比弹出层取消
     * @method handleCancel
     */

  }, {
    key: 'handleCancel',
    value: function handleCancel(e) {

      this.setState({
        visible: false
      });
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
        appCode: this.props.profileList.Param.appCode,
        channelGroup: value,
        channelCategory: this.props.profileList.Param.channelCategory,
        channelName: ""
      };

      this.props.clickGroupList(data, this.props.getChannelList);
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
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelCategory: this.props.profileList.Param.channelCategory,
        channelName: value
      };

      this.props.getChannelList(data);
    }

    /**
     * 切换tab
     * @method changeTab
     * @param {Number} id
     */

  }, {
    key: 'changeTab',
    value: function changeTab(id) {
      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelCategory: this.props.profileList.Param.channelCategory,
        channelName: this.props.profileList.Param.channelName,
        tab: id,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate
      };

      this.props.clickTab(data);
    }

    /** 
     * 切换汇总、明细、单渠道
     * @method setType
     * @param e {Object} 点击事件
     */

  }, {
    key: 'setType',
    value: function setType(e) {

      var id = parseInt(e.currentTarget.dataset.id, 10);

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelName: this.props.profileList.Param.channelName,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate,
        channelCategory: this.props.profileList.Param.channelCategory,
        offset: this.props.profileList.Pagination.current,
        limit: this.props.profileList.Pagination.pageSize,
        type: id
      };

      this.props.setType(data);
    }

    /**
     * 显示汇总、明细
     * @method getTypeTpl
     */

  }, {
    key: 'getTypeTpl',
    value: function getTypeTpl() {
      var arr = [];
      if (this.props.profileList.Param.type == 1) {
        arr.push(_react2.default.createElement(
          _antd.Button,
          { key: 1, type: 'primary' },
          '\u6C47\u603B'
        ));

        arr.push(_react2.default.createElement(
          _antd.Button,
          { key: 2, type: 'default', 'data-id': 2, onClick: this.setType.bind(this) },
          '\u660E\u7EC6'
        ));
      } else if (this.props.profileList.Param.type == 2 || this.props.profileList.Param.type == 3) {

        arr.push(_react2.default.createElement(
          _antd.Button,
          { key: 1, type: 'defualt', 'data-id': 1, onClick: this.setType.bind(this) },
          '\u6C47\u603B'
        ));

        arr.push(_react2.default.createElement(
          _antd.Button,
          { key: 2, 'data-id': 2, onClick: this.setType.bind(this), type: 'primary' },
          '\u660E\u7EC6'
        ));
      }

      return arr;
    }

    /**
     * 设置单渠道
     * @method channelDetail
     */

  }, {
    key: 'channelDetail',
    value: function channelDetail(e) {

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelName: e.currentTarget.text,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate,
        channelCategory: this.props.profileList.Param.channelCategory,
        offset: this.props.profileList.Pagination.current,
        limit: this.props.profileList.Pagination.pageSize,
        type: this.props.profileList.Param.type
      };

      this.props.channelDetail(data);
    }

    /**
     * 单渠道列表格式转换
     * @method renderTableData 
     */

  }, {
    key: 'renderTableData',
    value: function renderTableData() {
      var _this2 = this;

      var arr = [];
      if (this.props.profileList.Param.type == 2) {
        this.props.profileList.TableColumns.tableColumns.map(function (v, k) {

          if (v.dataIndex == 'channel') {
            v.render = function (text, record) {
              return _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', onClick: _this2.channelDetail.bind(_this2) },
                text
              );
            };
          }
          arr.push(v);
        });
      } else {
        arr = this.props.profileList.TableColumns.tableColumns;
      }

      return arr;
    }

    /**
     * 显示面包屑
     * @method getBreadCurmb 面包屑
     */

  }, {
    key: 'getBreadCurmb',
    value: function getBreadCurmb() {
      var arr = [];

      arr.push(_react2.default.createElement(
        _antd.Breadcrumb.Item,
        { key: this.props.profileList.Param.type },
        '\u6570\u636E\u660E\u7EC6'
      ));
      if (this.props.profileList.Param.type == 3) {
        arr.push(_react2.default.createElement(
          _antd.Breadcrumb.Item,
          { key: this.props.profileList.Param.type },
          _react2.default.createElement(
            'a',
            { href: 'javascript:void(0);', 'data-id': 2, onClick: this.setType.bind(this) },
            '\u660E\u7EC6'
          )
        ));
        arr.push(_react2.default.createElement(
          _antd.Breadcrumb.Item,
          { key: this.props.profileList.Channel.channel },
          this.props.profileList.Channel.channel
        ));
      } else if (this.props.profileList.Param.type == 2) {
        arr.push(_react2.default.createElement(
          _antd.Breadcrumb.Item,
          { key: this.props.profileList.Param.type },
          '\u660E\u7EC6'
        ));
      } else {
        arr.push(_react2.default.createElement(
          _antd.Breadcrumb.Item,
          { key: this.props.profileList.Param.type },
          '\u6C47\u603B'
        ));
      }

      return arr;
    }
  }, {
    key: 'getChartsName',
    value: function getChartsName(data) {

      var name = '全部';

      if (data.channelName) {
        name = data.channelName;
      } else if (data.channelGroup) {
        name = data.channelGroup;
      } else if (data.channelCategory) {
        name = data.channelCategory == '1' ? '线上' : '线下';
      } else if (data.appCode) {
        name = data.appCode == '24' ? 'Android' : 'iOS';
      }

      return name;
    }

    /**
     * 显示哪个tab数据
     * @method getChartShow
     */

  }, {
    key: 'getChartShow',
    value: function getChartShow() {
      var tabId = this.props.profileList.ClickTab.clickTab;
      var name = '1';
      // if (tabId == '1') {
      //   name = '新增用户';
      // } else if (tabId == '2') {
      //   name = '用户质量';
      // } else if (tabId == '3') {
      //   name = '活跃用户';
      // } else if (tabId == '4') {
      //   name = '回访用户';
      // } else if (tabId == '5') {
      //   name = '流失用户';
      // } else if (tabId == '6') {
      //   name = '回归用户';
      // } else if (tabId == '7') {
      //   name = '迁出用户';
      // }

      name = this.props.profileList.ClickTab.legendName;

      if (this.props.profileList.ChartsResults.chartResult.length != 0 && this.props.profileList.ChartsResults.chartResult[0].value.length != 0) {
        var series = [];
        series.push({
          "name": name,
          "type": "line",
          "stack": name,
          "data": this.props.profileList.ChartsResults.chartResult[0].value
        });

        var data = {
          "names": [name],
          "xAxis": this.props.profileList.ChartsResults.chartResult[0].key,
          "series": series
        };

        var myChart = _echarts2.default.init(this.refs['charts' + tabId]);
        var config = (0, _chartConfigs.Line)(data);
        myChart.setOption(config);
        window.onresize = myChart.resize;
      } else {
        // if (this.props.flowDistribution.chartsNoData8) {
        this.refs['charts' + tabId].innerHTML = '<div style="text-align:center">没有查询到相关数据</div>';
        // }
      }
    }

    /**
     * 切换操作系统 
     * @method changeOs
     * @param id {Number} id
     */

  }, {
    key: 'changeOs',
    value: function changeOs(id) {
      var data = {
        appCode: id,
        channelGroup: "",
        channelCategory: "",
        channelName: ""
      };

      this.props.changeOs(data, this.props.getChannelList, this.props.getGroupList);
    }

    /**
     * 切换线上线下
     * @method changeChannelCategory
     * @param id {Number} id
     */

  }, {
    key: 'changeChannelCategory',
    value: function changeChannelCategory(id) {

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: "",
        channelCategory: id,
        channelName: ""
      };

      this.props.changeChannelCategory(data, this.props.getChannelList, this.props.getGroupList);
    }

    /**
     * 渲染renderGroupList
     * @method renderGroupList
     * @return arr {Array} [{},{}]
     */

  }, {
    key: 'renderGroupList',
    value: function renderGroupList() {
      var arr = [];

      this.props.profileList.ChannelGroupList.channelGroupList.map(function (v, k) {
        arr.push(_react2.default.createElement(
          Option,
          { key: v.id, value: v.channelName },
          v.channelName
        ));
      });

      return arr;
    }

    /**
     * 渲染渠道列表
     * @method getChannelList
     */

  }, {
    key: 'getChannelList',
    value: function getChannelList() {

      var arr = [];

      this.props.profileList.channelList.channelList.map(function (v, k) {
        arr.push(_react2.default.createElement(
          Option,
          { key: v.channelName, value: v.channelName },
          v.channelName
        ));
      });

      return arr;
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

      if (dateString[1] > this.props.profileList.Param.maxDate) {

        _antd.notification['error']({
          message: '日期错误',
          description: '超出日期选择范围'
        });
      } else {
        this.props.setDate(this.props.profileList.Param, dateString);
      }
    }

    /** 
     * 查询按扭
     * @method clickQuery
     * @param e {Object}
     */

  }, {
    key: 'clickQuery',
    value: function clickQuery(e) {

      //type 请求
      var setTypeData = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelName: this.props.profileList.Param.channelName,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate,
        channelCategory: this.props.profileList.Param.channelCategory,
        offset: this.props.profileList.Pagination.current,
        limit: this.props.profileList.Pagination.pageSize,
        type: this.props.profileList.Param.type
      };

      this.props.setType(setTypeData);

      var data = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelCategory: this.props.profileList.Param.channelCategory,
        channelName: this.props.profileList.Param.channelName,
        tab: this.props.profileList.ClickTab.clickTab,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate
      };

      this.props.clickTab(data);
    }
  }, {
    key: 'getDownloadName',
    value: function getDownloadName(data) {
      var prefix = '用户概况-';
      var fileName = '全部';

      var type = '汇总';

      if (data.type == 1) {
        type = '汇总';
      } else if (data.type == 2) {
        type = '明细';
      } else {
        type = '迁出用户';
      }

      if (data.channelName) {
        fileName = data.channelName;
      } else if (data.channelGroup) {
        fileName = data.channelGroup;
      } else if (data.channelCategory) {
        fileName = data.channelCategory == '1' ? '线上' : '线下';
      } else if (data.appCode) {
        fileName = data.appCode == '24' ? 'Android' : 'iOS';
      }

      return prefix + fileName + '-' + type + '-(' + data.startDate + '至' + data.endDate + ').xlsx';
    }
  }, {
    key: 'downloadExcel',
    value: function downloadExcel() {

      this.fileName = this.getDownloadName(this.props.profileList.Param);

      var downExcelData = {
        appCode: this.props.profileList.Param.appCode,
        channelGroup: this.props.profileList.Param.channelGroup,
        channelName: this.props.profileList.Param.channelName,
        startDate: this.props.profileList.Param.startDate,
        endDate: this.props.profileList.Param.endDate,
        channelCategory: this.props.profileList.Param.channelCategory,
        offset: this.props.profileList.Pagination.current,
        limit: this.props.profileList.Pagination.pageSize,
        type: this.props.profileList.Param.type
      };

      this.props.getDownLoadData(downExcelData);
    }
  }, {
    key: 'render',
    value: function render() {

      var columns = this.renderTableData();

      var targetColumns = (0, _utils.dealConfigColumns)(columns);

      var arr = [1, 2, 3];

      var liList = [];
      arr.map(function (v, k) {

        // console.log(v,k);
        liList.push(_react2.default.createElement(
          'li',
          null,
          v
        ));
      });

      return _react2.default.createElement(
        _antd.Layout,
        { style: { marginLeft: 180, position: "relative", marginTop: "60px", overflow: "hidden" } },
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
                  value: this.props.profileList.Param.appCode,
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
                  placeholder: 'Select a option and change input text above',
                  dropdownMatchSelectWidth: true,
                  value: this.props.profileList.Param.channelCategory,
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
                  value: this.props.profileList.Param.channelGroup,
                  className: 'channelGroup',
                  optionFilterProp: 'children',
                  onChange: this.handleChange.bind(this) },
                _react2.default.createElement(
                  Option,
                  { value: '' },
                  '\u5168\u90E8'
                ),
                this.renderGroupList()
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
                  value: this.props.profileList.Param.channelName,
                  filterOption: false,
                  onChange: this.searchChannel.bind(this)
                },
                this.getChannelList()
              )
            ),
            _react2.default.createElement(
              FormItem,
              { label: '' },
              _react2.default.createElement(RangePicker, {
                value: [(0, _moment2.default)(this.props.profileList.Param.startDate, dateFormat), (0, _moment2.default)(this.props.profileList.Param.endDate, dateFormat)],
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
            { onChange: this.changeTab.bind(this), type: 'card', activeKey: this.props.profileList.ClickTab.clickTab + '' },
            _react2.default.createElement(
              TabPane,
              { tab: '\u65B0\u589E\u7528\u6237', key: '1' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart1', ref: 'charts1', style: { width: "100%", minHeight: "300px" } },
                  '\u65B0\u589E\u7528\u6237'
                )
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u7528\u6237\u8D28\u91CF', key: '2' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart2', ref: 'charts2', style: { width: "100%", minHeight: "300px" } },
                  '\u7528\u6237\u6982\u51B5'
                )
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u6D3B\u8DC3\u7528\u6237', key: '3' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart3', ref: 'charts3', style: { width: "100%", minHeight: "300px" } },
                  '\u6D3B\u8DC3\u7528\u6237'
                )
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u56DE\u8BBF\u7528\u6237', key: '4' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart4', ref: 'charts4', style: { width: "100%", minHeight: "300px" } },
                  '\u56DE\u8BBF\u7528\u6237'
                )
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u6D41\u5931\u7528\u6237', key: '5' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart5', ref: 'charts5', style: { width: "100%", minHeight: "300px" } },
                  '\u6D41\u5931\u7528\u6237'
                )
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u56DE\u5F52\u7528\u6237', key: '6' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart6', ref: 'charts6', style: { width: "100%", minHeight: "300px" } },
                  '\u56DE\u5F52\u7528\u6237'
                )
              )
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u8FC1\u51FA\u7528\u6237', key: '7' },
              _react2.default.createElement(
                _antd.Spin,
                { spinning: this.props.profileList.ChartLoading.chartLoading },
                _react2.default.createElement(
                  'div',
                  { id: 'chart7', ref: 'charts7', style: { width: "100%", minHeight: "300px" } },
                  '\u8FC1\u51FA\u7528\u6237'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          Content,
          { className: 'channel_table' },
          _react2.default.createElement(
            'div',
            { style: { width: "100%" }, className: 'clearfix' },
            _react2.default.createElement(
              _antd.Breadcrumb,
              { style: { float: "left", height: "28px", lineHeight: "28px" } },
              this.getBreadCurmb()
            ),
            _react2.default.createElement(
              _antd.Button,
              { type: 'primary', style: { float: "right" }, onClick: this.downloadExcel.bind(this), icon: 'download' },
              '\u4E0B\u8F7D'
            ),
            _react2.default.createElement(
              ButtonGroup,
              { style: { marginBottom: "20px", float: "right", marginRight: "10px" } },
              this.getTypeTpl()
            )
          ),
          _react2.default.createElement('div', null),
          _react2.default.createElement(_antd.Table, {
            loading: this.props.profileList.Loading.loading,
            locale: { "emptyText": "暂无数据" },
            columns: targetColumns,
            dataSource: this.props.profileList.Result.tableList,
            pagination: this.props.profileList.Pagination,
            onChange: this.handleTableChange.bind(this)
          })
        )
      );
    }
  }]);

  return ProfileList;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
  return {
    profileList: state.Reducer.profileList
  };
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {

  //全量
  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProfileList);

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

/***/ 2167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.overviewOut = undefined;

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _addKey = __webpack_require__(2214);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 单渠道接口
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
var overviewOut = function overviewOut(data, dispatch) {

	//改变loading
	dispatch({
		type: "PROFILELIST_LOADING",
		payload: true
	});

	//发送请求
	(0, _reqwest2.default)({
		url: '/data/overview/out.do',
		method: 'post',
		data: data,
		type: 'json',
		header: {
			"aaa": "bbb"
		}
	}).then(function (msg) {
		if (msg.status) {
			dispatch({
				type: "PROFILE_LIST_TABLE",
				payload: (0, _addKey.addKey)(msg.data, 'huizhong-')
			});

			dispatch({
				type: "PROFILE_LIST_TOTAL",
				payload: msg.total
			});

			dispatch({
				type: "PROFILELIST_LOADING",
				payload: false
			});
		} else {
			if (msg.code == -1) {
				alert(-1);
				window.location.href = "/";
			}
		}
	});
};

//给Table 组件数据加key
exports.overviewOut = overviewOut;

/***/ }),

/***/ 2196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTableData = undefined;

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _addKey = __webpack_require__(2214);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 汇总和明细
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
var getTableData = function getTableData(data, dispatch) {

	//更新表格loading
	dispatch({
		type: "PROFILELIST_LOADING",
		payload: true
	});

	//发送请求
	(0, _reqwest2.default)({
		url: '/data/overview/list.do?type=' + data.type,
		method: 'post',
		data: data,
		type: 'json',
		header: {
			"aaa": "bbb"
		}
	}).then(function (msg) {
		if (msg.status) {

			dispatch({
				type: "PROFILE_LIST_TABLE",
				payload: (0, _addKey.addKey)(msg.data, 'huizhong-')
			});

			dispatch({
				type: "PROFILE_LIST_TOTAL",
				payload: msg.total
			});

			dispatch({
				type: "PROFILELIST_LOADING",
				payload: false
			});
		} else {
			if (msg.code == -1) {
				alert(-1);
				window.location.href = "/";
			}
		}
	});
};

//给Table 组件数据加key
exports.getTableData = getTableData;

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

/***/ 2214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 用于antdesigns Table数据渲染的key
 * @method addKey
 * @param data {Array} 数据
 * @param str {Array} 标识
 * @return arr {Array} [{}]
 */
function addKey(data, str) {
	var arr = [];

	data.map(function (v, k) {
		v.key = str + k;
		arr.push(v);
	});

	return arr;
}

exports.addKey = addKey;

/***/ }),

/***/ 2215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.chartsResult = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(110);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLegendName = function getLegendName(data) {
	var name = '全部';

	if (data.channelName) {
		name = data.channelName;
	} else if (data.channelGroup) {
		name = data.channelGroup;
	} else if (data.channelCategory) {
		name = data.channelCategory == '1' ? '线上' : '线下';
	} else if (data.appCode) {
		name = data.appCode == '24' ? 'Android' : 'iOS';
	}

	return name;
};

/**
 * 单渠道接口
 * @method getTableData
 * @param data {Object} 参数
 * @param dispatch {Function} 触发改变状态
 */
var chartsResult = function chartsResult(data, dispatch) {

	dispatch({
		type: "PROFILELIST_CHARTLOADING",
		payload: true
	});

	//发送请求
	(0, _reqwest2.default)({
		url: '/data/overview/chart.do',
		method: 'post',
		data: data,
		type: 'json',
		header: {
			"aaa": "bbb"
		}
	}).then(function (msg) {
		if (msg.status) {

			dispatch({
				type: "PROFILELIST_LEGENDNAME",
				payload: getLegendName(data)
			});

			dispatch({
				type: "PROFILELIST_CHARTSRESULT",
				payload: msg.data
			});

			dispatch({
				type: "PROFILELIST_CHARTLOADING",
				payload: false
			});
		} else {

			_antd.notification['error']({
				message: '获取图表',
				description: msg.msg
			});
		}

		if (msg.code == -1) {
			alert(-1);
			window.location.href = "/";
		}
	}).fail(function (err, msg) {

		_antd.notification['error']({
			message: '获取图表',
			description: JSON.stringify(err)
		});
	});
};

exports.chartsResult = chartsResult;

/***/ }),

/***/ 2223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//汇总和明细接口
// import {
// 	getChannelList
// } from './getChannelList';

/**
 * 切换线上线下
 * @method changeChannelCategory
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
var changeChannelCategory = function changeChannelCategory(data, getChannelList, getGroupList) {

	return function (dispatch) {

		dispatch({
			type: "PROFILELIST_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		//初始化渠道组
		dispatch({
			type: "PROFILELIST_CHANNELGROUP",
			payload: data.channelGroup
		});

		//初始化渠道
		dispatch({
			type: "PROFILELIST_CHANNELNAME",
			payload: data.channelName
		});

		//获取渠道列表
		var channelListdata = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName
		};

		getChannelList(channelListdata);

		//获取渠道组列表
		var channelGroupData = {
			appCode: data.appCode,
			channelCategory: data.channelCategory
		};

		getGroupList(channelGroupData);
	};
};

exports.changeChannelCategory = changeChannelCategory;

/***/ }),

/***/ 2224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//单渠道接口
// import {
// 	clickGroupList
// } from './clickGroupList';

//汇总和明细接口
// import {
// 	getChannelList
// } from './getChannelList';

/**
 * 切换操作系统
 * @method changeOs
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
var changeOs = function changeOs(data, getChannelList, getGroupList) {

	return function (dispatch) {

		// {
		// 	appCode: id,
		// 	channelGroup: "",
		// 	channelCategory: "",
		// 	channelName: ""
		// }

		//切换 appCode
		dispatch({
			type: "PROFILELIST_APPCODE",
			payload: data.appCode
		});

		//初始化渠道组
		dispatch({
			type: "PROFILELIST_CHANNELGROUP",
			payload: data.channelGroup
		});

		//初始化渠道
		dispatch({
			type: "PROFILELIST_CHANNELNAME",
			payload: data.channelName
		});

		//初始化线上线下
		dispatch({
			type: "PROFILELIST_CHANNELCATEGORY",
			payload: data.channelCategory
		});

		//获取渠道列表
		var channelListdata = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName
		};

		getChannelList(channelListdata);

		//获取渠道组列表
		var channelGroupData = {
			appCode: data.appCode,
			channelCategory: data.channelCategory
		};

		getGroupList(channelGroupData);
	};
};

exports.changeOs = changeOs;

/***/ }),

/***/ 2225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.channelDetail = undefined;

var _overviewOut = __webpack_require__(2167);

/**
 * 单渠道
 * @method channelDetail 
 * @param param {Object} 请求参数
 * @param channel {String} 单渠道名称 
 */
var channelDetail = function channelDetail(data) {

	return function (dispatch) {

		//设置单渠道请求类型
		dispatch({
			type: "PROFILELIST_TYPE",
			payload: 3
		});

		//设置单渠道请求类型
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: 1
		});

		//设置table表头
		dispatch({
			type: "PROFILELIST_TABLE_COLUMNS",
			payload: [{
				title: '日期',
				dataIndex: 'day'
			}, {
				title: '迁入渠道',
				dataIndex: 'newChannel'
			}, {
				title: '迁出用户',
				dataIndex: 'countUser'
			}]
		});
		//设置单渠道
		dispatch({
			type: "PROFILELIST_CHANNEL",
			payload: data.channelName
		});

		//发送单渠道请求
		(0, _overviewOut.overviewOut)(data, dispatch);
	};
}; //单渠道
exports.channelDetail = channelDetail;

/***/ }),

/***/ 2226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 切换操作系统
 * @method clickGroupList
 * @param data {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
var clickGroupList = function clickGroupList(data, getChannelList) {

	return function (dispatch) {

		dispatch({
			type: "PROFILELIST_CHANNELGROUP",
			payload: data.channelGroup
		});

		var channelListdata = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName
		};

		getChannelList(channelListdata);
	};
};

exports.clickGroupList = clickGroupList;

/***/ }),

/***/ 2227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickTab = undefined;

var _chartsResult = __webpack_require__(2215);

/**
 * 切换tab
 * @method setLimit
 * @param param {Object} 参数
 * @param pagination {Object} 分页信息
 * @param channel {String} 单渠道名称
 * @return {Function}
 */
// const clickTab = (param, id) => {
var clickTab = function clickTab(data) {

	return function (dispatch) {
		// 第几个tab
		dispatch({
			type: "PROFILELIST_CLICKTAB",
			payload: data.tab
		});

		//1,2 是汇总和明细
		var chartsData = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName,
			tab: parseInt(data.tab, 10),
			startDate: data.startDate,
			endDate: data.endDate
		};

		(0, _chartsResult.chartsResult)(chartsData, dispatch);
	};
}; //发送图表请求
exports.clickTab = clickTab;

/***/ }),

/***/ 2228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getChannelList = undefined;

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 发异步请求
// import {
// 	chartsResult
// } from './gro';

/**
 * 获取渠道组列表
 * @method getChannelList
 * @param param {Object} 参数
 * @param id {Object} 参数
 * @return {Function}
 */
var getChannelList = function getChannelList(data) {

	return function (dispatch) {

		dispatch({
			type: "PROFILELIST_CHANNELNAME",
			// payload: addKey(msg.data, '-')
			payload: data.channelName
		});

		// var data = {
		// 	appCode: "",
		// 	channelGroup: "",
		// 	channelCategory: "",
		// 	channelName: ""
		// }


		//chartsResult(data, dispatch);

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channel.do',
			method: 'post',
			data: data,
			type: 'json'
		}).then(function (msg) {

			if (msg.status) {

				dispatch({
					type: "PROFILELIST_CHANNELLIST",
					// payload: addKey(msg.data, '-')
					payload: msg.data
				});
			} else {
				if (msg.code == -1) {
					alert(-1);
					window.location.href = "/";
				}
			}
		});
	};
};

exports.getChannelList = getChannelList;

/***/ }),

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getGroupList = undefined;

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 发异步请求
// import {
// 	chartsResult
// } from './gro';

/**
 * 获取渠道组列表
 * @method getGroupList
 * @param data {Object} 参数
 * @return {Function}
 */
var getGroupList = function getGroupList(data) {

	return function (dispatch) {

		//chartsResult(data, dispatch);

		//发送请求
		(0, _reqwest2.default)({
			url: '/data/overview/channelGroup.do',
			method: 'post',
			data: data,
			type: 'json'
		}).then(function (msg) {

			if (msg.status) {

				dispatch({
					type: "PROFILELIST_CHANELGROUPLIST",
					// payload: addKey(msg.data, '-')
					payload: msg.data
				});
			} else {
				if (msg.code == -1) {
					alert(-1);
					window.location.href = "/";
				}
			}
		});
	};
};

exports.getGroupList = getGroupList;

/***/ }),

/***/ 2230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTable = undefined;

var _overviewOut = __webpack_require__(2167);

var _getTableData = __webpack_require__(2196);

var getTable = function getTable(data) {

	return function (dispatch) {

		if (data.type == 3) {
			//单渠道请求参数
			var tableData = {
				appCode: data.appCode,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			};

			(0, _overviewOut.overviewOut)(tableData, dispatch);
		} else {
			//汇总和明细参数
			var tableData = {
				appCode: data.appCode,
				channelGroup: data.channelGroup,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			};

			(0, _getTableData.getTableData)(tableData, dispatch);
		}
	}.bind(undefined);
};

//汇总和明细接口
exports.getTable = getTable;

/***/ }),

/***/ 2231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDownLoadData = exports.overviewOut = exports.getTableData = exports.setDate = exports.getChannelList = exports.clickGroupList = exports.getGroupList = exports.changeChannelCategory = exports.changeOs = exports.chartsResult = exports.clickTab = exports.setLimit = exports.channelDetail = exports.setType = exports.setPagination = exports.getTable = undefined;

__webpack_require__(2147);

__webpack_require__(2247);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

var _getTableData = __webpack_require__(2196);

var _overviewOut = __webpack_require__(2167);

var _getTable = __webpack_require__(2230);

var _setLimit = __webpack_require__(2233);

var _channelDetail = __webpack_require__(2225);

var _setPagination = __webpack_require__(2234);

var _setType = __webpack_require__(2235);

var _clickTab = __webpack_require__(2227);

var _chartsResult = __webpack_require__(2215);

var _changeOs = __webpack_require__(2224);

var _changeChannelCategory = __webpack_require__(2223);

var _getGroupList = __webpack_require__(2229);

var _clickGroupList = __webpack_require__(2226);

var _getChannelList = __webpack_require__(2228);

var _setDate = __webpack_require__(2232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取渠道组列表


//切换操作系统


//切换tab


//分页调用模块


//设置每页显示多少条


//单渠道请求


//todo mock数据
var getDownLoadData = function getDownLoadData(data) {
	return function (dispatch) {

		if (data.type == 1 || data.type == 2) {
			//发送请求
			(0, _reqwest2.default)({
				url: '/data/overview/list.do?type=' + data.type,
				method: 'post',
				data: data,
				type: 'json'
			}).then(function (msg) {

				if (msg.status) {
					dispatch({
						type: "PROFILE_LIST_EXCEL",
						payload: msg.data
					});
				} else {
					if (msg.code == -1) {
						window.location.href = "/";
					}
				}
			});
		} else {
			//发送请求
			(0, _reqwest2.default)({
				url: '/data/overview/out.do',
				method: 'post',
				data: data,
				type: 'json'
			}).then(function (msg) {
				if (msg.status) {
					dispatch({
						type: "PROFILE_LIST_EXCEL",
						payload: msg.data
					});
				} else {
					if (msg.code == -1) {
						alert(-1);
						window.location.href = "/";
					}
				}
			});
		}
	};
};

//设置时间 


//选择渠道组


//切换线上线下


//echarts 数据


//type 表头信息和请求设置调用模块


//单渠道组件调用函数


//获取表格数据


//汇总和明细
//todo mock数据
exports.getTable = _getTable.getTable;
exports.setPagination = _setPagination.setPagination;
exports.setType = _setType.setType;
exports.channelDetail = _channelDetail.channelDetail;
exports.setLimit = _setLimit.setLimit;
exports.clickTab = _clickTab.clickTab;
exports.chartsResult = _chartsResult.chartsResult;
exports.changeOs = _changeOs.changeOs;
exports.changeChannelCategory = _changeChannelCategory.changeChannelCategory;
exports.getGroupList = _getGroupList.getGroupList;
exports.clickGroupList = _clickGroupList.clickGroupList;
exports.getChannelList = _getChannelList.getChannelList;
exports.setDate = _setDate.setDate;
exports.getTableData = _getTableData.getTableData;
exports.overviewOut = _overviewOut.overviewOut;
exports.getDownLoadData = getDownLoadData;

/***/ }),

/***/ 2232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 设置时间
 * @method setDate
 * @param param {Object} 参数
 * @param id {Array} 参数
 * @return {Function}
 */
var setDate = function setDate(param, id) {

	return function (dispatch) {

		dispatch({
			type: "PROFILELIST_STARTDATE",
			payload: id[0]
		});

		dispatch({
			type: "PROFILELIST_ENDDATE",
			payload: id[1]
		});
	};
};

exports.setDate = setDate;

/***/ }),

/***/ 2233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setLimit = undefined;

var _getTableData = __webpack_require__(2196);

var _overviewOut = __webpack_require__(2167);

/**
 * 每页显示多少条
 * @method setLimit
 * @param param {Object} 参数
 * @param pagination {Object} 分页信息
 * @param channel {String} 单渠道名称
 * @return {Function}
 */
//汇总和明细请求方法
var setLimit = function setLimit(param, pagination, channel) {

	return function (dispatch) {
		// 当前页
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: 1
		});

		//设置每页显示多少条
		dispatch({
			type: "PROFILE_LIST_PAGE_SIZE",
			payload: pagination.pageSize
		});

		if (param.type == 3) {
			//3，是单渠道
			var data = {
				appCode: "",
				channelName: channel,
				startDate: "2017-12-16",
				endDate: "2018-01-14",
				channelCategory: "",
				offset: 1,
				limit: 10,
				type: param.type
			};

			(0, _overviewOut.overviewOut)(data, dispatch);
		} else {
			//1,2 是汇总和明细
			var data = {
				appCode: "",
				channelGroup: "samsung_total_news",
				channelName: "",
				startDate: "2017-12-12",
				endDate: "2018-01-10",
				channelCategory: "",
				offset: 1,
				limit: pagination.pageSize,
				type: param.type
			};

			(0, _getTableData.getTableData)(data, dispatch);
		}
	};
};
//单渠道请求方法
exports.setLimit = setLimit;

/***/ }),

/***/ 2234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setPagination = undefined;

var _getTableData = __webpack_require__(2196);

var _overviewOut = __webpack_require__(2167);

/**
 * 分页调用模块
 * @method setPagination
 * @param param {Object} 请求参数
 * @param pagination {Object} 分页参数
 * @channel channel 单渠道名称
 */
// const setPagination = (param, pagination, channel) => {
// 汇总和明细请求
var setPagination = function setPagination(data) {

	return function (dispatch) {
		//更新当前页数状态
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: data.offset
		});
		//更新每页显示多少条状态
		dispatch({
			type: "PROFILE_LIST_PAGE_SIZE",
			payload: data.limit
		});

		if (data.type == 3) {
			//单渠道请求参数设置
			var dataAjax = {
				appCode: data.appCode,
				channelName: data.channel,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			};
			(0, _overviewOut.overviewOut)(dataAjax, dispatch);
		} else {
			//汇总和明细请求参数
			var dataAjax = {
				appCode: data.appCode,
				channelGroup: data.channelGroup,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			};
			(0, _getTableData.getTableData)(dataAjax, dispatch);
		}
	};
};

//单渠道请求
exports.setPagination = setPagination;

/***/ }),

/***/ 2235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setType = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _overviewOut = __webpack_require__(2167);

var _getTableData = __webpack_require__(2196);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * 切换汇总和明细单渠道
 * @method setType 
 * @param param {Object} 请求参数
 * @param id {Number} 请求类型
 * @return {Function}
 */

//单渠道接口
var setType = function setType(data) {

	return function (dispatch) {
		//更新请求类型状态
		dispatch({
			type: "PROFILELIST_TYPE",
			payload: data.type
		});

		//更新当前页，置为第一页
		dispatch({
			type: "PROFILE_LIST_CURRENT",
			payload: 1
		});

		//更新每页显示多少条状态
		dispatch({
			type: "PROFILE_LIST_PAGE_SIZE",
			payload: 10
		});

		if (data.type == 1) {
			//1为汇总表头
			dispatch({
				type: "PROFILELIST_TABLE_COLUMNS",
				payload: [{
					title: '日期',
					dataIndex: 'day'
				}, {
					title: '新增用户',
					dataIndex: 'newUser'
				}, {
					title: '用户质量',
					dataIndex: 'qualityPer',
					render: function render(text) {
						return _react2.default.createElement(
							'span',
							null,
							' ',
							(Number(text) * 100).toFixed(2) + '%',
							' '
						);
					}
				}, {
					title: '活跃用户',
					dataIndex: 'activeUser'
				}, {
					title: '回访用户',
					dataIndex: 'visitUser'
				}, {
					title: '流失用户',
					dataIndex: 'loseUser'
				}, {
					title: '回归用户',
					dataIndex: 'backUser'
				}, {
					title: '迁出用户',
					dataIndex: 'outUser'
				}]
			});
		} else if (data.type = 2) {
			//2为明细表头
			dispatch({
				type: "PROFILELIST_TABLE_COLUMNS",
				payload: [{
					title: '日期',
					dataIndex: 'day'
				}, {
					title: '渠道名称',
					dataIndex: 'channel'
					// ,
					// render: (text, record) => (<a href="javascript:void(0);" onClick={channelNameFn}>{text}</a>)
				}, {
					title: '新增用户',
					dataIndex: 'newUser'
				}, {
					title: '用户质量',
					dataIndex: 'qualityPer',
					render: function render(text) {
						return _react2.default.createElement(
							'span',
							null,
							' ',
							(Number(text) * 100).toFixed(2) + '%',
							' '
						);
					}
				}, {
					title: '活跃用户',
					dataIndex: 'activeUser'
				}, {
					title: '回访用户',
					dataIndex: 'visitUser'
				}, {
					title: '流失用户',
					dataIndex: 'loseUser'
				}, {
					title: '回归用户',
					dataIndex: 'backUser'
				}, {
					title: '迁出用户',
					dataIndex: 'outUser'
				}]
			});
		} else if (data.type = 3) {
			//3为单渠道表头
			dispatch({
				type: "PROFILELIST_TABLE_COLUMNS",
				payload: [{
					title: '日期',
					dataIndex: 'day'
				}, {
					title: '迁入渠道',
					dataIndex: 'newChannel'
				}, {
					title: '迁出用户',
					dataIndex: 'countUser'
				}]
			});
		}

		// dispatch({
		// 	type: "PROFILELIST_TABLE_COLUMNS",
		// 	payload: id
		// });

		if (data.type == 3) {

			//单渠道请求参数
			var ajaxData = {
				appCode: data.appCode,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			};

			(0, _overviewOut.overviewOut)(ajaxData, dispatch);
		} else {

			//汇总和明细参数
			var ajaxData = {
				appCode: data.appCode,
				channelGroup: data.channelGroup,
				channelName: data.channelName,
				startDate: data.startDate,
				endDate: data.endDate,
				channelCategory: data.channelCategory,
				offset: data.offset,
				limit: data.limit,
				type: data.type
			};

			(0, _getTableData.getTableData)(ajaxData, dispatch);
		}
	};
};

//汇总和明细接口
exports.setType = setType;

/***/ }),

/***/ 2247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	_mockjs2.default.mock("/data/overview/list.do?type=1", "post", {
		"status": true,
		"msg": "返回成功",
		"data|10": [{
			"activeUser": "@natural(1000, 10000)",
			"backUser": "@natural(1000, 10000)",
			"day": "@datetime('yyyy-MM-dd')",
			"loseUser": "@natural(1000, 10000)",
			"newUser": "@natural(1000, 10000)",
			"newUserQuality": "@natural(1000, 10000)",
			"outUser": "@natural(1000, 10000)",
			"qualityPer": "0.0005",
			"visitUser": "@natural(1000, 10000)"
		}],
		"total": "@natural(100, 999)"
	});

	_mockjs2.default.mock("/data/overview/list.do?type=2", "post", {
		"status": true,
		"msg": "返回成功",
		"data|10": [{
			"activeUser": "@natural(1000, 10000)",
			"channel": "@word(6)",
			"backUser": "@natural(1000, 10000)",
			"day": "@datetime('yyyy-MM-dd')",
			"loseUser": "@natural(1000, 10000)",
			"newUser": "@natural(1000, 10000)",
			"newUserQuality": "@natural(1000, 10000)",
			"outUser": "@natural(1000, 10000)",
			"qualityPer": "@float(10, 10.0, 2, 2)",
			"visitUser": "@natural(1000, 10000)"
		}],
		"total": "@natural(100, 999)"
	});

	_mockjs2.default.mock("/data/overview/out.do", "post", {
		"status": true,
		"msg": "返回成功",
		"data|10": [{
			"appCode": 24,
			"countUser": "@natural(1000, 10000)",
			"day": "@datetime('yyyy-MM-dd')",
			"newChannel": "@word(6)",
			"oldChannel": "@word(6)"
		}],
		"total": "@natural(100, 999)"
	});

	_mockjs2.default.mock('/data/overview/chart.do', "post", {
		"data": [{
			"key|10": ["@datetime('yyyy-MM-dd')"],
			"value|10": ["@natural(1000, 10000)"]
		}],
		"msg": "参数不对",
		"status": true
	});
}

// Mock.mock("http://127.0.0.1:3001/user_profile_list?appCode=24&online=1", "get", {
// 	"status": true,
// 	"msg": "返回成功",
// 	"data|3": []
// });

/***/ })

});
//# sourceMappingURL=profileList.js.map