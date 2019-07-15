webpackJsonp([18],{

/***/ 2139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(850);

var _redux = __webpack_require__(58);

var _reactRouter = __webpack_require__(102);

var _antd = __webpack_require__(110);

var _nprogress = __webpack_require__(2148);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _copyToClipboard = __webpack_require__(2252);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _shortLink = __webpack_require__(2208);

var actionCreators = _interopRequireWildcard(_shortLink);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _antd.Layout.Content;

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;

var ShortLink = function (_React$Component) {
    _inherits(ShortLink, _React$Component);

    function ShortLink(props) {
        _classCallCheck(this, ShortLink);

        return _possibleConstructorReturn(this, (ShortLink.__proto__ || Object.getPrototypeOf(ShortLink)).call(this, props));
    }

    _createClass(ShortLink, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _nprogress2.default.start();

            this.initAppcode();
            this.getChannelTypes();
            this.getChannelGroup();
            this.getTableData();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _nprogress2.default.done();
        }
    }, {
        key: 'initAppcode',
        value: function initAppcode() {
            this.props.setAppCode({
                appCode: '27'
            });
        }
    }, {
        key: 'getChannelTypes',
        value: function getChannelTypes() {
            this.props.getChannelTypeList({
                appCode: this.props.shortLink.Param.appCode
            });
        }
    }, {
        key: 'getChannelGroup',
        value: function getChannelGroup() {
            var data = {
                appCode: this.props.shortLink.Param.appCode,
                channelGroupId: this.props.shortLink.Param.channelGroup,
                channelTypeId: this.props.shortLink.Param.channelTypeId,
                channelCategory: this.props.shortLink.Param.channelCategory
            };
            this.props.getChannelGroupList(data);
        }
    }, {
        key: 'renderChannelTypes',
        value: function renderChannelTypes() {
            var arr = [];
            this.props.shortLink.Result.channelTypeList.map(function (v, k) {
                arr.push(_react2.default.createElement(
                    Option,
                    { key: v.id, value: v.id.toString() },
                    v.name
                ));
            });
            return arr;
        }
    }, {
        key: 'renderChannelGroup',
        value: function renderChannelGroup() {
            var arr = [];
            this.props.shortLink.Result.channelGroupList.map(function (v, k) {
                arr.push(_react2.default.createElement(
                    Option,
                    { key: v.id, value: v.id.toString() },
                    v.channelName
                ));
            });
            return arr;
        }
    }, {
        key: 'renderChannelList',
        value: function renderChannelList() {
            var arr = [];
            this.props.shortLink.Result.channelLinkList.map(function (v, k) {
                arr.push(_react2.default.createElement(
                    Option,
                    { key: v.id, value: v.channelName },
                    v.channelName
                ));
            });
            return arr;
        }
    }, {
        key: 'changeChannelCategory',
        value: function changeChannelCategory(id) {
            var data = {
                appCode: this.props.shortLink.Param.appCode,
                channelGroupId: '',
                channelTypeId: '',
                channelCategory: id
            };
            this.props.changeChannelCategory(data);
        }
    }, {
        key: 'changeChannelType',
        value: function changeChannelType(id) {
            var data = {
                appCode: this.props.shortLink.Param.appCode,
                channelGroupId: '',
                channelTypeId: id,
                channelCategory: this.props.shortLink.Param.channelCategory
            };
            this.props.changeChannelType(data);
        }
    }, {
        key: 'changeChannelGroup',
        value: function changeChannelGroup(id) {
            var data = {
                appCode: this.props.shortLink.Param.appCode,
                channelGroupId: id,
                channelTypeId: this.props.shortLink.Param.channelTypeId,
                channelCategory: this.props.shortLink.Param.channelCategory
            };
            this.props.changeChannelGroup(data);
        }
    }, {
        key: 'searchChannel',
        value: function searchChannel(id) {
            var data = {
                appCode: this.props.shortLink.Param.appCode,
                channelGroupId: this.props.shortLink.Param.channelGroup,
                channelTypeId: this.props.shortLink.Param.channelTypeId,
                channelCategory: this.props.shortLink.Param.channelCategory,
                channelName: id
            };
            this.props.changeChannelName(data);
        }
    }, {
        key: 'getTableData',
        value: function getTableData() {
            var data = {
                appCode: this.props.shortLink.Param.appCode,
                sortField: this.props.shortLink.Param.sortField,
                sortOrder: this.props.shortLink.Param.sortOrder,
                channelGroup: this.props.shortLink.Param.channelGroup,
                channelTypeId: this.props.shortLink.Param.channelTypeId,
                channelCategory: this.props.shortLink.Param.channelCategory,
                channelName: this.props.shortLink.Param.channelName,
                fatherFlag: this.props.shortLink.Param.fatherFlag,
                isFree: this.props.shortLink.Param.isFree,
                offset: this.props.shortLink.Result.offset,
                limit: this.props.shortLink.Result.limit
            };
            this.props.getTableData(data);
        }
    }, {
        key: 'clickQuery',
        value: function clickQuery() {
            this.getTableData();
        }
    }, {
        key: 'handleTableChange',
        value: function handleTableChange(pagination) {
            var postData = {
                appCode: this.props.shortLink.Param.appCode,
                sortField: this.props.shortLink.Param.sortField,
                sortOrder: this.props.shortLink.Param.sortOrder,
                channelGroup: this.props.shortLink.Param.channelGroup,
                channelTypeId: this.props.shortLink.Param.channelTypeId,
                channelCategory: this.props.shortLink.Param.channelCategory,
                channelName: this.props.shortLink.Param.channelName,
                fatherFlag: this.props.shortLink.Param.fatherFlag,
                isFree: this.props.shortLink.Param.isFree,
                offset: pagination.current,
                limit: pagination.pageSize
            };
            this.props.getTableData(postData);
        }
    }, {
        key: 'copyText',
        value: function copyText(text) {
            (0, _copyToClipboard2.default)(text);
        }
    }, {
        key: 'dealColumns',
        value: function dealColumns() {
            var columns = this.props.shortLink.TableColumns.tableColumns;
            var that = this;
            columns.map(function (item) {
                if (item.dataIndex == 'customUrl') {
                    item.render = function (text) {
                        return _react2.default.createElement(
                            'span',
                            null,
                            text,
                            ' \xA0',
                            _react2.default.createElement(
                                _antd.Tooltip,
                                { placement: 'topLeft', title: '\u70B9\u51FB\u590D\u5236\u5230\u526A\u8D34\u677F' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);', onClick: that.copyText.bind(this, text) },
                                    '\u590D\u5236'
                                )
                            )
                        );
                    };
                }
            });
            return columns;
        }
    }, {
        key: 'render',
        value: function render() {
            var columns = this.dealColumns();
            var pagination = {
                current: this.props.shortLink.Result.offset,
                pageSize: this.props.shortLink.Result.limit,
                total: this.props.shortLink.Result.total,
                defaultPageSize: this.props.shortLink.Result.limit,
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
                                    disabled: true,
                                    placeholder: '\u64CD\u4F5C\u7CFB\u7EDF\u9009\u62E9',
                                    dropdownMatchSelectWidth: true,
                                    value: this.props.shortLink.Param.appCode,
                                    style: { width: '70px' },
                                    className: 'online' },
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
                            { label: '\u7EBF\u4E0A/\u7EBF\u4E0B' },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    placeholder: '\u7EBF\u4E0A\u7EBF\u4E0B\u9009\u62E9',
                                    dropdownMatchSelectWidth: true,
                                    value: this.props.shortLink.Param.channelCategory,
                                    style: { width: '70px' },
                                    className: 'online',
                                    onChange: this.changeChannelCategory.bind(this) },
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
                            { label: '\u6E20\u9053\u7C7B\u578B' },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    showSearch: true,
                                    placeholder: '\u6E20\u9053\u7C7B\u578B\u9009\u62E9',
                                    dropdownMatchSelectWidth: true,
                                    value: this.props.shortLink.Param.channelTypeId,
                                    style: { width: '70px' },
                                    className: 'online',
                                    onChange: this.changeChannelType.bind(this) },
                                _react2.default.createElement(
                                    Option,
                                    { value: '' },
                                    '\u5168\u90E8'
                                ),
                                this.renderChannelTypes()
                            )
                        ),
                        _react2.default.createElement(
                            FormItem,
                            { label: '\u6E20\u9053\u7EC4' },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    showSearch: true,
                                    placeholder: '\u6E20\u9053\u7EC4\u9009\u62E9',
                                    dropdownMatchSelectWidth: true,
                                    value: this.props.shortLink.Param.channelGroup,
                                    style: { width: '70px' },
                                    className: 'online',
                                    onChange: this.changeChannelGroup.bind(this) },
                                _react2.default.createElement(
                                    Option,
                                    { value: '' },
                                    '\u5168\u90E8'
                                ),
                                this.renderChannelGroup()
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
                                    style: { width: '60px' },
                                    showArrow: false,
                                    value: this.props.shortLink.Param.channelName,
                                    filterOption: false,
                                    onChange: this.searchChannel.bind(this)
                                },
                                this.renderChannelList()
                            )
                        ),
                        _react2.default.createElement(
                            FormItem,
                            null,
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', onClick: this.clickQuery.bind(this) },
                                '\u67E5\u8BE2'
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
                            { type: 'primary', style: { float: "right" } },
                            _react2.default.createElement(
                                _reactRouter.IndexLink,
                                { to: "/manager/shortLink/create", activeClassName: 'active' },
                                '\u65B0\u5EFA'
                            )
                        )
                    ),
                    _react2.default.createElement(_antd.Table, {
                        loading: this.props.shortLink.Result.tableLoading,
                        locale: { "emptyText": "暂无数据" },
                        columns: columns,
                        dataSource: this.props.shortLink.Result.tableList,
                        pagination: pagination,
                        onChange: this.handleTableChange.bind(this)
                    })
                )
            );
        }
    }]);

    return ShortLink;
}(_react2.default.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
    return {
        shortLink: state.Reducer.shortLink
    };
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    //全量
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShortLink);

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

