'use strict';

const DEFAULT_VALUE_ROLE = require("../defaultValues/role")
const TABLE_NAME = "role"

module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkDelete(TABLE_NAME, null, {})
		await queryInterface.bulkInsert(TABLE_NAME,DEFAULT_VALUE_ROLE,{})
	},

	async down (queryInterface) {
		await queryInterface.bulkDelete(TABLE_NAME, null, {})
	}
};
