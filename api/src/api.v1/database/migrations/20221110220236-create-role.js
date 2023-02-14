'use strict'

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('role',
			{
				id: {
					type: Sequelize.DataTypes.INTEGER,
					autoIncrement: false,
					primaryKey: true,
					allowNull: false
				},
				name: {
					type: Sequelize.DataTypes.STRING(20),
					allowNull: false
				}
			}
		)
	},

	async down (queryInterface) {
		await queryInterface.dropTable('role')
	}
};
