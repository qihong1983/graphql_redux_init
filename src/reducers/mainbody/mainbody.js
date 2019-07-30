// 日期组件 
import moment from 'moment';
/**
 * 请求参数
 * @method Param
 * @param state {Object} 装态
 * @param action (Object) 动作
 */
const mainBody = (state, action) => {
	if (typeof state === "undefined") {
		//初始化
		return {
			selectParam: [],
			table: [],
			columns: []
		};
	}



	switch (action.type) {

		case "MAINBODY_SELECTPARAM":
			//经营主体-- 筛选项
			return Object.assign({}, state, {
				selectParam: action.payload
			});


		case "MAINBODY_TABLE":
			//经营主体-- 表格
			return Object.assign({}, state, {
				table: action.payload
			});

		case "MAINBODY_COLUMNS":
			//经营主体-- 表格
			return Object.assign({}, state, {
				columns: action.payload
			});

		// columns1




		default:
			//返回初始化
			return state;
	}
}

export {
	mainBody
}