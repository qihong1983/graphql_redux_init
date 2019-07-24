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


import * as actionCreators from '../../actions/mainbody/mainbody';



import CreateMainBody from './createMainBody';

import MainBodyDrawer from './mainBodyDrawer';

import MoreEdit from './moreEdit';


function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}
class MainBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true,
            //公司
            newCustomer: false,
            //个人
            newCustomerPerson: false,
            mainBodyType: 1,
            drawerVisible: false,
            moreEditVisible: false
        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();

        // 假如
        this.props.getSelectParam();

        console.log(this.props, 'this.props');
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
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={3}
                        total={500}
                    />
                </Col>
            </Row>
        )
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

    onCloseDrawer() {
        this.setState({
            drawerVisible: false
        });
    }

    openDrawer() {
        this.setState({
            drawerVisible: true
        });
    }

    renderSelectParams() {


        const {
            getFieldDecorator
        } = this.props.form;

        console.log(this.props.mainBody.selectParam, 'selectParam');
        if (this.props.mainBody.selectParam.length != 0) {

        }
        return (<Form layout="inline">


            {/*经营主体开始*/}
            <FormItem label="经营主体">
                <Select
                    placeholder="经营主体选择"
                    dropdownMatchSelectWidth={true}
                    value={"1"}
                    className="online"
                >
                    <Option value="1">公司</Option>
                    <Option value="2">个人</Option>
                </Select>
            </FormItem>
            {/*经营主体结束*/}

            {/*公司名称/个人开始*/}
            <FormItem label="公司名称/个人开始">
                {getFieldDecorator('reduce', {

                })(
                    <Input />
                )}
            </FormItem>
            {/*公司名称/个人开始*/}


            {/*税号/身份证号开始*/}
            <FormItem label="税号/身份证号">
                {getFieldDecorator('reduce', {

                })(
                    <Input />
                )}
            </FormItem>
            {/*税号/身份证号结束*/}
            {/*联系电话开始*/}
            <FormItem label="联系电话">
                {getFieldDecorator('reduce', {

                })(
                    <Input />
                )}
            </FormItem>
            {/*联系电话结束*/}


            {/*是否为集团总公司开始*/}
            <FormItem label="客户状态">
                <Select
                    placeholder="客户状态选择"
                    dropdownMatchSelectWidth={true}
                    value={"1"}
                    className="online"
                >
                    <Option value="1">是</Option>
                    <Option value="2">否</Option>
                </Select>
            </FormItem>
            {/*是否为集团总公司结束*/}



            {/*省开始*/}
            <FormItem label="省">
                <Select
                    placeholder="省选择"
                    dropdownMatchSelectWidth={true}
                    value={"1"}
                    className="online"
                >
                    <Option value="1">北京</Option>
                    <Option value="2">吉林</Option>
                    <Option value="3">辽宁</Option>
                    <Option value="3">上海</Option>
                    <Option value="3">深圳</Option>
                </Select>
            </FormItem>
            {/*省结束*/}


            {/*省开始*/}
            <FormItem label="市">
                <Select
                    placeholder="市选择"
                    dropdownMatchSelectWidth={true}
                    value={"1"}
                    className="online"
                >
                    <Option value="1">北京</Option>
                    <Option value="2">吉林</Option>
                    <Option value="3">辽宁</Option>
                    <Option value="3">上海</Option>
                    <Option value="3">深圳</Option>
                </Select>
            </FormItem>
            {/*市结束*/}


            {/*区开始*/}
            <FormItem label="区">
                <Select
                    placeholder="区选择"
                    dropdownMatchSelectWidth={true}
                    value={"1"}
                    className="online"
                >
                    <Option value="1">北京</Option>
                    <Option value="2">吉林</Option>
                    <Option value="3">辽宁</Option>
                    <Option value="3">上海</Option>
                    <Option value="3">深圳</Option>
                </Select>
            </FormItem>
            {/*区结束*/}

        </Form>)
    }

    render() {

        const {
            getFieldDecorator
        } = this.props.form;



        const columns = [
            {
                title: '公司名称/姓名',
                dataIndex: 'c1',
                key: 'c1',
                render: (title) => {
                    return (
                        <a href="#" onClick={this.openDrawer.bind(this)}>{title}</a>
                    )
                }
            },
            {
                title: '税号/身份证号',
                width: 150,
                dataIndex: 'c2',
                key: 'c2'
            },
            {
                title: '联系电话',
                width: 150,
                dataIndex: 'c3',
                key: 'c3'
            },
            {
                title: '是否为集团总公司',
                dataIndex: 'c4',
                key: 'c4',
                width: 150,
            },
            {
                title: '省',
                dataIndex: 'c5',
                key: 'c5',
                width: 150,
            },
            {
                title: '市',
                dataIndex: 'c6',
                key: 'c6',
                width: 150,
            },
            {
                title: '区',
                dataIndex: 'c7',
                key: 'c7',
                width: 150,
            },
            {
                title: '备注',
                dataIndex: 'c8',
                key: 'c8',
                width: 150,
                fixed: 'right'
            }
        ];


        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                id: i,
                c1: `北京 ${i} xxx 有限公司`,
                c2: 18600190151,
                c3: `状态 ${i}`,
                c4: `asdf1`,
                c5: `asdf2`,
                c6: `asdf3`,
                c7: `asdf4`,
                c8: `asdf5`
            });
        }


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

                {/* 新建经营主体开始 */}

                {/**
					show 控制是否显示隐藏
					newCustomerOk 确定提交
					newCustomerCannel 取消提交
					refreshTable 刷新表格数据
				*/}
                <CreateMainBody
                    show={this.state.newCustomer}
                    newCustomerOk={this.newCustomerOk.bind(this)}
                    newCustomerCannel={this.newCustomerCannel.bind(this)}
                    refreshTable={this.refreshTable.bind(this)}
                    mainBodyType={this.state.mainBodyType}
                />

                {/* <CreateMainBodyPerson
                    show={this.state.newCustomerPerson}
                    newCustomerOk={this.newCustomerPersonOk.bind(this)}
                    newCustomerCannel={this.newCustomerCannel.bind(this)}
                /> */}

                {/**
                 * 抽屉--联系人
                 */}
                <MainBodyDrawer
                    onCloseDrawer={this.onCloseDrawer.bind(this)}
                    drawerVisible={this.state.drawerVisible}
                />

                {/* 新建经营主体结束 */}

                { /*筛选区域开始*/}
                <Content className="channel_filter">
                    <Form layout="inline" className="clearfix">
                        <FormItem label="" className="pull-right mrn"  >
                            {/*新建开始*/}
                            <Button type="primary" size={"default"} onClick={this.newCustomer.bind(this)}>新建经营主体</Button>
                            {/*新建结束*/}
                        </FormItem>
                    </Form>
                </Content>
                { /*筛选区域结束*/}
                { /*图表模块开始*/}
                <Content className="crm_filter">

                    {this.renderSelectParams()}

                </Content>
                {/*图表模块结束*/}

                { /*图表模块开始*/}
                <Content className="channel_charts">
                    <Card>
                        <Spin spinning={false}>
                            {/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 2200, y: 300 }} /> */}
                            <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1300, y: 300 }} pagination={false} />
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
        mainBody: state.Reducer.mainBody
    }
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    //全量
    return bindActionCreators(actionCreators, dispatch);
};

MainBody = Form.create()(MainBody);

// export default compose(
//     graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
//     graphql(addBookMutation, { name: "addBookMutation" }),
//     graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(MainBody)

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);