/***/ 2154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

    // 渠道类型
    _mockjs2.default.mock("/manage/channelType.do", "post", {
        "msg": "返回成功",
        "data": [{
            "name": "渠道类型1",
            "id": 1
        }],
        "status": true
    });

    // 数据列表
    _mockjs2.default.mock("/manage/list/index.do", "post", {
        "status": true,
        "msg": "返回成功",
        "data|10": [{
            "appCode|1": ['24', '27'],
            "channelCategory|1": ['1', '2'],
            "channelDescribe": "@cword(3,5)",
            "channelGroup": "@string",
            "channelName": "@string",
            "channelType": "@string",
            "channelTypeId": "integer",
            "flag": "@float(10, 10.0, 2, 2)",
            "id": "@natural(1000, 10000)",
            "isFree|1": ['0', '1'],
            "programId": "@natural(1000, 10000)",
            "showCol": "@natural(1000, 10000)"
        }],
        "total": "@natural(100, 999)"
    });

    // 新建|编辑->组列表
    _mockjs2.default.mock("/manage/channel/groupList.do", "post", {
        "status": true,
        "msg": "返回成功",
        "data|10": [{
            "appCode": "@natural(1000, 10000)",
            "channelCategory": "@natural(1000, 10000)",
            "channelDescribe": "@datetime('yyyy-MM-dd')",
            "channelGroup": "@natural(1000, 10000)",
            "channelName": "@string",
            "channelTypeId": "@natural(1000, 10000)",
            "flag": "@float(10, 10.0, 2, 2)",
            "id": "@natural(1000, 10000)",
            "isFree": "@natural(1000, 10000)",
            "programId": "@natural(1000, 10000)",
            "showCol": "@natural(1000, 10000)"
        }]
    });

    // 新建|编辑->更换渠道组名称时
    _mockjs2.default.mock("/manage/get.do", "post", {
        "status": true,
        "msg": "返回成功",
        "data": {
            "appCode|1": [27, 24],
            "channelCategory|1": [1, 2],
            "channelDescribe": "@string",
            "channelGroup": "@string",
            "channelName": "@string",
            "channelType": "@string",
            "channelTypeId": 1,
            "flag": "@integer",
            "id": "@integer",
            "isFree|1": [0, 1],
            "programId": "@integer",
            "showCol": "1",
            "reduce|1": [0, 10, 20, 30, 55]
        }
    });

    //编辑
    _mockjs2.default.mock("/manage/channel/update.do", "post", {
        "status": true,
        "msg": "修改成功"
    });

    //新建
    _mockjs2.default.mock("/manage/channel/add.do", "post", {
        "status": true,
        "msg": "修改成功"
    });

    //新建->校验名称
    _mockjs2.default.mock("/manage/channel/nameCheck.do", "post", {
        ok: "",
        state: "success"
    });
}

