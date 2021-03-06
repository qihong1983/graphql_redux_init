/**
 * 分页状态
 * @method Pagination
 * @param state {Object} 状态
 * @param action {action} 动作
 */
const Pagination = (state, action) => {


    if (typeof state === "undefined") {
        //初始化
        return {
            current: 1,
            pageSize: 10,
            total: 1,
            defaultPageSize: 10,
            showSizeChanger: true
        };
    }



    switch (action.type) {
        case "CHANNEL_GROUP_CURRENT":
            //当前页
            return Object.assign({}, state, {
                current: action.payload
            });

        case "CHANNEL_GROUP_PAGE_SIZE":
            //每页显示多少条
            return Object.assign({}, state, {
                pageSize: action.payload
            });

        case "CHANNEL_GROUP_TOTAL":
            //总条数
            return Object.assign({}, state, {
                total: action.payload
            });

        default:
            //默认返回初始值
            return state;
    }
}

export {
    Pagination
}