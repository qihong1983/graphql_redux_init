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

import * as actionCreators from '../../actions/concat/concat';

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

class ContactDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false
        }

    }

    componentWillReceiveProps(newProps) {

        // console.log(newProps.drawerDetailId, 'newProps.drawerDetailId');

        console.log(newProps, 'newProps.Customer.tablenewProps.Customer.table');


    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


    }

    /**
     * 打开联系人
     * @method openEditContact
     */
    openEditContact() {
        this.props.openEditContact();
    }

    DrawerHeader() {
        return (<div className="clearfix">
            <div className="pull-left">
                {this.props.Concat.detail.result != undefined ? this.props.Concat.detail.result.name : ""}
            </div>
            <div className="pull-right">
                <Button type="primary" onClick={this.openEditContact.bind(this)}>
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


    renderDetail() {

        console.log(this.props.Concat.detail, 'this.props.Concat.detail');
        // var detail = this.props.Concat.detail.length != 0 ? this.props.Concat.detail.result : [];



        var detail = this.props.Concat.detail.result;

        console.log(this.props.Concat, '###################################');

        console.log(detail, '******************************************************************');

        if (detail != undefined) {


            console.log(detail, 'detail');


            return (<div>

                <p>姓名: {detail.name}</p>
                <p>联系电话: {detail.phone}</p>
                <p>关联经营客户名称: {detail.partner_name}</p>
                <p>省: {detail.province}</p>
                <p>市: {detail.city}</p>
                <p>区: {detail.county}</p>
                <p>经纬度: {detail.location}</p>
                <p>详细地址: {detail.address}</p>
                <p>区域编码: {detail.area_code}</p>


                <p>微信名: {detail.wx_name}</p>
                <p>微信: {detail.wx_id}</p>


                <p>邮箱: {detail.email}</p>
                <p>qq: {detail.qq}</p>
                <p>职务: {detail.title}</p>
                <p>级别: {detail.rank}</p>




                <p>重要程度: {detail.importance}</p>
                <p>决策关系: {detail.decision}</p>
                <p>亲密度: {detail.affinity}</p>
                <p>性别: {detail.gender}</p>


                {/* <p>公历/阴历: {detail.birthday.type}</p>
                <p>生日: {detail.birthday.date}</p> */}
                <p>备注: {detail.note}</p>

            </div>)
        }


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

                    {this.renderDetail()}
                    {/* <p>姓名： 张先生</p>

                    <p>联系电话： 13666666666</p>

                    <p>关联客户： 北京市海淀汽修</p>

                    <p>地址：- - -</p>

                    <p>微信昵称： - - -</p>

                    <p>邮箱： - - -</p>

                    <p>QQ：- - -</p>

                    <p>职务： - - -</p>

                    <p>级别： - - -</p>

                    <p>重要程度：- - -</p>

                    <p>决策关系： - - -</p>

                    <p>亲密度：- - -</p>

                    <p>性别： - - -</p>

                    <p>生日：- - -</p>

                    <p>备注： - - -</p> */}
                </Drawer>


            </div>

        );
    }
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        Concat: state.Reducer.Concat
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

ContactDrawer = Form.create()(ContactDrawer);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(ContactDrawer)

export default connect(mapStateToProps, mapDispatchToProps)(ContactDrawer);