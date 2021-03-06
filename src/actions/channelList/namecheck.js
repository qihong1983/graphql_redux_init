import reqwest from 'reqwest';
import {
    create
} from './create';

import React from 'react';
import {
    notification
} from 'antd';

/**
 * 创建
 * @method nameCheck
 * @param param {Object} 参数
 * @param id {String} 参数
 * @return {Function}
 */
const nameCheck = (checkData, createData) => {

    return function(dispatch) {



        reqwest({
            url: '/manage/channel/nameCheck.do',
            method: 'post',
            data: checkData,
            type: 'json'
        }).then((msg) => {

            if (msg.state == "success") {
                dispatch(create(createData));
            } else {
                notification.open({
                    message: msg.state
                });
            }
        });
    }
}

export {
    nameCheck
}