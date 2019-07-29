//todo mock数据
import "../../mock/common/global";

//todo mock数据
import "../../mock/concat/concat";



import React from 'react';
import reqwest from 'reqwest';

import {
    notification
} from 'antd';




function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
            }).join('&');
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
}



const getSelectParam = (data) => {
    return async function (dispatch) {


        //发送请求
        await reqwest({
            url: 'http://xxx.mock.com/crm/contact/metadata',
            method: 'get',
            type: 'json',
            cache: true
        }).then(async (msg) => {

            await dispatch({
                type: "CONCAT_SELECTPARAM",
                payload: msg
            });

            console.log(msg, 'msgmsgmsgmsg');
        });
    }
}


const getTableData = (data) => {


    return async function (dispatch) {


        var params = toQueryString(data);
        console.log(params, 'params');

        //发送请求
        // http://rap2api.taobao.org/app/mock/225693/crm/subject/metadata


        //data: {name: "qihong"},
        await reqwest({
            url: `http://xxx.mock.com/crm/contact/list`,
            method: 'get',
            type: 'json',
            cache: true
        }).then(async (msg) => {


            console.log(msg, 'table');

            await dispatch({
                type: "CONCAT_TABLE",
                payload: msg
            });
        });
    }
}


export {
    getSelectParam,
    getTableData
}