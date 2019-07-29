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


const getColumns = (data) => {

    return async function (dispatch) {
        console.log(data, '**********data************************');




        var configRender = "name";
        var configRightFixed = "county";

        var arr = [];


        // _.includes(v, configRender)

        data.map((v, k) => {
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

        console.log(arr, 'arrarrarrarrarrarrarr');

        // [
        //     {
        //         title: '客户名称',
        //         dataIndex: 'name',
        //         key: 'name',
        //         render: (title) => {
        //             return (
        //                 <a href="javascript:void();" onClick={this.openDrawer.bind(this)}>{title}</a>
        //             )
        //         }
        //     },
        //     {
        //         title: '客户电话',
        //         width: 150,
        //         dataIndex: 'phone',
        //         key: 'phone'
        //     },
        //     {
        //         title: '客户状态',
        //         width: 150,
        //         dataIndex: 'state',
        //         key: 'state'
        //     },
        //     {
        //         title: '客户分级',
        //         dataIndex: 'level',
        //         key: 'level',
        //         width: 150,
        //     },
        //     {
        //         title: '客户来源',
        //         dataIndex: 'origin',
        //         key: 'origin',
        //         width: 150,
        //     },
        //     {
        //         title: '经营类型',
        //         dataIndex: 'major_type',
        //         key: 'major_type',
        //         width: 150,
        //     },
        //     {
        //         title: '经营主体',
        //         dataIndex: 'subject',
        //         key: 'subject',
        //         width: 150,
        //     },
        //     {
        //         title: '认证状态',
        //         dataIndex: 'auth_status',
        //         key: 'auth_status',
        //         width: 150,
        //     },
        //     {
        //         title: '客户性质',
        //         dataIndex: 'subject_type',
        //         key: 'subject_type',
        //         width: 150,
        //     },
        //     {
        //         title: '重要程度',
        //         dataIndex: 'importance',
        //         key: 'importance',
        //         width: 150,
        //     },
        //     {
        //         title: '微信群名',
        //         dataIndex: 'wx_room_name',
        //         key: 'wx_room_name',
        //         width: 150
        //     },
        //     {
        //         title: '省',
        //         dataIndex: 'province',
        //         key: 'province',
        //         width: 150,
        //     },
        //     {
        //         title: '市',
        //         dataIndex: 'city',
        //         key: 'city',
        //         width: 150,
        //     },
        //     {
        //         title: '区',
        //         dataIndex: 'county',
        //         key: 'county',
        //         width: 150,
        //         fixed: 'right'
        //     }
        // ]
    }


}


export {
    getSelectParam,
    getTableData,
    getColumns
}