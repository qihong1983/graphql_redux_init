import reqwest from 'reqwest';
/**
 * 创建
 * @method create
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
const create = (data) => {

    return function(dispatch) {


        reqwest({
            url: '/manage/channel/add.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then((msg) => {
            window.location.href = '/#/manager/channelGroup';
        });
    }
}

export {
    create
}