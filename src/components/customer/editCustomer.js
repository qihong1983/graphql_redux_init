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


import Area from '../../common/area';


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

import * as actionCustomer from '../../actions/customer/customer';
import * as actionMainBody from '../../actions/mainbody/mainbody';


import _ from 'lodash';

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

class EditCustomer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false,
            //经营主体
            mainBodyType: "company"
        }

    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.Customer.detail, nextProps.Customer.detail)) {


            var result = nextProps.Customer.detail.length == 0 ? null : nextProps.Customer.detail.result;
            console.log(nextProps.Customer.detail, '坏的');



            var data1 = {
                "success": true,
                "result": {
                    "id": 1,
                    "name": "门店名称",
                    "abbreviation": "门店简称",
                    "state": "客户状态",
                    "level": "客户分级",
                    "origin": "客户来源",
                    "major_type": "经营类型",
                    "auth_status": "认证状态",
                    "phone": "联系电话",
                    "province": "省",
                    "city": "市",
                    "county": "区",
                    "location": "经纬度",
                    "address": "详细地址",
                    "area_code": "区域编码",
                    "subject_type": "客户性质",
                    "subject_id": "关联经营主体ID",
                    "subject_name": "关联经营主体名称",
                    "importance": "重要程度",
                    "wx_room_name": "微信群名",
                    "qq": "qq",
                    "email": "邮箱",
                    "note": "备注",
                    "images": [
                        {
                            "id": "图片id",
                            "url": "图片地址",
                            "name": "上传时的文件名"
                        }
                    ],
                    "files": [
                        {
                            "id": "图片id",
                            "url": "图片地址",
                            "name": "上传时的文件名"
                        }
                    ],
                    "status": "状态",
                    "created_at": "创建时间",
                    "updated_at": "更新时间",
                    "wx_room_id": ""
                },
                "errors": []
            };



            this.props.form.setFieldsValue({
                "name": result.name,
                "abbreviation": result.abbreviation,
                "state": result.state,
                "level": result.level,
                "origin": result.origin,
                "major_type": result.major_type,
                "phone": result.phone,
                "pcc": [result.province ? result.province : "", result.city ? result.city : "", result.county ? result.county : ""],
                "location": "经纬度",
                "address": result.address,
                "area_code": result.area_code,
                "subject_type": result.subject_type,
                "subject_id": result.subject_id,
                "importance": result.importance,
                "wx_room_name": result.wx_room_name,
                "wx_room_id": result.wx_room_id,
                "qq": result.qq,
                "email": result.email,
                "note": result.note
            });
        }
    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


        //经营主体
        var params = {
            name: "",
            type: this.state.mainBodyType
        }

        this.props.MainBodyActions.searchName(params);



        var paramsWxClassName = {
            name: ""
        }

        this.props.CustomerActions.searchWxClassName(paramsWxClassName);


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
     * 微信群名选中
     */
    onChangeWxClassname(value) {
        console.log(`微信群名选中 ${value}`);
    }


    /**
     * 微信群名搜索
     */
    onSearchWxClassName(val) {
        console.log('search:', val);



        var params = {
            name: val
        }

        this.props.CustomerActions.searchWxClassName(params);


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

        var params = {
            name: val,
            type: this.state.mainBodyType
        }

        this.props.MainBodyActions.searchName(params);

    }

    /**
     * 渲染级别option
     * @method renderRandOption
     */
    renderRandOption(selectValue) {
        var arr = [];

        const { selectParam } = this.props.Customer;

        console.log(selectParam, '*************#####');

        selectParam.map((v, k) => {
            if (v.name == selectValue) {
                v.enums.map((value, key) => {
                    arr.push(<Option value={value.key}>{value.value}</Option>)
                })
            }
        })

        return arr;
    }


    renderMainBody() {
        var arr = [];

        // this.props.mainBody.searchName

        this.props.mainBody.searchName.map((v, k) => {
            arr.push(<Option value={v.id}>{v.name}</Option>);
        })


        return arr;
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


    onChangeSubjectType(e) {

        this.setState({
            mainBodyType: e
        });
    }

    renderWxClassOption() {
        var arr = [];



        // {wx_id: 797, wx_name: "ojcsha"}

        this.props.Customer.searchWxClassName.map((v, k) => {
            arr.push(<Option value={v.wx_id}>{v.wx_name}</Option>);
        })


        return arr;
    }

    paramsWxName(data) {


        var str = "";
        this.props.Customer.searchWxClassName.map((v, k) => {
            if (v.wx_id == data) {
                str = v.wx_name;
            }
        });


        return str;
    }
    /**
     * 提交表单
     */
    handleSubmit() {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', JSON.stringify(values));

                // var obj1 = {
                //     "name": "公司名称",
                //     "abbreviation": "公司简称",
                //     "state": 3,
                //     "level": 2,
                //     "origin": 2,
                //     "major_type": 4,
                //     "phone": "18600190151",
                //     "pcc": [
                //         "河北省--130000",
                //         "秦皇岛市--130300",
                //         "山海关区--130303"
                //     ],
                //     "address": "地址",
                //     "subject_type": "person",
                //     "subject_id": 107,
                //     "importance": 4,
                //     "wx_room_name": 692,
                //     "qq": "55377146",
                //     "email": "55377146@qq.com",
                //     "note": "备注"
                // }

                var paramsWxName = this.paramsWxName(values.wx_room_name ? values.wx_room_name : "");


                var countyCode = values.pcc ? values.pcc[2].split("--")[1] : "";

                var submitParams = {
                    "name": values.name,
                    "abbreviation": values.abbreviation,
                    "state": values.state,
                    "level": values.level,
                    "origin": values.origin,
                    "major_type": values.major_type,
                    "auth_status": values.auth_status,
                    "phone": values.phone,
                    "province": values.pcc ? values.pcc[0].split("--")[0] : "",
                    "city": values.pcc ? values.pcc[1].split("--")[0] : "",
                    "county": values.pcc ? values.pcc[2].split("--")[0] : "",
                    "location": "经纬度",
                    "address": values.address,
                    "area_code": countyCode,
                    "subject_type": values.subject_type,
                    "subject_id": values.subject_id,
                    "importance": values.importance,
                    "wx_room_name": paramsWxName,
                    "wx_room_id": values.wx_room_name,
                    "qq": values.qq,
                    "email": values.email,
                    "note": values.note
                }


                this.props.CustomerActions.createSubmit(submitParams);

                // createSubmit

                // this.props.form.resetFields();

                this.props.newCustomerOk(false);
                this.props.refreshTable();


            }
        });
    }

    render() {

        const {
            getFieldDecorator
        } = this.props.form;


        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        var optionsTmp = this.digui(Area);

        console.log(optionsTmp, 'optionsTmpoptionsTmpoptionsTmp');


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


        const { TextArea } = Input;






        return (

            <div>
                <Modal
                    title="编辑客户"
                    visible={this.props.show}
                    onOk={this.newCustomerOk.bind(this)}
                    onCancel={this.newCustomerCannel.bind(this)}
                    footer={(<div><Button type="default" onClick={this.newCustomerCannel.bind(this)}>取消</Button><Button type="primary" onClick={this.newCustomerOk.bind(this)}>提交</Button></div>)}
                    cancelText={< Button > 取消</Button>}
                    width={628}
                >
                    <Form {...formItemLayout} onSubmit={this.handleSubmit} ref="create" >

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


                        {/*公司简称开始*/}
                        <FormItem label="公司简称">
                            {getFieldDecorator('abbreviation', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*公司简称结束*/}


                        {/*客户状态开始*/}
                        <FormItem label="客户状态">

                            {getFieldDecorator('state', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入请输入客户状态'
                                    }
                                ]
                            })(
                                <Select
                                    placeholder="客户状态选择"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >

                                    {this.renderRandOption('state')}

                                </Select>

                            )}
                        </FormItem>
                        {/*客户状态开始*/}



                        {/*客户分级开始*/}
                        <FormItem label="客户分级">
                            {getFieldDecorator('level', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入客户分级'
                                    }
                                ]
                            })(

                                <Select
                                    placeholder="客户分级选择"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    {this.renderRandOption('level')}

                                </Select>

                            )}
                        </FormItem>
                        {/*客户状态结束*/}


                        {/*客户来源开始*/}
                        <FormItem label="客户来源">

                            {getFieldDecorator('origin', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入客户来源'
                                    }
                                ]
                            })(
                                <Select
                                    placeholder="客户来源选择"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    {this.renderRandOption('origin')}
                                </Select>
                            )}
                        </FormItem>
                        {/*客户来源结束*/}


                        {/*经营类型开始*/}
                        <FormItem label="经营类型">
                            {getFieldDecorator('major_type', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入经营类型'
                                    }
                                ]
                            })(
                                <Select
                                    placeholder="经营类型选择"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    {this.renderRandOption('major_type')}
                                </Select>
                            )}
                        </FormItem>
                        {/*经营类型结束*/}


                        {/*认证状态开始-- 确定没有 */}
                        {/* <FormItem label="认证状态">
                            {getFieldDecorator('auth_status', {

                            })(
                                <Select
                                    placeholder="认证状态选择"
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
                            )}
                        </FormItem> */}
                        {/*认证状态结束*/}



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
                        {/*公司名称结束*/}

                        {/* 地址开始 */}
                        <FormItem label="地址">
                            {getFieldDecorator('pcc', {
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
                            {getFieldDecorator('address', {
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
                            {getFieldDecorator('subject_type', {

                            })(
                                <Select
                                    placeholder="客户性质选择"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                    onChange={this.onChangeSubjectType.bind(this)}
                                >

                                    {this.renderRandOption('subject_type')}
                                    {/* <Option value="1">企业客户</Option>
                                    <Option value="2">个人客户</Option> */}
                                </Select>
                            )}
                        </FormItem>
                        {/*客户性质结束*/}


                        {/*经营主体开始*/}
                        <FormItem label="经营主体">
                            <Row gutter={24}>

                                <Col span={8}>

                                    {getFieldDecorator('subject_id', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入详细地址',
                                            }
                                        ]
                                    })(
                                        <Select
                                            showSearch
                                            placeholder="经营主体"
                                            optionFilterProp="children"
                                            onChange={this.onChange.bind(this)}
                                            onFocus={this.onFocus.bind(this)}
                                            onBlur={this.onBlur.bind(this)}
                                            onSearch={this.onSearch.bind(this)}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >

                                            {this.renderMainBody()}
                                            {/* <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="tom">Tom</Option> */}
                                        </Select>
                                    )}


                                </Col>
                                <Col span={8}>
                                {this.props.zIndex != 1001 ? (<Button type="primary" onClick={() => {
                                        this.props.open();
                                    }}>新建经营主体</Button>) : null}
                                </Col>
                            </Row>
                        </FormItem>
                        {/*经营主体结束*/}

                        {/*重要程度开始*/}
                        <FormItem label="重要程度">
                            {getFieldDecorator('importance', {

                            })(
                                <Select
                                    placeholder="重要程度选择"
                                    dropdownMatchSelectWidth={true}
                                    value={"1"}
                                    className="online"
                                >
                                    {this.renderRandOption('importance')}

                                    {/* <Option value="1">一星</Option>
                                    <Option value="2">二星</Option>
                                    <Option value="3">三星</Option>
                                    <Option value="3">四星</Option>
                                    <Option value="3">五星</Option> */}
                                </Select>
                            )}
                        </FormItem>
                        {/*重要程度结束*/}


                        {/*微信群名开始*/}
                        <FormItem label="微信群名">
                            {getFieldDecorator('wx_room_name', {

                            })(
                                <Select
                                    showSearch
                                    placeholder="微信群名"
                                    optionFilterProp="children"
                                    onChange={this.onChangeWxClassname.bind(this)}

                                    onSearch={this.onSearchWxClassName.bind(this)}
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >

                                    {this.renderWxClassOption()}
                                    {/* <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option> */}
                                </Select>
                            )}
                        </FormItem>
                        {/*微信群名结束*/}


                        {/*QQ开始*/}
                        <FormItem label="QQ">
                            {getFieldDecorator('qq', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        {/*QQ结束*/}

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

                    </Form>
                </Modal>


            </div>

        );
    }
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        Customer: state.Reducer.Customer,
        mainBody: state.Reducer.mainBody
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return {
        CustomerActions: bindActionCreators(actionCustomer, dispatch),
        MainBodyActions: bindActionCreators(actionMainBody, dispatch)
    }
};

EditCustomer = Form.create()(EditCustomer);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(CreateCustomer)

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);