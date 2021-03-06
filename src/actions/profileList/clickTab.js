//发送图表请求
import {
	chartsResult
}
from './chartsResult';

/**
 * 切换tab
 * @method setLimit
 * @param param {Object} 参数
 * @param pagination {Object} 分页信息
 * @param channel {String} 单渠道名称
 * @return {Function}
 */
// const clickTab = (param, id) => {
const clickTab = (data) => {

	return function(dispatch) {
		// 第几个tab
		dispatch({
			type: "PROFILELIST_CLICKTAB",
			payload: data.tab
		})

		//1,2 是汇总和明细
		var chartsData = {
			appCode: data.appCode,
			channelGroup: data.channelGroup,
			channelCategory: data.channelCategory,
			channelName: data.channelName,
			tab: parseInt(data.tab, 10),
			startDate: data.startDate,
			endDate: data.endDate
		}


		chartsResult(chartsData, dispatch);

	}
}

export {
	clickTab
}