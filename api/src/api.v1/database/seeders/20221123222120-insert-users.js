'use strict'

const TABLE_NAME = "users"

module.exports = {
	async up (queryInterface) {
		await queryInterface.bulkInsert(TABLE_NAME, [
			{
				name: "angel de jesus",
				last_name: "may may",
				email: "LE18080511@merida.tecnm.mx",
				password: "123456",
				id_role: 2,
			},
			{
				name: "angel de jesus",
				last_name: "may may",
				email: "ángelmaay73@gmail.com",
				password: "123456",
				id_role: 1,
			}
		], {})
	},

	async down (queryInterface) {
			await queryInterface.bulkDelete(TABLE_NAME, null, {})
	}
};
