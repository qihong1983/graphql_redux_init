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
    Tabs,
    Spin,
    Alert,
    DatePicker,
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


import Area from '../../common/area';


// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
Moment.locale('zh-cn');

import _ from 'lodash';

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

// import * as actionCreators from '../../actions/mainbody/mainbody';


import * as actionCreators from '../../actions/concat/concat';

import * as actionCustomer from '../../actions/customer/customer';

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

class EditContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建客户
            newCustomer: false
        }

    }


    componentWillReceiveProps(nextProps) {


        if (!_.isEqual(this.props.Concat.detail, nextProps.Concat.detail)) {

            var result = nextProps.Concat.detail.length == 0 ? null : nextProps.Concat.detail.result;

            var data11 = {
                "success": true,
                "result": {
                    "id": 702,
                    "name": "lsykjh",
                    "phone": 21000,
                    "partner_id": 491,
                    "partner_name": "gbohzk",
                    "province": "江西省",
                    "city": "天津市",
                    "county": "华南",
                    "location": "105.7.198.140",
                    "address": "华南",
                    "area_code": 31000,
                    "wx_name": "xvnnui",
                    "wx_id": "ouadhx",
                    "email": "n.usgd@gkmccwtpv.zm",
                    "qq": 530,
                    "title": "jqkmui",
                    "rank": "asbrdv",
                    "importance": "alftyp",
                    "decision": "ihkrmf",
                    "affinity": "stjano",
                    "gender": "lqffrq",
                    "birthday": {
                        "type": "公历/阴历",
                        "date": "1999-12-08 08:40:39"
                    },
                    "note": "如两主地比严强证今同身非劳解水思须。大其议带也问过素约千原种江确边线他年。们少划带些更被且切西制能任建。素和万斯志志只影九那心也置级规。被际必社你据毛发政需位按将要马。",
                    "status": false,
                    "created_at": "1999-12-08 08:40:39",
                    "updated_at": "2009-03-06 12:20:43"
                },
                "errors": []
            }


            console.log(result.note, '**************^^^^^^^^');
            // "partner_id": result.partner_id,


            this.props.form.setFieldsValue({
                "name": result.name,
                "phone": result.phone,
                "partner_id": result.partner_id,
                "province": result.province ? result.province : "",
                "city": result.city ? result.city : "",
                "county": result.county ? result.county : "",
                "location": result.location ? result.location : "",
                "address": result.address ? result.address : "",
                "area_code": result.area_code ? result.area_code : "",
                "wx_name": result.wx_name ? result.wx_name : "",
                "wx_id": result.wx_id ? result.wx_id : "",
                "email": result.email ? result.email : "",
                "qq": result.qq ? result.qq : "",
                "title": result.title ? result.title : "",
                "rank": result.rank ? result.rank : "",
                "importance": result.importance ? result.importance : "",
                "decision": result.decision ? result.decision : "",
                "affinity": result.affinity ? result.affinity : "",
                "gender": result.gender ? result.gender : "",
                "date": moment(new Date(result.birthday.date)),
                "note": result.note,
                "pcc": [result.province ? result.province : "", result.city ? result.city : "", result.county ? result.county : ""]
            });
        }

    }


    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();

        var params = {
            name: ""
        }
        this.props.CustomerActions.searchName(params);



        var wxParams = {
            name: ""
        };

        this.props.ContactActions.getWxNames(wxParams);
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
        // console.log(this.refs.create.props.onSubmit, '######');


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

        var params = {
            name: val
        }
        this.props.CustomerActions.searchName(params);

    }


    paramsWxName(data) {


        var str = "";
        this.props.Concat.wxNames.map((v, k) => {
            if (v.wx_room_id == data) {
                str = v.wx_room_name;
            }
        });


        return str;
    }

    /**
     * 提交表单
     */
    handleSubmit() {
        // e.preventDefault();

        console.log('Received values of form');
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                // address: "aaaaasdfasdf"
                // affinity: 3
                // date: Moment {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: Locale, _d: Thu Aug 01 2019 15:25:40 GMT+0800 (中国标准时间), …}
                // decision: 2
                // email: "55377146@qq.com"
                // gender: "男"
                // importance: 2
                // name: "齐洪"
                // partner_id: 639
                // pcc: (3) ["北京市", "市辖区", "东城区"]
                // phone: "18600190151"
                // qq: "76180212"
                // rank: 3
                // reduce: "asdf"
                // title: "前端"
                // wx_name: 302

                var paramsWxName = this.paramsWxName(values.wx_name ? values.wx_name : "");
                var countyCode = values.pcc ? values.pcc[2].split("--")[1] : "";

                console.log(moment(values.date).format("YYYY-MM-DD hh:mm:ss"));

                var params = {
                    "name": values.name,
                    "phone": values.phone,
                    "partner_id": values.partner_id,
                    "province": values.pcc ? values.pcc[0].split("--")[0] : "",
                    "city": values.pcc ? values.pcc[1].split("--")[0] : "",
                    "county": values.pcc ? values.pcc[2].split("--")[0] : "",
                    "location": "经纬度",
                    "address": values.address ? values.address : "",
                    "area_code": countyCode,
                    "wx_name": paramsWxName,
                    "wx_id": values.wx_name,
                    "email": values.email,
                    "qq": values.qq,
                    "title": values.title,
                    "rank": values.rank,
                    "importance": values.importance,
                    "decision": values.decision,
                    "affinity": values.affinity,
                    "gender": values.gender,
                    "birthday": {
                        "type": "公历",
                        "date": values.date ? moment(values.date).format("YYYY-MM-DD") : ""
                    },
                    "note": values.note
                }


                console.log(params, 'paramsparamsparamsparams');

                this.props.ContactActions.editContact(values.id, params);

                this.props.newCustomerOk(false);
                this.props.refreshTable();

                this.props.form.resetFields();



            }
        });
    }

    onDatePickerChange(date, dateString) {
        console.log(date, dateString);
    }


    renderPartnerOption() {

        var result = this.props.Concat.detail.length == 0 ? null : this.props.Concat.detail.result;

        var arr = [];

        if (result) {
            arr.push(<Option value={result.partner_id}>{result.partner_name}</Option>);
        }


        if (this.props.Customer.searchName.length) {

            // "id": "@natural(100, 999)",
            // "name": "@word(6)"

            this.props.Customer.searchName.map((v, k) => {
                arr.push(<Option value={v.id}>{v.name}</Option>)
            })

        }

        return arr;
    }

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

    onDatePickerChange(date, dateString) {
        console.log(date, dateString, '*****');
    }


    /**
     * 搜索微信名称
     * @method onChangeWxName
     * @param {String} val
     */
    onChangeWxName(val, e) {
        console.log(`Selected: ${val}`);
        console.log(e, 'eeeee');
    }

    /**
     * 输入实时搜索
     * @method onSearchWxName
     * @param {String} val
     */
    onSearchWxName(val) {

        var params = {
            name: val
        };

        this.props.ContactActions.getWxNames(params);

    }

    /**
     * 渲染微信名称option
     * @method renderWxNameOption
     */
    renderWxNameOption() {


        var arr = [];



        if (this.props.Concat.wxNames.length) {

            this.props.Concat.wxNames.map((v, k) => {
                arr.push(<Option value={v.wx_room_id}>{v.wx_room_name}</Option>)
            })

        }


        return arr;

    }


    /**
     * 渲染级别option
     * @method renderRandOption
     */
    renderRandOption(selectValue) {
        var arr = [];

        const { selectParam } = this.props.Concat;

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

    render() {

        const {
            getFieldDecorator
        } = this.props.form;



        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };



        var optionsTmp = this.digui(Area);


        const options = optionsTmp;


        const { TextArea } = Input;


        console.log(JSON.stringify(this.props.Concat.detail), 'this.props.Concatthis.props.Concatthis.props.Concat');

        var data11 = {
            "success": true,
            "result": {
                "id": 702,
                "name": "lsykjh",
                "phone": 21000,
                "partner_id": 491,
                "partner_name": "gbohzk",
                "province": "江西省",
                "city": "天津市",
                "county": "华南",
                "location": "105.7.198.140",
                "address": "华南",
                "area_code": 31000,
                "wx_name": "xvnnui",
                "wx_id": "ouadhx",
                "email": "n.usgd@gkmccwtpv.zm",
                "qq": 530,
                "title": "jqkmui",
                "rank": "asbrdv",
                "importance": "alftyp",
                "decision": "ihkrmf",
                "affinity": "stjano",
                "gender": "lqffrq",
                "birthday": {
                    "type": "公历/阴历",
                    "date": "生日"
                },
                "note": "如两主地比严强证今同身非劳解水思须。大其议带也问过素约千原种江确边线他年。们少划带些更被且切西制能任建。素和万斯志志只影九那心也置级规。被际必社你据毛发政需位按将要马。",
                "status": false,
                "created_at": "1999-12-08 08:40:39",
                "updated_at": "2009-03-06 12:20:43"
            },
            "errors": []
        }

        // this.props.form.




        return (

            <Modal
                title="编辑联系人"
                visible={this.props.show}
                onOk={this.newCustomerOk.bind(this)}
                onCancel={this.newCustomerCannel.bind(this)}
                footer={(<div><Button type="default" onClick={this.newCustomerCannel.bind(this)}>取消</Button><Button type="primary" onClick={this.newCustomerOk.bind(this)}>提交</Button></div>)
                }
                cancelText={< Button > 取消1</Button>}
                width={628}
            >
                <Form {...formItemLayout} ref="create" onSubmit={this.handleSubmit}>


                    {/*姓名开始*/}
                    <FormItem label="姓名 ">
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

                    {/*关联客户开始*/}
                    <FormItem label="关联客户">
                        <Row gutter={24}>
                            <Col span={12}>


                                {getFieldDecorator('partner_id', {
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
                                        {this.renderPartnerOption()}


                                    </Select>
                                )}
                            </Col>

                            <Col span={12}>
                                <Button type="primary" onClick={()=>{
                                    this.props.open();
                                }}>新建客户</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    {/*客户状态开始*/}


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


                    {/*微信昵称开始*/}
                    <FormItem label="微信昵称">
                        {getFieldDecorator('wx_name', {

                        })(
                            <Select
                                showSearch
                                placeholder="微信昵称"
                                optionFilterProp="children"
                                onChange={this.onChangeWxName.bind(this)}
                                onSearch={this.onSearchWxName.bind(this)}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {this.renderWxNameOption()}


                            </Select>
                        )}
                    </FormItem>
                    {/*微信昵称结束*/}

                    {/*邮箱开始*/}
                    <FormItem label="邮箱">
                        {getFieldDecorator('email', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*邮箱结束*/}

                    {/*QQ开始*/}
                    <FormItem label="QQ">
                        {getFieldDecorator('qq', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*QQ结束*/}

                    {/*职务开始*/}
                    <FormItem label="职务">
                        {getFieldDecorator('title', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                    {/*职务结束*/}



                    {/*级别开始*/}
                    <FormItem label="级别">
                        {getFieldDecorator('rank', {

                        })(
                            <Select
                                placeholder="级别选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >

                                {this.renderRandOption('rank')}
                            </Select>

                        )}
                    </FormItem>
                    {/*级别结束*/}


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
                            </Select>
                        )}
                    </FormItem>
                    {/*重要程度结束*/}


                    {/*决策关系开始*/}
                    <FormItem label="决策关系">
                        {getFieldDecorator('decision', {

                        })(
                            <Select
                                placeholder="决策关系选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                {this.renderRandOption('decision')}
                            </Select>
                        )}
                    </FormItem>
                    {/*决策关系结束*/}

                    {/*亲密度开始*/}
                    <FormItem label="亲密度">

                        {getFieldDecorator('affinity', {

                        })(
                            <Select
                                placeholder="亲密度选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                {this.renderRandOption('affinity')}
                            </Select>

                        )}
                    </FormItem>
                    {/*亲密度结束*/}


                    {/*性别开始*/}
                    <FormItem label="性别">
                        {getFieldDecorator('gender', {

                        })(
                            <Select
                                placeholder="性别选择"
                                dropdownMatchSelectWidth={true}
                                value={"1"}
                                className="online"
                            >
                                <Option value="男">男</Option>
                                <Option value="女">女</Option>
                            </Select>
                        )}
                    </FormItem>
                    {/*性别结束*/}

                    {/*生日开始*/}
                    <FormItem label="生日">
                        {getFieldDecorator('date', {

                        })(
                            <DatePicker onChange={this.onDatePickerChange.bind(this)} />
                        )}
                    </FormItem>
                    {/*生日结束*/}


                    {/*备注开始*/}
                    <FormItem label="备注">
                        {getFieldDecorator('note', {

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
const mapStateToProps = (state) => {
    return {
        Concat: state.Reducer.Concat,
        Customer: state.Reducer.Customer
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return {
        ContactActions: bindActionCreators(actionCreators, dispatch),
        CustomerActions: bindActionCreators(actionCustomer, dispatch)
    }
};

EditContact = Form.create()(EditContact);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(CreateContact)

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);