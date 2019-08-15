import React from 'react';

import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../../queries/queries';

import _ from 'lodash';

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
    message,
    Row,
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


import * as actionCustomer from '../../actions/customer/customer';


const footer = () => 'Here is footer';


//新建组件
import CreateContact from './createContact';

//编辑组件 
import EditContact from './editContact';



import CustomerDrawer from '../customer/customerDrawer';
import ContactDrawer from './contactDrawer';

//新建客户
import CreateCustomer from '../customer/createCustomer';

import SetParamList from './setParamList';

import SetSelectParam from './setSelectParam';

import MoreEdit from './moreEdit';



class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //新建联系人是否显示
            newCustomer: false,
            //新建客户
            customerVisible: false,
            editContact: false,
            drawerVisible: false,
            drawerVisible: false,
            //联系人 -- 列表字段控制显示隐藏
            paramsListVisible: false,
            //联系人 -- 筛选设置 
            setSelectVisible: false,
            //客户管理 -- 点击批量编辑
            moreEditVisible: false,
            name: "",
            phone: "",
            partner: "",
            wx_name: "",
            title: "",
            rank: 1,
            importance: "",
            decision: 1,
            page: 1,
            limit: 0,
            moreRows: [],
            contactDetailId: "",
            customerDetailId: ""

        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();

        this.init();

    }




    async init() {



        await this.getParam();



        await this.getTable();

    }


    async getParam() {

        this.props.ContactActions.getSelectParam();
    }

    async getTable() {

        var params = {
            name: this.state.name,
            phone: this.state.phone,
            partner: this.state.partner,
            wx_name: this.state.wx_name,
            title: this.state.title,
            rank: this.state.rand,
            importance: this.state.importance,
            decision: this.state.decision,
            page: this.state.page,
            limit: this.state.limit
        }

        await this.props.ContactActions.getTableData(params);
    }


    renderOptions(data, type) {
        var arr = [];

        data.map((v, k) => {
            arr.push(<Option type={type} value={v.key}>{v.value}</Option>);
        })

        return arr;
    }

    changeInput(e) {


        switch (e.target.dataset.type) {
            case "name":
                this.setState({
                    name: e.target.value
                }, () => {
                    this.getTable();
                });
                break;
            case "partner":
                this.setState({
                    partner: e.target.value
                }, () => {
                    this.getTable();
                });
                break;

            case "phone":
                this.setState({
                    phone: e.target.value
                }, () => {
                    this.getTable();
                });
                break;


            case "title":
                this.setState({
                    title: e.target.value
                }, () => {
                    this.getTable();
                });
                break;

            case "wx_name":
                this.setState({
                    wx_name: e.target.value
                }, () => {
                    this.getTable();
                });
                break;


            default:
                this.setState({
                    name: e.target.value
                }, () => {
                    this.getTable();
                });
        }
    }



    /**
     * 打开编辑联系人
     * @method openEditContact
     */
    openEditContact() {
        console.log('打开联系人');

        // this.props.editContact();

        this.setState({
            editContact: true
        });

    }

    /**
     * 提交编辑联系人
     */
    editContactOK() {
        this.setState({
            editContact: false
        });
    }

    /**
     * 关闭编辑联系人
     */
    editContactCancel() {
        this.setState({
            editContact: false
        });
    }

    displayAuthhors() {
        var data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (<div value={0}>Loading Authors...</div>);
        } else {
            return data.authors.map(author => {
                console.log(author, 'author***');
                return (<div key={author.id} value={author.id}>{author.name}</div>)
            })
        }
    }

    displayBooks() {
        var data = this.props.getBooksQuery;

        console.log(data);
        if (data.loading) {
            return (<div value={0}>books</div>);
        } else {
            return data.books.map(book => {
                console.log(book, 'books***');
                return (<div key={book.id} onClick={(e) => { this.setState({ selected: book.id }) }}>{book.name}</div>)
            })
        }
    }

    /**
     * 新建客户
     */
    createCustomerOk() {
        this.setState({
            customerVisible: false
        });
    }

    createCustomerCannel() {
        this.setState({
            customerVisible: false
        });
    }

    createRefreshTable() {
        console.log('刷新数据');
    }

    openCustomer() {
        this.setState({
            customerVisible: true
        });
    }

    tableFooter() {
        return (



            <Row gutter={24}>


                <Col span={10} >
                    <Form layout="inline" className="clearfix">
                        <FormItem label="已选">
                            {this.state.moreRows.length}条

				</FormItem>
                        <FormItem label="批量">
                            <Button type="default" style={{ marginRight: "10px" }} onClick={this.onClickMoreEdit.bind(this)}>编辑</Button>
                            <Button type="default" onClick={this.onClickMoreDelete.bind(this)}>删除</Button>

                        </FormItem>
                    </Form>
                </Col>
                <Col span={14} className="clearfix">
                    <Pagination
                        className="pull-right"
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange.bind(this)}
                        onChange={this.changePagination.bind(this)}
                        defaultCurrent={this.state.page}
                        current={this.state.page}
                        total={this.props.Concat.table.length != 0 ? this.props.Concat.table.pagination.total_count : 0}
                    />
                </Col>
            </Row>
        )
    }


    /**
 *  编辑联系人 -- 打开
 * @method newCustomer
 */
    editContact() {
        this.setState({
            editContact: true
        });
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
    newCustomerOk(data) {
        console.log('确认新建客户');
        this.setState({
            newCustomer: data
        });
    }

	/**
	 * 新建客户 -- 取消新建客户
	 * @method newCustomerCannel
	 */
    newCustomerCannel(data) {
        console.log('取消新建客户');
        this.setState({
            newCustomer: data
        });
    }


	/**
	 * 新建客户端  -- 刷新列表
	 * @method refreshTable
	 */
    refreshTable() {
        // console.log('刷新列表');

        this.setState({
            page: 1
        }, () => {
            this.getTable();
            //刷新详情
            this.props.ContactActions.contactDetailFn(this.state.contactDetailId);
        });

    }


    /**
     * 编辑后刷新联系人详情和页面表格
     * @method refreshTableEdit
     */
    refreshTableEdit() {
        this.setState({
            page: 1
        }, () => {
            this.getTable();
            //刷新详情
            this.props.ContactActions.contactDetailFn(this.state.contactDetailId);
        });
    }

    /**
     * 客户管理-- 详情
     * @method onCloseDrawer
     */
    onCloseDrawer() {
        this.setState({
            drawerVisible: false
        });
    }

    /**
     * 联系人 -- 详情
     * @method onCloseDrawerContact
     */
    onCloseDrawerContact() {
        this.setState({
            drawerContactVisible: false
        });
    }


    /**
     * 联系人  -- 详情
     */
    openDrawerContact(e) {
        this.setState({
            contactDetailId: e.target.dataset.id,
            drawerContactVisible: true
        }, () => {
            this.props.ContactActions.contactDetailFn(this.state.contactDetailId);
        });
    }

    /**
     * 客户管理 -- 打开详情
     */
    openDrawer(e) {
        this.setState({
            customerDetailId: e.target.dataset.id,
            drawerVisible: true
        }, () => {
            this.props.CustomerActions.detailFn(this.customerDetailId);

            // this.props.detailFn(this.state.drawerDetailId);
        });
    }


	/**
	 * 客户管理 --点击列表字段设置
	 * @method setParamList
	 * @param {Object} e 
	 */
    setParamList(e) {
        this.setState({
            paramsListVisible: true
        });
    }


	/**
	 * 客户管理 -- 列表字段设置 -- 确认
	 * @method paramsListOk
	 */
    paramsListOk() {
        this.setState({
            paramsListVisible: false
        }, () => {
            message.success('已保存到本地存储');
        });
    }

	/**
	 * 客户管理 -- 列表字段设置 -- 取消
	 * @method paramsListCancel
 	 */
    paramsListCancel() {

        console.log('这里显示了吗');
        this.setState({
            paramsListVisible: false
        });
    }


	/**
	 * 客户管理 -- 筛选条件设置 -- 打开
	 */
    setSelectOpen() {

        console.log('这里执行了吗');
        this.setState({
            setSelectVisible: true
        });
    }

	/**
	 * 客户管理 -- 筛选条件设置 -- 提交
	 */
    setSelectOk() {
        this.setState({
            setSelectVisible: false
        }, () => {
            message.success('已保存到本地存储');
        });
    }


	/**
	 * 客户管理 -- 筛选条件设置 -- 取消
	 */
    setSelectCancel() {
        this.setState({
            setSelectVisible: false
        });
    }


    /**
     * 客户管理 -- 批量点击确定
     */
    moreEditOk() {
        this.setState({
            moreEditVisible: false
        });
    }


	/**
	 * 客户管理 -- 批量点击取消
	 */
    moreEditCancel() {
        this.setState({
            moreEditVisible: false
        });
    }


    /**
     * 点击批量编辑
     * @method onClickMoreEdit
     */
    onClickMoreEdit(e) {
        this.setState({
            moreEditVisible: true
        });
    }

    moreDeleteOk() {
        console.log('确定');
    }


    /**
     * 点击批量删除
     * @method onClickMoreDelete
     */
    onClickMoreDelete(e) {
        // Modal.warning({
        //     title: '确定要删除吗',
        //     content: '确定要删除吗',
        //     okText: '删除',
        //     onOk: () => {
        //         console.log('111');
        //     }
        // });

        confirm({
            title: '确定要删除吗?',
            content: '确定要删除吗',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }


    setSelect(e, option) {
        console.log(e, option, '###');
        console.log(option.props.type, 'option.props.type');


        switch (option.props.type) {
            case "importance":
                this.setState({
                    type: e
                }, () => {
                    this.getTable();
                });
                break;
            case "decision":
                this.setState({
                    is_main: e
                }, () => {
                    this.getTable();
                });
                break;

            case "rank":
                this.setState({
                    is_main: e
                }, () => {
                    this.getTable();
                });
                break;

            default:
                this.setState({
                    type: e
                }, () => {
                    this.getTable();
                });
        }
    }

    renderSelectParams() {

        const {
            getFieldDecorator
        } = this.props.form;

        var arr = [];

        if (this.props.Concat.selectParam.length != 0) {
            this.props.Concat.selectParam.map((v, k) => {

                if (v.type == "enum") {
                    // initialValue: v.enums[0].key,
                    console.log(v, '####');
                    if (v.is_show || v.is_default) {
                        arr.push(<FormItem label={v.display} key={v.name}>

                            {getFieldDecorator(v.name, {
                                initialValue: v.enums[0].key
                            })(
                                <Select
                                    data-name={v.name}
                                    onChange={this.setSelect.bind(this)}
                                    placeholder={`${v.display}选择`}
                                    dropdownMatchSelectWidth={true}
                                    className="online"
                                    style={{ minWidth: "171px" }}
                                >
                                    {this.renderOptions(v.enums, v.name)}
                                </Select>
                            )}
                        </FormItem>)
                    }

                } else if (v.type == "string") {

                    if (v.is_show) {
                        arr.push(<FormItem label={v.display} key={v.name}>
                            {getFieldDecorator(v.name, {

                            })(
                                <Input onChange={this.changeInput.bind(this)} data-type={v.name} />
                            )}
                        </FormItem>)

                    }
                } else if (v.type == "location") {
                    arr.push(<FormItem label={v.display} key={v.name}>

                        {getFieldDecorator(v.name, {
                            initialValue: this.initArea(v.name)
                        })(
                            <Select
                                data-name={v.name}
                                onChange={this.setSelect.bind(this)}
                                placeholder={`${v.display}选择`}
                                dropdownMatchSelectWidth={true}
                                className="online"
                                style={{ minWidth: "171px" }}
                                value={this.initArea(v.name)}
                            >
                                {this.renderAreaOption(v.name)}
                            </Select>
                        )}
                    </FormItem>)
                }

            });
        }

        return arr;

    }

    onShowSizeChange(current, pageSize) {

        this.setState({
            page: 1,
            limit: pageSize
        }, () => {
            this.getTable();
        });

    }


    changePagination(current, size) {

        this.setState({
            page: current,
            limit: size
        }, () => {
            this.getTable();
        });

    }

    render() {

        const {
            getFieldDecorator
        } = this.props.form;


        var configRender = "name";
        var configPartnerRender = "partner";
        var configRightFixed = "county";



        this.props.Concat.columns.map((v, k) => {


            if (_.includes(v, configRender)) {
                v.render = (title, record) => {
                    return (
                        <a href="javascript:void();" data-id={record.id} onClick={this.openDrawerContact.bind(this)}>{title}</a>
                    )
                }
            } else if (_.includes(v, configPartnerRender)) {
                v.render = (title) => {
                    return (
                        <a href="javascript:void();" onClick={this.openDrawer.bind(this)}>{title}</a>
                    )
                }
            } else if (this.props.Concat.columns.length - 1 == k) {
                v.fixed = "right";
            }


        });



        var data = [];

        if (this.props.Concat.table) {
            data = this.props.Concat.table.contacts;
        }


        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

                this.setState({
                    moreRows: selectedRows
                })
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        };


        return (
            <Layout style={{ position: "relative", marginTop: 60, overflow: "hidden" }}>

                {/**
                    //新建客户
					show 控制是否显示隐藏
					newCustomerOk 确定提交
					newCustomerCannel 取消提交
					refreshTable 刷新表格数据
				*/}
                <CreateCustomer
                    zIndex={1001}
                    show={this.state.customerVisible}
                    newCustomerOk={this.createCustomerOk.bind(this)}
                    newCustomerCannel={this.createCustomerCannel.bind(this)}
                    refreshTable={this.createRefreshTable.bind(this)}
                />


                {/* 批量编辑开始 */}
                <MoreEdit
                    moreEditVisible={this.state.moreEditVisible}
                    moreEditOk={this.moreEditOk.bind(this)}
                    moreEditCancel={this.moreEditCancel.bind(this)}
                />
                {/* 批量编辑结束 */}

                {/**
					show 控制是否显示隐藏
					newCustomerOk 确定提交
					newCustomerCannel 取消提交
					refreshTable 刷新表格数据
				*/}
                <CreateContact
                    show={this.state.newCustomer}
                    newCustomerOk={this.newCustomerOk.bind(this)}
                    newCustomerCannel={this.newCustomerCannel.bind(this)}
                    refreshTable={this.refreshTable.bind(this)}
                    open={this.openCustomer.bind(this)}
                />


                {/**
					show 控制是否显示隐藏
					newCustomerOk 确定提交
					newCustomerCannel 取消提交
					refreshTable 刷新表格数据
				*/}
                <EditContact
                    show={this.state.editContact}
                    newCustomerOk={this.editContactOK.bind(this)}
                    newCustomerCannel={this.editContactCancel.bind(this)}
                    refreshTable={this.refreshTableEdit.bind(this)}
                    open={this.openCustomer.bind(this)}
                />

                {/**
				  * 抽屉--客户详情
				  */}
                <CustomerDrawer
                    drawerDetailId={this.state.customerDetailId}
                    onCloseDrawer={this.onCloseDrawer.bind(this)}
                    drawerVisible={this.state.drawerVisible}
                    noEdit={true}
                />

                {/**
                 * 抽屉--联系人
                 */}
                <ContactDrawer
                    contactDetailId={this.state.contactDetailId}
                    openEditContact={this.openEditContact.bind(this)}
                    onCloseDrawer={this.onCloseDrawerContact.bind(this)}
                    drawerVisible={this.state.drawerContactVisible}
                />


                {/* 列表字段设置开始 */}
                <SetParamList
                    paramsListVisible={this.state.paramsListVisible}
                    paramsListOk={this.paramsListOk.bind(this)}
                    paramsListCancel={this.paramsListCancel.bind(this)}
                />
                {/* 列表字段设置结束 */}


                {/* 筛选项设置开始 */}
                <SetSelectParam
                    paramsListVisible={this.state.setSelectVisible}
                    paramsListOk={this.setSelectOk.bind(this)}
                    paramsListCancel={this.setSelectCancel.bind(this)}
                />
                {/* 筛选项设置结束 */}


                { /*筛选区域开始*/}
                <Content className="channel_filter">
                    <Form layout="inline" className="clearfix">
                        <FormItem label="" className="pull-right mrn"  >
                            {/*查询开始*/}
                            <Button type="primary" size={"default"} onClick={this.newCustomer.bind(this)}>新建联系人</Button>
                            {/*查询结束*/}
                        </FormItem>
                    </Form>
                </Content>
                { /*筛选区域结束*/}
                { /*图表模块开始*/}
                <Content className="crm_filter">

                    <Row gutter={24}>
                        <Col span={22} >
                            <Form layout="inline">

                                {/* 渲染筛选项开始 */}
                                {this.renderSelectParams()}
                                {/* 渲染筛选项结束 */}

                            </Form>


                        </Col>
                        <Col span={2} >
                            <FormItem label="" className="pull-right">
                                {/* <Button type="dashed" >筛选设置</Button> */}
                                <Button type="dashed" onClick={this.setSelectOpen.bind(this)}>筛选设置</Button>
                            </FormItem>
                        </Col>
                    </Row>
                </Content>
                {/*图表模块结束*/}

                { /*图表模块开始*/}
                <Content className="channel_charts">
                    <Card extra={<Button type="dashed" onClick={this.setParamList.bind(this)}> 列表字段设置</Button>}>
                        <Spin spinning={false}>
                            {/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 2200, y: 300 }} /> */}
                            {/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} pagination={false} /> */}
                            <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={this.props.Concat.columns} dataSource={data} scroll={{ x: 1500, y: 300 }} pagination={false} />
                        </Spin>
                    </Card>
                </Content>
                {/*图表模块结束*/}


            </Layout >
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
    // return bindActionCreators(actionCreators, dispatch);

    return {
        ContactActions: bindActionCreators(actionCreators, dispatch),
        CustomerActions: bindActionCreators(actionCustomer, dispatch)
    }
};

Contact = Form.create()(Contact);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(Contact)

export default connect(mapStateToProps, mapDispatchToProps)(Contact);