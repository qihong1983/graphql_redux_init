// 日期组件 
import moment from 'moment';
/**
 * 请求参数
 * @method Param
 * @param state {Object} 装态
 * @param action (Object) 动作
 */
const Concat = (state, action) => {
    if (typeof state === "undefined") {
        //初始化
        return {
            selectParam: [],
            table: [],
            columns: [],
            detail: [],
            wxNames: []
        };
    }

    switch (action.type) {

        case "CONCAT_SELECTPARAM":
            //经营主体-- 筛选项
            return Object.assign({}, state, {
                selectParam: action.payload
            });


        case "CONCAT_TABLE":
            //经营主体-- 表格
            return Object.assign({}, state, {
                table: action.payload
            });

        case "CONCAT_COLUMNS":
            return Object.assign({}, state, {
                columns: action.payload
            })

        case "CONCAT_DETAIL":
            return Object.assign({}, state, {
                detail: action.payload
            })

        case "CONCAT_WXNAMES":
            return Object.assign({}, state, {
                wxNames: action.payload
            })

        // wxNames



        default:
            //返回初始化
            return state;
    }
}

export {
    Concat
}