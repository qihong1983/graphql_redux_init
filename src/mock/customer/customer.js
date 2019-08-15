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
        "partners|20": [
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








    /**
     * 客户管理 -- 详情 
     */

    Mock.mock("http://xxx.mock.com/crm/partner/1", "get", {
        "success": true,
        "result": {
            "id": "@natural(100, 999)",
            "name": "@word(6)",
            "abbreviation": "@word(6)",
            "state": "@word(6)",
            "level": "@word(6)",
            "origin": "@word(6)",
            "major_type": "@word(6)",
            "auth_status": "@word(6)",
            "phone": "@natural(100, 999)",
            "province": "@province()",
            "city": "@city()",
            "county": "@region",
            "location": "@ip()",
            "address": "@county(true)",
            "area_code": "@increment(10000)",
            "subject_type": "@word(6)",
            "subject_id": "@natural(100, 999)",
            "subject_name": "@word(6)",
            "importance": "@word(6)",
            "wx_room_name": "@word(6)",
            "qq": "@natural(100, 999)",
            "email": "@mail",
            "note": "@cparagraph",
            "images|3-9": [
                {
                    "id": "@natural(100, 999)",
                    "url": "@image(229x139, @color, @color, png, @ctitle)",
                    "name": "@word(6)"
                }
            ],
            "files|3-9": [
                {
                    "id": "@natural(100, 999)",
                    "url": "@url()",
                    "name": "@word(6)"
                }
            ],
            "status|1-2": true,
            "created_at": "@datetime()",
            "updated_at": "@datetime()",
            "wx_room_id": "@natural(100, 999)"
        },
        "errors": []
    }
    );


    /**
     * 通过名称模糊搜索客户
     */

    // name 

    Mock.mock("http://xxx.mock.com/crm/partner/name-search", "get", {
        "success|1-2": true,
        "result|3-9": [{
            "id": "@natural(100, 999)",
            "name": "@word(6)"
        }],
        "errors": []
    }
    );


    /**
     * 客户管理 -- 新建
     */

    // {
    //     "name": "门店名称",
    //     "abbreviation": "门店简称",
    //     "state": "客户状态",
    //     "level": "客户分级",
    //     "origin": "客户来源",
    //     "major_type": "经营类型",
    //     "auth_status": "认证状态",
    //     "phone": "联系电话",
    //     "province": "省",
    //     "city": "市",
    //     "county": "区",
    //     "location": "经纬度",
    //     "address": "详细地址",
    //     "area_code": "区域编码",
    //     "subject_type": "客户性质",
    //     "subject_id": "关联经营主体ID",
    //     "importance": "重要程度",
    //     "wx_room_name": "微信群名",
    //     "wx_room_id": "微信群id",
    //     "qq": "qq",
    //     "email": "邮箱",
    //     "note": "备注",
    //     "images": [
    //       "id",
    //       "id"
    //     ],
    //     "files": [
    //       "id",
    //       "id"
    //     ]
    //   }

    Mock.mock("http://xxx.mock.com/crm/partner/create", "post", {
        "success": true,
        "result": {
            "id": "@natural(100, 999)",
            "name": "@word(6)"
        },
        "errors": []
    }
    );


    /**
     * 客户管理 -- 详情 -- 编辑 -- 提交
     */

    // {
    //     "name": "门店名称",
    //     "abbreviation": "门店简称",
    //     "state": "客户状态",
    //     "level": "客户分级",
    //     "origin": "客户来源",
    //     "major_type": "经营类型",
    //     "auth_status": "认证状态",
    //     "phone": "联系电话",
    //     "province": "省",
    //     "city": "市",
    //     "county": "区",
    //     "location": "经纬度",
    //     "address": "详细地址",
    //     "area_code": "区域编码",
    //     "subject_type": "客户性质",
    //     "subject_id": "关联经营主体ID",
    //     "importance": "重要程度",
    //     "wx_room_name": "微信群名",
    //     "wx_room_id": "微信群id",
    //     "qq": "qq",
    //     "email": "邮箱",
    //     "note": "备注",
    //     "images": [
    //       "id",
    //       "id"
    //     ],
    //     "files": [
    //       "id",
    //       "id"
    //     ]
    //   }

    Mock.mock("http://xxx.mock.com/crm/partner/1/update", "post", {
        "success|1-2": true,
        "result": {
            "id": "@natural(100, 999)",
            "name": "@word(6)"
        },
        "errors": []
    }
    );


    /**
     * 客户管理 -- 批量编辑  -- 提交
     */

    // {
    //     "field": "字段",
    //     "value": "值",
    //     "ids": [
    //       "id",
    //       "id",
    //       "id"
    //     ]
    //   }

    Mock.mock("http://xxx.mock.com/crm/partner/batch-update", "post", {
        "success|1-2": true,
        "result": {
            "id": "@natural(100, 999)",
            "name": "@word(6)"
        },
        "errors": []
    }
    );



    /**
     * 客户管理 -- 批量删除 -- 提交
     */


    // {
    //     "ids": [
    //       "id",
    //       "id",
    //       "id"
    //     ]
    //   }

    Mock.mock("http://xxx.mock.com/crm/partner/batch-delete", "post", {
        "success|1-2": true,
        "result": {
            "id": "@natural(100, 999)",
            "name": "@word(6)"
        },
        "errors": []
    }
    );


    Mock.mock("http://xxx.mock.com/crm/wx/room-name-search", "get", {
        "success": true,
        "result|3-9": [
            {
                "wx_id": "@natural(100, 999)",
                "wx_name": "@word(6)"
            }
        ],
        "errors": []
    }
    );

}