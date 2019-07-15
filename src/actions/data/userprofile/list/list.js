import reqwest from 'reqwest';


import "../../../../mock/profileList/profileList";

function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function(key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function(val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
}


export const list = (token, props) => {

	return function(dispatch) {

		reqwest({
			url: 'http://127.0.0.1:3001/user_profile_list?appCode=24&online=1',
			method: 'get',
			data: {},
			type: 'json'
		}).then((msg) => {


			if (msg.status) {
				var objectArr = [];
				var i = 0;
				msg.data.map(function(v, k) {

					v.key = i++;
					objectArr.push(v);
				});



				dispatch({
					type: "tableList",
					payload: objectArr
				})
			} else {
				if (msg.code == -1) {

					window.location.href = "/"
				}
			}
		});

	}.bind(this)
};


export const leftNav = (token, props) => {

	return function(dispatch) {
		dispatch({
			type: "urlpa",
			payload: window.location.pathname
		})

	}.bind(this)
}