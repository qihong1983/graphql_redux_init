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

import * as actionCreators from '../../actions/mainbody/mainbody';

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

class MainBodyDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false
        }

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.mainBody.selectParam, 'newPropsnewPropsnewProps');

        console.log(newProps, 'newPropsnewPropsnewProps***');
    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


    }

    openEditMainBody() {
        this.props.openEditMainBody();
    }
    DrawerHeader() {
        return (<div className="clearfix">
            <div className="pull-left">
                公司详情
			</div>
            <div className="pull-right">
                <Button type="primary" onClick={this.openEditMainBody.bind(this)}>
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

    getListImage(data) {
        var arr = [];

        data.map((v, k) => {
            arr.push(<img src={v.url} title={v.name} ></img>);
        });

        return arr;
    }

    getListFile(data) {
        var arr = [];
        data.map((v, k) => {
            arr.push(<span><a href={v.url}>{v.name}</a><br /></span>);
        })

        return arr;
    }

    renderDetail() {
        if (this.props.mainBody.detail.success) {

            var detail = this.props.mainBody.detail.result;
            return (<div>
                <p>
                    公司名称/姓名: {detail.name}
                </p>

                <p>
                    税号/身份证号: {detail.id_code}
                </p>

                <p>
                    联系电话: {detail.phone}
                </p>

                <p>
                    省: {detail.province}
                </p>
                <p>
                    市: {detail.city}
                </p>
                <p>
                    区: {detail.county}
                </p>

                <p>
                    经纬度: {detail.location}
                </p>

                <p>
                    详细地址: {detail.address}
                </p>


                <p>
                    区域编码: {detail.area_code}
                </p>


                <p>
                    邮箱: {detail.email}
                </p>

                <p>
                    备注: {detail.note}
                </p>

                <p>
                    类型: {detail.type}
                </p>


                <p>
                    是否是集团: {detail.is_group}
                </p>


                <p>
                    是否是总公司: {detail.is_main}
                </p>

                <p>
                    父级公司名称: {detail.parent_subject_name}
                </p>

                <p>
                    图片: {this.getListImage(detail.images)}
                </p>

                <p>
                    文件: {this.getListFile(detail.files)}
                </p>

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

                    {/* <p>公司详情</p>

                    <p>姓名：张李赵</p>

                    <p>身份证号：22354619800808</p>

                    <p>联系电话：13669569588</p>

                    <p>邮箱： - - -</p>

                    <p>备注： - - -</p>

                    <p>关联客户： - - -</p>

                    <p>编辑</p>


                    <p>图片：</p>

                    <p>文件：</p> */}
                </Drawer>


            </div>

        );
    }
}


// redux
const mapStateToProps = (state) => {
    return {
        mainBody: state.Reducer.mainBody
    }
};

// //将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

MainBodyDrawer = Form.create()(MainBodyDrawer);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(MainBodyDrawer)

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyDrawer);