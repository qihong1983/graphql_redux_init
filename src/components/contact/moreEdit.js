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

// import * as actionCreators from '../../actions/allTrend/allTrend';

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

class MoreEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false,
            editSelect: [],
            showSelect: []
        }

    }


    componentWillReceiveProps(newProps) {

        console.log(newProps.Concat.selectParam, 'newPropsnewPropsnewProps');

        // newProps.Customer.selectParam;

        // display: "经营类型"
        // enums: [{ "key": 1, "value": "快修" }, { "key": 2, "value": "综合" }, { "key": 3, "value": "轮胎" }, { "key": 4, "value": "专修" }, { "key": 5, "value": "4S" }]
        // is_default: false
        // is_show: true
        // is_table_show: true
        // name: "major_type"
        // type: "enum"


        var arr = [];
        newProps.Concat.selectParam.map((v, k) => {
            if (v.type == "enum") {
                arr.push({
                    key: v.name,
                    value: v.display
                });
            }
        })

        this.setState({
            editSelect: arr
        });



    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


    }

	/**
	 * 客户管理 -- 批量点击确定
	 */
    moreEditOk() {
        this.props.moreEditOk();
    }


	/**
	 * 客户管理 -- 批量点击取消
	 */
    moreEditCancel() {
        this.props.moreEditCancel();
    }

    renderSelectData() {
        var arr = [];

        this.state.editSelect.map((v, k) => {
            arr.push(<Option value={v.key}>{v.value}</Option>)
        })

        return arr;
    }

    renderShowData() {
        var arr = [];


        this.state.showSelect.map((v, k) => {
            arr.push(<Option value={v.key}>{v.value}</Option>)
        })

        return arr;
    }

    onChangeEditSelect(e) {

        this.props.Concat.selectParam.map((v, k) => {
            if (v.name == e) {

                this.props.form.setFieldsValue({
                    "show": v.enums[0].key
                })
                this.setState({
                    showSelect: v.enums
                });
            }
        })
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


                {/* 批量编辑开始 */}

                <Modal
                    title="批量编辑"
                    visible={this.props.moreEditVisible}
                    onOk={this.moreEditOk.bind(this)}
                    onCancel={this.moreEditCancel.bind(this)}
                >
                    <Form {...formItemLayout} >

                        {/*选择编辑字段开始*/}
                        <FormItem label="选择编辑字段">
                            {getFieldDecorator('edit', {
                                rules: [
                                    {
                                        required: true,
                                        message: '选择编辑字段',
                                    }
                                ]
                            })(
                                <Select
                                    placeholder="选择编辑字段"
                                    dropdownMatchSelectWidth={true}
                                    onChange={this.onChangeEditSelect.bind(this)}
                                    className="online"
                                >

                                    {this.renderSelectData()}
                                    {/* <Option value="1">潜在客户</Option>
                                    <Option value="2">初步接触</Option>
                                    <Option value="3">持续跟进</Option>
                                    <Option value="4">成交客户</Option>
                                    <Option value="5">忠诚客户</Option>
                                    <Option value="6">无效客户</Option> */}
                                </Select>
                            )}
                        </FormItem>
                        {/*选择编辑字段结束*/}


                        {/*展示选择字段开始*/}
                        <FormItem label="展示选择字段">
                            {getFieldDecorator('show', {
                                rules: [
                                    {
                                        required: true,
                                        message: '展示选择字段',
                                    }
                                ]
                            })(
                                <Select
                                    placeholder="展示选择字段"
                                    dropdownMatchSelectWidth={true}
                                    className="online"
                                >

                                    {this.renderShowData()}
                                    {/* <Option value="1">潜在客户</Option>
                                    <Option value="2">初步接触</Option>
                                    <Option value="3">持续跟进</Option>
                                    <Option value="4">成交客户</Option>
                                    <Option value="5">忠诚客户</Option>
                                    <Option value="6">无效客户</Option> */}
                                </Select>
                            )}
                        </FormItem>
                        {/*展示选择字段结束*/}

                    </Form>
                </Modal>
                {/* 批量编辑结束 */}
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

MoreEdit = Form.create()(MoreEdit);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(MoreEdit)

export default connect(mapStateToProps, mapDispatchToProps)(MoreEdit);