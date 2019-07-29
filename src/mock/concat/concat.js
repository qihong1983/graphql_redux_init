import Mock from 'mockjs';


if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


    Mock.mock("http://xxx.mock.com/crm/contact/metadata", "get", [{
        "name": "name",
        "display": "姓名",
        "is_default": true,
        "is_show": true,
        "type": "string"
    }, {
        "name": "phone",
        "display": "电话",
        "is_default": true,
        "is_show": true,
        "type": "string"
    }, {
        "name": "partner",
        "display": "关联客户",
        "is_default": true,
        "is_show": true,
        "type": "string"
    }, {
        "name": "wx_name",
        "display": "微信昵称",
        "is_default": false,
        "is_show": true,
        "type": "string"
    }, {
        "name": "title",
        "display": "职务",
        "is_default": false,
        "is_show": true,
        "type": "string"
    }, {
        "name": "rank",
        "display": "级别",
        "is_default": false,
        "is_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "高层" }, { "key": 2, "value": "中层" }, { "key": 3, "value": "基层" }]
    }, {
        "name": "importance",
        "display": "重要程度",
        "is_default": false,
        "is_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "一星" }, { "key": 2, "value": "二星" }, { "key": 3, "value": "三星" }, { "key": 4, "value": "四星" }, { "key": 5, "value": "五星" }]
    }, {
        "name": "decision",
        "display": "决策关系",
        "is_default": false,
        "is_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "关键决策人" }, { "key": 2, "value": "分项决策人" }, { "key": 3, "value": "商务决策人" }, { "key": 4, "value": "技术决策人" }, { "key": 5, "value": "财务决策人" }, { "key": 6, "value": "使用人" }, { "key": 7, "value": "意见影响人" }, { "key": 8, "value": "普通人" }]
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


    // Mock.mock("http://xxx.mock.com/crm/contact/list", "get", {
    //     "pagination": {
    //         "total_count": "@natural(100, 999)",
    //         "page_count": "@natural(50, 100)",
    //         "begin": "@natural(51, 99)",
    //         "end": "@natural(51, 99)",
    //         "index": "@natural(51, 99)"
    //     },
    //     "subjects|20": [
    //         {
    //             "id": "@natural(100, 999)",
    //             "name": "@word(6)",
    //             "id_code": "@integer()",
    //             "phone": "@increment(1000)",
    //             "province": "@province()",
    //             "city": "@city()",
    //             "county": "@region",
    //             "location": "@ip()",
    //             "address": "@county(true)",
    //             "area_code": "@increment(10000)",
    //             "email": "@email",
    //             "note": "@cparagraph",
    //             "type|1-2": "1",
    //             "is_group|1-2": true,
    //             "is_main|1-2": true,
    //             "parent_subject_id": "@natural(100, 999)",
    //             "status|1-2": true,
    //             "created_at": "@datetime()",
    //             "updated_at": "@datetime()"
    //         }
    //     ]
    // }
    // );



}