//todo mock数据
import "../../mock/common/global";

//todo mock数据
import "../../mock/customer/customer";



import React from 'react';
import reqwest from 'reqwest';

import _ from 'lodash';

import {
    notification, message
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


/**
 * 获取筛选数据
 * @method getSelectParam
 * @param {} data 
 */
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





            // localStorage.setItem("params", arr);

            var Items = localStorage.getItem("params");

            if (Items != null) {

                Items = JSON.parse(Items);
                msg = Items;
            } else {

                localStorage.setItem("params", JSON.stringify(msg));
            }

            await dispatch({
                type: "CUSTOMER_SELECTPARAM",
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




            await dispatch({
                type: "CUSTOMER_COLUMNS",
                payload: arr
            });




        });
    }
}

/**
 * 获取表格数据
 * @method getTableData
 * @param {String} data 
 * @param {String} meta
 */
const getTableData = (data, meta) => {


    return async function (dispatch) {


        var params = toQueryString(data);

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



/**
 * 设置筛选项
 * @method setSelectParam
 * @param {Array} data 元数据
 * @param {Array} params 选中的
 */
const setSelectParam = (data, params) => {
    return async function (dispatch) {


        params.map((v, k) => {
            console.log(v, k);
            v.is_show = false;
            data.map((value, key) => {
                if (v.name == value) {
                    v.is_show = true
                }
            })
        });


        localStorage.setItem("params", JSON.stringify(params));
        await dispatch({
            type: "CUSTOMER_SELECTPARAM",
            payload: params
        });


    }
}

/**
 * 显示表格的哪些列设置
 * @method setTableParams
 * @param {String} data 表格数据
 * @param {String} params 选中的列
 */
const setTableParams = (data, params) => {
    return async function (dispatch) {

        params.map((v, k) => {
            v.is_table_show = false;
            data.map((value, key) => {
                if (v.name == value) {
                    v.is_table_show = true
                }
            })
        });


        localStorage.setItem("params", JSON.stringify(params));
        await dispatch({
            type: "CUSTOMER_SELECTPARAM",
            payload: params
        });

        var arr = [];


        // _.includes(v, configRender)

        params.map((v, k) => {
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




    }
}


/**
 * 详情
 * @method detailFn
 * @param data {String} id
 */

const detailFn = (data) => {
    return async function (dispatch) {


        var options = {};

        var url = "";
        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/partner/1`;
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/partner/${data}`
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true,
                data: data
            }
        }


        await reqwest(options).then(async (msg) => {



            if (msg.success) {
                await dispatch({
                    type: "CUSTOMER_DETAIL",
                    payload: msg
                });
            }


        });


    }
}


/**
 * 通过名称模糊搜索客户
 * @method searchName
 * @param {Object} data 
 */
const searchName = (data) => {
    return async function (dispatch) {
        var url = "";
        var options = null;
        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/partner/name-search`;
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/partner/name-search`;


            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true,
                data: data
            }
        }


        await reqwest(options).then(async (msg) => {

            if (msg.success) {

                console.log(msg, 'searchNamesearchNamesearchNamesearchName');
                await dispatch({
                    type: "CUSTOMER_SEARCHNAME",
                    payload: msg.result
                });
            }
        });
    }
}

/**
 * 群名搜所
 */
const searchWxClassName = (data) => {
    return async function (dispatch) {
        var url = "";
        var options = null;
        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/wx/room-name-search`;
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/wx/room-name-search`;


            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true,
                data: data
            }
        }


        await reqwest(options).then(async (msg) => {

            if (msg.success) {

                console.log(msg, 'searchNamesearchNamesearchNamesearchName');
                await dispatch({
                    type: "CUSTOMER_SEARCHWXCLASSNAME",
                    payload: msg.result
                });
            }
        });
    }
}


const createSubmit = (data) => {
    return async function (dispatch) {
        var url = "";
        var options = null;
        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/partner/create`;
            options = {
                url: url,
                method: 'post',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/partner/create`;


            options = {
                url: url,
                method: 'post',
                type: 'json',
                cache: true,
                data: data
            }
        }


        await reqwest(options).then(async (msg) => {

            if (msg.success) {


                message.success("创建成功");
                // console.log(msg, 'searchNamesearchNamesearchNamesearchName');
                // await dispatch({
                //     type: "CUSTOMER_SEARCHWXCLASSNAME",
                //     payload: msg.result
                // });
            } else {
                message.error('创建失败');
            }
        });
    }
}


export {
    getSelectParam,
    getTableData,
    setSelectParam,
    setTableParams,
    detailFn,
    searchName,
    searchWxClassName,
    createSubmit
}