/***/ }),

/***/ 2208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCurFormByGroupId = exports.getGroupList = exports.setAppCode = exports.create = exports.setCreateParam = exports.changeChannelName = exports.changeChannelGroup = exports.changeChannelType = exports.changeChannelCategory = exports.getTableData = exports.getChannelLinkList = exports.getChannelGroupList = exports.getChannelTypeList = undefined;

__webpack_require__(2147);

__webpack_require__(2154);

__webpack_require__(2211);

var _reqwest = __webpack_require__(2146);

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getChannelTypeList = function getChannelTypeList(data) {
    return function (dispatch) {

        //发送请求
        (0, _reqwest2.default)({
            url: '/manage/channelType.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {

            if (msg.status) {
                dispatch({
                    type: "SHORTLINK_CHANNELTYPELIST",
                    payload: msg.data
                });
            } else {
                if (msg.code == -1) {
                    window.location.href = "/";
                }
            }
        });
    };
};
var getChannelGroupList = function getChannelGroupList(data) {

    return function (dispatch) {

        //发送请求
        (0, _reqwest2.default)({
            url: '/data/overview/channelGroup.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {

            if (msg.status) {
                dispatch({
                    type: "SHORTLINK_CHANNELGROUPLIST",
                    payload: msg.data
                });
            } else {
                if (msg.code == -1) {
                    window.location.href = "/";
                }
            }
        });
    };
};

