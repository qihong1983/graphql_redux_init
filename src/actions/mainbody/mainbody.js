//todo mock数据
import "../../mock/common/global";

//todo mock数据
import "../../mock/mainbody/mainbody";



import React from 'react';
import reqwest from 'reqwest';

import {
	notification
} from 'antd';




function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}



const getSelectParam = (data) => {
	return async function (dispatch) {


		var options = {};

		var url = 'http://xxx.mock.com/crm/subject/metadata';

		if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

			options = {
				url: url,
				method: 'get',
				type: 'json',
				cache: true
			}

		} else {
			options = {
				url: url,
				method: 'get',
				type: 'json',
				cache: true,
				data: data
			}
		}


		//发送请求
		await reqwest(options).then(async (msg) => {

			await dispatch({
				type: "MAINBODY_SELECTPARAM",
				payload: msg
			});

			var arr = [];


			// _.includes(v, configRender)

			msg.map((v, k) => {
				if (v.is_table_show) {

					arr.push({
						title: v.display,
						width: 150,
						dataIndex: v.name,
						key: v.name
					});

				}
			})

			await dispatch({
				type: "MAINBODY_COLUMNS",
				payload: arr
			});



		});
	}
}


const getTableData = (data) => {


	return async function (dispatch) {


		var params = toQueryString(data);


		var options = {};

		var url = 'http://xxx.mock.com/crm/subject/list';

		if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


			options = {
				url: url,
				method: 'get',
				type: 'json',
				cache: true
			}

		} else {
			options = {
				url: url,
				method: 'get',
				type: 'json',
				cache: true,
				data: data
			}
		}


		await reqwest(options).then(async (msg) => {


			console.log(msg, 'table');

			await dispatch({
				type: "MAINBODY_TABLE",
				payload: msg
			});
		});
	}
}


export {
	getSelectParam,
	getTableData
}