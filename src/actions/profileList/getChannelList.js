import reqwest from 'reqwest';

// 发异步请求
// import {
// 	chartsResult
// } from './gro';

/**
 * 获取渠道组列表
 * @method getChannelList
 * @param param {Object} 参数
 * @param id {Object} 参数
 * @return {Function}
 */
const getChannelList = (data) => {

	return function(dispatch) {


		dispatch({
			type: "PROFILELIST_CHANNELNAME",
			// payload: addKey(msg.data, '-')
			payload: data.channelName
		})

		// var data = {
		// 	appCode: "",
		// 	channelGroup: "",
		// 	channelCategory: "",
		// 	channelName: ""
		// }



		//chartsResult(data, dispatch);

		//发送请求
		reqwest({
			url: '/data/overview/channel.do',
			method: 'post',
			data: data,
			type: 'json'
		}).then((msg) => {



			if (msg.status) {



				dispatch({
					type: "PROFILELIST_CHANNELLIST",
					// payload: addKey(msg.data, '-')
					payload: msg.data
				})



			} else {
				if (msg.code == -1) {
					alert(-1);
					window.location.href = "/"
				}
			}
		});

	}
}

export {
	getChannelList
}