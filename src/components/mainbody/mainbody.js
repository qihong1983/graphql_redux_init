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
    Tooltip,
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


import _ from 'lodash';
const { confirm } = Modal;

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

import Area from '../../common/area';

import * as actionCreators from '../../actions/mainbody/mainbody';



import CreateMainBody from './createMainBody';

import MainBodyDrawer from './mainBodyDrawer';

import MoreEdit from './moreEdit';


class MainBody extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     isQuery: true,
        //     //公司
        //     newCustomer: false,
        //     //个人
        //     newCustomerPerson: false,
        //     mainBodyType: 1,
        //     drawerVisible: false,
        //     moreEditVisible: false,
        //     type: "",
        //     name: "",
        //     id_code: "",
        //     phone: "",
        //     is_main: 1,
        //     province: "110000",
        //     city: "110100",
        //     county: "110101",
        //     page: 1,
        //     limit: 10,
        //     provinceArr: [],
        //     cityArr: [],
        //     countyArr: []
        // }




        this.state = {
            isQuery: true,
            //公司
            newCustomer: false,
            //个人
            newCustomerPerson: false,
            mainBodyType: 1,
            drawerVisible: false,
            moreEditVisible: false,
            type: "",
            name: "",
            id_code: "",
            phone: "",
            is_main: 1,
            province: "",
            city: "",
            county: "",
            page: 1,
            limit: 10,
            provinceArr: [],
            cityArr: [],
            countyArr: [],
            moreRows: []
        }

    }

    componentWillMount() {
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done();



        this.init();

        // console.log(this.props, 'this.props');
    }

    async init() {

        //省数据
        await this.getProvince();

        //市数据
        await this.getCity();

        //区数据
        await this.getCounty();

        //获取筛选
        await this.getParams();

        //获取表格
        await this.getTable();
    }

    async getParams() {
        // 获取筛选项
        await this.props.getSelectParam();

    }

    async getTable() {
        var params = {
            "type": this.state.type,
            "name": this.state.name,
            "id_code": this.state.id_code,
            "phone": this.state.phone,
            "is_main": this.state.is_main,
            "province": this.state.province,
            "city": this.state.city,
            "county": this.state.county,
            "page": this.state.page,
            "limit": this.state.limit
        }


        await this.props.getTableData(params);

    }


    onShowSizeChange(current, pageSize) {

        this.setState({
            test: 1,
            page: 1,
            limit: pageSize
        }, () => {
            this.getTable();
        });

        console.log(current, pageSize, '*****************');
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

    changePagination(current, size) {

        this.setState({
            page: current,
            limit: size
        }, () => {
            this.getTable();
        });

        console.log(current, size, '***@@@');
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
                        total={this.props.mainBody.table.length != 0 ? this.props.mainBody.table.pagination.total_count : 0}
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
        // Modal.warning({
        //     title: '确定要删除吗',
        //     content: '确定要删除吗',
        //     okText: '删除',
        //     cancelText: '取消',
        //     onOk: () => {
        //         console.log('111');
        //     },
        //     onCancel: () => {
        //         console.log('222');
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

    renderOptions(data, type) {
        var arr = [];


        data.map((v, k) => {

            arr.push(<Option type={type} value={v.key}>{v.value}</Option>);
        })

        return arr;
    }

    getProvince() {

        var arr = [];



        arr.push({
            key: "",
            name: "全部"
        })
        Area.map((v, k) => {
            arr.push({
                key: v.code,
                name: v.name
            });
        });



        this.setState({
            provinceArr: arr
        });


        return arr;
    }

    getCity() {
        var arr = [];


        arr.push({
            key: "",
            name: "全部"
        })
        Area.map((v, k) => {

            if (v.code == this.state.province) {


                v.children.map((cityV, cityK) => {

                    console.log(cityV, 'cityV');

                    arr.push({
                        key: cityV.code,
                        name: cityV.name
                    })
                });
            }


        })


        this.setState({
            city: "",
            cityArr: arr
        });



        return arr;
    }

    getCounty() {
        var arr = [];


        arr.push({
            key: "",
            name: "全部"
        })

        Area.map((v, k) => {

            if (v.code == this.state.province) {
                v.children.map((cityV, cityK) => {

                    if (cityV.code == this.state.city) {
                        cityV.children.map((countyV, countyK) => {
                            arr.push({
                                key: countyV.code,
                                name: countyV.name
                            })
                        })
                    }

                });
            }

        });

        this.setState({
            county: "",
            countyArr: arr
        });

        return arr;
    }

    renderAreaOption(data) {

        if (data == "province") {

            // var provinceData = this.getProvince();

            var arr = [];

            this.state.provinceArr.length != 0 && this.state.provinceArr.map((v, k) => {
                arr.push(<Option type={data} value={v.key}>{v.name}</Option>)
            })

            // provinceData.map((v, k) => {
            //     arr.push(<Option value={v.key}>{v.name}</Option>)
            // })

            // this.state.provinceArr.map((v, k) => {
            //     arr.push(<Option value={v.key}>{v.name}</Option>)
            // })

            return arr;

        } else if (data == "city") {

            var arr = [];

            // var cityData = this.getCity();

            // console.log(cityData, 'cityData');

            // cityData.map((v, k) => {
            //     arr.push(<Option value={v.key}>{v.name}</Option>)
            // })

            this.state.cityArr.length != 0 && this.state.cityArr.map((v, k) => {
                arr.push(<Option type={data} value={v.key}>{v.name}</Option>)
            })

            return arr;
        } else {

            var arr = [];

            // var countyData = this.getCounty();
            // console.log(countyData, 'countyDatacountyDatacountyData');

            // countyData.map((v, k) => {
            //     arr.push(<Option value={v.key}>{v.name}</Option>);
            // })


            this.state.countyArr.length != 0 && this.state.countyArr.map((v, k) => {
                arr.push(<Option type={data} value={v.key}>{v.name}</Option>);
            })
            return arr;
        }

    }


    initArea(data) {
        if (data == "province") {
            return this.state.province;
        } else if (data == "city") {
            return this.state.city;
        } else if (data == "county") {
            return this.state.county;
        }
    }

    setSelect(e, option) {
        console.log(e, option, '###');
        console.log(option.props.type, 'option.props.type');


        switch (option.props.type) {
            case "type":
                this.setState({
                    type: e
                }, () => {
                    this.getTable();
                });
                break;
            case "is_main":
                this.setState({
                    is_main: e
                }, () => {
                    this.getTable();
                });
                break;

            case "province":

                console.log('111222333');

                this.setState({
                    province: e,
                    city: "",
                    county: ""
                }, async () => {


                    this.props.form.setFieldsValue({
                        city: "",
                        county: ""
                    })
                    await this.getCity();

                    await this.getCounty();


                    await this.initArea();
                    await this.getTable();
                });
                break;

            case "city":
                this.setState({
                    city: e,
                    county: ""
                }, async () => {

                    this.props.form.setFieldsValue({
                        county: ""
                    })

                    await this.getCounty();

                    await this.getTable();
                });
                break;

            case "county":
                this.setState({
                    county: e
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



    changeInput(e) {

        switch (e.target.dataset.type) {
            case "name":
                this.setState({
                    name: e.target.value
                }, () => {
                    this.getTable();
                });
                break;
            case "id_code":
                this.setState({
                    is_code: e.target.value
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
            default:
                this.setState({
                    name: e.target.value
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



        if (this.props.mainBody.selectParam.length != 0) {
            this.props.mainBody.selectParam.map((v, k) => {

                if (v.type == "enum") {

                    // initialValue: v.enums[0].key,

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

    render() {

        const {
            getFieldDecorator
        } = this.props.form;

        console.log(this.props, '***this.props***');

        console.log(this.state, '### this.state ###');

        var configRender = "name";
        var configIsGroupRender = "is_group";
        var configRightFixed = "county";

        this.props.mainBody.columns.map((v, k) => {


            if (_.includes(v, configRender)) {
                v.render = (title, record) => {
                    return (
                        <a href="javascript:void();" data-id={record.id} onClick={this.openDrawer.bind(this)}>{title}</a>
                    )
                }
            } else if (_.includes(v, configIsGroupRender)) {
                render: (text, record) => {

                    console.log(text, 'text');
                    var word = "是";
                    if (text) {
                        word = "是";
                    } else {
                        word = "否";
                    }
                    return (<span>{word}</span>)
                }

            } else if (this.props.mainBody.columns.length - 1 == k) {
                v.fixed = "right";
            }


        });

        const columns = [
            {
                title: '公司名称/姓名',
                dataIndex: 'name',
                key: 'name',
                render: (title, record) => {
                    return (
                        <a href="#" data-id={record.id} onClick={this.openDrawer.bind(this)}>{title}</a>
                    )
                }
            },
            {
                title: '税号/身份证号',
                width: 150,
                dataIndex: 'id_code',
                key: 'id_code'
            },
            {
                title: '联系电话',
                width: 150,
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title: '是否为集团总公司',
                dataIndex: 'is_group',
                key: 'is_group',
                width: 150,
                render: (text, record) => {
                    var word = "是";
                    if (text) {
                        word = "是";
                    } else {
                        word = "否";
                    }
                    return (<span>{word}</span>)
                }
            },
            {
                title: '省',
                dataIndex: 'province',
                key: 'province',
                width: 150,
            },
            {
                title: '市',
                dataIndex: 'city',
                key: 'city',
                width: 150,
            },
            {
                title: '区',
                dataIndex: 'county',
                key: 'county',
                width: 150,
            },
            {
                title: '备注',
                dataIndex: 'note',
                key: 'note',
                width: 150,
                fixed: 'right',
                render: (text, record) => {

                    return (
                        <Tooltip placement="topLeft" title={text}>
                            {text.slice(0, 5)}
                        </Tooltip>)
                }
            }
        ];



        // render: (text, record) => {
        //     return (<Tooltip placement="topLeft" title={text}>
        //         <span>{text.alice(0, 5)}</span>
        //     </Tooltip>
        //     )
        // }
        var data = [];


        if (this.props.mainBody.table) {
            data = this.props.mainBody.table.subjects;
        }

        console.log(this.props.mainBody.table.subjects, '看一下');

        // for (let i = 0; i < 100; i++) {
        //     data.push({
        //         id: i,
        //         c1: `北京 ${i} xxx 有限公司`,
        //         c2: 18600190151,
        //         c3: `状态 ${i}`,
        //         c4: `asdf1`,
        //         c5: `asdf2`,
        //         c6: `asdf3`,
        //         c7: `asdf4`,
        //         c8: `asdf5`
        //     });
        // }


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

        console.log(this.props.mainBody);

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
                    <Form layout="inline">
                        {this.renderSelectParams()}
                    </Form>
                </Content>
                {/*图表模块结束*/}

                { /*图表模块开始*/}
                <Content className="channel_charts">
                    <Card>
                        <Spin spinning={false}>
                            {/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 2200, y: 300 }} /> */}
                            <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={this.props.mainBody.columns} dataSource={data} scroll={{ x: 1300, y: 300 }} pagination={false} />
                            {/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1300, y: 300 }} pagination={false} /> */}
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