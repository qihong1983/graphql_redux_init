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

import * as actionCreators from '../../actions/allTrend/allTrend';

const footer = () => 'Here is footer';


function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}
class MainBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuery: true
        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();


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
                            <Button style={{ marginRight: "10px" }}>编辑</Button>
                            <Button>删除</Button>

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
                        <a href="#">{title}</a>
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
                { /*筛选区域开始*/}
                <Content className="channel_filter">
                    <Form layout="inline" className="clearfix">
                        <FormItem label="" className="pull-right"  >
                            {/*新建开始*/}
                            <Button type="primary" size={"default"}>新建经营主体</Button>
                            {/*新建结束*/}
                        </FormItem>
                    </Form>
                </Content>
                { /*筛选区域结束*/}
                { /*图表模块开始*/}
                <Content className="crm_filter">

                    <Form layout="inline">


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

                    </Form>

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

MainBody = Form.create()(MainBody);

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" }),
    graphql(getBooksQuery, { name: "getBooksQuery" }),
)(MainBody)

// export default connect(mapStateToProps, mapDispatchToProps)(Customer);