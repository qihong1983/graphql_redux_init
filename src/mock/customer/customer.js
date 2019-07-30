import Mock from 'mockjs';


if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


    Mock.mock("http://xxx.mock.com/crm/partner/metadata", "get", [{
        "name": "name",
        "display": "客户名称",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "state",
        "display": "客户状态",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "潜在客户" }, { "key": 2, "value": "初步接触" }, { "key": 3, "value": "持续跟进" }, { "key": 4, "value": "成交客户" }, { "key": 5, "value": "忠诚客户" }, { "key": 6, "value": "无效客户" }]
    }, {
        "name": "major_type",
        "display": "经营类型",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "快修" }, { "key": 2, "value": "综合" }, { "key": 3, "value": "轮胎" }, { "key": 4, "value": "专修" }, { "key": 5, "value": "4S" }]
    }, {
        "name": "auth_status",
        "display": "认证状态",
        "is_default": true,
        "is_show": true,
        "is_table_show": false,
        "type": "enum",
        "enums": [{ "key": "NOT_CERTIFIED", "value": "未认证" }, { "key": "IN_CERTIFYING", "value": "认证中" }, { "key": "COMPLETE_CERTIFICATION", "value": "已认证" }, { "key": "FAILED_CERTIFICATION", "value": "认证失败" }]
    }, {
        "name": "importance",
        "display": "重要程度",
        "is_default": true,
        "is_show": true,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "一星" }, { "key": 2, "value": "二星" }, { "key": 3, "value": "三星" }, { "key": 4, "value": "四星" }, { "key": 5, "value": "五星" }]
    }, {
        "name": "province",
        "display": "省",
        "is_default": true,
        "is_show": true,
        "is_table_show": true,
        "type": "location"
    }, {
        "name": "city",
        "display": "市",
        "is_default": true,
        "is_show": true,
        "is_table_show": true,
        "type": "location"
    }, {
        "name": "county",
        "display": "区",
        "is_default": true,
        "is_show": true,
        "is_table_show": true,
        "type": "location"
    }, {
        "name": "phone",
        "display": "联系电话",
        "is_default": false,
        "is_show": true,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "level",
        "display": "客户分级",
        "is_default": true,
        "is_show": false,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "一级维修厂" }, { "key": 2, "value": "二级维修厂" }, { "key": 3, "value": "三级维修厂" }]
    }, {
        "name": "origin",
        "display": "客户来源",
        "is_default": true,
        "is_show": false,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": 1, "value": "熟人介绍" }, { "key": 2, "value": "线下地推" }, { "key": 3, "value": "网络推广" }, { "key": 4, "value": "渠道代理" }, { "key": 5, "value": "主动联系" }]
    }, {
        "name": "subject_type",
        "display": "客户性质",
        "is_default": true,
        "is_show": false,
        "is_table_show": true,
        "type": "enum",
        "enums": [{ "key": "company", "value": "公司" }, { "key": "person", "value": "个人" }]
    }, {
        "name": "subject",
        "display": "经营主体",
        "is_default": true,
        "is_show": false,
        "is_table_show": true,
        "type": "string"
    }, {
        "name": "wx_room_name",
        "display": "微信群名",
        "is_default": false,
        "is_show": false,
        "is_table_show": true,
        "type": "string"
    }]
    );

    Mock.mock("http://xxx.mock.com/crm/partner/list", "get", {
        "pagination": {
            "total_count": "@natural(100, 999)",
            "page_count": "@natural(50, 100)",
            "begin": "@natural(51, 99)",
            "end": "@natural(51, 99)",
            "index": "@natural(51, 99)"
        },
        "subjects|20": [
            {
                "id": "@natural(100, 999)",
                "name": "@word(6)",
                "state": "@word(6)",
                "major_type": "@word(6)",
                "auth_status": "@word(6)",
                "importance": "@word(6)",
                "province": "@province()",
                "city": "@city()",
                "county": "@region",
                "phone": "@increment(1000)",
                "level": "@word(6)",
                "origin": "@word(6)",
                "subject_type": "@word(6)",
                "subject": "经营@word(6)主体",
                "wx_room_name": "@word(6)",
                "status": "状@word(6)态",
                "created_at": "@datetime()",
                "updated_at": "@datetime()"
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