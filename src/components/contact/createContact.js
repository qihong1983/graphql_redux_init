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

import * as actionCreators from '../../actions/mainbody/mainbody';

const footer = () => 'Here is footer';


function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}

/**
 * 组件参数说明 				
 * show 控制是否显示隐藏
 * newCustomerOk 确定提交
 * newCustomerCannel 取消提交
 * refreshTable 刷新表格数据
*/

class CreateContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false
        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


    }

	/**
	 *  新建客户 -- 打开
	 * @method newCustomer
	 */
    newCustomer() {
        this.setState({
            newCustomer: true
        });
    }

	/**
	 * 新建客户 -- 确认新建客户
	 * @method newCustomerOk
	 */
    newCustomerOk(e) {
        console.log('确认新建客户');
        // this.setState({
        //     newCustomer: false
        // });

        this.props.newCustomerOk(false);
        this.props.refreshTable();
    }

	/**
	 * 新建客户 -- 取消新建客户
	 * @method newCustomerCannel
	 */
    newCustomerCannel(e) {
        console.log('取消新建客户');
        // this.setState({
        //     newCustomer: false
        // });

        this.props.newCustomerCannel(false);
    }

	/**
	 * 新建客户 -- 切换省市区
	 * @method onChangeCascader
	 */
    onChangeCascader(value) {
        console.log(value);
    }



    onChange(value) {
        console.log(`selected ${value}`);
    }

    onBlur() {
        console.log('blur');
    }

    onFocus() {
        console.log('focus');
    }

    onSearch(val) {
        console.log('search:', val);
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

            < Modal
                title="新建联系人"
                visible={this.props.show}
                onOk={this.newCustomerOk.bind(this)}
                onCancel={this.newCustomerCannel.bind(this)}
                footer={(<div><Button type="default" onClick={this.newCustomerCannel.bind(this)}>取消</Button><Button type="primary" onClick={this.newCustomerOk.bind(this)}>提交</Button></div>)
                }
                cancelText={< Button > 取消1</Button>}
                width={628}
            >
                <Form {...formItemLayout} >


                    {/*姓名开始*/}
                    <FormItem label="姓名 ">
                        {getFieldDecorator('reduce', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入姓名',
                                }
                            ]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*姓名结束*/}


                    {/*联系电话开始*/}
                    <FormItem label="联系电话">
                        {getFieldDecorator('reduce', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入姓名',
                                }
                            ]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*联系电话结束*/}

                    {/*关联客户开始*/}
                    <FormItem label="关联客户">
                        <Row gutter={24}>
                            <Col span={12}>
                                {getFieldDecorator('reduce', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入关联客户',
                                        }
                                    ]
                                })(
                                    <Select
                                        showSearch
                                        placeholder="关联客户"
                                        optionFilterProp="children"
                                        onChange={this.onChange.bind(this)}
                                        onFocus={this.onFocus.bind(this)}
                                        onBlur={this.onBlur.bind(this)}
                                        onSearch={this.onSearch.bind(this)}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                )}
                            </Col>

                            <Col span={12}>
                                <Button type="primary">新建客户</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    {/*客户状态开始*/}


                    {/* 地址开始 */}
                    <FormItem label="地址">
                        {getFieldDecorator('reduce', {
                            rules: [
                                {
                                    required: false,
                                    message: '请输入地址',
                                }
                            ]
                        })(
                            <Cascader options={options} onChange={this.onChangeCascader.bind(this)} placeholder="请选择省、市、区" />
                        )}
                    </FormItem>
                    {/* 地址结束 */}

                    {/*详细地址开始*/}
                    <FormItem label="详细地址">
                        {getFieldDecorator('reduce', {
                            rules: [
                                {
                                    required: false,
                                    message: '请输入详细地址',
                                }
                            ]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*详细地址结束*/}


                    {/*微信昵称开始*/}
                    <FormItem label="微信昵称">
                        {getFieldDecorator('reduce', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*微信昵称结束*/}

                    {/*邮箱开始*/}
                    <FormItem label="邮箱">
                        {getFieldDecorator('reduce', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*邮箱结束*/}

                    {/*QQ开始*/}
                    <FormItem label="QQ">
                        {getFieldDecorator('reduce', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*QQ结束*/}

                    {/*职务开始*/}
                    <FormItem label="职务">
                        {getFieldDecorator('reduce', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*职务结束*/}



                    {/*级别开始*/}
                    <FormItem label="级别">
                        <Select
                            placeholder="级别选择"
                            dropdownMatchSelectWidth={true}
                            value={"1"}
                            className="online"
                        >
                            <Option value="1">高层</Option>
                            <Option value="2">中层</Option>
                            <Option value="3">基层</Option>
                        </Select>
                    </FormItem>
                    {/*级别结束*/}


                    {/*重要程度开始*/}
                    <FormItem label="重要程度">
                        <Select
                            placeholder="重要程度选择"
                            dropdownMatchSelectWidth={true}
                            value={"1"}
                            className="online"
                        >
                            <Option value="1">一星</Option>
                            <Option value="2">二星</Option>
                            <Option value="3">三星</Option>
                            <Option value="3">四星</Option>
                            <Option value="3">五星</Option>
                        </Select>
                    </FormItem>
                    {/*重要程度结束*/}


                    {/*决策关系开始*/}
                    <FormItem label="决策关系">
                        <Select
                            placeholder="决策关系选择"
                            dropdownMatchSelectWidth={true}
                            value={"1"}
                            className="online"
                        >
                            <Option value="1">关键决策人</Option>
                            <Option value="2">分项决策人</Option>
                            <Option value="3">商务决策人</Option>
                            <Option value="3">技术决策人</Option>
                            <Option value="3">财务决策人</Option>
                            <Option value="3">使用人</Option>
                            <Option value="3">意见影响人</Option>
                            <Option value="3">普通人</Option>
                        </Select>
                    </FormItem>
                    {/*决策关系结束*/}

                    {/*亲密度开始*/}
                    <FormItem label="亲密度">
                        <Select
                            placeholder="亲密度选择"
                            dropdownMatchSelectWidth={true}
                            value={"1"}
                            className="online"
                        >
                            <Option value="1">亲密度1</Option>
                            <Option value="2">亲密度2</Option>
                            <Option value="3">亲密度3</Option>
                        </Select>
                    </FormItem>
                    {/*亲密度结束*/}


                    {/*性别开始*/}
                    <FormItem label="性别">
                        <Select
                            placeholder="性别选择"
                            dropdownMatchSelectWidth={true}
                            value={"1"}
                            className="online"
                        >
                            <Option value="1">男</Option>
                            <Option value="2">女</Option>
                        </Select>
                    </FormItem>
                    {/*性别结束*/}

                    {/*生日开始*/}
                    <FormItem label="生日">

                        <Row gutter={24}>
                            <Col span={6}>

                                <Select
                                    placeholder="年"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    <Option value="1">年</Option>
                                </Select>
                            </Col>

                            <Col span={6}>

                                <Select
                                    placeholder="月"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    <Option value="1">年</Option>
                                </Select>
                            </Col>


                            <Col span={6}>

                                <Select
                                    placeholder="日"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    <Option value="1">日</Option>
                                </Select>
                            </Col>
                        </Row>
                    </FormItem>
                    {/*生日结束*/}


                    {/*备注开始*/}
                    <FormItem label="备注">
                        {getFieldDecorator('reduce', {

                        })(
                            <TextArea rows={4} />
                        )}
                    </FormItem>
                    {/*备注结束*/}

                </Form>
            </Modal >

        );
    }
}


//将state.counter绑定到props的counter
// const mapStateToProps = (state) => {
// 	return {
// 		allTrend: state.Reducer.allTrend
// 	}
// };

// //将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	//全量
// 	return bindActionCreators(actionCreators, dispatch);
// };

CreateContact = Form.create()(CreateContact);

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" }),
    graphql(getBooksQuery, { name: "getBooksQuery" }),
)(CreateContact)

// export default connect(mapStateToProps, mapDispatchToProps)(Customer);