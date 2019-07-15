webpackJsonp([22],{2121:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),u=a(d),c=n(831),p=n(56),f=n(96),m=n(105),h=n(2135),g=a(h),y=n(2182),v=r(y),_=n(2138),b=n(2196),M=(r(b),m.Layout.Content),E=m.Form.Item,w=m.Select.Option,A=function(e){function t(e){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"componentWillMount",value:function(){g.default.start(),this.getFirmList(),this.getBrandList(),this.getTableData()}},{key:"componentDidMount",value:function(){g.default.done()}},{key:"componentWillUpdate",value:function(e){if(e.modelManager.Result.downloadDataList!=this.props.modelManager.Result.downloadDataList){var t=(0,_.dealDownloadTitle)(this.props.modelManager.TableColumns.tableColumns),n=(0,_.dealDownloadColumns)(this.props.modelManager.TableColumns.tableColumns),r=(0,_.dealDownloadData)(e.modelManager.Result.downloadDataList,n);(0,_.downloadExcle)(r,t,this.fileName)}}},{key:"getFirmList",value:function(){this.props.getFirmList({firm:""})}},{key:"getBrandList",value:function(){this.props.getBrandList({firm:""})}},{key:"renderFirmList",value:function(){var e=[];return this.props.modelManager.Result.firmList.map(function(t,n){e.push(u.default.createElement(w,{key:t.id,value:t.firm.toString()},t.firm))}),e}},{key:"renderBrandList",value:function(){var e=[];return this.props.modelManager.Result.brandList.map(function(t,n){e.push(u.default.createElement(w,{key:t.id,value:t.brand.toString()},t.brand))}),e}},{key:"changeOs",value:function(e){var t={appCode:e,deviceModel:"",firm:"",brand:""};this.props.changeOs(t)}},{key:"changeModel",value:function(e){this.props.changeModel({deviceModel:e})}},{key:"changeFirm",value:function(e){var t={appCode:this.props.modelManager.Param.appCode,deviceModel:this.props.modelManager.Param.deviceModel,firm:e,brand:""};this.props.changeFirm(t)}},{key:"changeBrand",value:function(e){var t={appCode:this.props.modelManager.Param.appCode,deviceModel:this.props.modelManager.Param.deviceModel,firm:this.props.modelManager.Param.firm,brand:e};this.props.changeBrand(t)}},{key:"getTableData",value:function(){var e={appCode:this.props.modelManager.Param.appCode,deviceModel:this.props.modelManager.Param.deviceModel,firm:this.props.modelManager.Param.firm,brand:this.props.modelManager.Param.brand,offset:this.props.modelManager.Result.offset,limit:this.props.modelManager.Result.limit};this.props.getTableData(e)}},{key:"clickQuery",value:function(){this.getTableData()}},{key:"handleTableChange",value:function(e){var t={appCode:this.props.modelManager.Param.appCode,deviceModel:this.props.modelManager.Param.deviceModel,firm:this.props.modelManager.Param.firm,brand:this.props.modelManager.Param.brand,offset:e.current,limit:e.pageSize};this.props.getTableData(t)}},{key:"initEditForm",value:function(e){this.props.setUpdateParam({editId:e.id,editBrand:e.brand,editFirm:e.firm}),localStorage.setItem("editId",e.id),localStorage.setItem("editBrand",e.brand),localStorage.setItem("editFirm",e.firm)}},{key:"dealColumns",value:function(){var e=this.props.modelManager.TableColumns.tableColumns,t=this;return e.map(function(e){""==e.dataIndex&&(e.render=function(e){return u.default.createElement(f.IndexLink,{to:"/sys/modal/edit/"+e.firm+"/"+e.brand,onClick:t.initEditForm.bind(t,e)},"编辑")})}),e}},{key:"downloadExcle",value:function(){var e={appCode:this.props.modelManager.Param.appCode,deviceModel:this.props.modelManager.Param.deviceModel,firm:this.props.modelManager.Param.firm,brand:this.props.modelManager.Param.brand};this.fileName=(0,_.getDownloadName)(e);var t={appCode:this.props.modelManager.Param.appCode,deviceModel:this.props.modelManager.Param.deviceModel,firm:this.props.modelManager.Param.firm,brand:this.props.modelManager.Param.brand,offset:1,limit:-1};this.props.getDownLoadData(t)}},{key:"render",value:function(){var e={current:this.props.modelManager.Result.offset,pageSize:this.props.modelManager.Result.limit,total:this.props.modelManager.Result.total,defaultPageSize:this.props.modelManager.Result.limit,showSizeChanger:!0},t=this.dealColumns();return u.default.createElement(m.Layout,{style:{marginLeft:180,position:"relative",marginTop:60,overflow:"hidden"}},u.default.createElement(M,{className:"channel_filter"},u.default.createElement(m.Form,{layout:"inline"},u.default.createElement(E,{label:"操作系统"},u.default.createElement(m.Select,{placeholder:"操作系统选择",dropdownMatchSelectWidth:!0,value:this.props.modelManager.Param.appCode,style:{width:"70px"},className:"online",onChange:this.changeOs.bind(this)},u.default.createElement(w,{value:""},"全部"),u.default.createElement(w,{value:"24"},"Android"),u.default.createElement(w,{value:"27"},"iOS"))),u.default.createElement(E,{label:""},u.default.createElement(m.Select,{mode:"combobox",placeholder:"机型搜索",notFoundContent:"暂无相关数据",className:"searchChannel",defaultActiveFirstOption:!1,style:{width:"60px"},showArrow:!1,value:this.props.modelManager.Param.deviceModel,filterOption:!1,onChange:this.changeModel.bind(this)})),u.default.createElement(E,{label:"厂商"},u.default.createElement(m.Select,{placeholder:"厂商选择",dropdownMatchSelectWidth:!0,value:this.props.modelManager.Param.firm,style:{width:"70px"},className:"online",onChange:this.changeFirm.bind(this)},u.default.createElement(w,{value:""},"全部"),this.renderFirmList())),u.default.createElement(E,{label:"品牌"},u.default.createElement(m.Select,{placeholder:"品牌选择",dropdownMatchSelectWidth:!0,value:this.props.modelManager.Param.brand,style:{width:"70px"},className:"online",onChange:this.changeBrand.bind(this)},u.default.createElement(w,{value:""},"全部"),this.renderBrandList())),u.default.createElement(E,null,u.default.createElement(m.Button,{type:"primary",onClick:this.clickQuery.bind(this)},"查询")))),u.default.createElement(M,{className:"channel_table"},u.default.createElement("div",{style:{width:"100%",marginBottom:"20px"},className:"channelCostButtonArea"},u.default.createElement(m.Button,{type:"primary"},u.default.createElement(f.IndexLink,{to:"/sys/modal/create"},"添加品牌")),u.default.createElement(m.Button,{type:"primary",icon:"download",onClick:this.downloadExcle.bind(this)},"下载报表")),u.default.createElement(m.Table,{loading:this.props.modelManager.Result.tableLoading,locale:{emptyText:"暂无数据"},columns:t,dataSource:this.props.modelManager.Result.tableList,pagination:e,onChange:this.handleTableChange.bind(this)})))}}]),t}(u.default.Component),C=function(e){return{modelManager:e.Reducer.modelManager}},R=function(e,t){return(0,p.bindActionCreators)(v,e)};t.default=(0,c.connect)(C,R)(A)},2133:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */
!function(e,t,n){void 0!==module&&module.exports?module.exports=n():(__WEBPACK_AMD_DEFINE_FACTORY__=n,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(0,0,function(){function succeed(e){var t=protocolRe.exec(e.url);return t=t&&t[1]||context.location.protocol,httpsRe.test(t)?twoHundo.test(e.request.status):!!e.request.response}function handleReadyState(e,t,n){return function(){return e._aborted?n(e.request):e._timedOut?n(e.request,"Request is aborted: timeout"):void(e.request&&4==e.request[readyState]&&(e.request.onreadystatechange=noop,succeed(e)?t(e.request):n(e.request)))}}function setHeaders(e,t){var n,r=t.headers||{};r.Accept=r.Accept||defaultHeaders.accept[t.type]||defaultHeaders.accept["*"];var a="undefined"!=typeof FormData&&t.data instanceof FormData;t.crossOrigin||r[requestedWith]||(r[requestedWith]=defaultHeaders.requestedWith),r[contentType]||a||(r[contentType]=t.contentType||defaultHeaders.contentType);for(n in r)r.hasOwnProperty(n)&&"setRequestHeader"in e&&e.setRequestHeader(n,r[n])}function setCredentials(e,t){void 0!==t.withCredentials&&void 0!==e.withCredentials&&(e.withCredentials=!!t.withCredentials)}function generalCallback(e){lastValue=e}function urlappend(e,t){return e+(/\?/.test(e)?"&":"?")+t}function handleJsonp(e,t,n,r){var a=uniqid++,o=e.jsonpCallback||"callback",s=e.jsonpCallbackName||reqwest.getcallbackPrefix(a),i=new RegExp("((^|\\?|&)"+o+")=([^&]+)"),l=r.match(i),d=doc.createElement("script"),u=0,c=-1!==navigator.userAgent.indexOf("MSIE 10.0");return l?"?"===l[3]?r=r.replace(i,"$1="+s):s=l[3]:r=urlappend(r,o+"="+s),context[s]=generalCallback,d.type="text/javascript",d.src=r,d.async=!0,void 0===d.onreadystatechange||c||(d.htmlFor=d.id="_reqwest_"+a),d.onload=d.onreadystatechange=function(){if(d[readyState]&&"complete"!==d[readyState]&&"loaded"!==d[readyState]||u)return!1;d.onload=d.onreadystatechange=null,d.onclick&&d.onclick(),t(lastValue),lastValue=void 0,head.removeChild(d),u=1},head.appendChild(d),{abort:function(){d.onload=d.onreadystatechange=null,n({},"Request is aborted: timeout",{}),lastValue=void 0,head.removeChild(d),u=1}}}function getRequest(e,t){var n,r=this.o,a=(r.method||"GET").toUpperCase(),o="string"==typeof r?r:r.url,s=!1!==r.processData&&r.data&&"string"!=typeof r.data?reqwest.toQueryString(r.data):r.data||null,i=!1;return"jsonp"!=r.type&&"GET"!=a||!s||(o=urlappend(o,s),s=null),"jsonp"==r.type?handleJsonp(r,e,t,o):(n=r.xhr&&r.xhr(r)||xhr(r),n.open(a,o,!1!==r.async),setHeaders(n,r),setCredentials(n,r),context[xDomainRequest]&&n instanceof context[xDomainRequest]?(n.onload=e,n.onerror=t,n.onprogress=function(){},i=!0):n.onreadystatechange=handleReadyState(this,e,t),r.before&&r.before(n),i?setTimeout(function(){n.send(s)},200):n.send(s),n)}function Reqwest(e,t){this.o=e,this.fn=t,init.apply(this,arguments)}function setType(e){if(null!==e)return e.match("json")?"json":e.match("javascript")?"js":e.match("text")?"html":e.match("xml")?"xml":void 0}function init(o,fn){function complete(e){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;self._completeHandlers.length>0;)self._completeHandlers.shift()(e)}function success(resp){var type=o.type||resp&&setType(resp.getResponseHeader("Content-Type"));resp="jsonp"!==type?self.request:resp;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(e){}if(r)switch(type){case"json":try{resp=context.JSON?context.JSON.parse(r):eval("("+r+")")}catch(e){return error(resp,"Could not parse JSON in response",e)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);self._fulfillmentHandlers.length>0;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(e,t,n){for(e=self.request,self._responseArgs.resp=e,self._responseArgs.msg=t,self._responseArgs.t=n,self._erred=!0;self._errorHandlers.length>0;)self._errorHandlers.shift()(e,t,n);complete(e)}this.url="string"==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){timedOut()},o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(e,t){return new Reqwest(e,t)}function normalize(e){return e?e.replace(/\r?\n/g,"\r\n"):""}function serial(e,t){var n,r,a,o,s=e.name,i=e.tagName.toLowerCase(),l=function(e){e&&!e.disabled&&t(s,normalize(e.attributes.value&&e.attributes.value.specified?e.value:e.text))};if(!e.disabled&&s)switch(i){case"input":/reset|button|image|file/i.test(e.type)||(n=/checkbox/i.test(e.type),r=/radio/i.test(e.type),a=e.value,(!(n||r)||e.checked)&&t(s,normalize(n&&""===a?"on":a)));break;case"textarea":t(s,normalize(e.value));break;case"select":if("select-one"===e.type.toLowerCase())l(e.selectedIndex>=0?e.options[e.selectedIndex]:null);else for(o=0;e.length&&o<e.length;o++)e.options[o].selected&&l(e.options[o])}}function eachFormElement(){var e,t,n=this,r=function(e,t){var r,a,o;for(r=0;r<t.length;r++)for(o=e[byTag](t[r]),a=0;a<o.length;a++)serial(o[a],n)};for(t=0;t<arguments.length;t++)e=arguments[t],/input|select|textarea/i.test(e.tagName)&&serial(e,n),r(e,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var e={};return eachFormElement.apply(function(t,n){t in e?(e[t]&&!isArray(e[t])&&(e[t]=[e[t]]),e[t].push(n)):e[t]=n},arguments),e}function buildParams(e,t,n,r){var a,o,s,i=/\[\]$/;if(isArray(t))for(o=0;t&&o<t.length;o++)s=t[o],n||i.test(e)?r(e,s):buildParams(e+"["+("object"==typeof s?o:"")+"]",s,n,r);else if(t&&"[object Object]"===t.toString())for(a in t)buildParams(e+"["+a+"]",t[a],n,r);else r(e,t)}var context=this;if("window"in context)var doc=document,byTag="getElementsByTagName",head=doc[byTag]("head")[0];else{var XHR2;try{XHR2=__webpack_require__(2136)}catch(e){throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")}}var httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",uniqid=0,callbackPrefix="reqwest_"+ +new Date,lastValue,xmlHttpRequest="XMLHttpRequest",xDomainRequest="XDomainRequest",noop=function(){},isArray="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=function(e){if(!0===e.crossOrigin){var t=context[xmlHttpRequest]?new XMLHttpRequest:null;if(t&&"withCredentials"in t)return t;if(context[xDomainRequest])return new XDomainRequest;throw new Error("Browser does not support cross-origin requests")}return context[xmlHttpRequest]?new XMLHttpRequest:XHR2?new XHR2:new ActiveXObject("Microsoft.XMLHTTP")},globalSetupOptions={dataFilter:function(e){return e}};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(e,t){return e=e||function(){},t=t||function(){},this._fulfilled?this._responseArgs.resp=e(this._responseArgs.resp):this._erred?t(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(e),this._errorHandlers.push(t)),this},always:function(e){return this._fulfilled||this._erred?e(this._responseArgs.resp):this._completeHandlers.push(e),this},fail:function(e){return this._erred?e(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(e),this},catch:function(e){return this.fail(e)}},reqwest.serializeArray=function(){var e=[];return eachFormElement.apply(function(t,n){e.push({name:t,value:n})},arguments),e},reqwest.serialize=function(){if(0===arguments.length)return"";var e,t,n=Array.prototype.slice.call(arguments,0);return e=n.pop(),e&&e.nodeType&&n.push(e)&&(e=null),e&&(e=e.type),t="map"==e?serializeHash:"array"==e?reqwest.serializeArray:serializeQueryString,t.apply(null,n)},reqwest.toQueryString=function(e,t){var n,r,a=t||!1,o=[],s=encodeURIComponent,i=function(e,t){t="function"==typeof t?t():null==t?"":t,o[o.length]=s(e)+"="+s(t)};if(isArray(e))for(r=0;e&&r<e.length;r++)i(e[r].name,e[r].value);else for(n in e)e.hasOwnProperty(n)&&buildParams(n,e[n],a,i);return o.join("&").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(e,t){return e&&(e.type&&(e.method=e.type)&&delete e.type,e.dataType&&(e.type=e.dataType),e.jsonpCallback&&(e.jsonpCallbackName=e.jsonpCallback)&&delete e.jsonpCallback,e.jsonp&&(e.jsonpCallback=e.jsonp)),new Reqwest(e,t)},reqwest.ajaxSetup=function(e){e=e||{};for(var t in e)globalSetupOptions[t]=e[t]},reqwest})},2134:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(414),o=r(a);(window.location.search.indexOf("debug")>0||window.location.search.indexOf("web_ci")>0)&&(o.default.mock("/data/overview/channelGroup.do","post",{status:!0,msg:"返回成功","data|20":[{appCode:24,channelCategory:2,channelDescribe:"",channelGroup:"",channelName:"@word(6)",channelTypeId:54,flag:1,id:"@natural(10, 9999)",isFree:0,programId:3}]}),o.default.mock("/data/overview/channel.do","post",{status:!0,msg:"返回成功","data|20":[{appCode:24,channelCategory:2,channelDescribe:"华为-新闻",channelGroup:"huawei_total_cpi_news",channelName:"@word(12)",channelTypeId:134,flag:1,id:153,isFree:0,programId:3,showCol:""}]}),o.default.mock("/common/firm.do","post",{status:!0,msg:"返回成功","data|20":[{firm:"@word(5)",id:"@natural(10, 9999)"}]}),o.default.mock("/common/brand.do","post",{status:!0,msg:"返回成功","data|20":[{brand:"@word(5)",firm:"@word(5)",id:"@natural(10, 9999)"}]}))},2135:function(e,t,n){var r,a;!function(o,s){r=s,void 0!==(a="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=a)}(0,function(){function e(e,t,n){return e<t?t:e>n?n:e}function t(e){return 100*(-1+e)}function n(e,n,r){var a;return a="translate3d"===d.positionUsing?{transform:"translate3d("+t(e)+"%,0,0)"}:"translate"===d.positionUsing?{transform:"translate("+t(e)+"%,0)"}:{"margin-left":t(e)+"%"},a.transition="all "+n+"ms "+r,a}function r(e,t){return("string"==typeof e?e:s(e)).indexOf(" "+t+" ")>=0}function a(e,t){var n=s(e),a=n+t;r(n,t)||(e.className=a.substring(1))}function o(e,t){var n,a=s(e);r(e,t)&&(n=a.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function s(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function i(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var l={};l.version="0.2.0";var d=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};l.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(d[t]=n);return this},l.status=null,l.set=function(t){var r=l.isStarted();t=e(t,d.minimum,1),l.status=1===t?null:t;var a=l.render(!r),o=a.querySelector(d.barSelector),s=d.speed,i=d.easing;return a.offsetWidth,u(function(e){""===d.positionUsing&&(d.positionUsing=l.getPositioningCSS()),c(o,n(t,s,i)),1===t?(c(a,{transition:"none",opacity:1}),a.offsetWidth,setTimeout(function(){c(a,{transition:"all "+s+"ms linear",opacity:0}),setTimeout(function(){l.remove(),e()},s)},s)):setTimeout(e,s)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var e=function(){setTimeout(function(){l.status&&(l.trickle(),e())},d.trickleSpeed)};return d.trickle&&e(),this},l.done=function(e){return e||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(t){var n=l.status;return n?("number"!=typeof t&&(t=(1-n)*e(Math.random()*n,.1,.95)),n=e(n+t,0,.994),l.set(n)):l.start()},l.trickle=function(){return l.inc(Math.random()*d.trickleRate)},function(){var e=0,t=0;l.promise=function(n){return n&&"resolved"!==n.state()?(0===t&&l.start(),e++,t++,n.always(function(){t--,0===t?(e=0,l.done()):l.set((e-t)/e)}),this):this}}(),l.render=function(e){if(l.isRendered())return document.getElementById("nprogress");a(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=d.template;var r,o=n.querySelector(d.barSelector),s=e?"-100":t(l.status||0),u=document.querySelector(d.parent);return c(o,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),d.showSpinner||(r=n.querySelector(d.spinnerSelector))&&i(r),u!=document.body&&a(u,"nprogress-custom-parent"),u.appendChild(n),n},l.remove=function(){o(document.documentElement,"nprogress-busy"),o(document.querySelector(d.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&i(e)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var u=function(){function e(){var n=t.shift();n&&n(e)}var t=[];return function(n){t.push(n),1==t.length&&e()}}(),c=function(){function e(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function t(e){var t=document.body.style;if(e in t)return e;for(var n,r=a.length,o=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((n=a[r]+o)in t)return n;return e}function n(n){return n=e(n),o[n]||(o[n]=t(n))}function r(e,t,r){t=n(t),e.style[t]=r}var a=["Webkit","O","Moz","ms"],o={};return function(e,t){var n,a,o=arguments;if(2==o.length)for(n in t)void 0!==(a=t[n])&&t.hasOwnProperty(n)&&r(e,n,a);else r(e,o[1],o[2])}}();return l})},2136:function(e,t){},2138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(415),a=function(e,t){for(var n=["abcdefghijklmnopqrstuvwxyz_","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","~@#$%^&*_+-="],r=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a=r(e,t),o="",s=0;s<a;++s){var i=r(0,3);o+=n[i].charAt(r(0,n[i].length-1))}return o},o=function(e){for(var t=e.map(function(e){if(""!=e.dataIndex)return e.title}),n=0;n<t.length;n++)void 0===t[n]&&(t.splice(n,1),n--);return t},s=function(e){for(var t=0;t<e.length;t++)""==e[t].dataIndex&&(e.splice(t,1),t--);return e},i=function(e,t){for(var n=[],r=0;r<e.length;r++)n[r]={};for(var a=0;a<t.length;a++)for(var o=t[a].dataIndex,s=0;s<e.length;s++){var i=e[s];switch(o){case"appCode":n[s][o]="24"==i[o]?"Android":"iOS";break;case"channelCategory":n[s][o]="1"==i[o]?"线上":"线下";break;case"isFree":n[s][o]="0"==i[o]?"是":"否";break;default:n[s][o]=i[o]}}return n},l=function(e){var t="全部";return e.brand?t=e.brand:e.firm?t=e.firm:e.deviceModel?t=e.deviceModel:e.appCode&&(t="24"==e.appCode?"Android":"iOS"),"机型管理-"+t+".xlsx"},d=function(e,t,n){var a={};a.fileName=n,a.datas=[{sheetData:e,sheetHeader:t}],new r(a).saveExcel()};t.getRandomPassword=a,t.getDownloadName=l,t.downloadExcle=d,t.dealDownloadTitle=o,t.dealDownloadData=i,t.dealDownloadColumns=s},2182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.check=t.getDownLoadData=t.changeEditFirm=t.edit=t.create=t.setUpdateParam=t.changeBrand=t.changeFirm=t.changeModel=t.changeOs=t.getTableData=t.getBrandList=t.getFirmList=void 0,n(2134),n(2193);var a=n(2133),o=r(a),s=n(0),i=(r(s),n(105)),l=function(e){return function(t){(0,o.default)({url:"/common/firm.do",method:"post",data:e,type:"json"}).then(function(e){e.status?t({type:"MODELMANAGER_FIRMLIST",payload:e.data}):-1==e.code&&(window.location.href="/")})}},d=function(e){return function(t){(0,o.default)({url:"/common/brand.do",method:"post",data:e,type:"json"}).then(function(e){e.status?t({type:"MODELMANAGER_BRANDLIST",payload:e.data}):-1==e.code&&(window.location.href="/")})}},u=function(e){return function(t){(0,o.default)({url:"/common/brand.do",method:"post",data:e,type:"json"}).then(function(e){e.status?(t({type:"MODELMANAGER_BRANDLIST",payload:e.data}),t(v({editBrand:e.data[0].brand}))):-1==e.code&&(window.location.href="/")})}},c=function(e){return function(t){t({type:"MODELMANAGER_LOADING",payload:!0}),t({type:"MODELMANAGER_OFFSET",payload:e.offset}),t({type:"MODELMANAGER_LIMIT",payload:e.limit}),(0,o.default)({url:"/os/model/table.do",method:"post",data:e,type:"json"}).then(function(e){e.status?(t({type:"MODELMANAGER_TOTAL",payload:e.total}),t({type:"MODELMANAGER_TABLE",payload:M(e.data,"huizhong-")}),t({type:"MODELMANAGER_LOADING",payload:!1})):-1==e.code&&(window.location.href="/")})}},p=function(e){return function(t){(0,o.default)({url:"/os/model/table.do",method:"post",data:e,type:"json"}).then(function(e){e.status?t({type:"MODELMANAGER_DOWNLOAD_DATA",payload:e.data}):-1==e.code&&(window.location.href="/")})}},f=function(e){return function(t){t({type:"MODELMANAGER_APPCODE",payload:e.appCode}),t({type:"MODELMANAGER_DEVICEMODEL",payload:e.deviceModel}),t({type:"MODELMANAGER_FIRM",payload:e.firm}),t({type:"MODELMANAGER_BRAND",payload:e.brand})}},m=function(e){return function(t){t({type:"MODELMANAGER_DEVICEMODEL",payload:e.deviceModel})}},h=function(e){return function(t){t({type:"MODELMANAGER_FIRM",payload:e.firm}),t({type:"MODELMANAGER_BRAND",payload:e.brand});var n={firm:e.firm};t(d(n))}},g=function(e){return function(t){var n={firm:e.editFirm};t(u(n))}},y=function(e){return function(t){t({type:"MODELMANAGER_BRAND",payload:e.brand})}},v=function(e){return function(t){e.createFirm&&t({type:"MODELMANAGER_CREATE_FIRM",payload:e.createFirm}),e.createBrand&&t({type:"MODELMANAGER_CREATE_BRAND",payload:e.createBrand}),e.editFirm&&t({type:"MODELMANAGER_EDIT_FIRM",payload:e.editFirm}),e.editBrand&&t({type:"MODELMANAGER_EDIT_BRAND",payload:e.editBrand}),e.editId&&t({type:"MODELMANAGER_EDIT_ID",payload:e.editId})}},_=function(e){return function(t){(0,o.default)({url:"/os/firm/add.do",method:"post",data:e,type:"json"}).then(function(e){window.location.href="/#/sys/modal"})}},b=function(e){return function(t){(0,o.default)({url:"/os/model/updateFirm.do",method:"post",data:e,type:"json"}).then(function(e){window.location.href="/#/sys/modal"})}},M=function(e,t){var n=[];return e.map(function(e,r){e.key=t+r,n.push(e)}),n},E=function(e,t){return function(n){(0,o.default)({url:"/os/firm/check.do",method:"post",data:e,type:"json"}).then(function(e){"error"==e.state?i.notification.open({message:e.error}):n(_(t))})}};t.getFirmList=l,t.getBrandList=d,t.getTableData=c,t.changeOs=f,t.changeModel=m,t.changeFirm=h,t.changeBrand=y,t.setUpdateParam=v,t.create=_,t.edit=b,t.changeEditFirm=g,t.getDownLoadData=p,t.check=E},2193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(414),o=r(a);(window.location.search.indexOf("debug")>0||window.location.search.indexOf("web_ci")>0)&&(o.default.mock("/common/firm.do","post",{msg:"返回成功","data|20":[{id:"@integer",firm:"@string"}],status:!0}),o.default.mock("/common/brand.do","post",{msg:"返回成功","data|20":[{id:"@integer",firm:"@string",brand:"@string"}],status:!0}),o.default.mock("/os/model/table.do","post",{msg:"返回成功","data|20":[{"appCode|1":["24","27"],brand:"@string",deviceModel:"@string",firm:"@string",id:"@increment","os|1":["Android","IOS"]}],status:!0,total:20}),o.default.mock("/os/firm/add.do","post",{data:"操作成功",state:"success"}),o.default.mock("/os/model/updateFirm.do","post",{data:"操作成功",state:"success"}),o.default.mock("/os/firm/check.do","post",{emptyIdentifier:1,state:"error",error:"名称重复"}))},2196:function(e,t,n){"use strict";function r(e,t){for(var n={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}},a=0;a!=e.length;++a)for(var o=0;o!=e[a].length;++o){r.s.r>a&&(r.s.r=a),r.s.c>o&&(r.s.c=o),r.e.r<a&&(r.e.r=a),r.e.c<o&&(r.e.c=o);var s={v:e[a][o]};if(null!=s.v){var i=XLSX.utils.encode_cell({c:o,r:a});"number"==typeof s.v?s.t="n":"boolean"==typeof s.v?s.t="b":s.t="s",n[i]=s}}return r.s.c<1e7&&(n["!ref"]=XLSX.utils.encode_range(r)),n}function a(){if(!(this instanceof a))return new a;this.SheetNames=[],this.Sheets={}}function o(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r!=e.length;++r)n[r]=255&e.charCodeAt(r);return t}function s(e,t,n){if(arguments.length<3)return!1;var s=new a,i=r(e),n=u(n);s.SheetNames.push(n),s.Sheets[n]=i;var l=XLSX.write(s,{bookType:"xlsx",bookSST:!0,type:"binary"});saveAs(new Blob([o(l)],{type:"application/octet-stream"}),t)}function i(e){return e||[[1,2,3],[!0,!1,"sheetjs"],["foo","bar","0.3"],["baz",null,"qux"]]}function l(){return"test.xlsx"}Object.defineProperty(t,"__esModule",{value:!0});var d=[],u=function e(t){return t||(t="new"),-1==d.indexOf(t)?(d.push(t),t):e(t+="_new")};t.toXlsx=s,t.formatData=i,t.getXlsxName=l}});