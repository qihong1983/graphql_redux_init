import React from 'react';

import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../../queries/queries';

import {
    Router,
    Route,
    IndexRoute,
    IndexLink
} from 'react-router';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    Layout,
    Menu,
    Breadcrumb,
    Icon,
    Form,
    Pagination,
    Button,
    Select,
    Table,
    DatePicker,
    Tabs,
    Spin,
    Alert,
    Cascader,
    Row,
    Upload,
    Col,
    Checkbox,
    Divider,
    notification,
    Modal,
    Radio,
    Card,
    Input,
    LocaleProvider
} from 'antd';

const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;

const { Meta } = Card;

import {
    getDownloadName,
    downloadExcle,
    dealDownloadTitle,
    dealDownloadData,
    dealDownloadColumns
} from '../../common/channelManagerUtil';


import DDlogin from 'ddlogin-react';

// //Echarts 组件
import echarts from 'echarts';

import {
    Line
} from '../../common/chartConfigs';

const {
    SubMenu
} = Menu;

const {
    Content
} = Layout;

const FormItem = Form.Item;
const Option = Select.Option;

import Moment from 'moment';

// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
Moment.locale('zh-cn');

const thunk = require('redux-thunk').default;

const {
    MonthPicker,
    RangePicker
} = DatePicker;

import moment from 'moment';

import NProgress from 'nprogress';

const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY-MM';

//用户权限列表
import {
    renderGroupList,
    addKey
} from '../../common/utils';

import * as actionCreators from '../../actions/customer/customer';

const footer = () => 'Here is footer';


function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}


import CreateMainBody from '../mainbody/createMainBody';

/**
 * 组件参数说明 				
 * show 控制是否显示隐藏
 * newCustomerOk 确定提交
 * newCustomerCannel 取消提交
 * refreshTable 刷新表格数据
*/

class LoginCallback extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            loginType: 'accountLogin',
            // 测试 appid
            APPID: 'dingoadr9t90eu6af11cbm',
            // 跳转当前页面
            REDIRECT_URI: window.location.href
        }

    }

    componentWillMount() {
        NProgress.start();

        const state = this.props.location && this.props.location.query.state;

        if (state === 'dinglogin') {
            const code = this.props.location.query.code;

            console.log(code, 'code');
            // todo....
            // ex: dispatch(scanLogin({tmp_auth_code: code}));
        }
    }

    componentDidMount() {
        NProgress.done();


        // 监听消息处理方法
        const handleMessage = (event) => {
            // 获取loginTempCode
            const loginTempCode = event.data;
            // 获取消息来源
            const origin = event.origin;
            // 拼接 url
            const url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.state.APPID}&response_type=code&scope=snsapi_login&state=dinglogin&redirect_uri=${this.state.REDIRECT_URI}&loginTmpCode=${loginTempCode}`
            // 如果来源为https://login.dingtalk.com，则在当前窗口打开回调链接
            if (origin === 'https://login.dingtalk.com') {
                window.open(encodeURI(url), '_parent')
            }
        };
        // 监听iframe的消息
        if (typeof window.addEventListener != 'undefined') {
            window.addEventListener('message', handleMessage, false);
        } else if (typeof window.attachEvent != 'undefined') {
            window.attachEvent('onmessage', handleMessage);
        }

        // var url = encodeURIComponent('https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoadr9t90eu6af11cbm&response_type=code&scope=snsapi_login&state=login&redirect_uri=http://admin.epc.heqiauto.com/site/login');

        // console.log(url);

        // var obj = DDLogin({
        //     id: "login_container",
        //     goto: url,
        //     style: "",
        //     href: "",
        //     width: "200px",
        //     height: "200px"
        // });
    }

    changeLoginType(e) {
        this.setState({
            loginType: e.target.value
        });
    }

    renderAccountLogin() {

        const {
            getFieldDecorator
        } = this.props.form;

        return (<Form >



            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '帐号不能为空' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入帐号"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '密码不能为空' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="请输入用密码"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>自动登录</Checkbox>)}

                {/* <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
</Button> */}

            </Form.Item>
        </Form>)
    }

    renderQrcodeLogin() {

        const options = {
            id: "login-container",
            goto: `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${this.state.APPID}&response_type=code&scope=snsapi_login&state=login&redirect_uri=${this.state.REDIRECT_URI}`,
            width: '350px',
            height: '350px'
        }


        return (<div>
            <div className="QrcodeLoginImg" >
                {/* <img width="300" height="300" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}

                <DDlogin options={options} />
            </div>
        </div>)
    }

    render() {

        const {
            getFieldDecorator
        } = this.props.form;




        return (
            <Layout style={{ position: "relative", marginTop: 60, overflow: "hidden" }}>
                { /*筛选区域开始*/}
                <Content className="login_filter">
                    1111
                </Content>
                { /*筛选区域结束*/}
            </Layout>
        );
    }
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        reducer: state.Reducer
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

LoginCallback = Form.create()(LoginCallback);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginCallback);