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
    Drawer,
    DatePicker,
    Tabs,
    Spin,
    Alert,
    Cascader,
    Row,
    Upload,
    Col,
    Divider,
    notification,
    Modal,
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

class CustomerDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false
        }

    }


    componentWillReceiveProps(newProps) {

        console.log(newProps.drawerDetailId, 'newProps.drawerDetailId');

        console.log(newProps.Customer.table.subjects, 'newProps.Customer.tablenewProps.Customer.table');


    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


    }


    DrawerHeader() {
        return (<div className="clearfix">
            <div className="pull-left">
                北京市海淀汽修
			</div>
            <div className="pull-right">
                <Button type="primary">
                    编辑
				</Button>
            </div>
        </div>)
    }


    onCloseDrawer() {
        // this.setState({
        //     drawerVisible: false
        // });

        this.props.onCloseDrawer();
    }


    render() {

        const {
            getFieldDecorator
        } = this.props.form;



        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };


        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];


        const { TextArea } = Input;


        return (

            <div>
                <Drawer
                    width={480}
                    title={this.DrawerHeader()}
                    placement="right"
                    closable={false}
                    onClose={this.onCloseDrawer.bind(this)}
                    visible={this.props.drawerVisible}
                >
                    <p>公司名称：北京海淀汽修</p>
                    <p>公司简称：---</p>
                    <p>客户状态：潜在客户</p>
                    <p>客户分级：一类维修厂</p>
                    <p>客户来源：线下地推</p>
                    <p>经营类型：快修</p>
                    <p>联系电话：18600190151</p>
                    <p>地址：北京市海淀区xx街道xxx号</p>
                    <p>客户性质：---</p>
                    <p>经营主体：公司</p>
                    <p>--------(主体信息）</p>
                    <p>认证状态：未认证</p>
                    <p>重要程度：五星</p>
                    <p>微信群名：---</p>
                </Drawer>


            </div>

        );
    }
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        Customer: state.Reducer.Customer
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

CustomerDrawer = Form.create()(CustomerDrawer);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(CustomerDrawer)

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDrawer);