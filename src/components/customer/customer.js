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
class Customer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isQuery: true,
			//新建客户
			newCustomer: false
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
						className="pull-right mt5"
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
		this.setState({
			newCustomer: false
		});
	}

	/**
	 * 新建客户 -- 取消新建客户
	 * @method newCustomerCannel
	 */
	newCustomerCannel(e) {
		console.log('取消新建客户');
		this.setState({
			newCustomer: false
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


	render() {

		const {
			getFieldDecorator
		} = this.props.form;


		const columns = [
			{
				title: '客户名称',
				dataIndex: 'title',
				key: 'title',
				render: (title) => {
					return (
						<a href="javascript:void();">{title}</a>
					)
				}
			},
			{
				title: '客户电话',
				width: 150,
				dataIndex: 'phone',
				key: 'phone'
			},
			{
				title: '客户状态',
				width: 150,
				dataIndex: 'address',
				key: 'address'
			},
			{
				title: '客户分级',
				dataIndex: 'Column1',
				key: '1',
				width: 150,
			},
			{
				title: '客户来源',
				dataIndex: 'Column2',
				key: '2',
				width: 150,
			},
			{
				title: '经营类型',
				dataIndex: 'Column3',
				key: '3',
				width: 150,
			},
			{
				title: '经营主体',
				dataIndex: 'Column4',
				key: '4',
				width: 150,
			},
			{
				title: '认证状态',
				dataIndex: 'Column5',
				key: '5',
				width: 150,
			},
			{
				title: '客户性质',
				dataIndex: 'Column6',
				key: '6',
				width: 150,
			},
			{
				title: '重要程度',
				dataIndex: 'Column7',
				key: '7',
				width: 150,
			},
			{
				title: '微信群名',
				dataIndex: 'Column8',
				key: '8',
				width: 150
			},
			{
				title: '省',
				dataIndex: 'Column9',
				key: '9',
				width: 150,
			},
			{
				title: '市',
				dataIndex: 'Column10',
				key: '10',
				width: 150,
			},
			{
				title: '区',
				dataIndex: 'Column11',
				key: '11',
				width: 150,
				fixed: 'right'
			}
		];


		const data = [];
		for (let i = 0; i < 100; i++) {
			data.push({
				id: i,
				title: `北京市海淀汽修 ${i}`,
				phone: 18600190151,
				address: `状态 ${i}`,
				Column1: `asdf1`,
				Column2: `asdf2`,
				Column3: `asdf3`,
				Column4: `asdf4`,
				Column5: `asdf5`,
				Column6: `asdf6`,
				Column7: `asdf7`,
				Column8: `asdf8`,
				Column9: `asdf9`,
				Column10: `asdf10`,
				Column11: `asdf11`
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


		return (
			<Layout style={{ position: "relative", marginTop: 60, overflow: "hidden" }}>

				{/* 新建客户开始 */}
				<Modal
					title="新建客户"
					visible={this.state.newCustomer}
					onOk={this.newCustomerOk.bind(this)}
					onCancel={this.newCustomerCannel.bind(this)}
					footer={(<div><Button type="default" onClick={this.newCustomerCannel.bind(this)}>取消</Button><Button type="primary" onClick={this.newCustomerOk.bind(this)}>提交</Button></div>)}
					cancelText={<Button>取消1</Button>}
					width={628}
				>
					<Form {...formItemLayout} >


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


						{/*公司简称开始*/}
						<FormItem label="公司简称">
							{getFieldDecorator('reduce', {

							})(
								<Input />
							)}
						</FormItem>
						{/*公司简称结束*/}

						{/*客户状态开始*/}
						<FormItem label="客户状态">
							<Select
								placeholder="客户状态选择"
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
						</FormItem>
						{/*客户状态开始*/}



						{/*客户分级开始*/}
						<FormItem label="客户分级">
							<Select
								placeholder="客户分级选择"
								dropdownMatchSelectWidth={true}
								value={"1"}
								className="online"
							>
								<Option value="1">一类维修厂</Option>
								<Option value="2">二类维修厂</Option>
								<Option value="3">三类维修厂</Option>
							</Select>
						</FormItem>
						{/*客户状态结束*/}


						{/*客户来源开始*/}
						<FormItem label="客户来源">
							<Select
								placeholder="客户来源选择"
								dropdownMatchSelectWidth={true}
								value={"1"}
								className="online"
							>
								<Option value="1">线下地推</Option>
								<Option value="2">网略推广</Option>
								<Option value="3">渠道代理</Option>
							</Select>
						</FormItem>
						{/*客户来源结束*/}


						{/*经营类型开始*/}
						<FormItem label="经营类型">
							<Select
								placeholder="经营类型选择"
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
						</FormItem>
						{/*经营类型结束*/}



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
						{/*公司名称结束*/}

						{/* 地址开始 */}
						<FormItem label="地址">
							{getFieldDecorator('reduce', {
								rules: [
									{
										required: true,
										message: '请输入地址',
									}
								]
							})(
								<Cascader options={options} onChange={this.onChangeCascader.bind(this)} placeholder="Please select" />
							)}
						</FormItem>
						{/* 地址结束 */}

						{/*详细地址开始*/}
						<FormItem label="公司名称">
							{getFieldDecorator('reduce', {
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
							<Select
								placeholder="客户性质选择"
								dropdownMatchSelectWidth={true}
								value={"1"}
								className="online"
							>
								<Option value="1">企业客户</Option>
								<Option value="2">个人客户</Option>
							</Select>
						</FormItem>
						{/*客户性质结束*/}


						{/*经营主体开始*/}
						<FormItem label="经营主体">
							<Row gutter={24}>
								<Col span={8}>
									{getFieldDecorator('reduce', {
										rules: [
											{
												required: true,
												message: '请输入详细地址',
											}
										]
									})(
										<Select
											placeholder="经营主体选择"
											dropdownMatchSelectWidth={true}
											value={"1"}
											className="online"
										>
											<Option value="1">公司</Option>
											<Option value="2">个人</Option>
										</Select>
									)}

								</Col>
								<Col span={8}>

									{getFieldDecorator('reduce', {
										rules: [
											{
												required: true,
												message: '请输入详细地址',
											}
										]
									})(
										<Select
											showSearch
											placeholder="Select a person"
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
								<Col span={8}>
									<Button type="primary">新建经营主体</Button>
								</Col>
							</Row>
						</FormItem>
						{/*经营主体结束*/}

						{/*重要程度开始*/}
						<FormItem label="重要程度">
							<Select
								placeholder="重要程度选择"
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
						</FormItem>
						{/*重要程度结束*/}


						{/*微信群名开始*/}
						<FormItem label="微信群名">
							{getFieldDecorator('reduce', {

							})(
								<Input />
							)}
						</FormItem>
						{/*微信群名结束*/}


						{/*QQ开始*/}
						<FormItem label="QQ">
							{getFieldDecorator('reduce', {

							})(
								<Input />
							)}
						</FormItem>
						{/*QQ结束*/}



						{/*邮箱开始*/}
						<FormItem label="邮箱">
							{getFieldDecorator('reduce', {

							})(
								<Input />
							)}
						</FormItem>
						{/*邮箱结束*/}

						{/*公司官网开始*/}
						<FormItem label="邮箱">
							{getFieldDecorator('reduce', {

							})(
								<Input />
							)}
						</FormItem>
						{/*公司官网结束*/}


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



					</Form>
				</Modal>
				{/* 新建客户结束 */}

				{ /*筛选区域开始*/}
				<Content className="channel_filter">
					<Form layout="inline" className="clearfix">
						<FormItem label="" className="pull-right"  >
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

								{/*客户名称开始*/}
								<FormItem label="客户名称">
									{getFieldDecorator('reduce', {

									})(
										<Input />
									)}
								</FormItem>
								{/*客户名称结束*/}


								{/*联系电话开始*/}
								<FormItem label="联系电话">
									{getFieldDecorator('reduce', {

									})(
										<Input />
									)}
								</FormItem>
								{/*联系电话结束*/}


								{/*客户状态开始*/}
								<FormItem label="客户状态">
									<Select
										placeholder="客户状态选择"
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
								</FormItem>
								{/*客户状态开始*/}



								{/*客户分级开始*/}
								<FormItem label="客户分级">
									<Select
										placeholder="客户分级选择"
										dropdownMatchSelectWidth={true}
										value={"1"}
										className="online"
									>
										<Option value="1">一类维修厂</Option>
										<Option value="2">二类维修厂</Option>
										<Option value="3">三类维修厂</Option>
									</Select>
								</FormItem>
								{/*客户状态结束*/}

								{/*客户来源开始*/}
								<FormItem label="客户来源">
									<Select
										placeholder="客户来源选择"
										dropdownMatchSelectWidth={true}
										value={"1"}
										className="online"
									>
										<Option value="1">线下地推</Option>
										<Option value="2">网略推广</Option>
										<Option value="3">渠道代理</Option>
									</Select>
								</FormItem>
								{/*客户来源结束*/}


								{/*经营类型开始*/}
								<FormItem label="经营类型">
									<Select
										placeholder="经营类型选择"
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
								</FormItem>
								{/*经营类型结束*/}



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



								{/*认证状态开始*/}
								<FormItem label="认证状态">
									<Select
										placeholder="认证状态选择"
										dropdownMatchSelectWidth={true}
										value={"1"}
										className="online"
									>
										<Option value="1">已认证</Option>
										<Option value="2">未认证</Option>
									</Select>
								</FormItem>
								{/*认证状态结束*/}




								{/*客户性质开始*/}
								<FormItem label="客户性质">
									<Select
										placeholder="客户性质选择"
										dropdownMatchSelectWidth={true}
										value={"1"}
										className="online"
									>
										<Option value="1">企业客户</Option>
										<Option value="2">个人客户</Option>
									</Select>
								</FormItem>
								{/*客户性质结束*/}




								{/*重要程度开始*/}
								<FormItem label="重要程度">
									<Select
										placeholder="重要程度选择"
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
								</FormItem>
								{/*重要程度结束*/}





								{/*微信群名开始*/}
								<FormItem label="微信群名">
									{getFieldDecorator('reduce', {

									})(
										<Input />
									)}
								</FormItem>
								{/*微信群名结束*/}



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


						</Col>
						<Col span={2} >
							<FormItem label="" className="pull-right">
								{/* <Button type="dashed" >筛选设置</Button> */}
								<Button type="dashed" >筛选设置</Button>
							</FormItem>
						</Col>
					</Row>
				</Content>
				{/*图表模块结束*/}

				{ /*图表模块开始*/}
				<Content className="channel_charts">
					<Card extra={<Button type="dashed"> 列表字段设置</Button>}>
						<Spin spinning={false}>
							{/* <Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 2200, y: 300 }} /> */}
							<Table footer={() => this.tableFooter()} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 2200, y: 300 }} pagination={false} />
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

Customer = Form.create()(Customer);

export default compose(
	graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
	graphql(addBookMutation, { name: "addBookMutation" }),
	graphql(getBooksQuery, { name: "getBooksQuery" }),
)(Customer)

// export default connect(mapStateToProps, mapDispatchToProps)(Customer);