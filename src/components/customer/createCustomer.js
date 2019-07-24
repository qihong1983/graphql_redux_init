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

class CreateCustomer extends React.Component {

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

            <div>
                <Modal
                    title="新建客户"
                    visible={this.props.show}
                    onOk={this.newCustomerOk.bind(this)}
                    onCancel={this.newCustomerCannel.bind(this)}
                    footer={(<div><Button type="default" onClick={this.newCustomerCannel.bind(this)}>取消</Button><Button type="primary" onClick={this.newCustomerOk.bind(this)}>提交</Button></div>)
                    }
                    cancelText={< Button > 取消1</Button>}
                    width={628}
                >
                    <Form {...formItemLayout} >


                        {/*公司名称开始*/}
                        <FormItem label="公司名称">
                            {getFieldDecorator('reduce', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入公司名称',
                                    }
                                ]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*公司名称结束*/}


                        {/*公司简称开始*/}
                        <FormItem label="公司简称">
                            {getFieldDecorator('reduce', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*公司简称结束*/}

                        {/*客户状态开始*/}
                        <FormItem label="客户状态">
                            <Select
                                placeholder="客户状态选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                <Option value="1">潜在客户</Option>
                                <Option value="2">初步接触</Option>
                                <Option value="3">持续跟进</Option>
                                <Option value="4">成交客户</Option>
                                <Option value="5">忠诚客户</Option>
                                <Option value="6">无效客户</Option>
                            </Select>
                        </FormItem>
                        {/*客户状态开始*/}



                        {/*客户分级开始*/}
                        <FormItem label="客户分级">
                            <Select
                                placeholder="客户分级选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                <Option value="1">一类维修厂</Option>
                                <Option value="2">二类维修厂</Option>
                                <Option value="3">三类维修厂</Option>
                            </Select>
                        </FormItem>
                        {/*客户状态结束*/}


                        {/*客户来源开始*/}
                        <FormItem label="客户来源">
                            <Select
                                placeholder="客户来源选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                <Option value="1">线下地推</Option>
                                <Option value="2">网略推广</Option>
                                <Option value="3">渠道代理</Option>
                            </Select>
                        </FormItem>
                        {/*客户来源结束*/}


                        {/*经营类型开始*/}
                        <FormItem label="经营类型">
                            <Select
                                placeholder="经营类型选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                <Option value="1">快修</Option>
                                <Option value="2">综合</Option>
                                <Option value="3">轮胎</Option>
                                <Option value="2">专修</Option>
                                <Option value="3">4S店</Option>
                            </Select>
                        </FormItem>
                        {/*经营类型结束*/}



                        {/*联系电话开始*/}
                        <FormItem label="联系电话">
                            {getFieldDecorator('reduce', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入联系电话',
                                    }
                                ]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*公司名称结束*/}

                        {/* 地址开始 */}
                        <FormItem label="地址">
                            {getFieldDecorator('reduce', {
                                rules: [
                                    {
                                        required: true,
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
                                        required: true,
                                        message: '请输入详细地址',
                                    }
                                ]
                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*详细地址结束*/}


                        {/*客户性质开始*/}
                        <FormItem label="客户性质">
                            <Select
                                placeholder="客户性质选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                <Option value="1">企业客户</Option>
                                <Option value="2">个人客户</Option>
                            </Select>
                        </FormItem>
                        {/*客户性质结束*/}


                        {/*经营主体开始*/}
                        <FormItem label="经营主体">
                            <Row gutter={24}>
                                <Col span={8}>
                                    {getFieldDecorator('reduce', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入详细地址',
                                            }
                                        ]
                                    })(
                                        <Select
                                            placeholder="经营主体选择"
                                            dropdownMatchSelectWidth={true}
                                            value={"1"}
                                            className="online"
                                        >
                                            <Option value="1">公司</Option>
                                            <Option value="2">个人</Option>
                                        </Select>
                                    )}

                                </Col>
                                <Col span={8}>

                                    {getFieldDecorator('reduce', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入详细地址',
                                            }
                                        ]
                                    })(
                                        <Select
                                            showSearch
                                            placeholder="名称"
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
                                <Col span={8}>
                                    <Button type="primary">新建经营主体</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        {/*经营主体结束*/}

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


                        {/*微信群名开始*/}
                        <FormItem label="微信群名">
                            {getFieldDecorator('reduce', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*微信群名结束*/}


                        {/*QQ开始*/}
                        <FormItem label="QQ">
                            {getFieldDecorator('reduce', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*QQ结束*/}



                        {/*邮箱开始*/}
                        <FormItem label="邮箱">
                            {getFieldDecorator('reduce', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*邮箱结束*/}

                        {/*公司官网开始*/}
                        <FormItem label="公司官网">
                            {getFieldDecorator('reduce', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*公司官网结束*/}


                        {/*备注开始*/}
                        <FormItem label="备注">
                            {getFieldDecorator('reduce', {

                            })(
                                <TextArea rows={4} />
                            )}
                        </FormItem>
                        {/*备注结束*/}

                        {/*图片开始*/}
                        <FormItem label="图片" extra="最多可上传9张图片">
                            {getFieldDecorator('reduce', {

                            })(
                                <Upload>
                                    <Button type="default">
                                        <Icon type="upload" /> Upload
									</Button>
                                </Upload>
                            )}
                        </FormItem>
                        {/*图片结束*/}

                        {/*文件开始*/}
                        <FormItem label="文件" extra="最多可上传9张文件">
                            {getFieldDecorator('reduce', {

                            })(
                                <Upload>
                                    <Button type="default">
                                        <Icon type="upload" /> Upload
									</Button>
                                </Upload>
                            )}
                        </FormItem>
                        {/*文件结束*/}

                    </Form>
                </Modal>


            </div>

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

CreateCustomer = Form.create()(CreateCustomer);

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" }),
    graphql(getBooksQuery, { name: "getBooksQuery" }),
)(CreateCustomer)

// export default connect(mapStateToProps, mapDispatchToProps)(Customer);