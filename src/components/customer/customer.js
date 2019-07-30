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
	Drawer,
	Divider,
	notification,
	Modal,
	Card,
	Transfer,
	Switch,
	Input,
	LocaleProvider
} from 'antd';

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


import Area from '../../common/area';

const {
	MonthPicker,
	RangePicker
} = DatePicker;

import moment from 'moment';

import NProgress from 'nprogress';

import CreateCustomer from './createCustomer';
import CustomerDrawer from './customerDrawer';

const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY-MM';

//用户权限列表
import {
	renderGroupList,
	addKey
} from '../../common/utils';

import _ from 'lodash';

import SetParamList from './setParamList';

import SetSelectParam from './setSelectParam';

import MoreEdit from './moreEdit';


import * as actionCreators from '../../actions/customer/customer';

const footer = () => 'Here is footer';



class Customer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isQuery: true,
			//新建客户
			newCustomer: false,
			//抽屉
			drawerVisible: false,
			//客户管理 -- 列表字段控制显示隐藏
			paramsListVisible: false,
			//客户管理 -- 筛选设置 
			setSelectVisible: false,
			//客户管理 -- 点击批量编辑
			moreEditVisible: false,
			//客户管理 -- 点击批量编辑
			moreDeleteVisible: false,
			provinceArr: [],
			cityArr: [],
			countyArr: [],
			name: "",
			state: 1,
			major_type: 1,
			auth_status: "",
			importance: 1,
			province: "",
			city: "",
			county: "",
			phone: "",
			level: 1,
			origin: 1,
			subject_type: "",
			subject: "",
			wx_room_name: "",
			page: 1,
			limit: 1,
			moreRows: []
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

		//省数据

		await this.getProvince();

		//市数据

		await this.getCity();

		//区数据

		await this.getCounty();

		await this.getParams();


		// await this.props.getColumns(this.props.Customer.selectParam);

		await this.getTable();

	}

	async getParams() {
		await this.props.getSelectParam();

	}


	async getTable() {
		var params = {
			name: "",
			state: 1,
			major_type: 1,
			auth_status: "",
			importance: 1,
			province: "",
			city: "",
			county: "",
			phone: "",
			level: 1,
			origin: 1,
			subject_type: "",
			subject: "",
			wx_room_name: "",
			page: this.state.page,
			limit: this.state.limit,
			moreRows: [],
			drawerDetailId: ""
		}


		await this.props.getTableData(params, this.props.Customer.selectParam);

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
		// 	title: '确定要删除吗',
		// 	content: '确定要删除吗',
		// 	okText: '删除',
		// 	onOk: () => {
		// 		console.log('111');
		// 	}
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

		console.log(this.state.moreRows, 'this.state.moreRows');



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
						className="pull-right mt5"
						showSizeChanger
						onShowSizeChange={this.onShowSizeChange.bind(this)}
						onChange={this.changePagination.bind(this)}
						defaultCurrent={this.state.page}
						current={this.state.page}
						total={this.props.Customer.table.length != 0 ? this.props.Customer.table.pagination.total_count : 0}
					/>
				</Col>
			</Row>
		)
	}

	/**
	 * 新建客户端  -- 刷新列表
	 * @method refreshTable
	 */
	refreshTable() {
		console.log('刷新列表');
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

	onCloseDrawer() {
		this.setState({
			drawerVisible: false
		});
	}

	openDrawer(e) {

		console.log(e.target.dataset.id, 'eeeeeeeeeeeee');

		this.setState({
			drawerDetailId: e.target.dataset.id,
			drawerVisible: true
		});
	}


	DrawerHeader() {
		return (<div className="clearfix">
			<div className="pull-left">
				北京市海淀汽修
			</div>
			<div className="pull-right">
				<Button type="primary">
					编辑
				</Button>
			</div>
		</div>)
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


	initArea(data) {
		if (data == "province") {
			return this.state.province;
		} else if (data == "city") {
			return this.state.city;
		} else if (data == "county") {
			return this.state.county;
		}
	}

	renderAreaOption(data) {

		if (data == "province") {

			// var provinceData = this.getProvince();

			var arr = [];

			this.state.provinceArr.length != 0 && this.state.provinceArr.map((v, k) => {
				arr.push(<Option type={data} value={v.key}>{v.name}</Option>)
			})


			return arr;

		} else if (data == "city") {

			var arr = [];


			this.state.cityArr.length != 0 && this.state.cityArr.map((v, k) => {
				arr.push(<Option type={data} value={v.key}>{v.name}</Option>)
			})

			return arr;
		} else {

			var arr = [];



			this.state.countyArr.length != 0 && this.state.countyArr.map((v, k) => {
				arr.push(<Option type={data} value={v.key}>{v.name}</Option>);
			})
			return arr;
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

	renderOptions(data, type) {
		var arr = [];


		data.map((v, k) => {

			arr.push(<Option type={type} value={v.key}>{v.value}</Option>);
		})

		return arr;
	}

	renderSelectParams() {


		const {
			getFieldDecorator
		} = this.props.form;

		var arr = [];



		if (this.props.Customer.selectParam.length != 0) {
			this.props.Customer.selectParam.map((v, k) => {

				if (v.type == "enum") {


					// initialValue: v.enums[0].key,

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

	render() {

		const {
			getFieldDecorator
		} = this.props.form;



		// this.props.Customer.columns

		var configRender = "name";
		var configRightFixed = "county";



		this.props.Customer.columns.map((v, k) => {


			if (_.includes(v, configRender)) {
				v.render = (title, record) => {
					return (
						<a href="javascript:void();" data-id={record.id} onClick={this.openDrawer.bind(this)}>{title}</a>
					)
				}
			} else if (this.props.Customer.columns.length - 1 == k) {
				v.fixed = "right";
			}


		});


		const columns = [
			{
				title: '客户名称',
				dataIndex: 'name',
				key: 'name',
				render: (title) => {
					return (
						<a href="javascript:void();" onClick={this.openDrawer.bind(this)}>{title}</a>
					)
				}
			},
			{
				title: '客户电话',
				width: 150,
				dataIndex: 'phone',
				key: 'phone'
			}
		];

		// var last = _.last(this.props.Customer.columns);
		// console.log(_.last(this.props.Customer.columns), 'lastlastlastlastlast');
		// _.last(this.props.Customer.columns).fixed = 'right';

		// console.log(,'this.props.Customer.columns');


		// const columns = [
		// 	{
		// 		title: '客户名称',
		// 		dataIndex: 'name',
		// 		key: 'name',
		// 		render: (title) => {
		// 			return (
		// 				<a href="javascript:void();" onClick={this.openDrawer.bind(this)}>{title}</a>
		// 			)
		// 		}
		// 	},
		// 	{
		// 		title: '客户电话',
		// 		width: 150,
		// 		dataIndex: 'phone',
		// 		key: 'phone'
		// 	},
		// 	{
		// 		title: '客户状态',
		// 		width: 150,
		// 		dataIndex: 'state',
		// 		key: 'state'
		// 	},
		// 	{
		// 		title: '客户分级',
		// 		dataIndex: 'level',
		// 		key: 'level',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '客户来源',
		// 		dataIndex: 'origin',
		// 		key: 'origin',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '经营类型',
		// 		dataIndex: 'major_type',
		// 		key: 'major_type',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '经营主体',
		// 		dataIndex: 'subject',
		// 		key: 'subject',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '认证状态',
		// 		dataIndex: 'auth_status',
		// 		key: 'auth_status',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '客户性质',
		// 		dataIndex: 'subject_type',
		// 		key: 'subject_type',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '重要程度',
		// 		dataIndex: 'importance',
		// 		key: 'importance',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '微信群名',
		// 		dataIndex: 'wx_room_name',
		// 		key: 'wx_room_name',
		// 		width: 150
		// 	},
		// 	{
		// 		title: '省',
		// 		dataIndex: 'province',
		// 		key: 'province',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '市',
		// 		dataIndex: 'city',
		// 		key: 'city',
		// 		width: 150,
		// 	},
		// 	{
		// 		title: '区',
		// 		dataIndex: 'county',
		// 		key: 'county',
		// 		width: 150,
		// 		fixed: 'right'
		// 	}
		// ];


		var data = [];


		if (this.props.Customer.table) {
			data = this.props.Customer.table.subjects;
		}


		// for (let i = 0; i < 100; i++) {
		// 	data.push({
		// 		id: i,
		// 		title: `北京市海淀汽修 ${i}`,
		// 		phone: 18600190151,
		// 		address: `状态 ${i}`,
		// 		Column1: `asdf1`,
		// 		Column2: `asdf2`,
		// 		Column3: `asdf3`,
		// 		Column4: `asdf4`,
		// 		Column5: `asdf5`,
		// 		Column6: `asdf6`,
		// 		Column7: `asdf7`,
		// 		Column8: `asdf8`,
		// 		Column9: `asdf9`,
		// 		Column10: `asdf10`,
		// 		Column11: `asdf11`
		// 	});
		// }


		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {

				console.log(this);
				console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
				console.log(selectedRows, 'selectedRowsselectedRowsselectedRowsselectedRows');

				this.setState({
					moreRows: selectedRows
				});
			},
			onSelect: (record, selected, selectedRows) => {

				console.log(this);
				console.log(record, selected, selectedRows);
			},
			onSelectAll: (selected, selectedRows, changeRows) => {
				console.log(this);
				console.log(selected, selectedRows, changeRows);
			},
		};


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


		const { targetKeys, selectedKeys, disabled } = this.state;


		console.log(this.props, '####');

		return (
			<Layout style={{ position: "relative", marginTop: 60, overflow: "hidden" }}>


				{/* 批量编辑开始 */}
				<MoreEdit
					moreEditVisible={this.state.moreEditVisible}
					moreEditOk={this.moreEditOk.bind(this)}
					moreEditCancel={this.moreEditCancel.bind(this)}
				/>
				{/* 批量编辑结束 */}

				{/* 例表字段设置开始 */}


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
					paramsData={this.props.Customer.selectParam}
				/>

				{/* 筛选项设置结束 */}
				{/* 新建客户开始 */}
				{/**
					show 控制是否显示隐藏
					newCustomerOk 确定提交
					newCustomerCannel 取消提交
					refreshTable 刷新表格数据
				*/}
				<CreateCustomer
					show={this.state.newCustomer}
					newCustomerOk={this.newCustomerOk.bind(this)}
					newCustomerCannel={this.newCustomerCannel.bind(this)}
					refreshTable={this.refreshTable.bind(this)}
				/>


				{/* 新建客户结束 */}

				{/**
				  * 抽屉--详情
				  */}

				<CustomerDrawer
					drawerDetailId={this.state.drawerDetailId}
					onCloseDrawer={this.onCloseDrawer.bind(this)}
					drawerVisible={this.state.drawerVisible}
				/>


				{ /*筛选区域开始*/}
				<Content className="channel_filter">
					<Form layout="inline" className="clearfix">
						<FormItem label="" className="pull-right mrn"  >
							{/*查询开始*/}
							<Button type="primary" size={"default"} onClick={this.newCustomer.bind(this)}>新建客户</Button>
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
							{/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 2200, y: 300 }} pagination={false} /> */}

							<Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={this.props.Customer.columns} dataSource={data} scroll={{ x: 2000, y: 300 }} pagination={false} />
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
		Customer: state.Reducer.Customer
	}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
	//全量
	return bindActionCreators(actionCreators, dispatch);
};

Customer = Form.create()(Customer);

// export default compose(
// 	graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
// 	graphql(addBookMutation, { name: "addBookMutation" }),
// 	graphql(getBooksQuery, { name: "getBooksQuery" }),
// )(Customer)

export default connect(mapStateToProps, mapDispatchToProps)(Customer);