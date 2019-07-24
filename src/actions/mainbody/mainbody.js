//todo mock数据
import "../../mock/common/global";

//todo mock数据
import "../../mock/mainbody/mainbody";



import React from 'react';
import reqwest from 'reqwest';

import {
	notification
} from 'antd';



const getSelectParam = (data) => {
	return async function (dispatch) {


		// http://rap2api.taobao.org/app/mock/225693/crm/subject/metadata

		//发送请求
		await reqwest({
			url: 'http://xxx.mock.com/crm/subject/metadata',
			method: 'get',
			type: 'json',
			cache: true
		}).then(async (msg) => {


			await dispatch({
				type: "MAINBODY_SELECTPARAM",
				payload: msg
			});
		});
	}
}




export {
	getSelectParam
}