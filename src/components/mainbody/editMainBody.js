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

import * as actionCreators from '../../actions/mainbody/mainbody';

import * as actionCustomer from '../../actions/customer/customer';

import Area from '../../common/area';

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

class EditMainBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false,
            value: 1
        }

    }


    componentWillReceiveProps(nextProps) {

        if (!_.isEqual(this.props.MainBody.detail, nextProps.MainBody.detail)) {
            var result = nextProps.MainBody.detail.result;





            var params = {
                "name": result.name,
                "abbreviation": result.abbreviation ? result.abbreviation : "",
                "selectMainBody": result.type,
                "id_code": result.id_code,
                "state": result.state,
                "level": result.level,
                "origin": result.origin,
                "major_type": result.major_type,
                "phone": result.phone,
                "province": result.province,
                "city": result.city,
                "county": result.county,
                "location": result.location,
                "address": result.address,
                "area_code": result.area_code,
                "subject_type": result.subject_type,
                "subject_id": result.subject_id,
                "importance": result.importance,
                "wx_room_name": result.wx_room_name,
                "wx_room_id": result.wx_room_id,
                "qq": result.qq,
                "email": result.email,
                "pcc": ["山西省--140000", "长治市--140400", "长治县--140421"],
                "note": result.note,
                "partners": result.partners[0].id
            };

            this.props.form.setFieldsValue(params);




        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();
        // this.props.form.setFieldsValue({
        //     "selectMainBody": this.state.value
        // })


        var paramsSearch = {
            name: ""
        }

        this.props.CustomerActions.searchName(paramsSearch);

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


        this.refs.create.props.onSubmit.call(this);

        // this.props.newCustomerOk(false);
        // this.props.refreshTable();
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

        var paramsSearch = {
            name: val
        }

        this.props.CustomerActions.searchName(paramsSearch);
    }


    onChangeRadio(e) {
        console.log(e, 'eeeeee');
        this.setState({
            value: e.target.value
        });
    }

    /**
     * 省市区遍历
     */
    digui(area) {
        var arr = [];

        area.map((v, k) => {

            if (v.children) {
                arr.push({
                    value: `${v.name}--${v.code}`,
                    label: v.name,
                    children: this.digui(v.children)
                })
            } else {
                arr.push({
                    value: `${v.name}--${v.code}`,
                    label: v.name
                })
            }
        });

        return arr;
    }

    renderOption() {

        const {
            getFieldDecorator
        } = this.props.form;



        var optionsTmp = this.digui(Area);

        const options = optionsTmp;

        // const options = [
        //     {
        //         value: 'zhejiang',
        //         label: 'Zhejiang',
        //         children: [
        //             {
        //                 value: 'hangzhou',
        //                 label: 'Hangzhou',
        //                 children: [
        //                     {
        //                         value: 'xihu',
        //                         label: 'West Lake',
        //                     },
        //                 ],
        //             },
        //         ],
        //     },
        //     {
        //         value: 'jiangsu',
        //         label: 'Jiangsu',
        //         children: [
        //             {
        //                 value: 'nanjing',
        //                 label: 'Nanjing',
        //                 children: [
        //                     {
        //                         value: 'zhonghuamen',
        //                         label: 'Zhong Hua Men',
        //                     },
        //                 ],
        //             },
        //         ],
        //     },
        // ];

        if (this.state.value == 1) {
            return (<div>

                {/*公司名称开始*/}
                <FormItem label="公司名称">
                    {getFieldDecorator('name', {
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
                    {getFieldDecorator('id_code', {
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
                    {getFieldDecorator('phone', {
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
                    {getFieldDecorator('pcc', {
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
                    {getFieldDecorator('address', {
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
                    {getFieldDecorator('name', {
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
                    {getFieldDecorator('id_code', {
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
                    {getFieldDecorator('phone', {
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

    handleSubmit() {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));



                // {
                //     "selectMainBody": 1,
                //     "name": "齐洪",
                //     "id_code": "111",
                //     "phone": "18",
                //     "email": "mail.qq.com",
                //     "note": "notenotenote",
                //     "partners": "lucy",
                //     "ppc": [
                //         "河北省--130000",
                //         "秦皇岛市--130300",
                //         "山海关区--130303"
                //     ],
                //     "address": "address"
                // }

                console.log(values.pcc, 'values.pccvalues.pccvalues.pcc');

                var params = {
                    "name": values.name,
                    "id_code": values.id_code,
                    "selectMainBody": values.selectMainBody,
                    "phone": values.phone,
                    "province": values.pcc ? values.pcc[0].split('--')[0] : "",
                    "city": values.pcc ? values.pcc[1].split('--')[0] : "",
                    "county": values.pcc ? values.pcc[2].split('--')[0] : "",
                    "location": "经纬度",
                    "address": values.address,
                    "area_code": values.pcc ? values.pcc[2].split('--')[1] : "",
                    "email": values.email,
                    "note": values.note,
                    "type": values.selectMainBody,
                    "partners": [
                        values.partners
                    ]
                }


                this.props.MainBodyActions.createMainBody(params);


                // this.props.form.resetFields();
                this.props.newCustomerOk(false);
                this.props.refreshTable();


            }
        });
    }

    renderCustomerOption() {
        var arr = [];

        this.props.Customer.searchName.map((v, k) => {
            arr.push(<Option value={v.id}>{v.name}</Option>)
        })



        return arr;
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

        console.log(this.props.Customer.searchName, 'this.props.Customerthis.props.Customerthis.props.Customer');

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
                <Form {...formItemLayout} onSubmit={this.handleSubmit} ref="create">


                    {/*经营主体开始*/}
                    <FormItem label="经营主体">


                        {getFieldDecorator('selectMainBody', {
                            rules: [
                                {
                                    required: true,
                                    message: '选择经营主体',
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
                        {getFieldDecorator('email', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*邮箱结束*/}


                    {/*备注开始*/}
                    <FormItem label="备注">
                        {getFieldDecorator('note', {

                        })(
                            <TextArea rows={4} />
                        )}
                    </FormItem>
                    {/*备注结束*/}



                    {/*图片开始*/}
                    {/* <FormItem label="图片" extra="最多可上传9张图片">
                        {getFieldDecorator('reduce', {

                        })(
                            <Upload>
                                <Button type="default">
                                    <Icon type="upload" /> Upload
									</Button>
                            </Upload>
                        )}
                    </FormItem> */}
                    {/*图片结束*/}

                    {/*文件开始*/}
                    {/* <FormItem label="文件" extra="最多可上传9张文件">
                        {getFieldDecorator('reduce', {

                        })(
                            <Upload>
                                <Button type="default">
                                    <Icon type="upload" /> Upload
									</Button>
                            </Upload>
                        )}
                    </FormItem> */}
                    {/*文件结束*/}
                    {/*关联客户开始*/}
                    <FormItem label="关联客户">
                        <Row gutter={24}>
                            <Col span={12}>
                                {getFieldDecorator('partners', {
                                    rules: [
                                        {
                                            required: false,
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

                                        {this.renderCustomerOption()}
                                        {/* <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option> */}
                                    </Select>
                                )}
                            </Col>

                            <Col span={12}>
                                <Button type="primary" onClick={() => {
                                    this.props.open();
                                }}>新建客户</Button>
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
const mapStateToProps = (state) => {
    return {
        MainBody: state.Reducer.mainBody,
        Customer: state.Reducer.Customer
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return {
        MainBodyActions: bindActionCreators(actionCreators, dispatch),
        CustomerActions: bindActionCreators(actionCustomer, dispatch)
    }

    // ContactActions: bindActionCreators(actionCreators, dispatch),
    // CustomerActions: bindActionCreators(actionCustomer, dispatch)
};

EditMainBody = Form.create()(EditMainBody);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(CreateMainBody)

export default connect(mapStateToProps, mapDispatchToProps)(EditMainBody);