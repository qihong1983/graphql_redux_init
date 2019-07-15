import reqwest from 'reqwest';
import React from 'react';

import {
	notification
} from 'antd';

const uniqueUser = (data, callback) => {


	return function(dispatch) {
		//发送请求
		reqwest({
			url: '/user/unique.do',
			method: 'post',
			data: data,
			type: 'json',
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {



			if (msg.status) {


				callback(true);
			} else {
				notification['error']({
					message: '邮箱',
					description: msg.msg,
				});
			}

			if (msg.code == -1) {
				window.location.href = "/"
			}
		});
	}
}

export {
	uniqueUser
}