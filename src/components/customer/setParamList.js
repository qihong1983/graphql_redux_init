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
    Divider,
    Transfer,
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

class SetParamList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false,
            //客户管理 -- 穿梭
            targetKeys: [],
            selectedKeys: [],
            disabled: false,
            data: []
        }

    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.Customer.selectParam, 'newProps**')

        var arr = [];

        // display: "客户名称"
        // is_default: true
        // is_show: true
        // is_table_show: true
        // name: "name"
        // type: "string"

        var arr2 = [];

        newProps.Customer.selectParam.map((v, k) => {

            if (v.is_table_show) {
                arr2.push(v.name)
            }
            arr.push({
                "key": v.name,
                "title": v.display,
                "description": "",
                "disabled": v.is_default
            });

        })



        // var data = [
        //     {
        //         "key": "0",
        //         "title": "客户姓名",
        //         "description": "description of content1",
        //         "disabled": false
        //     },
        //     {
        //         "key": "1",
        //         "title": "联系电话",
        //         "description": "description of content2",
        //         "disabled": false
        //     },
        //     {
        //         "key": "2",
        //         "title": "客户状态",
        //         "description": "description of content3",
        //         "disabled": false
        //     },
        //     {
        //         "key": "3",
        //         "title": "客户分级",
        //         "description": "description of content4",
        //         "disabled": false
        //     },
        //     {
        //         "key": "4",
        //         "title": "客户来源",
        //         "description": "description of content5",
        //         "disabled": false
        //     },
        //     {
        //         "key": "5",
        //         "title": "经营类型",
        //         "description": "description of content6",
        //         "disabled": false
        //     },
        //     {
        //         "key": "6",
        //         "title": "经营主体",
        //         "description": "description of content7",
        //         "disabled": true
        //     },
        //     {
        //         "key": "7",
        //         "title": "认证状态",
        //         "description": "description of content8",
        //         "disabled": false
        //     },
        //     {
        //         "key": "8",
        //         "title": "客户性质",
        //         "description": "description of content9",
        //         "disabled": false
        //     },
        //     {
        //         "key": "9",
        //         "title": "重要程度",
        //         "description": "description of content10",
        //         "disabled": true
        //     }
        // ]


        const oriTargetKeys = arr2;
        // const oriTargetKeys = data.filter(item => +item.key % 3 > 1).map(item => item.key);


        console.log(oriTargetKeys, 'oriTargetKeys');

        this.setState({
            transferData: arr,
            targetKeys: oriTargetKeys,
            selectedKeys: []
        });

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();

        // var data = [
        //     {
        //         "key": "0",
        //         "title": "客户姓名",
        //         "description": "description of content1",
        //         "disabled": false
        //     },
        //     {
        //         "key": "1",
        //         "title": "联系电话",
        //         "description": "description of content2",
        //         "disabled": false
        //     },
        //     {
        //         "key": "2",
        //         "title": "客户状态",
        //         "description": "description of content3",
        //         "disabled": false
        //     },
        //     {
        //         "key": "3",
        //         "title": "客户分级",
        //         "description": "description of content4",
        //         "disabled": false
        //     },
        //     {
        //         "key": "4",
        //         "title": "客户来源",
        //         "description": "description of content5",
        //         "disabled": false
        //     },
        //     {
        //         "key": "5",
        //         "title": "经营类型",
        //         "description": "description of content6",
        //         "disabled": false
        //     },
        //     {
        //         "key": "6",
        //         "title": "经营主体",
        //         "description": "description of content7",
        //         "disabled": true
        //     },
        //     {
        //         "key": "7",
        //         "title": "认证状态",
        //         "description": "description of content8",
        //         "disabled": false
        //     },
        //     {
        //         "key": "8",
        //         "title": "客户性质",
        //         "description": "description of content9",
        //         "disabled": false
        //     },
        //     {
        //         "key": "9",
        //         "title": "重要程度",
        //         "description": "description of content10",
        //         "disabled": true
        //     }
        // ]

        // const oriTargetKeys = data.filter(item => +item.key % 3 > 1).map(item => item.key);

        // this.setState({
        //     transferData: data,
        //     targetKeys: oriTargetKeys,
        //     selectedKeys: []
        // });

    }

    /**
 * 客户管理 -- 列表字段设置 -- 确认
 * @method paramsListOk
 */
    paramsListOk() {
        // this.setState({
        //     paramsListVisible: false
        // });

        this.props.paramsListOk();
    }

	/**
	 * 客户管理 -- 列表字段设置 -- 取消
	 * @method paramsListCancel
 	 */
    paramsListCancel() {
        // this.setState({
        //     paramsListVisible: false
        // });

        console.log('这里执行了吗');

        console.log(this.props, 'this.props');
        this.props.paramsListCancel();
    }

	/*
	 * 已选择的库
	 * 
	 */
    handleChangeParamList(nextTargetKeys, direction, moveKeys) {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    handleSelectChangeParamList(sourceSelectedKeys, targetSelectedKeys) {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    handleScrollParamList(direction, e) {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };





    render() {

        const { targetKeys, selectedKeys, disabled } = this.state;

        return (

            <Modal
                title="列表字段设置"
                visible={this.props.paramsListVisible}
                onOk={this.paramsListOk.bind(this)}
                onCancel={this.paramsListCancel.bind(this)}
                footer={(<div><Button type="default" onClick={this.paramsListCancel.bind(this)}>取消</Button><Button type="primary" onClick={this.paramsListOk.bind(this)}>提交</Button></div>)}
            >

                <Card>
                    <Transfer
                        style={{ width: "406px", margin: "0 auto" }}
                        dataSource={this.state.transferData}
                        titles={['所有字段', '展示字段']}
                        targetKeys={targetKeys}
                        selectedKeys={selectedKeys}
                        onChange={this.handleChangeParamList.bind(this)}
                        onSelectChange={this.handleSelectChangeParamList.bind(this)}
                        onScroll={this.handleScrollParamList.bind(this)}
                        render={item => item.title}
                        disabled={disabled}
                    />
                </Card>
            </Modal>

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

SetParamList = Form.create()(SetParamList);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(SetParamList)

export default connect(mapStateToProps, mapDispatchToProps)(SetParamList);