var getGroupList = function getGroupList(data) {
    return function (dispatch) {

        //发送请求
        (0, _reqwest2.default)({
            url: '/manage/channel/groupList.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {
            if (msg.status) {

                dispatch({
                    type: "SHORTLINK_GROUP_LIST",
                    payload: msg.data
                });
            } else {
                if (msg.code == -1) {
                    window.location.href = "/";
                }
            }
        });
    };
};
var getChannelLinkList = function getChannelLinkList(data) {

    return function (dispatch) {

        //发送请求
        (0, _reqwest2.default)({
            url: '/manage/getLink.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {

            if (msg.status) {
                dispatch({
                    type: "SHORTLINK_CHANNELLINKLIST",
                    payload: msg.data
                });
            } else {
                if (msg.code == -1) {
                    window.location.href = "/";
                }
            }
        });
    };
};

var getTableData = function getTableData(data) {
    return function (dispatch) {

        dispatch({
            type: "SHORTLINK_TABLE_LOADING",
            payload: true
        });

        dispatch({
            type: "SHORTLINK_TABLE_LIMIT",
            payload: data.limit
        });

        dispatch({
            type: "SHORTLINK_TABLE_OFFSET",
            payload: data.offset
        });

        //发送请求
        (0, _reqwest2.default)({
            url: '/manage/link/index.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {

            if (msg.status) {

                dispatch({
                    type: "SHORTLINK_TABLE_LOADING",
                    payload: false
                });

                dispatch({
                    type: " SHORTLINK_TABLE_TOTAL",
                    payload: msg.total
                });

                dispatch({
                    type: "SHORTLINK_TABLE",
                    payload: addKey(msg.data, 'huizhong-')
                });
            } else {
                if (msg.code == -1) {
                    window.location.href = "/";
                }
            }
        });
    };
};

var setAppCode = function setAppCode(data) {
    return function (dispatch) {
        dispatch({
            type: "SHORTLINK_APPCODE",
            payload: data.appCode
        });
    };
};

var changeChannelCategory = function changeChannelCategory(data) {
    return function (dispatch) {
        //切换线上线下
        dispatch({
            type: "SHORTLINK_CHANNELCATEGORY",
            payload: data.channelCategory
        });

        //重置渠道类型
        dispatch({
            type: "SHORTLINK_CHANNELTYPEID",
            payload: data.channelTypeId
        });

        //重置渠道组
        dispatch({
            type: "SHORTLINK_CHANNELGROUP",
            payload: data.channelGroupId
        });

        //重置渠道
        dispatch({
            type: "SHORTLINK_CHANNELNAME",
            payload: data.channelName
        });

        //获取渠道类型列表
        var data1 = {
            appCode: data.appCode
        };
        dispatch(getChannelTypeList(data1));

        //获取渠道组列表
        var data2 = {
            appCode: data.appCode,
            channelGroupId: data.channelGroupId,
            channelTypeId: data.channelTypeId,
            channelCategory: data.channelCategory
        };
        dispatch(getChannelGroupList(data2));
    };
};
var changeChannelType = function changeChannelType(data) {
    return function (dispatch) {

        //切换渠道类型
        dispatch({
            type: "SHORTLINK_CHANNELTYPEID",
            payload: data.channelTypeId
        });

        //重置渠道组
        dispatch({
            type: "SHORTLINK_CHANNELGROUP",
            payload: data.channelGroupId
        });

        //重置渠道
        dispatch({
            type: "SHORTLINK_CHANNELNAME",
            payload: data.channelName
        });

        //获取渠道组列表
        var postData = {
            appCode: data.appCode,
            channelGroupId: data.channelGroupId,
            channelTypeId: data.channelTypeId,
            channelCategory: data.channelCategory
        };
        dispatch(getChannelGroupList(postData));
    };
};
var changeChannelGroup = function changeChannelGroup(data) {
    return function (dispatch) {
        //切换渠道组
        dispatch({
            type: "SHORTLINK_CHANNELGROUP",
            payload: data.channelGroupId
        });

        //重置渠道
        dispatch({
            type: "SHORTLINK_CHANNELNAME",
            payload: data.channelName
        });
    };
};
var changeChannelName = function changeChannelName(data) {
    return function (dispatch) {
        //切换渠道
        dispatch({
            type: "SHORTLINK_CHANNELNAME",
            payload: data.channelName
        });

        var postData = {
            appCode: data.appCode,
            channelGroupId: data.channelGroupId,
            channelTypeId: data.channelTypeId,
            channelCategory: data.channelCategory,
            channelName: data.channelName
        };
        dispatch(getChannelLinkList(postData));
    };
};
var setCreateParam = function setCreateParam(data) {
    return function (dispatch) {
        if (data.channelName) {
            dispatch({
                type: "SHORTLINK_CREATE_CHANNELNAME",
                payload: data.channelName
            });
        }
        if (data.password) {
            dispatch({
                type: "SHORTLINK_CREATE_PASSWORD",
                payload: data.password
            });
        }
        if (data.appCode) {
            dispatch({
                type: "SHORTLINK_CREATE_APPCODE",
                payload: data.appCode
            });
        }
        if (data.channelCategory) {
            dispatch({
                type: "SHORTLINK_CREATE_CHANNELCATEGORY",
                payload: data.channelCategory
            });
        }
        if (data.channelTypeId) {
            dispatch({
                type: "SHORTLINK_CREATE_CHANNELTYPEID",
                payload: data.channelTypeId
            });
        }
        if (data.isFree) {
            dispatch({
                type: "SHORTLINK_CREATE_ISFREE",
                payload: data.isFree
            });
        }
        if (data.description) {
            dispatch({
                type: "SHORTLINK_CREATE_DESCRIPTION",
                payload: data.description
            });
        }
        if (data.channelGroup) {
            dispatch({
                type: "SHORTLINK_CREATE_CHANNELGROUP",
                payload: data.channelGroup
            });
        }
        if (data.channelGroupId) {
            dispatch({
                type: "SHORTLINK_CREATE_CHANNELGROUPID",
                payload: data.channelGroupId
            });
        }
    };
};
var create = function create(data) {
    return function (dispatch) {

        (0, _reqwest2.default)({
            url: '/manage/link/add.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {

            window.location.href = '/#/manager/shortLink';
        });
    };
};

