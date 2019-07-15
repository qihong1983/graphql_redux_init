import React from 'react';

import {
	notification
} from 'antd';
import reqwest from 'reqwest';

const deleteUser = (data, callback) => {



	return function(dispatch) {
		//发送请求
		reqwest({
			url: '/user/delete.do',
			method: 'post',
			data: data,
			type: 'json',
			header: {
				"aaa": "bbb"
			}
		}).then((msg) => {



			if (msg.status) {
				notification['success']({
					message: '删除成功',
					description: msg.msg,
				});

				callback(true);
			} else {
				notification['error']({
					message: '删除失败',
					description: msg.msg,
				});
			}

			if (msg.code == -1) {
				alert(-1);
				window.location.href = "/"
			}
		});
	}
}

export {
	deleteUser
}