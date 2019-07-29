//todo mock数据
import "../../mock/common/global";

//todo mock数据
import "../../mock/customer/customer";



import React from 'react';
import reqwest from 'reqwest';

import _ from 'lodash';

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

        // http://rap2api.taobao.org/app/mock/225693/crm/subject/metadata


        // console.log(Area, 'AreaArea');

        var options = {};

        var url = 'http://xxx.mock.com/crm/partner/metadata';

        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true,
                data: data
            }
        }


        //发送请求
        await reqwest(options).then(async (msg) => {

            await dispatch({
                type: "CUSTOMER_SELECTPARAM",
                payload: msg
            });

            console.log(msg, 'msgmsgmsgmsg');

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

            await dispatch({
                type: "CUSTOMER_COLUMNS",
                payload: arr
            });




        });
    }
}


const getTableData = (data, meta) => {


    return async function (dispatch) {


        var params = toQueryString(data);
        console.log(params, 'params');

        //发送请求
        // http://rap2api.taobao.org/app/mock/225693/crm/subject/metadata


        //data: {name: "qihong"},

        var options = {};

        var url = `http://xxx.mock.com/crm/partner/list`;
        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true,
                data: data
            }
        }



        await reqwest(options).then(async (msg) => {

            console.log(msg, 'table');

            console.log(msg.subjectscd);

            meta.map((v, k) => {
                console.log(k, v, '====');

                if (v.is_table_show) {
                    // v.
                }
            })



            await dispatch({
                type: "CUSTOMER_TABLE",
                payload: msg
            });


        });
    }
}


export {
    getSelectParam,
    getTableData
}