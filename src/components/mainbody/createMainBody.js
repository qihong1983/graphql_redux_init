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
    Radio,
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

/**
 * 组件参数说明 				
 * show 控制是否显示隐藏
 * newCustomerOk 确定提交
 * newCustomerCannel 取消提交
 * refreshTable 刷新表格数据
*/

class CreateMainBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false,
            value: 2
        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();
        this.props.form.setFieldsValue({
            "reduce2": this.state.value
        })

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


    onChangeRadio(e) {
        console.log(e, 'eeeeee');
        this.setState({
            value: e.target.value
        });
    }

    renderOption() {

        const {
            getFieldDecorator
        } = this.props.form;

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

        if (this.state.value == 1) {
            return (<div>

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




                {/*税号开始*/}
                <FormItem label="税号">
                    {getFieldDecorator('reduce', {
                        rules: [
                            {
                                required: true,
                                message: '请输入税号',
                            }
                        ]
                    })(
                        <Input />
                    )}
                </FormItem>
                {/*税号结束*/}

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
                {/*联系电话结束*/}





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

            </div>)
        } else {
            return (<div>

                {/*姓名开始*/}
                <FormItem label="姓名">
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




                {/*身份证号开始*/}
                <FormItem label="身份证号">
                    {getFieldDecorator('reduce', {
                        rules: [
                            {
                                required: true,
                                message: '请输入身份证号',
                            }
                        ]
                    })(
                        <Input />
                    )}
                </FormItem>
                {/*身份证号结束*/}

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
                {/*联系电话结束*/}




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





        const { TextArea } = Input;


        return (

            <Modal
                title="新建经营主体"
                visible={this.props.show}
                onOk={this.newCustomerOk.bind(this)}
                onCancel={this.newCustomerCannel.bind(this)}
                footer={(<div><Button type="default" onClick={this.newCustomerCannel.bind(this)}>取消</Button><Button type="primary" onClick={this.newCustomerOk.bind(this)}>提交</Button></div>)
                }
                cancelText={< Button > 取消1</Button>}
                width={628}
            >
                <Form {...formItemLayout} >


                    {/*经营主体开始*/}
                    <FormItem label="经营主体">


                        {getFieldDecorator('reduce2', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入姓名',
                                }
                            ]
                        })(
                            <Radio.Group onChange={this.onChangeRadio.bind(this)} >
                                <Radio value={1}>公司</Radio>
                                <Radio value={2}>个人</Radio>
                            </Radio.Group>
                        )}



                    </FormItem>
                    {/*经营主体结束*/}


                    {this.renderOption()}

                    {/*邮箱开始*/}
                    <FormItem label="邮箱">
                        {getFieldDecorator('reduce', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*邮箱结束*/}


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
                    {/*关联客户开始*/}
                    <FormItem label="关联客户">
                        <Row gutter={24}>
                            <Col span={12}>
                                {getFieldDecorator('reduce1', {
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
                    {/*关联客户开始*/}
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

CreateMainBody = Form.create()(CreateMainBody);

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" }),
    graphql(getBooksQuery, { name: "getBooksQuery" }),
)(CreateMainBody)

// export default connect(mapStateToProps, mapDispatchToProps)(Customer);