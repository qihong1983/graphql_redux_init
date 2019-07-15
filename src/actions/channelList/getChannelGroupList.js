import reqwest from 'reqwest';

/**
 * 获取渠道组列表
 * @method getChanneGroupList
 * @param data {Object} 参数
 * @return {Function}
 */
const getChannelGroupList = (data) => {

    return function(dispatch) {


        //发送请求
        reqwest({
            url: '/data/overview/channelGroup.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then((msg) => {



            if (msg.status) {
                //设置state中的channelType
                dispatch({
                    type: "CHANNELLIST_CHANNELGROUPLIST",
                    payload: msg.data
                })
            } else {
                if (msg.code == -1) {
                    window.location.href = "/"
                }
            }
        });

    }
}

export {
    getChannelGroupList
}