'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('question',
			{
				id: {
					type: Sequelize.DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
					allowNull: false
				},
				question: {
					type: Sequelize.DataTypes.STRING(1000),
					allowNull: false
				}
			}
		)
	},

	async down (queryInterface) {
		await queryInterface.dropTable('users')
	}
};
