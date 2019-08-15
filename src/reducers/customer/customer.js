// 日期组件 
import moment from 'moment';
/**
 * 请求参数
 * @method Param
 * @param state {Object} 装态
 * @param action (Object) 动作
 */
const Customer = (state, action) => {
    if (typeof state === "undefined") {
        //初始化
        return {
            selectParam: [],
            table: [],
            columns: [],
            detail: [],
            searchName: [],
            searchWxClassName: []
        };
    }

    switch (action.type) {

        case "CUSTOMER_SELECTPARAM":
            //经营主体-- 筛选项
            return Object.assign({}, state, {
                selectParam: action.payload
            });


        case "CUSTOMER_TABLE":
            //经营主体-- 表格
            return Object.assign({}, state, {
                table: action.payload
            });

        case "CUSTOMER_COLUMNS":
            return Object.assign({}, state, {
                columns: action.payload
            })
        case "CUSTOMER_DETAIL":
            return Object.assign({}, state, {
                detail: action.payload
            })

        case "CUSTOMER_SEARCHNAME":
            return Object.assign({}, state, {
                searchName: action.payload
            })

        case "CUSTOMER_SEARCHWXCLASSNAME":
            return Object.assign({}, state, {
                searchWxClassName: action.payload
            })

        
        // searchWxClassName

        // searchName

        // detail
        // columns1



        default:
            //返回初始化
            return state;
    }
}

export {
    Customer
}