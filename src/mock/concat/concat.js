import Mock from 'mockjs';


if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


    Mock.mock("http://xxx.mock.com/crm/contact/metadata", "get", [{
        "name": "name",
        "display": "姓名",
        "is_default": false,
        "is_show": false,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "phone",
        "display": "电话",
        "is_default": true,
        "is_show": true,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "partner",
        "display": "关联客户",
        "is_default": true,
        "is_show": true,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "wx_name",
        "display": "微信昵称",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "title",
        "display": "职务",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "rank",
        "display": "级别",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "高层" }, { "key": 2, "value": "中层" }, { "key": 3, "value": "基层" }]
    }, {
        "name": "importance",
        "display": "重要程度",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "一星" }, { "key": 2, "value": "二星" }, { "key": 3, "value": "三星" }, { "key": 4, "value": "四星" }, { "key": 5, "value": "五星" }]
    }, {
        "name": "decision",
        "display": "决策关系",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "关键决策人" }, { "key": 2, "value": "分项决策人" }, { "key": 3, "value": "商务决策人" }, { "key": 4, "value": "技术决策人" }, { "key": 5, "value": "财务决策人" }, { "key": 6, "value": "使用人" }, { "key": 7, "value": "意见影响人" }, { "key": 8, "value": "普通人" }]
    }, {
        "name": "affinity",
        "display": "亲密度",
        "is_default": false,
        "is_show": false,
        "is_table_show": false,
        "type": "enum",
        "enums": [
            {
                "key": 1,
                "value": "一星"
            },
            {
                "key": 2,
                "value": "二星"
            },
            {
                "key": 3,
                "value": "三星"
            },
            {
                "key": 4,
                "value": "四星"
            },
            {
                "key": 5,
                "value": "五星"
            }
        ]
    }]
    );

    Mock.mock("http://xxx.mock.com/crm/contact/list", "get", {
        "pagination": {
            "total_count": "@natural(100, 999)",
            "page_count": "@natural(50, 100)",
            "begin": "@natural(51, 99)",
            "end": "@natural(51, 99)",
            "index": "@natural(51, 99)"
        },
        "contacts|20": [
            {
                "id": "@natural(100, 999)",
                "name": "@word(6)",
                "phone": "@increment(1000)",
                "partner": "@word(6)",
                "wx_name": "@word(6)",
                "title": "@word(6)",
                "rank": "@word(6)",
                "importance": "@word(6)",
                "decision": "@word(6)",
                "status": "@word(6)",
                "created_at": "@date()",
                "updated_at": "@date()"
            }
        ]
    }
    );





    //联系人 -- 详情
    //参数为空
    Mock.mock("http://xxx.mock.com/crm/contact/1", "get", {
        "success": true,
        "result": {
            "id": "@natural(100, 999)",
            "name": "@word(6)",
            "phone": "@increment(1000)",
            "partner_id": "@natural(100, 999)",
            "partner_name": "@word(6)",
            "province": "@province()",
            "city": "@city()",
            "county": "@region",
            "location": "@ip()",
            "address": "@county(true)",
            "area_code": "@increment(10000)",
            "wx_name": "@word(6)",
            "wx_id": "@word(6)",
            "email": "@email",
            "qq": "@natural(100, 999)",
            "title": "@word(6)",
            "rank": "@word(6)",
            "importance": "@word(6)",
            "decision": "@word(6)",
            "affinity": "@word(6)",
            "gender": "@word(6)",
            "birthday": {
                "type": "公历/阴历",
                "date": "@datetime()"
            },
            "note": "@cparagraph",
            "status|1-2": true,
            "created_at": "@datetime()",
            "updated_at": "@datetime()"
        },
        "errors": []
    }
    );



    // 联系人 -- 新建  


    // {
    //     "name": "姓名",
    //     "phone": "联系电话",
    //     "partner_id": "关联经营客户ID",
    //     "province": "省",
    //     "city": "市",
    //     "county": "区",
    //     "location": "经纬度",
    //     "address": "详细地址",
    //     "area_code": "区域编码",
    //     "wx_name": "微信名",
    //     "wx_id": "微信",
    //     "email": "邮箱",
    //     "qq": "qq",
    //     "title": "职务",
    //     "rank": "级别",
    //     "importance": "重要程度",
    //     "decision": "决策关系",
    //     "affinity": "亲密度",
    //     "gender": "性别",
    //     "birthday": {
    //       "type": "公历/阴历",
    //       "date": "生日"
    //     },
    //     "note": "备注"
    //   }


    Mock.mock("http://xxx.mock.com/crm/contact/create", "post", {
        "success|1-2": true,
        "result": "@natural(100, 999)",
        "errors": []
    }
    );



    //联系人 -- 详情  -- 编辑



    // {
    //     "name": "姓名",
    //     "phone": "联系电话",
    //     "partner_id": "关联经营客户ID",
    //     "province": "省",
    //     "city": "市",
    //     "county": "区",
    //     "location": "经纬度",
    //     "address": "详细地址",
    //     "area_code": "区域编码",
    //     "wx_name": "微信名",
    //     "wx_id": "微信",
    //     "email": "邮箱",
    //     "qq": "qq",
    //     "title": "职务",
    //     "rank": "级别",
    //     "importance": "重要程度",
    //     "decision": "决策关系",
    //     "affinity": "亲密度",
    //     "gender": "性别",
    //     "birthday": {
    //       "type": "公历/阴历",
    //       "date": "生日"
    //     },
    //     "note": "备注"
    //   }


    Mock.mock("http://xxx.mock.com/crm/contact/1/update", "post", {
        "success|1-2": true,
        "result": "@natural(100, 999)",
        "errors": []
    }
    );



    //批量编辑

    // {
    //     "field": "字段",
    //     "value": "值",
    //     "ids": [
    //       "id",
    //       "id",
    //       "id"
    //     ]
    //   }


    Mock.mock("http://xxx.mock.com/crm/contact/batch-update", "post", {
        "success|1-2": true,
        "result": "@natural(100, 999)",
        "errors": []
    }
    );


    //批量删除

    // {
    //     "ids": [
    //       "id",
    //       "id",
    //       "id"
    //     ]
    //   }
    Mock.mock("http://xxx.mock.com/crm/contact/batch-delete", "post", {
        "success|1-2": true,
        "result": "@natural(100, 999)",
        "errors": []
    }
    );


    Mock.mock("http://xxx.mock.com/crm/wx/friend-name-search", "get", {
        "success": true,
        "result|3-9": [
            {
                "wx_room_id": "@natural(100, 999)",
                "wx_room_name": "@word(6)"
            }
        ],
        "errors": []
    }
    );


    // /crm/wx/friend-name-search

}