var addKey = function addKey(data, str) {
    var arr = [];

    data.map(function (v, k) {
        v.key = str + k;
        arr.push(v);
    });

    return arr;
};

var getCurFormByGroupId = function getCurFormByGroupId(data) {
    return function (dispatch) {

        (0, _reqwest2.default)({
            url: '/manage/get.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then(function (msg) {

            if (msg.status) {
                dispatch({
                    type: "SHORTLINK_CREATE_APPCODE",
                    payload: msg.data.appCode
                });
                dispatch({
                    type: "SHORTLINK_CREATE_CHANNELCATEGORY",
                    payload: msg.data.channelCategory
                });
                dispatch({
                    type: "SHORTLINK_CREATE_CHANNELTYPEID",
                    payload: msg.data.channelTypeId
                });
                dispatch({
                    type: "SHORTLINK_CREATE_ISFREE",
                    payload: msg.data.isFree
                });
            }
        });
    };
};

exports.getChannelTypeList = getChannelTypeList;
exports.getChannelGroupList = getChannelGroupList;
exports.getChannelLinkList = getChannelLinkList;
exports.getTableData = getTableData;
exports.changeChannelCategory = changeChannelCategory;
exports.changeChannelType = changeChannelType;
exports.changeChannelGroup = changeChannelGroup;
exports.changeChannelName = changeChannelName;
exports.setCreateParam = setCreateParam;
exports.create = create;
exports.setAppCode = setAppCode;
exports.getGroupList = getGroupList;
exports.getCurFormByGroupId = getCurFormByGroupId;

/***/ }),

/***/ 2211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mockjs = __webpack_require__(426);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

    // 渠道链列表
    _mockjs2.default.mock("/manage/getLink.do", "post", {
        "msg": "返回成功",
        "data|20": [{
            'appCode|1': ['24', '27'],
            'channelCategory|1': ['1', '2'],
            channelDescribe: '@string',
            channelGroup: '@string',
            channelName: '@string',
            channelTypeId: '@integer',
            customUrl: '@string',
            flag: 1,
            id: '@integer',
            isFree: 0,
            link: '@string',
            programId: 3
        }],
        "status": true
    });

    //表格
    _mockjs2.default.mock("/manage/link/index.do", "post", {
        "msg": "返回成功",
        "data|100": [{
            'appCode|1': ['24', '27'],
            'channelCategory|1': ['1', '2'],
            channelDescribe: '@string',
            channelGroup: '@string',
            channelName: '@string',
            channelTypeId: '@integer',
            channelType: '@string',
            customUrl: '@url',
            flag: 1,
            id: '@integer',
            isFree: 0,
            link: '@url',
            programId: 3
        }],
        "status": true,
        total: "@natural(100, 200)"
    });

    //新建
    _mockjs2.default.mock("/manage/link/add.do", "post", {
        "status": true,
        "msg": "修改成功"
    });
}

/***/ }),

/***/ 2252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(2254);

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 2254:
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

});
//# sourceMappingURL=shortLink.js.map