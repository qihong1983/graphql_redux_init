import Mock from 'mockjs';


if (window.location.search.indexOf("debug") > 0 || window.location.search.indexOf("web_ci") > 0) {

	//元数据
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


	//表格数据
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

	//详情页
	Mock.mock("http://xxx.mock.com/crm/subject/1", "get", {
		"success": true,
		"result": {
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
			"parent_subject_name": "@word(6)",
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
			"partners": [
				{
					"id": "@natural(100, 999)",
					"name": "@word(6)"
				}
			]
		},
		"errors": []
	}
	);








	/**
	 * CRM — 经营主体 — 详情页  — 编辑 — 提交
	 */

	// var obj = {
	// 	"name": "公司名称/姓名",
	// 	"id_code": "税号/身份证号",
	// 	"phone": "联系电话",
	// 	"province": "省",
	// 	"city": "市",
	// 	"county": "区",
	// 	"location": "经纬度",
	// 	"address": "详细地址",
	// 	"area_code": "区域编码",
	// 	"email": "邮箱",
	// 	"note": "备注",
	// 	"type": "类型",
	// 	"is_group": "是否是集团",
	// 	"is_main": "是否是总公司",
	// 	"parent_subject_id": "父级公司id",
	// 	"images": [
	// 		"id",
	// 		"id"
	// 	],
	// 	"files": [
	// 		"id",
	// 		"id"
	// 	],
	// 	"partners": [
	// 		"id",
	// 		"id"
	// 	]
	// }

	Mock.mock("http://xxx.mock.com/crm/subject/1/update", "post", {
		"success|1-2": true,
		"result": "@natural(100, 999)",
		"errors": []
	}
	);




	/**
	 * CRM — 经营主体 — 详情页  — 提交
	 */

	// var obj = {
	// 	"name": "公司名称/姓名",
	// 	"id_code": "税号/身份证号",
	// 	"phone": "联系电话",
	// 	"province": "省",
	// 	"city": "市",
	// 	"county": "区",
	// 	"location": "经纬度",
	// 	"address": "详细地址",
	// 	"area_code": "区域编码",
	// 	"email": "邮箱",
	// 	"note": "备注",
	// 	"type": "类型",
	// 	"is_group": "是否是集团",
	// 	"is_main": "是否是总公司",
	// 	"parent_subject_id": "父级公司id",
	// 	"images": [
	// 		"id",
	// 		"id"
	// 	],
	// 	"files": [
	// 		"id",
	// 		"id"
	// 	],
	// 	"partners": [
	// 		"id",
	// 		"id"
	// 	]
	// }

	Mock.mock("http://xxx.mock.com/crm/partner/create", "post", {
		"success|1-2": true,
		"result": "@natural(100, 999)",
		"errors": []
	}
	);



	/**
	 * CRM — 经营主体 — 详情页  — 提交
	 */

	// {
	// 	"field": "字段",
	// 	"value": "值",
	// 	"ids": [
	// 	  "id",
	// 	  "id",
	// 	  "id"
	// 	]
	// }

	Mock.mock("http://xxx.mock.com/crm/subject/batch-update", "post", {
		"success|1-2": true,
		"result": "@natural(100, 999)",
		"errors": []
	}
	);


	/**
	 * CRM — 经营主体 —  批量删除— 提交  — mock
	 */

	// {
	// 	"ids": [
	// 	  "id",
	// 	  "id",
	// 	  "id"
	// 	]
	//   }

	Mock.mock("http://xxx.mock.com/crm/subject/batch-delete", "post", {
		"success|1-2": true,
		"result": "@natural(100, 999)",
		"errors": []
	}
	);

	/**
	 * 通过名字模糊搜索经营主体
	 */

	// {
	// 	"name": "",
	// 	"type": ""
	//   }
	Mock.mock("http://xxx.mock.com/crm/subject/name-search", "get", {
		"success": true,
		"result|3-9": [{
			"id": "@natural(100, 999)",
			"name": "@word(6)"
		}],
		"errors": []
	}
	);
}







// "province": "@province()",
// "city": "@city()",
// "county": "@region",
// "location": "@ip()",
// "address": "@county(true)",
// "area_code": "@increment(10000)",
// "email": "@email",
// "note": "@cparagraph",
// "type|1-2": "1",
// "is_group|1-2": true,
// "is_main|1-2": true,
// "parent_subject_id": "@natural(100, 999)",
// "status|1-2": true,
// "created_at": "@datetime()",
// "updated_at": "@datetime()"