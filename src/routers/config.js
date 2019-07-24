import React from 'react';

import {
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Redirect
} from 'react-router';


import Nesting from '../common/nesting';

/**
 * 根路由组件
 */
import Main from '../components/main';

/**
 * 渠道数据
 */

import DataLeftNav from '../components/dataLeftNav/dataLeftNav';


//CRM -- 客户管理
const Customer = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/customer/customer').default
		)
	}, 'customer')
}

// const Customer = (location, cb) => {
// 	require.ensure([], require => {
// 		cb(null,
// 			require('../components/retentionAnalysis/retentionAnalysis').default
// 		)
// 	}, 'retentionAnalysis')
// }


//CRM -- 联系人
const Contact = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/contact/contact').default
		)
	}, 'contact')
}

//CRM -- 经营主体
const MainBody = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/mainbody/mainbody').default
		)
	}, 'mainbody')
}

//渠道数据 -- 留存分析
const RetentionAnalysis = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/retentionAnalysis/retentionAnalysis').default
		)
	}, 'retentionAnalysis')
}


/**
 * 渠道管理
 */
import ManagerLeftNav from '../components/managerLeftNav/managerLeftNav';

//渠道管理 -- 渠道列表

const ChannelList = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelList/channelList').default
		)
	}, 'channelList')
}


//渠道管理 -- 渠道列表 -- 新建

const ChannelListCreate = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelList/create').default
		)
	}, 'channelListcreate')
}

//渠道管理 -- 渠道列表 -- 修改

const ChannelListEdit = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelList/edit').default
		)
	}, 'channelListEdit')
}

//渠道管理 -- 渠道分组


const ChannelGroup = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelGroup/channelGroup').default
		)
	}, 'channelGroup')
}
//渠道管理 -- 渠道分组 -- 新建

const ChannelGroupCreate = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelGroup/create').default
		)
	}, 'channelGroupCreate')
}

//渠道管理 -- 渠道分组 -- 修改

const ChannelGroupEdit = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelGroup/edit').default
		)
	}, 'channelGroupEdit')
}

//渠道管理 -- 短链管理
const ShortLink = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/shortLink/shortLink').default
		)
	}, 'shortLink')
}

//渠道管理 -- 短链管理 -- 新建

const ShortLinkCreate = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/shortLink/create').default
		)
	}, 'shortLinkCreate')
}

//渠道管理 -- 渠道成本

const ChannelCost = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/channelCost/channelCost').default
		)
	}, 'channelCost')
}

/**
 * 系统管理
 */
import SysLeftNav from '../components/sysLeftNav/sysLeftNav';

//系统管理 -- 机型管理

const ModalManager = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/modalManager/modalManager').default
		)
	}, 'modalManager')
}
//渠道管理 -- 渠道分组 -- 新建

const ModalManagerCreate = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/modalManager/create').default
		)
	}, 'modalManagerCreate')
}

//渠道管理 -- 渠道分组 -- 修改
const ModalManagerEdit = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/modalManager/edit').default
		)
	}, 'modalManagerEdit')
}

/**
 * 用户管理
 */

import UserLeftNav from '../components/userLeftNav/userLeftNav';

// 用户管理 -- 用户列表
const UserListIndex = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/user/userListIndex').default
		)
	}, 'userListIndex')
}

// 用户管理 -- 用户列表 -- 新建用户
const CreateUser = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/user/createUser').default
		)
	}, 'createUser')
}


// 用户管理 -- 用户列表 -- 修改用户
const EditUser = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/user/editUser').default
		)
	}, 'editUser')
}

// 用户管理 -- 用户列表 -- 修改用户
const Login = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/login/login').default
		)
	}, 'login')
}




// 没有权限 
const NoAllow = (location, cb) => {
	require.ensure([], require => {
		cb(null,
			require('../components/noAllow/noAllow').default
		)
	}, 'noAllow')
}


