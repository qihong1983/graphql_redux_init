import reqwest from 'reqwest';
/**
 * 编辑
 * @method edit
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
const edit = (data) => {

    return function(dispatch) {



        reqwest({
            url: '/manage/channel/update.do',
            method: 'post',
            data: data,
            type: 'json'
        }).then((msg) => {

            window.location.href = '/#/manager/channelGroup';
        });
    }
}

export {
    edit
}