import Mock from 'mockjs';


if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {


	Mock.mock("http://xxx.mock.com/crm/subject/metadata", "get", [{
		"name": "type",
		"display": "经营主体",
		"is_default": true,
		"is_show": true,
		"is_table_show": true,
		"type": "enum",
		"enums": [{ "key": "company", "value": "公司" }, { "key": "person", "value": "个人" }]
	}, {
		"name": "name",
		"display": "公司名称/姓名",
		"is_default": true,
		"is_show": true,
		"is_table_show": true,
		"type": "string",
	}, {
		"name": "id_code",
		"display": "税号/身份证号",
		"is_default": true,
		"is_show": true,
		"is_table_show": true,
		"type": "string",
	}, {
		"name": "phone",
		"display": "联系电话",
		"is_default": true,
		"is_show": true,
		"is_table_show": true,
		"type": "string",
	}, {
		"name": "is_main",
		"display": "是否为集团总公司",
		"is_default": true,
		"is_show": true,
		"is_table_show": true,
		"type": "enum",
		"enums": [{ "key": 1, "value": "是" }, { "key": 2, "value": "否" }]
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
	}]
	);

	Mock.mock("http://xxx.mock.com/crm/subject/list", "get", {
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
				"id_code": "@integer()",
				"phone": "@increment(1000)",
				"province": "@province()",
				"city": "@city()",
				"county": "@region",
				"location": "@ip()",
				"address": "@county(true)",
				"area_code": "@increment(10000)",
				"email": "@email",
				"note": "@cparagraph",
				"type|1-2": "1",
				"is_group|1-2": true,
				"is_main|1-2": true,
				"parent_subject_id": "@natural(100, 999)",
				"status|1-2": true,
				"created_at": "@datetime()",
				"updated_at": "@datetime()"
			}
		]
	}
	);



}