const doAllow = (replace) => {

	var list = [{
		key: "1",
		value: "data",
		cnName: "渠道数据",
		url: "/data"
	}, {
		key: "2",
		value: "manager",
		cnName: "渠道管理",
		url: "/manager"
	}, {
		key: "3",
		value: "sys",
		cnName: "系统管理",
		url: "/sys"
	}, {
		key: "4",
		value: "user",
		cnName: "用户管理",
		url: "/user"
	}];


	if (window.userInfo.data.auth != "") {
		let winArr = window.userInfo.data.auth.split(",");

		var firstNum = winArr[0];
		var path = "";
		list.map((v, k) => {
			if (firstNum == v.key) {
				path = v.url;
			}
		});

		if (path != "") {
			replace({
				pathname: path
			})
		}
	}
}


const isAllow = (data, replace) => {


	var list = [{
		key: "1",
		value: "data",
		cnName: "渠道数据",
		url: "/data"
	}, {
		key: "2",
		value: "manager",
		cnName: "渠道管理",
		url: "/manager"
	}, {
		key: "3",
		value: "sys",
		cnName: "系统管理",
		url: "/sys"
	}, {
		key: "4",
		value: "user",
		cnName: "用户管理",
		url: "/user"
	}];

	var winArr = window.userInfo.data.auth.split(",");

	var bl = false;
	winArr.map((v, k) => {
		if (v == data) {
			bl = true;
		}
	});

	if (!bl) {
		var firstNum = winArr[0];
		var path = "";
		list.map((v, k) => {
			if (firstNum == v.key) {
				path = v.url;
			}
		});

		if (path != "") {
			replace({
				pathname: path
			})
		} else {

			replace({
				pathname: '/noallow'
			})

		}

	}

}


export default class Routers extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		;
		return (
			<div>
				<Router history={this.props.history}>
					<Route path="login" getComponent={Login} >

					</Route>

					<Route path="/" component={Main}>
						<IndexRedirect to="data" />



						{/*渠道数据开始*/}
						<Route path="data" component={DataLeftNav} onEnter={
							(nextState, replace) => {
								let key = "1";
								isAllow(key, replace);
							}
						}>
							<IndexRedirect to="customer" />

							<Route path="customer" component={Nesting}>
								<IndexRoute getComponent={Customer} />
								<Redirect from='*' to='/data/customer' />
							</Route>

							<Route path="contact" component={Nesting}>
								<IndexRoute getComponent={Contact} />
								<Redirect from='*' to='/data/customer' />
							</Route>

							<Route path="mainbody" component={Nesting}>
								<IndexRoute getComponent={MainBody} />
								<Redirect from='*' to='/data/customer' />
							</Route>
							{/* MainBody */}

							{/*留存分析*/}
							<Route path="retentionAnalysis" component={Nesting}>
								<IndexRoute getComponent={RetentionAnalysis} />
								<Redirect from='*' to='/data/retentionAnalysis' />
							</Route>
						</Route>

						{/*系统管理开始*/}
						<Route path="sys" component={SysLeftNav} onEnter={
							(nextState, replace) => {
								let key = "3";
								isAllow(key, replace);
							}
						}>
							<IndexRedirect to="modal" />
							{/*机型管理*/}
							<Route path="modal" component={Nesting}>
								<IndexRoute getComponent={ModalManager} />
								<Route path="create" getComponent={ModalManagerCreate}></Route>
								<Route path="edit/:firm/:brand" getComponent={ModalManagerEdit}></Route>
								<Redirect from='*' to='/sys/modal' />
							</Route>
						</Route>

						{/*用户管理开始*/}
						<Route path="user" component={UserLeftNav} onEnter={
							(nextState, replace) => {
								let key = "4";
								isAllow(key, replace);
							}
						}>
							<IndexRedirect to="list" />
							{/*用户列表*/}
							<Route path="list" component={Nesting}>

								<IndexRoute getComponent={UserListIndex} />

								<Route path="create" getComponent={CreateUser}></Route>
								<Route path="edit/:id" getComponent={EditUser}></Route>

								<Redirect from='*' to='/user/list' />

							</Route>
						</Route>


						<Route path="noallow" getComponent={NoAllow} onEnter={
							(nextState, replace) => {
								doAllow(replace);
							}
						}></Route>

					</Route>
					<Redirect from='*' to='data' />
				</Router>
			</div>
		);
	}
}