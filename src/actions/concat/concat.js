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


            var arr = [];


            // _.includes(v, configRender)

            msg.map((v, k) => {
                if (v.is_table_show) {

                    arr.push({
                        title: v.display,
                        width: 150,
                        dataIndex: v.name,
                        key: v.name
                    });

                }
            })

            console.log(arr, 'arrarrarrarr');

            await dispatch({
                type: "CONCAT_COLUMNS",
                payload: arr
            });



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


const getColumns = (data) => {

    return async function (dispatch) {
        console.log(data, '------------data----------');
    }

}


export {
    getSelectParam,
    getTableData,
    getColumns
}