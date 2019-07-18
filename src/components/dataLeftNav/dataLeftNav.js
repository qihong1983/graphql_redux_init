import React from 'react';
import {
	Layout,
	Menu,
	Icon,
	Affix
} from 'antd';
const {
	SubMenu
} = Menu;
const {
	Sider
} = Layout;

import {
	IndexLink,
	Link
} from 'react-router';
export default class dataLeftNav extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			collapsed: false
		}
	}


	onCollapse(e) {

		console.log(e);
		this.setState({ collapsed: e });
	}

	render() {
		var hashValue = '?' + this.props.location.key;
		return (
			<Layout>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse.bind(this)} width={180} className="leftNav" style={{ overflow: 'hidden', minHeight: window.innerHeight, marginTop: 60, left: 0 }}>



					<Menu
						mode="inline"
						selectedKeys={this.props.location.pathname.split("/")}
						defaultOpenKeys={['sub1', 'sub2']}
						style={{ height: '100%', borderRight: 0 }}
					>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="user" />
									<span>CRM</span>
								</span>
							}
						>
							<Menu.Item key="customer">
								<IndexLink to="/data/customer" activeClassName="active"><Icon type="line-chart" />客户管理</IndexLink>
							</Menu.Item>
							<Menu.Item key="contact">
								<IndexLink to="/data/contact" activeClassName="active"><Icon type="exception" />联系人</IndexLink>
							</Menu.Item>
							<Menu.Item key="mainbody">
								<IndexLink to="/data/mainbody" activeClassName="active"><Icon type="exception" />经营主体</IndexLink>
							</Menu.Item>

						</SubMenu>

					</Menu>
				</Sider>

				{this.props.children}
			</Layout>
		);
	}
}