//todo mock数据
import "../../mock/common/global";

//todo mock数据
import "../../mock/concat/concat";



import React from 'react';
import reqwest from 'reqwest';

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



const getSelectParam = (data) => {
    return async function (dispatch) {


        //发送请求
        await reqwest({
            url: 'http://xxx.mock.com/crm/contact/metadata',
            method: 'get',
            type: 'json',
            cache: true
        }).then(async (msg) => {

            var Item = localStorage.getItem("contact_params");


            if (Item != null) {

                Item = JSON.parse(Item);
                msg = Item;
            } else {
                localStorage.setItem("contact_params", JSON.stringify(msg))
            }

            await dispatch({
                type: "CONCAT_SELECTPARAM",
                payload: msg
            });


            var arr = [];

            // _.includes(v, configRender)

            msg.map((v, k) => {
                if (v.is_table_show) {


                    if (k == 0) {
                        arr.push({
                            title: v.display,
                            dataIndex: v.name,
                            key: v.name
                        });
                    } else {
                        arr.push({
                            title: v.display,
                            width: 150,
                            dataIndex: v.name,
                            key: v.name
                        });
                    }




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



/**
 * 设置筛选项
 * @method setSelectParam
 * @param {Array} data 元数据
 * @param {Array} params 选中的
 */
const setSelectParam = (data, params) => {
    return async function (dispatch) {


        params.map((v, k) => {
            v.is_show = false;
            data.map((value, key) => {
                if (v.name == value) {
                    v.is_show = true
                }
            })
        });


        localStorage.setItem("contact_params", JSON.stringify(params));

        await dispatch({
            type: "CONCAT_SELECTPARAM",
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


        localStorage.setItem("contact_params", JSON.stringify(params));
        await dispatch({
            type: "CONCAT_SELECTPARAM",
            payload: params
        });

        var arr = [];


        // _.includes(v, configRender)

        params.map((v, k) => {
            if (v.is_table_show) {


                if (k == 0) {
                    arr.push({
                        title: v.display,
                        dataIndex: v.name,
                        key: v.name
                    });
                } else {
                    arr.push({
                        title: v.display,
                        width: 150,
                        dataIndex: v.name,
                        key: v.name
                    });
                }






            }
        })




        await dispatch({
            type: "CONCAT_COLUMNS",
            payload: arr
        });




    }
}


const contactDetailFn = (data) => {
    return async function (dispatch) {

        var options = {};

        var url = "";
        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/contact/1`;
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/contact/${data}`;
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

            if (msg.success) {
                await dispatch({
                    type: "CONCAT_DETAIL",
                    payload: msg
                });
            }


        });
    }
}


const getWxNames = (data) => {
    return async function (dispatch) {
        // http://xxx.mock.com/crm/wx/friend-name-search


        var url = "";
        var options = null;

        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/wx/friend-name-search`;
            options = {
                url: url,
                method: 'get',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/wx/friend-name-search`;
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

            if (msg.success) {

                console.log(msg, 'getWxNamesgetWxNamesgetWxNamesgetWxNamesgetWxNames');

                await dispatch({
                    type: "CONCAT_WXNAMES",
                    payload: msg.result
                });
            }


        });

    }
}

/**
 * 新建联系人 
 * @method createContact
 * @param {Object} data
 */
const createContact = (data) => {
    return async function (dispatch) {

        var url = "";
        var options = null;

        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/contact/create`;
            options = {
                url: url,
                method: 'post',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/contact/create`;
            options = {
                url: url,
                method: 'post',
                type: 'json',
                cache: true,
                data: data
            }
        }


        //发送请求
        await reqwest(options).then(async (msg) => {

            if (msg.success) {


                message.success("新建成功");
                // console.log(msg, 'getWxNamesgetWxNamesgetWxNamesgetWxNamesgetWxNames');

                // await dispatch({
                //     type: "CONCAT_WXNAMES",
                //     payload: msg.result
                // });
            } else {
                message.success("新建失败");
            }


        });

    }
}


/**
 * 提交编辑
 * @param {String|Number} id 
 * @param {Object} data 
 */
const editContact = (id, data) => {
    return async function (dispatch) {


        var url = "";
        var options = null;

        if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

            url = `http://xxx.mock.com/crm/contact/1/update`;
            options = {
                url: url,
                method: 'post',
                type: 'json',
                cache: true
            }

        } else {

            url = `http://xxx.mock.com/crm/contact/${id}/update`;
            options = {
                url: url,
                method: 'post',
                type: 'json',
                cache: true,
                data: data
            }
        }


        //发送请求
        await reqwest(options).then(async (msg) => {

            if (msg.success) {

                message.success("编辑成功");
                // console.log(msg, 'getWxNamesgetWxNamesgetWxNamesgetWxNamesgetWxNames');

                // await dispatch({
                //     type: "CONCAT_WXNAMES",
                //     payload: msg.result
                // });
            } else {
                message.success("编辑失败");
            }


        });




    }
}




export {
    getSelectParam,
    getTableData,
    getColumns,
    setSelectParam,
    setTableParams,
    contactDetailFn,
    getWxNames,
    createContact,
    editContact
}