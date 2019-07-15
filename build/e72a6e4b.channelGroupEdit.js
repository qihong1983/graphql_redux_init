webpackJsonp([5],{2101:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),p=r(c),d=n(841),f=n(56),h=n(2148),m=a(h),y=n(107),g=n(2124),_=r(g),C=n(2127),E=n(2133),v=y.Layout.Content,b=y.Input.TextArea,P=y.Button.Group,T=y.Form.Item,w=y.Select.Option,O=function(e){function t(e){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"componentWillMount",value:function(){_.default.start();var e=this.props.routeParams.id;this.props.getCurChannelGroupDetail({id:e}),this.props.getChannelTypeList({appCode:this.props.channelGroup.EditParam.appCode})}},{key:"componentDidMount",value:function(){_.default.done()}},{key:"renderChannelType",value:function(){var e=[];return this.props.channelGroup.ChannelTypeList.channelTypeList.map(function(t,n){e.push(p.default.createElement(w,{key:t.id,value:t.id.toString()},t.name))}),e}},{key:"createPassword",value:function(e,t){var n=(0,C.getRandomPassword)(e,t);this.props.setEditParam({password:n}),this.props.form.setFieldsValue({password:n})}},{key:"changeChannelGroup",value:function(e){this.props.setEditParam({channelName:e.target.value})}},{key:"changePassword",value:function(e){this.props.setEditParam({password:e.target.value})}},{key:"changeDescription",value:function(e){this.props.setEditParam({description:e.target.value})}},{key:"changeChannelCategory",value:function(e){this.props.setEditParam({channelCategory:e})}},{key:"changeChannelTypeId",value:function(e){this.props.setEditParam({channelTypeId:e})}},{key:"changeIsFree",value:function(e){this.props.setEditParam({isFree:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n={password:this.props.channelGroup.EditParam.password,channelName:this.props.channelGroup.EditParam.channelName,appCode:this.props.channelGroup.EditParam.appCode,channelCategory:this.props.channelGroup.EditParam.channelCategory,channelTypeId:this.props.channelGroup.EditParam.channelTypeId,isFree:this.props.channelGroup.EditParam.isFree,description:this.props.channelGroup.EditParam.description};this.props.form.validateFieldsAndScroll(function(e,a){e||t.props.edit(n)})}},{key:"cancelForm",value:function(){this.props.router.push("/manager/channelGroup")}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return p.default.createElement(y.Layout,{style:{marginLeft:180,position:"relative",marginTop:60,overflow:"hidden"}},p.default.createElement(v,{className:"channel_filter"},p.default.createElement(y.Card,{title:"新建渠道",bordered:!1,style:{width:"100%"},noHovering:!0},p.default.createElement(y.Form,{layout:"horizontal",onSubmit:this.handleSubmit.bind(this),style:{maxWidth:"600px"}},p.default.createElement(T,l({label:"渠道组名称"},E.formItemLayout),e("channelGroup",{rules:[{required:!0,message:"1-32个字符，支持字母、数字和下划线"},{pattern:/\w{1,32}$/,message:"1-32个字符，支持字母、数字和下划线!"}],initialValue:this.props.channelGroup.EditParam.channelName})(p.default.createElement(y.Input,{placeholder:"请输入渠道组名称",onChange:this.changeChannelGroup.bind(this)}))),p.default.createElement("div",{className:"loginPasswordRow"},p.default.createElement(T,l({label:"登录密码"},E.formItemLayout),e("password",{rules:[{required:!0,message:"6-12个字符，支持字母、数字和特殊字符"},{pattern:/\S{6,12}$/,message:"6-12个字符，支持字母、数字和特殊字符"}]})(p.default.createElement(y.Input,{placeholder:"请输入登录密码",onChange:this.changePassword.bind(this)}))),p.default.createElement(y.Button,{type:"primary",onClick:this.createPassword.bind(this,6,12)},"随机生成")),p.default.createElement(T,l({label:"操作系统"},E.formItemLayout),e("appCode",{rules:[{required:!0,message:"请选择操作系统"}],initialValue:this.props.channelGroup.EditParam.appCode})(p.default.createElement(y.Select,{disabled:!0,placeholder:"操作系统选择",dropdownMatchSelectWidth:!0,className:"online"},p.default.createElement(w,{value:""},"请选择"),p.default.createElement(w,{value:"24"},"Android"),p.default.createElement(w,{value:"27"},"iOS")))),p.default.createElement(T,l({label:"线上\\线下"},E.formItemLayout),e("channelCategory",{rules:[{required:!0,message:"请选择线上、线下"}],initialValue:this.props.channelGroup.EditParam.channelCategory})(p.default.createElement(y.Select,{placeholder:"线上线下选择",dropdownMatchSelectWidth:!0,className:"online",onChange:this.changeChannelCategory.bind(this)},p.default.createElement(w,{value:""},"请选择"),p.default.createElement(w,{value:"1"},"线上"),p.default.createElement(w,{value:"2"},"线下")))),p.default.createElement(T,l({label:"渠道类型"},E.formItemLayout),e("channelTypeId",{rules:[{required:!0,message:"请选择渠道类型"}],initialValue:this.props.channelGroup.EditParam.channelTypeId})(p.default.createElement(y.Select,{placeholder:"渠道类型选择",dropdownMatchSelectWidth:!0,className:"online",onChange:this.changeChannelTypeId.bind(this)},p.default.createElement(w,{value:""},"请选择"),this.renderChannelType()))),p.default.createElement(T,l({label:"是否付费"},E.formItemLayout),e("isFree",{rules:[{required:!0,message:"请选择是否付费"}],initialValue:this.props.channelGroup.EditParam.isFree})(p.default.createElement(y.Select,{placeholder:"是否付费选择",dropdownMatchSelectWidth:!0,className:"online",onChange:this.changeIsFree.bind(this)},p.default.createElement(w,{value:""},"请选择"),p.default.createElement(w,{value:"0"},"是"),p.default.createElement(w,{value:"1"},"否")))),p.default.createElement(T,l({label:"描述"},E.formItemLayout),p.default.createElement(b,{onChange:this.changeDescription.bind(this),value:this.props.channelGroup.EditParam.description})),p.default.createElement(T,{style:{textAlign:"center"}},p.default.createElement(P,null,p.default.createElement(y.Button,{type:"primary",htmlType:"submit",style:{textAlign:"right",padding:"0px 24px"}},"修改"),p.default.createElement(y.Button,{type:"default",onClick:this.cancelForm.bind(this)},"取消")))))))}}]),t}(p.default.Component);O=y.Form.create()(O);var A=function(e){return{channelGroup:e.Reducer.channelGroup}},R=function(e,t){return(0,f.bindActionCreators)(m,e)};t.default=(0,d.connect)(A,R)(O)},2122:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */
!function(e,t,n){void 0!==module&&module.exports?module.exports=n():(__WEBPACK_AMD_DEFINE_FACTORY__=n,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(0,0,function(){function succeed(e){var t=protocolRe.exec(e.url);return t=t&&t[1]||context.location.protocol,httpsRe.test(t)?twoHundo.test(e.request.status):!!e.request.response}function handleReadyState(e,t,n){return function(){return e._aborted?n(e.request):e._timedOut?n(e.request,"Request is aborted: timeout"):void(e.request&&4==e.request[readyState]&&(e.request.onreadystatechange=noop,succeed(e)?t(e.request):n(e.request)))}}function setHeaders(e,t){var n,a=t.headers||{};a.Accept=a.Accept||defaultHeaders.accept[t.type]||defaultHeaders.accept["*"];var r="undefined"!=typeof FormData&&t.data instanceof FormData;t.crossOrigin||a[requestedWith]||(a[requestedWith]=defaultHeaders.requestedWith),a[contentType]||r||(a[contentType]=t.contentType||defaultHeaders.contentType);for(n in a)a.hasOwnProperty(n)&&"setRequestHeader"in e&&e.setRequestHeader(n,a[n])}function setCredentials(e,t){void 0!==t.withCredentials&&void 0!==e.withCredentials&&(e.withCredentials=!!t.withCredentials)}function generalCallback(e){lastValue=e}function urlappend(e,t){return e+(/\?/.test(e)?"&":"?")+t}function handleJsonp(e,t,n,a){var r=uniqid++,o=e.jsonpCallback||"callback",s=e.jsonpCallbackName||reqwest.getcallbackPrefix(r),i=new RegExp("((^|\\?|&)"+o+")=([^&]+)"),l=a.match(i),u=doc.createElement("script"),c=0,p=-1!==navigator.userAgent.indexOf("MSIE 10.0");return l?"?"===l[3]?a=a.replace(i,"$1="+s):s=l[3]:a=urlappend(a,o+"="+s),context[s]=generalCallback,u.type="text/javascript",u.src=a,u.async=!0,void 0===u.onreadystatechange||p||(u.htmlFor=u.id="_reqwest_"+r),u.onload=u.onreadystatechange=function(){if(u[readyState]&&"complete"!==u[readyState]&&"loaded"!==u[readyState]||c)return!1;u.onload=u.onreadystatechange=null,u.onclick&&u.onclick(),t(lastValue),lastValue=void 0,head.removeChild(u),c=1},head.appendChild(u),{abort:function(){u.onload=u.onreadystatechange=null,n({},"Request is aborted: timeout",{}),lastValue=void 0,head.removeChild(u),c=1}}}function getRequest(e,t){var n,a=this.o,r=(a.method||"GET").toUpperCase(),o="string"==typeof a?a:a.url,s=!1!==a.processData&&a.data&&"string"!=typeof a.data?reqwest.toQueryString(a.data):a.data||null,i=!1;return"jsonp"!=a.type&&"GET"!=r||!s||(o=urlappend(o,s),s=null),"jsonp"==a.type?handleJsonp(a,e,t,o):(n=a.xhr&&a.xhr(a)||xhr(a),n.open(r,o,!1!==a.async),setHeaders(n,a),setCredentials(n,a),context[xDomainRequest]&&n instanceof context[xDomainRequest]?(n.onload=e,n.onerror=t,n.onprogress=function(){},i=!0):n.onreadystatechange=handleReadyState(this,e,t),a.before&&a.before(n),i?setTimeout(function(){n.send(s)},200):n.send(s),n)}function Reqwest(e,t){this.o=e,this.fn=t,init.apply(this,arguments)}function setType(e){if(null!==e)return e.match("json")?"json":e.match("javascript")?"js":e.match("text")?"html":e.match("xml")?"xml":void 0}function init(o,fn){function complete(e){for(o.timeout&&clearTimeout(self.timeout),self.timeout=null;self._completeHandlers.length>0;)self._completeHandlers.shift()(e)}function success(resp){var type=o.type||resp&&setType(resp.getResponseHeader("Content-Type"));resp="jsonp"!==type?self.request:resp;var filteredResponse=globalSetupOptions.dataFilter(resp.responseText,type),r=filteredResponse;try{resp.responseText=r}catch(e){}if(r)switch(type){case"json":try{resp=context.JSON?context.JSON.parse(r):eval("("+r+")")}catch(e){return error(resp,"Could not parse JSON in response",e)}break;case"js":resp=eval(r);break;case"html":resp=r;break;case"xml":resp=resp.responseXML&&resp.responseXML.parseError&&resp.responseXML.parseError.errorCode&&resp.responseXML.parseError.reason?null:resp.responseXML}for(self._responseArgs.resp=resp,self._fulfilled=!0,fn(resp),self._successHandler(resp);self._fulfillmentHandlers.length>0;)resp=self._fulfillmentHandlers.shift()(resp);complete(resp)}function timedOut(){self._timedOut=!0,self.request.abort()}function error(e,t,n){for(e=self.request,self._responseArgs.resp=e,self._responseArgs.msg=t,self._responseArgs.t=n,self._erred=!0;self._errorHandlers.length>0;)self._errorHandlers.shift()(e,t,n);complete(e)}this.url="string"==typeof o?o:o.url,this.timeout=null,this._fulfilled=!1,this._successHandler=function(){},this._fulfillmentHandlers=[],this._errorHandlers=[],this._completeHandlers=[],this._erred=!1,this._responseArgs={};var self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){timedOut()},o.timeout)),o.success&&(this._successHandler=function(){o.success.apply(o,arguments)}),o.error&&this._errorHandlers.push(function(){o.error.apply(o,arguments)}),o.complete&&this._completeHandlers.push(function(){o.complete.apply(o,arguments)}),this.request=getRequest.call(this,success,error)}function reqwest(e,t){return new Reqwest(e,t)}function normalize(e){return e?e.replace(/\r?\n/g,"\r\n"):""}function serial(e,t){var n,a,r,o,s=e.name,i=e.tagName.toLowerCase(),l=function(e){e&&!e.disabled&&t(s,normalize(e.attributes.value&&e.attributes.value.specified?e.value:e.text))};if(!e.disabled&&s)switch(i){case"input":/reset|button|image|file/i.test(e.type)||(n=/checkbox/i.test(e.type),a=/radio/i.test(e.type),r=e.value,(!(n||a)||e.checked)&&t(s,normalize(n&&""===r?"on":r)));break;case"textarea":t(s,normalize(e.value));break;case"select":if("select-one"===e.type.toLowerCase())l(e.selectedIndex>=0?e.options[e.selectedIndex]:null);else for(o=0;e.length&&o<e.length;o++)e.options[o].selected&&l(e.options[o])}}function eachFormElement(){var e,t,n=this,a=function(e,t){var a,r,o;for(a=0;a<t.length;a++)for(o=e[byTag](t[a]),r=0;r<o.length;r++)serial(o[r],n)};for(t=0;t<arguments.length;t++)e=arguments[t],/input|select|textarea/i.test(e.tagName)&&serial(e,n),a(e,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var e={};return eachFormElement.apply(function(t,n){t in e?(e[t]&&!isArray(e[t])&&(e[t]=[e[t]]),e[t].push(n)):e[t]=n},arguments),e}function buildParams(e,t,n,a){var r,o,s,i=/\[\]$/;if(isArray(t))for(o=0;t&&o<t.length;o++)s=t[o],n||i.test(e)?a(e,s):buildParams(e+"["+("object"==typeof s?o:"")+"]",s,n,a);else if(t&&"[object Object]"===t.toString())for(r in t)buildParams(e+"["+r+"]",t[r],n,a);else a(e,t)}var context=this;if("window"in context)var doc=document,byTag="getElementsByTagName",head=doc[byTag]("head")[0];else{var XHR2;try{XHR2=__webpack_require__(2125)}catch(e){throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")}}var httpsRe=/^http/,protocolRe=/(^\w+):\/\//,twoHundo=/^(20\d|1223)$/,readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",uniqid=0,callbackPrefix="reqwest_"+ +new Date,lastValue,xmlHttpRequest="XMLHttpRequest",xDomainRequest="XDomainRequest",noop=function(){},isArray="function"==typeof Array.isArray?Array.isArray:function(e){return e instanceof Array},defaultHeaders={contentType:"application/x-www-form-urlencoded",requestedWith:xmlHttpRequest,accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"}},xhr=function(e){if(!0===e.crossOrigin){var t=context[xmlHttpRequest]?new XMLHttpRequest:null;if(t&&"withCredentials"in t)return t;if(context[xDomainRequest])return new XDomainRequest;throw new Error("Browser does not support cross-origin requests")}return context[xmlHttpRequest]?new XMLHttpRequest:XHR2?new XHR2:new ActiveXObject("Microsoft.XMLHTTP")},globalSetupOptions={dataFilter:function(e){return e}};return Reqwest.prototype={abort:function(){this._aborted=!0,this.request.abort()},retry:function(){init.call(this,this.o,this.fn)},then:function(e,t){return e=e||function(){},t=t||function(){},this._fulfilled?this._responseArgs.resp=e(this._responseArgs.resp):this._erred?t(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):(this._fulfillmentHandlers.push(e),this._errorHandlers.push(t)),this},always:function(e){return this._fulfilled||this._erred?e(this._responseArgs.resp):this._completeHandlers.push(e),this},fail:function(e){return this._erred?e(this._responseArgs.resp,this._responseArgs.msg,this._responseArgs.t):this._errorHandlers.push(e),this},catch:function(e){return this.fail(e)}},reqwest.serializeArray=function(){var e=[];return eachFormElement.apply(function(t,n){e.push({name:t,value:n})},arguments),e},reqwest.serialize=function(){if(0===arguments.length)return"";var e,t,n=Array.prototype.slice.call(arguments,0);return e=n.pop(),e&&e.nodeType&&n.push(e)&&(e=null),e&&(e=e.type),t="map"==e?serializeHash:"array"==e?reqwest.serializeArray:serializeQueryString,t.apply(null,n)},reqwest.toQueryString=function(e,t){var n,a,r=t||!1,o=[],s=encodeURIComponent,i=function(e,t){t="function"==typeof t?t():null==t?"":t,o[o.length]=s(e)+"="+s(t)};if(isArray(e))for(a=0;e&&a<e.length;a++)i(e[a].name,e[a].value);else for(n in e)e.hasOwnProperty(n)&&buildParams(n,e[n],r,i);return o.join("&").replace(/%20/g,"+")},reqwest.getcallbackPrefix=function(){return callbackPrefix},reqwest.compat=function(e,t){return e&&(e.type&&(e.method=e.type)&&delete e.type,e.dataType&&(e.type=e.dataType),e.jsonpCallback&&(e.jsonpCallbackName=e.jsonpCallback)&&delete e.jsonpCallback,e.jsonp&&(e.jsonpCallback=e.jsonp)),new Reqwest(e,t)},reqwest.ajaxSetup=function(e){e=e||{};for(var t in e)globalSetupOptions[t]=e[t]},reqwest})},2123:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(420),o=a(r);(window.location.search.indexOf("debug")>0||window.location.search.indexOf("web_ci")>0)&&(o.default.mock("/data/overview/channelGroup.do","post",{status:!0,msg:"返回成功","data|20":[{appCode:24,channelCategory:2,channelDescribe:"",channelGroup:"",channelName:"@word(6)",channelTypeId:54,flag:1,id:"@natural(10, 9999)",isFree:0,programId:3}]}),o.default.mock("/data/overview/channel.do","post",{status:!0,msg:"返回成功","data|20":[{appCode:24,channelCategory:2,channelDescribe:"华为-新闻",channelGroup:"huawei_total_cpi_news",channelName:"@word(12)",channelTypeId:134,flag:1,id:153,isFree:0,programId:3,showCol:""}]}),o.default.mock("/common/firm.do","post",{status:!0,msg:"返回成功","data|20":[{firm:"@word(5)",id:"@natural(10, 9999)"}]}),o.default.mock("/common/brand.do","post",{status:!0,msg:"返回成功","data|20":[{brand:"@word(5)",firm:"@word(5)",id:"@natural(10, 9999)"}]}))},2124:function(e,t,n){var a,r;!function(o,s){a=s,void 0!==(r="function"==typeof a?a.call(t,n,t,e):a)&&(e.exports=r)}(0,function(){function e(e,t,n){return e<t?t:e>n?n:e}function t(e){return 100*(-1+e)}function n(e,n,a){var r;return r="translate3d"===u.positionUsing?{transform:"translate3d("+t(e)+"%,0,0)"}:"translate"===u.positionUsing?{transform:"translate("+t(e)+"%,0)"}:{"margin-left":t(e)+"%"},r.transition="all "+n+"ms "+a,r}function a(e,t){return("string"==typeof e?e:s(e)).indexOf(" "+t+" ")>=0}function r(e,t){var n=s(e),r=n+t;a(n,t)||(e.className=r.substring(1))}function o(e,t){var n,r=s(e);a(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function s(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function i(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var l={};l.version="0.2.0";var u=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};l.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(u[t]=n);return this},l.status=null,l.set=function(t){var a=l.isStarted();t=e(t,u.minimum,1),l.status=1===t?null:t;var r=l.render(!a),o=r.querySelector(u.barSelector),s=u.speed,i=u.easing;return r.offsetWidth,c(function(e){""===u.positionUsing&&(u.positionUsing=l.getPositioningCSS()),p(o,n(t,s,i)),1===t?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+s+"ms linear",opacity:0}),setTimeout(function(){l.remove(),e()},s)},s)):setTimeout(e,s)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var e=function(){setTimeout(function(){l.status&&(l.trickle(),e())},u.trickleSpeed)};return u.trickle&&e(),this},l.done=function(e){return e||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(t){var n=l.status;return n?("number"!=typeof t&&(t=(1-n)*e(Math.random()*n,.1,.95)),n=e(n+t,0,.994),l.set(n)):l.start()},l.trickle=function(){return l.inc(Math.random()*u.trickleRate)},function(){var e=0,t=0;l.promise=function(n){return n&&"resolved"!==n.state()?(0===t&&l.start(),e++,t++,n.always(function(){t--,0===t?(e=0,l.done()):l.set((e-t)/e)}),this):this}}(),l.render=function(e){if(l.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=u.template;var a,o=n.querySelector(u.barSelector),s=e?"-100":t(l.status||0),c=document.querySelector(u.parent);return p(o,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),u.showSpinner||(a=n.querySelector(u.spinnerSelector))&&i(a),c!=document.body&&r(c,"nprogress-custom-parent"),c.appendChild(n),n},l.remove=function(){o(document.documentElement,"nprogress-busy"),o(document.querySelector(u.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&i(e)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var c=function(){function e(){var n=t.shift();n&&n(e)}var t=[];return function(n){t.push(n),1==t.length&&e()}}(),p=function(){function e(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function t(e){var t=document.body.style;if(e in t)return e;for(var n,a=r.length,o=e.charAt(0).toUpperCase()+e.slice(1);a--;)if((n=r[a]+o)in t)return n;return e}function n(n){return n=e(n),o[n]||(o[n]=t(n))}function a(e,t,a){t=n(t),e.style[t]=a}var r=["Webkit","O","Moz","ms"],o={};return function(e,t){var n,r,o=arguments;if(2==o.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&a(e,n,r);else a(e,o[1],o[2])}}();return l})},2125:function(e,t){},2127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(421),r=function(e,t){for(var n=["abcdefghijklmnopqrstuvwxyz_","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","~@#$%^&*_+-="],a=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},r=a(e,t),o="",s=0;s<r;++s){var i=a(0,3);o+=n[i].charAt(a(0,n[i].length-1))}return o},o=function(e){for(var t=e.map(function(e){if(""!=e.dataIndex)return e.title}),n=0;n<t.length;n++)void 0===t[n]&&(t.splice(n,1),n--);return t},s=function(e){for(var t=0;t<e.length;t++)""==e[t].dataIndex&&(e.splice(t,1),t--);return e},i=function(e,t){for(var n=[],a=0;a<e.length;a++)n[a]={};for(var r=0;r<t.length;r++)for(var o=t[r].dataIndex,s=0;s<e.length;s++){var i=e[s];switch(o){case"appCode":n[s][o]="24"==i[o]?"Android":"iOS";break;case"channelCategory":n[s][o]="1"==i[o]?"线上":"线下";break;case"isFree":n[s][o]="0"==i[o]?"是":"否";break;default:n[s][o]=i[o]}}return n},l=function(e){var t="全部";return e.brand?t=e.brand:e.firm?t=e.firm:e.deviceModel?t=e.deviceModel:e.appCode&&(t="24"==e.appCode?"Android":"iOS"),"机型管理-"+t+".xlsx"},u=function(e,t,n){var r={};r.fileName=n,r.datas=[{sheetData:e,sheetHeader:t}],new a(r).saveExcel()};t.getRandomPassword=r,t.getDownloadName=l,t.downloadExcle=u,t.dealDownloadTitle=o,t.dealDownloadData=i,t.dealDownloadColumns=s},2130:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(420),o=a(r);(window.location.search.indexOf("debug")>0||window.location.search.indexOf("web_ci")>0)&&(o.default.mock("/manage/channelType.do","post",{msg:"返回成功",data:[{name:"渠道类型1",id:1}],status:!0}),o.default.mock("/manage/list/index.do","post",{status:!0,msg:"返回成功","data|10":[{"appCode|1":["24","27"],"channelCategory|1":["1","2"],channelDescribe:"@cword(3,5)",channelGroup:"@string",channelName:"@string",channelType:"@string",channelTypeId:"integer",flag:"@float(10, 10.0, 2, 2)",id:"@natural(1000, 10000)","isFree|1":["0","1"],programId:"@natural(1000, 10000)",showCol:"@natural(1000, 10000)"}],total:"@natural(100, 999)"}),o.default.mock("/manage/channel/groupList.do","post",{status:!0,msg:"返回成功","data|10":[{appCode:"@natural(1000, 10000)",channelCategory:"@natural(1000, 10000)",channelDescribe:"@datetime('yyyy-MM-dd')",channelGroup:"@natural(1000, 10000)",channelName:"@string",channelTypeId:"@natural(1000, 10000)",flag:"@float(10, 10.0, 2, 2)",id:"@natural(1000, 10000)",isFree:"@natural(1000, 10000)",programId:"@natural(1000, 10000)",showCol:"@natural(1000, 10000)"}]}),o.default.mock("/manage/get.do","post",{status:!0,msg:"返回成功",data:{"appCode|1":[27,24],"channelCategory|1":[1,2],channelDescribe:"@string",channelGroup:"@string",channelName:"@string",channelType:"@string",channelTypeId:1,flag:"@integer",id:"@integer","isFree|1":[0,1],programId:"@integer",showCol:"1","reduce|1":[0,10,20,30,55]}}),o.default.mock("/manage/channel/update.do","post",{status:!0,msg:"修改成功"}),o.default.mock("/manage/channel/add.do","post",{status:!0,msg:"修改成功"}),o.default.mock("/manage/channel/nameCheck.do","post",{ok:"",state:"success"}))},2133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}};t.formItemLayout=a},2137:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTableData=void 0;var r=n(2122),o=a(r),s=n(2144),i=function(e){return function(t){t({type:"CHANNELGROUP_LOADING",payload:!0}),(0,o.default)({url:"/manage/list/index.do",method:"post",data:e,type:"json",header:{aaa:"bbb"}}).then(function(e){e.status?(t({type:"CHANNEL_GROUP_TABLE",payload:(0,s.addKey)(e.data,"huizhong-")}),t({type:"CHANNEL_GROUP_TOTAL",payload:e.total}),t({type:"CHANNELGROUP_LOADING",payload:!1})):-1==e.code&&(alert(-1),window.location.href="/")})}};t.getTableData=i},2140:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getChannelTypeList=void 0;var r=n(2122),o=a(r),s=function(e){return function(t){(0,o.default)({url:"/manage/channelType.do",method:"post",data:e,type:"json"}).then(function(e){e.status?t({type:"CHANNELGROUP_CHANNELTYPELIST",payload:e.data}):-1==e.code&&(window.location.href="/")})}};t.getChannelTypeList=s},2144:function(e,t,n){"use strict";function a(e,t){var n=[];return e.map(function(e,a){e.key=t+a,n.push(e)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.addKey=a},2145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return function(t){t({type:"CHANNELGROUP_CHANNELCATEGORY",payload:e.channelCategory}),t({type:"CHANNELGROUP_CHANNELTYPEID",payload:e.channelTypeId})}};t.changeChannelCategory=a},2146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return function(t){t({type:"CHANNELGROUP_CHANNELTYPEID",payload:e.channelTypeId})}};t.changeChannelType=a},2147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeOs=void 0;var a=n(2140),r=function(e){return function(t){t({type:"CHANNELGROUP_APPCODE",payload:e.appCode}),t({type:"CHANNELGROUP_CHANNELCATEGORY",payload:e.channelCategory}),t({type:"CHANNELGROUP_CHANNELTYPEID",payload:e.channelTypeId});var n={appCode:e.appCode};t((0,a.getChannelTypeList)(n))}};t.changeOs=r},2148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCurChannelGroupDetail=t.changeChannelType=t.setPagination=t.setLimit=t.setEditParam=t.setCreateParam=t.getTableData=t.getChannelTypeList=t.edit=t.create=t.changeOs=t.changeChannelCategory=void 0,n(2130),n(2123);var a=n(2145),r=n(2147),o=n(2149),s=n(2150),i=n(2140),l=n(2137),u=n(2152),c=n(2153),p=n(2154),d=n(2155),f=n(2146),h=n(2151);t.changeChannelCategory=a.changeChannelCategory,t.changeOs=r.changeOs,t.create=o.create,t.edit=s.edit,t.getChannelTypeList=i.getChannelTypeList,t.getTableData=l.getTableData,t.setCreateParam=u.setCreateParam,t.setEditParam=c.setEditParam,t.setLimit=p.setLimit,t.setPagination=d.setPagination,t.changeChannelType=f.changeChannelType,t.getCurChannelGroupDetail=h.getCurChannelGroupDetail},2149:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var r=n(2122),o=a(r),s=function(e){return function(t){(0,o.default)({url:"/manage/channel/add.do",method:"post",data:e,type:"json"}).then(function(e){window.location.href="/#/manager/channelGroup"})}};t.create=s},2150:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.edit=void 0;var r=n(2122),o=a(r),s=function(e){return function(t){(0,o.default)({url:"/manage/channel/update.do",method:"post",data:e,type:"json"}).then(function(e){window.location.href="/#/manager/channelGroup"})}};t.edit=s},2151:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getCurChannelGroupDetail=void 0;var r=n(2122),o=a(r),s=function(e){return function(t){(0,o.default)({url:"/manage/get.do",method:"post",data:e,type:"json"}).then(function(e){e.status?(t({type:"EDIT_GROUP_ID",payload:e.data.id}),t({type:"EDIT_GROUP_CHANNELNAME",payload:e.data.channelName}),t({type:"EDIT_GROUP_DESCRIPTION",payload:e.data.description}),t({type:"EDIT_GROUP_APPCODE",payload:e.data.appCode}),t({type:"EDIT_GROUP_CHANNELCATEGORY",payload:e.data.channelCategory}),t({type:"EDIT_CHANNELTYPE",payload:e.data.channelType}),t({type:"EDIT_GROUP_CHANNELTYPEID",payload:e.data.channelTypeId}),t({type:"EDIT_GROUP_ISFREE",payload:e.data.isFree}),t({type:"EDIT_GROUP_PASSWORD",payload:e.data.password})):-1==e.code&&(window.location.href="/")})}};t.getCurChannelGroupDetail=s},2152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return function(t){e.channelName&&t({type:"CREATE_GROUP_CHANNELNAME",payload:e.channelName}),e.channelCategory&&t({type:"CREATE_GROUP_CHANNELCATEGORY",payload:e.channelCategory}),e.channelTypeId&&t({type:"CREATE_GROUP_CHANNELTYPEID",payload:e.channelTypeId}),e.description&&t({type:"CREATE_GROUP_DESCRIPTION",payload:e.description}),e.appCode&&t({type:"CREATE_GROUP_APPCODE",payload:e.appCode}),e.isFree&&t({type:"CREATE_GROUP_ISFREE",payload:e.isFree}),e.password&&t({type:"CREATE_GROUP_PASSWORD",payload:e.password})}};t.setCreateParam=a},2153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return function(t){e.id&&t({type:"EDIT_GROUP_ID",payload:e.id}),e.channelName&&t({type:"EDIT_GROUP_CHANNELNAME",payload:e.channelName}),e.channelCategory&&t({type:"EDIT_GROUP_CHANNELCATEGORY",payload:e.channelCategory}),e.channelTypeId&&t({type:"EDIT_GROUP_CHANNELTYPEID",payload:e.channelTypeId}),e.description&&t({type:"EDIT_GROUP_DESCRIPTION",payload:e.description}),e.appCode&&t({type:"EDIT_GROUP_APPCODE",payload:e.appCode}),e.isFree&&t({type:"EDIT_GROUP_ISFREE",payload:e.isFree}),e.password&&t({type:"EDIT_GROUP_PASSWORD",payload:e.password})}};t.setEditParam=a},2154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLimit=void 0;var a=n(2137),r=function(e,t){return function(e){e({type:"CHANNEL_GROUP_CURRENT",payload:1}),e({type:"CHANNEL_GROUP_PAGE_SIZE",payload:t.pageSize});var n={appCode:"",sortField:"",sortOrder:"",channelGroup:"",channelCategory:"",fatherFlag:"",channelTypeId:"",isFree:"",offset:1,limit:t.pageSize};(0,a.getTableData)(n,e)}};t.setLimit=r},2155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setPagination=void 0;var a=n(2137),r=function(e){return function(t){t({type:"CHANNEL_GROUP_CURRENT",payload:e.offset}),t({type:"CHANNEL_GROUP_PAGE_SIZE",payload:e.limit});var n={appCode:e.appCode,sortField:e.sortField,sortOrder:e.sortOrder,channelGroup:e.channelGroup,channelCategory:e.channelCategory,fatherFlag:e.fatherFlag,channelTypeId:e.channelTypeId,isFree:e.isFree,offset:e.offset,limit:e.limit};(0,a.getTableData)(n,t)}};t.setPagination=r}});