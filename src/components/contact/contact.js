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



const footer = () => 'Here is footer';

import CreateContact from './createContact';


import CustomerDrawer from '../customer/customerDrawer';
import ContactDrawer from './contactDrawer';


import SetParamList from './setParamList';

import SetSelectParam from './setSelectParam';

import MoreEdit from './moreEdit';



class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            newCustomer: false,
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
            limit: 0
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



        this.getParam();



        this.getTable();

    }


    async getParam() {

        this.props.getSelectParam();
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

        await this.props.getTableData(params);
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

    tableFooter() {
        return (



            <Row gutter={24}>


                <Col span={10} >
                    <Form layout="inline" className="clearfix">
                        <FormItem label="已选">
                            0条

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
        console.log('刷新列表');
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
    openDrawerContact() {
        this.setState({
            drawerContactVisible: true
        });
    }

    /**
     * 客户管理 -- 打开详情
     */
    openDrawer() {
        this.setState({
            drawerVisible: true
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
        Modal.warning({
            title: '确定要删除吗',
            content: '确定要删除吗',
            okText: '删除',
            onOk: () => {
                console.log('111');
            }
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
                    if (v.is_show) {
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



        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: 150,
                render: (title) => {
                    return (
                        <a href="#" onClick={this.openDrawerContact.bind(this)}>{title}</a>
                    )
                }
            },
            {
                title: '关联客户',
                width: 150,
                dataIndex: 'partner',
                key: 'partner',
                render: (title) => {
                    return (
                        <a href="#" onClick={this.openDrawer.bind(this)}>{title}</a>
                    )
                }
            },
            {
                title: '电话',
                width: 150,
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title: '微信昵称',
                dataIndex: 'wx_name',
                key: 'wx_name',
                width: 150,
            },
            {
                title: '职务',
                dataIndex: 'title',
                key: 'title',
                width: 150,
            },
            {
                title: '级别',
                dataIndex: 'rank',
                key: 'rank',
                width: 150,
            },
            {
                title: '决策关系',
                dataIndex: 'decision',
                key: 'decision',
                width: 150,
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: 150,
            },
            {
                title: '创建时间',
                dataIndex: 'created_at',
                key: 'created_at',
                width: 150,
            },
            {
                title: '更新时间',
                dataIndex: 'updated_at',
                key: 'updated_at',
                width: 150,
            },
            {
                title: '级重要程度别',
                dataIndex: 'importance',
                key: 'importance',
                width: 150,
                fixed: 'right'
            }
        ];


        if (this.props.Concat.table) {
            data = this.props.Concat.table.contacts;
        }

        // console.log(this.props.Concat.table., 'this.props.Concat');

        var data = [];

        if (this.props.Concat.table) {
            data = this.props.Concat.table.contacts;
        }


        // for (let i = 0; i < 100; i++) {
        //     data.push({
        //         "id": i,
        //         "name": "客户名称",
        //         "phone": "联系电话",
        //         "partner": "关联客户",
        //         "wx_name": "微信昵称",
        //         "title": "职务",
        //         "rank": "级别",
        //         "importance": "重要程度",
        //         "decision": "决策关系",
        //         "status": "状态",
        //         "created_at": "创建时间",
        //         "updated_at": "更新时间"
        //     });
        // }





        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
                />


                {/**
				  * 抽屉--客户详情
				  */}

                <CustomerDrawer
                    onCloseDrawer={this.onCloseDrawer.bind(this)}
                    drawerVisible={this.state.drawerVisible}
                />

                {/**
                 * 抽屉--联系人
                 */}
                <ContactDrawer
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


                                {this.renderSelectParams()}


                                {/*客户名称开始*/}
                                {/* <FormItem label="姓名">
                                    {getFieldDecorator('reduce', {

                                    })(
                                        <Input />
                                    )}
                                </FormItem> */}
                                {/*客户名称结束*/}


                                {/*联系电话开始*/}
                                {/* <FormItem label="电话">
                                    {getFieldDecorator('reduce', {

                                    })(
                                        <Input />
                                    )}
                                </FormItem> */}
                                {/*联系电话结束*/}


                                {/*关联客户开始*/}
                                {/* <FormItem label="关联客户">
                                    <Select
                                        placeholder="关联客户选择"
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
                                </FormItem> */}
                                {/*关联客户开始*/}

                                {/*微信昵称开始*/}
                                {/* <FormItem label="微信昵称">
                                    {getFieldDecorator('reduce', {

                                    })(
                                        <Input />
                                    )}
                                </FormItem> */}
                                {/*微信昵称结束*/}

                                {/*职务开始*/}
                                {/* <FormItem label="职务">
                                    {getFieldDecorator('reduce', {

                                    })(
                                        <Input />
                                    )}
                                </FormItem> */}
                                {/*职务结束*/}


                                {/*级别开始*/}
                                {/* <FormItem label="级别">
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
                                </FormItem> */}
                                {/*级别结束*/}

                                {/*重要程序开始*/}
                                {/* <FormItem label="重要程序">
                                    <Select
                                        placeholder="重要程序选择"
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
                                </FormItem> */}
                                {/*重要程序结束*/}

                                {/*微信群名开始*/}
                                {/* <FormItem label="微信群名">
                                    {getFieldDecorator('reduce', {

                                    })(
                                        <Input />
                                    )}
                                </FormItem> */}
                                {/*微信群名结束*/}


                                {/*决策关系开始*/}
                                {/* <FormItem label="决策关系">
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
                                </FormItem> */}
                                {/*决策关系结束*/}


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
                            <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} pagination={false} />
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
        Concat: state.Reducer.Concat
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

Contact = Form.create()(Contact);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(Contact)

export default connect(mapStateToProps, mapDispatchToProps)(Contact);